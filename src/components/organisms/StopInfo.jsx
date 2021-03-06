import React from 'react'
import moment from 'moment'
import { titleize } from '@bowtie/utils'
import { isDate } from '../../util/helpers'
import '../../styles/StopInfo.scss'

const StopInfo = ({ stopInfo = {} }) => {
  const { data = [], title } = stopInfo
  const rowHeaders = data[0] ? Object.keys(data[0]) : []

  return title
    ? (
      <table className='stopInfoSection'>
        <thead className='tableHeader'>
          <tr>
            <th colspan={rowHeaders.length}>{title}</th>
          </tr>
          <tr>
            {rowHeaders.map((colHeader, i) => {
              return (
                <th key={i} colSpan='1'>{titleize(colHeader, '_')}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => {
            return (
              <tr key={i}>
                {Object.values(row).map((val, i) => {
                  if (val === null) {
                    return (<td key={i}>{val}</td>)
                  }
                  return (<td key={i}>{isDate(val) ? moment(val).format('hh:mm:ss') : val.toString()}</td>)
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      )
    : <div>Select a stop from the map or a route.</div>
}

export default StopInfo
