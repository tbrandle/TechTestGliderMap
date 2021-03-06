import React from 'react'
import moment from 'moment'
import '../../styles/StopInfo.scss'

const StopInfo = ({ stopInfo = {} }) => {
  const { departures = [], stop } = stopInfo
  const rowHeaders = departures[0] ? Object.keys(departures[0]) : []
  return stopInfo.stop
    ? (
      <table className='stopInfoSection'>
        <thead className='tableHeader'>
          <tr>
            <th colspan={rowHeaders.length}>{stop.name} Bus Stop</th>
          </tr>
          <tr>
          {rowHeaders.map((colHeader, i) => {
            return (
              <th key={i} colspan='1'>{colHeader}</th>
              )
          })}
          </tr>
        </thead>
        <tbody>
          {departures.map(({ from, to, min_until: minUntil, scheduled, estimated = '' }) => {
            return (
              <tr>
                <td>{from}</td>
                <td>{to}</td>
                <td>{minUntil}</td>
                <td>{moment(scheduled).format('hh:mm:ss')}</td>
                <td>{estimated ? moment(estimated).format('hh:mm:ss') : 'N/A'}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      )
    : <div>Select Stop</div>
}

export default StopInfo
