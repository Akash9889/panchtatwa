import React from 'react'
import logoSpinner from "../assets/images/logo-spinner.png";

export default function Loader() {
  return (
    <div className='loader-container'>
        <img id="loading" src={logoSpinner} alt="loading spinner"/>
    </div>
  )
}
