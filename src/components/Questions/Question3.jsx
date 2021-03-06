import React, { useEffect, useState } from 'react'
import Api from '../../util/api'
import GliderMap from '../GliderMap'
import { GliderAPI } from '../../util/ApiConstants'

const Question3 = (props) => {
  const api = new Api({
    baseUrl: GliderAPI.BASE_URL
  })
  // Displaying real-time metrics for our devices' locations and statuses is a critical component of our reporting strategy.
  // This allows us to provide accurate, live data to our clients.
  //
  // Using Translink's JourneyPlanner API, implement an MVP in React for a real-time reporting dashboard.
  // What exactly this consists of is up to you, but preferably it will include:
  // - A map component (or a *very* pretty table, lol)
  // - A way to locate/inspect stops
  // - A way to track buses
  // - Information about the routes available
  //
  // As Translink's JourneyPlanner API is supposedly quite complex and undocumented (surprise surprise!) you may find this package useful:
  // https://github.com/McPo/belfast-glider-api-server
  //
  // This file contains the map component and two endpoints to obtain Stop data.

  const [stops, setStops] = useState([])
  const [stopInfo, setStopInfo] = useState()

  useEffect(() => {
    fetchStops()
  }, [])

  const fetchStops = async () => {
    const newStops = await api.get(GliderAPI.STOPS)
    if (newStops.stops) {
      setStops(newStops.stops)
    }
  }

  return (
    <div>
      <GliderMap
        api={api}
        stops={stops}
        googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBkHRuOEvL8BERtTR0oIB-mw8e0QkMVA2U&v=3.exp&libraries=geometry,drawing,places'
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '800px', margin: 20 }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  )
}

export default Question3
