import React, { useState } from 'react';
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = 'pk.eyJ1IjoiaXNhYWMwOSIsImEiOiJjbDV3ZXdsc3MwamNxM2ptYWFqYXJtbHo4In0.rHTGpGigHYUbnn5pOIyWVg';

const Maps = () => {

  const [viewport, setViewport] = useState({
    longitude: 120.98,
    latitude: 14.60,
    zoom: 10,
  })

  return (
    <div className="maps-container">
      <div className="bg-[#110F14] text-center">
        <br /><br />
        <span className="text-4xl font-bold">Where is Ranch PC Services Located?</span>
        <br /><br /><br />
      </div>

      <ReactMapGL
        viewState={viewport}
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/isaac09/cl5wgn2xn002815p1hjx88yt5"
        style={{ width: "100%", height: "50vh", zIndex: -1, }}
      >
        <Marker longitude={120.98} latitude={14.60} color="red" />
      </ReactMapGL>

      <div className="bg-[#110F14] text-center">
        <br /><br /><br /><br />
      </div>
    </div>
  )
}

export default Maps;