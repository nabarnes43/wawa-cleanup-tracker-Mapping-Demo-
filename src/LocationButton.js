// LocationButton.js
import React from "react";

const LocationButton = ({ onLocationReceived, setMapCenter }) => {
  const handleGetLocation = () => {
    if (!("geolocation" in navigator)) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        onLocationReceived([latitude, longitude]);
        console.log("User Location:", [latitude, longitude]);
      },
      (error) => {
        alert(`Error: ${error.message}`);
      }
    );
  };

  return (
    <button onClick={handleGetLocation}>
      Get My Location
    </button>
  );
};

export default LocationButton;
