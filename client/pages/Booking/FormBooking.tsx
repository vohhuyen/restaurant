import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import router, { Router, useRouter } from "next/router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  GET_TABLES_ENDPOINT,
  GET_PROFILE_USE,
  CREATE_BOOKING_ENDPOINT,
} from "@/utils/constants/endpoint";

interface FormData {
  table: string;
  user: string;
  startTime: string;
  endTime: string;
  date: string;
  dish: string[];
  totalmoney: number;
  type: string;
}

interface UserDetails {
  _id: string;
  name: string;
  email: string;
  gender: string;
  phone: string;
  img: string;
}

const FormBooking: React.FC = () => {
  const [tables, setTables] = useState<{ _id: string; name: string }[]>([]);
  const [details, setDetails] = useState<UserDetails>();
  const [startDate, setStartDate] = useState(new Date());

  const [selectedTableName, setSelectedTableName] = useState<string | null>(
    null
  );

  useEffect(() => {
    const fetch = async () => {
      try {
        const ResponseType = await axios.get(GET_TABLES_ENDPOINT, {
          withCredentials: true,
        });
        setTables(ResponseType.data);
        const res = await axios.get(GET_PROFILE_USE, {
          withCredentials: true,
        });
        setDetails(res.data);
        console.log("data", details);
      } catch (error) {
        console.log("Error USERRRRRR:", error);
      }
    };
    fetch();
  }, []);

  const [formData, setFormData] = useState<FormData>({
    table: "",
    user: "",
    startTime: "",
    endTime: "",
    date: "",
    dish: [],
    totalmoney: 0,
    type: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    const selectedOption = event.target.selectedOptions[0];
    const dataName = selectedOption.getAttribute("data-name");
    if (dataName) {
      setSelectedTableName(dataName); 
    }

    console.log("Tên bảng đã chọn:", dataName);
  };
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };
  const handleCancel = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(false);
  };

  const handleAccept = async (e: React.FormEvent) => {
    e.preventDefault();
    const startDateTime = new Date(
      `${formData.date}T${formData.startTime}:00Z`
    );
    const endDateTime = new Date(`${formData.date}T${formData.endTime}:00Z`);
    if (details) {
      try {
        const data = {
          ...formData,
          startTime: startDateTime.toISOString(),
          endTime: endDateTime.toISOString(),
          type: "new",
        };

        const response = await axios.put(
          CREATE_BOOKING_ENDPOINT(formData.table),
          data
        );
        if (response.status === 200) {
          alert("User has been created.");
          setShowConfirmation(false);
        } else {
          alert("Error creating user.");
        }
      } catch (error) {
        console.error("Error creating user:", error);
        alert("Error creating user.");
      }
    } else {
      router.push("/login");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="container mx-auto py-[11%] bg-custom-dark border-b-black">
      <div className="reservation-container text-center text-[#C9AB81] mt-10 mb-3">
        <div className="elds-st-tagline">Your table</div>
        <div className="flex items-center justify-center">
          <svg
            className="mr-4"
            xmlns="http://www.w3.org/2000/svg"
            width="41.125"
            height="9.146"
          >
            <path
              fill="none"
              stroke="#9C7C57"
              strokeMiterlimit="10"
              d="M40.881 8.576L20.562.591.244 8.576"
            >
              <animate
                attributeName="stroke-dasharray"
                from="0, 50"
                to="50, 0"
                dur="1s"
                repeatCount="1"
              />
            </path>
            <path
              fill="none"
              stroke="#9C7C57"
              strokeMiterlimit="10"
              d="M40.881.591L20.562 8.576.243.591"
            >
              <animate
                attributeName="stroke-dasharray"
                from="0, 50"
                to="50, 0"
                dur="1s"
                repeatCount="1"
              />
            </path>
          </svg>
          <div className="reservation-title text-3xl text-[#C9AB81] text-5xl">
            RESERVATION
          </div>
          <svg
            className="ml-4"
            xmlns="http://www.w3.org/2000/svg"
            width="41.125"
            height="9.146"
          >
            <path
              fill="none"
              stroke="#9C7C57"
              strokeMiterlimit="10"
              d="M40.881 8.576L20.562.591.244 8.576"
            >
              <animate
                attributeName="stroke-dasharray"
                from="0, 50"
                to="50, 0"
                dur="1s"
                repeatCount="1"
              />
            </path>
            <path
              fill="none"
              stroke="#9C7C57"
              strokeMiterlimit="10"
              d="M40.881.591L20.562 8.576.243.591"
            >
              <animate
                attributeName="stroke-dasharray"
                from="0, 50"
                to="50, 0"
                dur="1s"
                repeatCount="1"
              />
            </path>
          </svg>
        </div>
        <form
          onSubmit={handleSubmit}
          className="form flex justify-center space-x-7 mt-16"
        >
          <div className="w-[18%]">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="MM/dd/yyyy"
              className="text-white reservation-input border border-custom-brown p-2 text-center bg-black w-[200px] h-[60px]"
              calendarClassName="bg-[#0b1315] border border-[#c9ab81] text-center text-white"
              dayClassName={(date) =>
                "text-[#c9ab81] hover:bg-[#a88a63] hover:text-black " +
                (date.getDate() === new Date().getDate()
                  ? "bg-[#c9ab81] text-black"
                  : "")
              }
              renderCustomHeader={({
                date,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div className="flex justify-between items-center px-2 py-1 bg-[#c9ab81] text-black">
                  <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                    type="button"
                    className="focus:outline-none "
                  >
                    {"<"}
                  </button>
                  <span className="font-bold ">
                    {date.toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                    type="button"
                    className="focus:outline-none "
                  >
                    {">"}
                  </button>
                </div>
              )}
            />
          </div>

          <div className="flex bg-none relative w-[39%] text-white w-[100%] reservation-input border border-custom-brown p-2 bg-black">
            <div className="flex w-[50%] pr-4">
              <label
                htmlFor="startTime"
                className="block text-white font-bold mb-2 my-2 mr-2"
              >
                Từ:
              </label>
              <input
                onChange={handleChange}
                type="time"
                id="startTime"
                name="startTime"
                className="border rounded p-2 w-full text-white w-[100%] reservation-input border border-custom-brown p-2 bg-black"
              />
            </div>
            <div className="flex w-[50%] pl-4">
              <label
                htmlFor="mealTime"
                className="block text-white font-bold mb-2 my-2 mr-2"
              >
                Đến:
              </label>
              <input
                type="time"
                id="endTime"
                name="endTime"
                onChange={handleChange}
                className="border rounded p-2 w-full text-white w-[100%] reservation-input border border-custom-brown p-2 bg-black"
              />
            </div>
          </div>

          <select
            id="table"
            name="table"
            className="reservation-input text-white border border-custom-brown p-2 bg-black w-[18%]"
            onChange={handleSelectChange}
          >
            <option value="">Select table name</option>
            {tables.map((table) => (
              <option key={table._id} value={table._id} data-name={table.name}>
                {table.name}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="book-now-button border border-custom-brown bg-brown-500 hover:bg-yellow-700 text-white w-[15%] p-2"
          >
            BOOK NOW
          </button>
        </form>
      </div>

      {showConfirmation && (
        <div className="confirmation-form fixed inset-0 flex items-center justify-center bg-opacity-80 bg-black z-50">
          <div className="bg-black p-8 border border-custom-brown mx-[25%] w-[50%] relative">
            <div className="flex items-center justify-center">
              <svg
                className="mr-1"
                xmlns="http://www.w3.org/2000/svg"
                width="41.125"
                height="9.146"
              >
                <path
                  fill="none"
                  stroke="#9C7C57"
                  strokeMiterlimit="10"
                  d="M40.881 8.576L20.562.591.244 8.576"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    from="0, 50"
                    to="50, 0"
                    dur="1s"
                    repeatCount="1"
                  />
                </path>
                <path
                  fill="none"
                  stroke="#9C7C57"
                  strokeMiterlimit="10"
                  d="M40.881.591L20.562 8.576.243.591"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    from="0, 50"
                    to="50, 0"
                    dur="1s"
                    repeatCount="1"
                  />
                </path>
              </svg>
              <h2 className="text-3xl text-[#C9AB81] tracking-[1px] text-3xl mx-[1%] my-[30px]">
                CONFIRM YOUR BOOKING
              </h2>
              <svg
                className="ml-1"
                xmlns="http://www.w3.org/2000/svg"
                width="41.125"
                height="9.146"
              >
                <path
                  fill="none"
                  stroke="#9C7C57"
                  strokeMiterlimit="10"
                  d="M40.881 8.576L20.562.591.244 8.576"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    from="0, 50"
                    to="50, 0"
                    dur="1s"
                    repeatCount="1"
                  />
                </path>
                <path
                  fill="none"
                  stroke="#9C7C57"
                  strokeMiterlimit="10"
                  d="M40.881.591L20.562 8.576.243.591"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    from="0, 50"
                    to="50, 0"
                    dur="1s"
                    repeatCount="1"
                  />
                </path>
              </svg>
            </div>

            <p className="text-[#C9AB81] ml-[20%] mb-[5px]">
              Name: {details?.name || "Not specified"}
            </p>
            <p className="text-[#C9AB81] ml-[20%] mb-[5px]">
              Phone: {details?.phone || "Not specified"}
            </p>
            {/* <p className="text-[#C9AB81] ml-[20%] mb-[5px]">
              Table: {formData.table}
            </p> */}
            <p className="text-[#C9AB81] ml-[20%] mb-[5px]">
              Table: {selectedTableName || "Not specified"}
            </p>
            <p className="text-[#C9AB81] ml-[20%] mb-[5px]">
              Date: {formData.date}
            </p>
            <p className="text-[#C9AB81] ml-[20%] mb-[5px]">
              Time: {formData.startTime} - {formData.endTime}
            </p>

            <div className="flex justify-end my-10 mx-10">
              <button
                onClick={handleCancel}
                className="cancel-button border border-custom-brown bg-brown-500 hover:bg-yellow-700 text-white w-[15%] p-2 mr-5"
              >
                Cancel
              </button>
              <button
                onClick={handleAccept}
                className="accept-button border border-custom-brown bg-brown-500 hover:bg-yellow-700 text-white w-[15%] p-2"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormBooking;
