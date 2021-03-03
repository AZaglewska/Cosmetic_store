import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const StyledMapMarker = styled.div`
  color: white;
  background-color: crimson;
  padding: 12px 20px;
  text-align: center;
  width: 40px;
  height: 40px;
  font-weight: bold;
  border-radius: 100% 100% 100% 0;
  transform: rotate(-45deg);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMapMarkerText = styled.p`
  transform: rotate(45deg);
`;

const GoogleMap = () => {
  const cords = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return (
    <div
      style={{
        height: "60vh",
        width: "60vw",
        margin: "auto",
      }}
    >
      <GoogleMapReact defaultCenter={cords.center} defaultZoom={cords.zoom}>
        <StyledMapMarker lat={59.955413} lng={30.337844}>
          <StyledMapMarkerText>We are here</StyledMapMarkerText>
        </StyledMapMarker>
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
