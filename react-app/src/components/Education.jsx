import React from 'react'

function Education() {
  return (
    <div className='container-fluid  text-dark min-vh-100 d-flex flex-column justify-content-center align-items-center'>
      <h1 className='mb-4'>My Education</h1>
      <table className="table table-danger table-stripped table-hover table-bordered">
  <thead>
    <tr>
      <th scope="col">Sr. No</th>
      <th scope="col">Education</th>
      <th scope="col">College</th>
      <th scope="col">Passout Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>SSc</td>
      <td>AHS</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Education
