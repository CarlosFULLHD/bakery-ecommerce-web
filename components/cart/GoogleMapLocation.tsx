import React from "react";

interface GoogleMapLocationProps {
  lat: number;
  lng: number;
}

const GoogleMapLocation: React.FC<GoogleMapLocationProps> = ({ lat, lng }) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapUrl = `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${lat},${lng}&zoom=16`;

  return (
    <div className="my-4 w-full h-64 sm:h-80 md:h-96">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={mapUrl}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </div>
  );
};

export default GoogleMapLocation;
