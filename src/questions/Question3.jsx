import React, { useEffect, useState } from 'react';
import endpoints from '../util/endpoints';
import Api from '../util/api'
import GliderMap from '../components/GliderMap';

const api = new Api({ 
  baseUrl: 'https://hidden-refuge-13674.herokuapp.com/https://belfast-glider-api-server.herokuapp.com'
})

const Question3 = (props) => {
  //Displaying real-time metrics for our devices' locations and statuses is a critical component of our reporting strategy.
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


  const [stops, setStops] = useState([]);

  useEffect(() => {
    fetchStops();
  }, [])

  const fetchStops = async () => {
    const newStops = await api.get(endpoints.STOPS)    
    if (newStops.stops.length) {
      setStops(newStops.stops);
    }
  }

  const fetchStopInfo = async (stop) => {
    const stopInfo = await api.get(`${endpoints.STOP_INFO}/${stop.id}`)
      // .then(stopInfo => {
      //   //do something
      // })
  }

  return (
    <div>
      <GliderMap
        stops={stops}
        googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyBkHRuOEvL8BERtTR0oIB-mw8e0QkMVA2U&v=3.exp&libraries=geometry,drawing,places'}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `800px`, margin: 20 }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default Question3