import { useState, useEffect } from "react";

const Location = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState(null);
  const [district, setDistrict] = useState(null);

  useEffect(() => {
    const fetchLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            console.log("📍 Accurate Coordinates:", latitude, longitude);

            setLocation({ latitude, longitude });
            setLoading(false);

            // Fetch city and district details
            try {
              const { cityName, districtName } = await getLocationDetails(latitude, longitude);
              setCity(cityName);
              setDistrict(districtName);
            } catch (err) {
              console.error("❌ Error fetching location details:", err);
            }
          },
          async (error) => {
            console.warn("⚠️ Geolocation error:", error.message);
            setError(error.message);
            setLoading(false);

            if (error.code === error.PERMISSION_DENIED) {
              console.warn("⚠️ Location permission denied. Using IP-based location...");
              fetchFallbackLocation(); // Fallback to IP-based geolocation
            }
          },
          {
            enableHighAccuracy: true, // Use GPS for highest accuracy
            timeout: 20000, // Wait up to 20 seconds
            maximumAge: 0, // Avoid old location data
          }
        );
      } else {
        setError("❌ Geolocation is not supported.");
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  // Function to fetch city and district
  const getLocationDetails = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      console.log("🌍 Location Data:", data);

      return {
        cityName: data.address.city || data.address.town || data.address.village || data.address.state || "Unknown City",
        districtName: data.address.county || data.address.district || "Unknown District",
      };
    } catch (error) {
      console.error("❌ Error fetching location details:", error);
      return { cityName: "Unknown City", districtName: "Unknown District" };
    }
  };

  // 🔥 Fallback: Fetch location using IP-based API if GPS fails
  const fetchFallbackLocation = async () => {
    try {
      const response = await fetch("https://ip-api.com/json/");
      const data = await response.json();
      console.log("🌐 IP-based Location Data:", data);

      setLocation({ latitude: data.lat, longitude: data.lon });
      setCity(data.city);
      setDistrict(data.regionName);
    } catch (fallbackError) {
      console.error("❌ Fallback location error:", fallbackError);
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
