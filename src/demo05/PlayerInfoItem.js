import React from 'react'

const PlayerInfoItem = props => (
  <div
    style={{
      display: 'flex',
    }}
  >
    <div>
      <img style={{ width: '80px' }} src={props.data.image_url} />
    </div>
    <div style={{ marginLeft: '4rem' }}>{props.data.name}</div>
    <div style={{ marginLeft: '4rem' }}>{props.data.season}</div>
    <div style={{ marginLeft: '4rem' }}>{props.data.team}</div>
  </div>
)

export default PlayerInfoItem
