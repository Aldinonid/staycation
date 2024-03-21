import React from 'react'

const Loading = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{height: '100vh'}}>
      <span class="spinner-border text-primary" role="status"></span>
      <span class="fs-6 fw-semibold mt-2">Fetching Data</span>
      <span class="fs-6 fw-semibold mt-1">Loading...</span>
    </div>
  )
}

export default Loading