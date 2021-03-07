import React from 'react'
import { Marker, InfoWindow } from 'react-google-maps'

const MarkerWithWindow = ({ showInfoWindow, label, ...rest }) => {
  return (
    <Marker
      {...rest}
    >
      {showInfoWindow && (
        <InfoWindow
          position={{ lat: rest.lat, lng: rest.lng }}
        >
          <div>{label}</div>
        </InfoWindow>
      )}
    </Marker>
  )
}

export default MarkerWithWindow
