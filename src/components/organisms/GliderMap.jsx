import React, { useState } from 'react'
import { withGoogleMap, withScriptjs, GoogleMap } from 'react-google-maps'
import MarkerWithWindow from './MarkerWithWindow'
import busStop from '../../assets/busStop.png'

const BELFAST_DEFAULT_LOCATION = {
  lat: 54.607868,
  lng: -5.926437
}

const GliderMap = withScriptjs(withGoogleMap(({ stops, fetchStopInfo }) => {
  const [currentMarkerId, setMarkerId] = useState()

  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={BELFAST_DEFAULT_LOCATION}
    >
      {
        stops.map(({ lat, lng, id, name }) => (
          <MarkerWithWindow
            key={id}
            showInfoWindow={currentMarkerId === id}
            icon={busStop}
            position={{ lat: Number(lat), lng: Number(lng) }}
            label={name}
            onClick={() => {
              setMarkerId(id)
              fetchStopInfo(id)
            }}
          />

        ))
      }
    </GoogleMap>
  )
}))

export default GliderMap
