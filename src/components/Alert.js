import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.msg.includes('Dark')?'success':'primary'} alert-dismissible fade show`} role="alert">
                        <strong>{props.alert.res}</strong>: {props.alert.msg}
                    </div>
  )
}
