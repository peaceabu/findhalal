import React, { useState } from 'react';

const LocationDetector = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState(null);

    const [city, setCity] = useState(null);

    navigator.geolocation.getCurrentPosition(
        (position) => {
            fetch(`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=845f15b930dc43e4a66312803a10f385`)
                .then(response => response.json())
                .then(data => {
                    console.log("hi")
                    if (data.results && data.results.length > 0) {
                        console.log("hieqe",data.results)
                        setCity(data.results[0].formatted || data.results[0].components.town || data.results[0].components.village || 'Unknown');
                    } else {
                        setCity('Unknown');
                    }
                })
                .catch(error => {
                    setCity('Unknown');
                    console.error('Error fetching city:', error);
                });
        },
        (error) => {
            setError(error);
        }
    );
    
    

    return (
        <div>
        <h2>Current Location</h2>
        {city && <p> {city}</p>}
        {error && <p>Error: {error.message}</p>}
    </div>
        
    );
};

export default LocationDetector;
