import React from 'react'

function Home() {
  let whatsapp_message = ""
  return (
    <div className='container-fluid bg-dark text-light min-vh-100 d-flex justify-content-center align-items-center'>
        <div className='d-flex justify-content-center text-center'>
            <h1>Hello, I am <span className='text-danger display-2 fw-bold'> Juilee</span> </h1>
            <p className='my-info w-50'>
                I am professional web developer looking for opportunity to express my knowledge
            </p>
        </div>
        <a href="{resume}" className='btn btn-outline-danger mx-3' download>
          Download Resume
        </a>
        <a href="{whatsapp_message}">
          Connect me on whats app
        </a>
      
    </div>
  )
}

export default Home
