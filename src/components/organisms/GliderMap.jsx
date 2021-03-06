import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps'
import busStop from '../../assets/busStop.png'

const BELFAST_DEFAULT_LOCATION = {
  lat: 54.607868,
  lng: -5.926437
}

const GliderMap = withScriptjs(withGoogleMap(({ stops, fetchStopInfo }) => {
  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={BELFAST_DEFAULT_LOCATION}
    >
      {
        stops.map(({ lat, lng, id, name }) => (
          <Marker
            key={id}
            icon={busStop}
            position={{ lat, lng }}
            label={name}
            onClick={() => fetchStopInfo(id)}
          />
        ))
      }
    </GoogleMap>
  )
}))

export default GliderMap
