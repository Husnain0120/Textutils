import React from 'react'

export default function About(props) {
  return (
    <>
    <div className='contanior ml-4 my-4'>
      <p>
  <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Toggle width collapse
  </button>
</p>
<div  className='card1'>
  <div className="collapse width" id="collapseWidthExample">
    <div className="card card-body">
      This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
    </div>
  </div>
</div>
    </div>
    </>
  )
}
