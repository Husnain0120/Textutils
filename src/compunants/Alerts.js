import React from 'react'

export default function Alerts(props) {
  return (
    props.alerts &&  <div className='my-5 mx-2' style={{fontStyle:"oblique"}}>
      
   <div class="alert alert-warning alert-dismissible fade show" style={{borderRadius:"20px",color:"grey"}} role="alert">
        <strong>{props.alerts.type}</strong>{props.alerts.msg}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>

    </div>
  )
}
