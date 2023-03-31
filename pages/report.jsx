import React from 'react'
// import {output12} from '../public/reports/output12.pdf'
const report = () => {
  return (
    <>
    {/* <iframe src="../public/reports/output12.pdf"/> */}
    <a href="/reports/output12.pdf" download>
      <p>Click me</p>
    </a>
    </>
  )
}

export default report