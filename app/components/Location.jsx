import { useState, useEffect } from "react";

const Location = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState(null);
  const [district, setDistrict] = useState(null); // New state for district

  useEffect(() => {
    if ("geolocation" in window.navigator) {
      window.navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(latitude, longitude);
          
  
          setLocation({ latitude, longitude });
          setLoading(false);
  
          // Fetch location details after getting coordinates
          const { cityName, districtName } = await getLocationDetails(latitude, longitude);
          setCity(cityName);
          setDistrict(districtName);
        },
        (error) => {
          setError(error.message);
          setLoading(false);
        },
        {
          enableHighAccuracy: true, // 🔥 Enables GPS for better accuracy
          timeout: 10000, // Wait up to 10 seconds for location
          maximumAge: 0, // Prevents cached (old) locations
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);
  
  // Function to fetch city and district
  const getLocationDetails = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      console.log(data,"location data");
      

      return {
        cityName: data.address.city || data.address.town || data.address.village || data.address.state || "Unknown City",
        districtName: data.address.county || data.address.district || "Unknown District",
      };
    } catch (error) {
      console.error("Error fetching location details:", error);
      return { cityName: "Unknown City", districtName: "Unknown District" };
    }
  };

  return (
    <div>
      {loading ? (
        <p>📍 Fetching location...</p>
      ) : error ? (
        <p>❌ Error: {error}</p>
      ) : location ? (
        <p>
          🌍 Latitude: {location.latitude}, Longitude: {location.longitude} <br />
          🏙️ City: {city} <br />
          🏘️ District: {district}
        </p>
      ) : (
        <p>❌ Unable to fetch location.</p>
      )}
    </div>
  );
};

export default Location;
