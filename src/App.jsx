import { Fragment, useState } from "react";
import {
  GoogleMap,
	useJsApiLoader,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import React, { useEffect } from 'react';
import "./App.css";

const markers = [
  {
    id: 1,
    name: "The Sorcerer of Slack",
    position: { lat: 14.637915362198289, lng: 121.06170648280157, },
  },
  {
    id: 2,
    name: "Manic Pixie Dream Boy",
    position: { lat: 14.650276186196708, lng: 	121.05544089623866 },
  },
  {
    id: 3,
    name: "BBQ",
    position: { lat: 14.655781661343969, lng: 121.0709511796138 },
  },
  {
    id: 4,
    name: "Film Center",
    position: { lat: 14.656859478528828, lng: 121.06708345390904 },
  },
  {
    id: 5,
    name: "Professors Lair",
    position: { lat: 14.653469347149333, lng: 121.06836198325418 },
  }
];


function App() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAP_API_KEY, mapId: "5b6cc53c0abf66e3" 
  });
	

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center">The Hidden Kingdoms of Nothing to Do, 1995-98</h1>
        <div style={{ height: "90vh", width: "100%" }}>
          {isLoaded ? (
            <GoogleMap
              center={{ lat: 14.650276186196708, lng: 121.05544089623866 }}
              zoom={15}
							options={{ mapId: "5b6cc53c0abf66e3", mapTypeControl: false, fullscreenControl: false, streetViewControl: false, zoomControl: false }}
							onClick={() => setActiveMarker(null)}
              mapContainerStyle={{ width: "100%", height: "90vh" }}
            >
              {markers.map(({ id, name, position, icon }) => (
                
								<MarkerF
                  key={id}
                  position={position}
                  onClick={() => handleActiveMarker(id)}
                  icon={{
                    url:"https://codeswitchstudio.com/indicodes/images/combi.png",
                    scaledSize: { width: 50, height: 50 }
                  }}
                >
                  {activeMarker === id ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <div>
                        <p>{name}</p>
                      </div>
                    </InfoWindowF>
                  ) : null}
                </MarkerF>
              ))}
            </GoogleMap>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
}

export default App;