import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Animated,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { ENDPOINTS } from '../utils/endpoints';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Dish {
  _id: string;
  name: string;
  price: number;
}

type QuantityType = {
  [key: string]: number;
};

interface Table {
  _id: string;
  name: string;
  chair: number;
}

interface Area {
  _id: string;
  name: string;
  description: string;
  tables: Table[];
}

interface Booking {
  _id: string;
  idUser: string;
  idTable: string;
  startTime: string;
  endTime: string;
  status: string;
}

const BookingScreen: React.FC = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [areas, setAreas] = useState<Area[]>([]);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [details, setDetails] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [quantity, setQuantity] = useState<QuantityType>({});
  const [bookings, setBookings] = useState<{ [key: string]: Booking[] }>({});

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.get(ENDPOINTS.GET_TABLE_WITH_AREA, { withCredentials: true });
        setAreas(response.data);
        if (response.data.length > 0) {
          setSelectedTable(response.data[0]._id);
        }
      } catch (error) {
        console.error('Error fetching tables:', error);
      }
    };

    fetchTables();
  }, []);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get(ENDPOINTS.GET_DISHS_ENDPOINT, { withCredentials: true });
        setDishes(response.data);
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };

    fetchDishes();
  }, []);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          const response = await axios.get(ENDPOINTS.GET_PROFILE_USE, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setDetails(response.data);
        } else {
          console.log('Token does not exist');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    const fetchAllBookings = async () => {
      let allBookings: { [key: string]: Booking[] } = {};

      for (const area of areas) {
        for (const table of area.tables) {
          const tableBookings = await fetchBookings(table._id, selectedDate?.toISOString().split('T')[0] || '');

          allBookings[table._id] = tableBookings;
        }
      }
      setBookings(allBookings);
    };

    if (selectedDate) {
      fetchAllBookings();
    }
  }, [areas, selectedDate]);

  const fetchBookings = async (idTable: string, selectedDate: string) => {
    try {
      const response = await axios.get<Booking[]>(ENDPOINTS.VALIDATE_BOOKING(idTable, selectedDate), { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Error fetching bookings:', error);
      return [];
    }
  };

  const handleDateChange = (event: any, date: Date | undefined) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  const convertToTimeString = (hour: number): string => {
    const hours = Math.floor(hour);
    const minutes = Math.floor((hour - hours) * 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  };

  const handleTimeSlotClick = (tableId: string, start: number, end: number, timeSlotLabel: string) => {
    setSelectedTable(tableId);
    setSelectedTimeSlot(timeSlotLabel);

    const formattedStartTime = convertToTimeString(start);
    const formattedEndTime = convertToTimeString(end);

    const currentDate = new Date();
    const startDateTime = new Date(`${currentDate.toISOString().split('T')[0]}T${formattedStartTime}:00Z`);
    const endDateTime = new Date(`${currentDate.toISOString().split('T')[0]}T${formattedEndTime}:00Z`);

    setStartTime(startDateTime);
    setEndTime(endDateTime);
    setShowForm(true);
  };

  const handleIncrease = (id: string) => {
    setQuantity(prevQuantity => ({
      ...prevQuantity,
      [id]: (prevQuantity[id] || 0) + 1,
    }));
  };

  const handleDecrease = (id: string) => {
    setQuantity(prevQuantity => ({
      ...prevQuantity,
      [id]: Math.max((prevQuantity[id] || 0) - 1, 0),
    }));
  };

  const renderForm = () => (
    <View style={styles.formContainer}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.formItem}>
          <View style={styles.formItemContent}>
            <Text style={styles.itemText}>Name: </Text>
            <Text style={styles.itemText}>Price: </Text>
            <Text style={styles.itemText}>Quantity: </Text>
          </View>
        </View>
        <FlatList
          data={dishes}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <View style={styles.formItem}>
              <View style={styles.formItemContent}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemText}>{item.price}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    onPress={() => handleDecrease(item._id)}
                    style={styles.decreaseButton}
                  >
                    <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>
                    {quantity[item._id] || 0}
                  </Text>
                  <TouchableOpacity
                    onPress={() => handleIncrease(item._id)}
                    style={styles.increaseButton}
                  >
                    <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          style={{ maxHeight: 300 }}
        />
        <View style={styles.formActions}>
          <TouchableOpacity onPress={() => setShowForm(false)} style={styles.cancelButton}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmitOrder} style={styles.orderButton}>
            <Text style={styles.buttonText}>Order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );

  const isSlotBooked = (tableId: string, startHour: number, endHour: number): boolean => {
    if (!bookings[tableId]) return false;

    return bookings[tableId].some((booking) => {
      const bookingStart = new Date(booking.startTime);
      const bookingEnd = new Date(booking.endTime);

      const bookingStartHour = bookingStart.getHours();
      const bookingEndHour = bookingEnd.getHours();

      return (
        (bookingStartHour < endHour && bookingEndHour > startHour) &&
        booking.status === 'confirmed'
      );
    });
  };

  const handleSubmitOrder = async () => {
    if (!selectedTable || !selectedDate) {
      Alert.alert('Missing Information', 'Please select a table and date.');
      return;
    }

    if (!details) {
      Alert.alert('User Not Logged In', 'Please log in to place an order.');
      return;
    }

    const orderData = {
      idUser: details._id,
      idTable: selectedTable,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      dishes: selectedDishes.map(dishId => ({
        id: dishId,
        quantity: quantity[dishId] || 0
      }))
    };

    try {
      const response = await axios.post(ENDPOINTS.BOOKING, orderData, { withCredentials: true });
      if (response.status === 200) {
        Alert.alert('Order Placed', 'Your order has been placed successfully.');
      } else {
        Alert.alert('Order Failed', 'There was a problem placing your order.');
      }
    } catch (error) {
      Alert.alert('Order Error', 'There was an error placing your order.');
      console.error('Error placing order:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
        <Text style={styles.buttonText}>Select Date</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={selectedDate || new Date()}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}
      <ScrollView>
        {areas.map(area => (
          <View key={area._id} style={styles.areaContainer}>
            <Text style={styles.areaName}>{area.name}</Text>
            {area.tables.map(table => {
              const isBooked = isSlotBooked(table._id, startTime.getHours(), endTime.getHours());
              return (
                <TouchableOpacity
                  key={table._id}
                  onPress={() => handleTimeSlotClick(table._id, 9, 11, '09:00 - 11:00')}
                  style={[styles.tableButton, isBooked && styles.tableBooked]}
                >
                  <Text style={styles.tableText}>{table.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </ScrollView>
      {showForm && renderForm()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  dateButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  areaContainer: {
    marginBottom: 20,
  },
  areaName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tableButton: {
    padding: 10,
    backgroundColor: '#28a745',
    borderRadius: 5,
    marginVertical: 5,
  },
  tableBooked: {
    backgroundColor: '#dc3545',
  },
  tableText: {
    color: '#fff',
    textAlign: 'center',
  },
  formContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 5,
  },
  formItem: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  formItemContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  decreaseButton: {
    backgroundColor: '#dc3545',
    padding: 5,
    borderRadius: 5,
  },
  increaseButton: {
    backgroundColor: '#28a745',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#6c757d',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 5,
  },
  orderButton: {
    flex: 1,
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 5,
  },
});

export default BookingScreen;
