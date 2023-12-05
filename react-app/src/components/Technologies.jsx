import React from 'react'

function Technologies() {
  return (
    <div className='container-fluid bg-dark min-vh-100 d-flex flex-column justify-content-center align-items-center text-light'>
      <div className='row display-1'>
        <h1 className='text-danger mb-4'>Tec</h1>
        <div className="col-3">
        <i className="fa-brands fa-html5"></i>
        </div>
        <div className="col-3">
        <i className="fa-brands fa-css3-alt"></i>
        </div>
        <div className="col-3">
        <i className="fa-brands fa-bootstrap"></i>
        </div>
        <div className="col-3">
        <i className="fa-brands fa-react" style={{color: "#4683ec"}}></i>
        </div>
        <div className="col-3">
        <i className="fa-brands fa-java" style={{color: "#ffffff"}}></i>
        </div>
        <div className="col-3">

        </div>
      </div>
    </div>
  )
}

export default Technologies
