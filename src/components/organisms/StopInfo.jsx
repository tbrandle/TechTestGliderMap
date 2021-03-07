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
          {data.map((row) => {
            
            return (
              <tr>
                { Object.values(row).map((val) => {
                  if(typeof val === null) {
                  return (<td>{val}</td>)

                  }
                  return (<td>{isDate(val) ? moment(val).format('hh:mm:ss') : val }</td>)
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      )
    : <div>Select Stop</div>
}

export default StopInfo
