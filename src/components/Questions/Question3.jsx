import React, { useEffect, useState } from 'react'
import Api from '../../util/api'
import storage from '../../util/storage'
import { GliderMap, StopInfo } from '../organisms'
import { Button } from '../atoms'
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
  const [stopInfo, setStopInfo] = useState({})
  const [gliderRoutes, setGliderRoutes] = useState({ g1: [], g2: [], allRoutes: [] })

  const reduceRoutes = (stops) => {
    const reducedRoutes = stops.reduce((obj, stop) => {
      if (stop.g1) {
        obj.g1 = [...obj.g1, stop]
      }
      if (stop.g2) {
        obj.g2 = [...obj.g2, stop]
      }
      return obj
    }, { g1: [], g2: [] })
    return Object.assign(reducedRoutes, { allRoutes: stops })
  }

  const fetchStops = async () => {
    const { stops } = await api.get(GliderAPI.STOPS)
    const routes = reduceRoutes(stops)
    setGliderRoutes(routes)
    setStops(routes.allRoutes)
    storage.setSession('gliderRoutes', routes)
    return stops
  }

  useEffect(() => {
    const cachedRoutes = storage.getSession('gliderRoutes')
    if (cachedRoutes) {
      setStops(cachedRoutes.allRoutes)
      setGliderRoutes(cachedRoutes)
    } else {
      fetchStops()
    }
  }, [])

  const fetchStopInfo = async (id) => {
    const response = await api.get(`${GliderAPI.STOP_INFO}/${id}`)
    setStopInfo({ title: response.stop.name, data: response.departures })
  }

  const viewRouteData = (route) => {
    setStopInfo({ title: `${route} Route`, data: gliderRoutes[route] })
  }

  return (
    <div>
      <GliderMap
        fetchStopInfo={fetchStopInfo}
        stops={stops}
        googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBkHRuOEvL8BERtTR0oIB-mw8e0QkMVA2U&v=3.exp&libraries=geometry,drawing,places'
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '600px', margin: 20 }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
      <Button onClick={() => viewRouteData('g1')}>G1 Route</Button>
      <Button onClick={() => viewRouteData('g2')}>G2 Route</Button>
      <Button onClick={() => viewRouteData('allRoutes')}>All Routes</Button>
      <StopInfo stopInfo={stopInfo} />
    </div>
  )
}

export default Question3
