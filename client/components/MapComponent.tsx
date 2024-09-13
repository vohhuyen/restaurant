import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import { darkTheme } from '@/utils/mapStyles';


const DynamicMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
});

const MapComponent = () => {
  const [position, setPosition] = useState([16.047079, 108.206230]); 

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Could not get position, defaulting to Da Nang", error);
        }
      );
    }
  }, []);

  return (
    <div className="h-[400px] w-full">
      <DynamicMap position={position} />
    </div>
  );
};

export default MapComponent;
