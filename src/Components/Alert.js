import React from 'react'

export default function Alert(props) {
  return (
    props.alert &&   <div className={`alert w-25 mt-3 fs-6 alert-${props.alert.type} position-absolute top-0 start-50 translate-middle-x `}  role="alert">
                       <strong>{props.alert.type}!!! </strong>: {props.alert.msg}
                     </div>
  )
}
