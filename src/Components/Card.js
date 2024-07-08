import React from 'react'

export default function card(props) {
  return (
   <> 
   <div className="card">
  <img src={props.img} className="card-img-top" />
  <div className="card-body">
    <p className="card-text">{props.data}</p>
  </div>
</div>
   </>
  )
}
