import React from 'react'
import './patient.css'


export default function Patientdetails() {
  return (
    <div className='back'>
        <div className='cont'>
      <div className='input'>
      <h2>Patient Details</h2>
        <a>Reg NO</a><input></input><br></br>
        <a>Name</a><input></input><br></br>
        <a>AGE</a><input></input><br></br>
        <a>Gender</a><input></input><br></br>
        <a>Contact Number</a><input></input><br></br>
        <a>Email</a><input></input><br></br>
        <a>Doctor Name</a><input></input><br></br>
        <a>Admit Type</a><input></input><br></br>
        
        </div>



  <div className='room-specification'>
    <h2>ROOM SPECIFICATION</h2>
  <div className='row'>
    <br></br>
    <br></br>
    <p>FEATURES</p>
    <div className='radio-group'>
      <label htmlFor='icu-mod'><strong>ICU/MOD</strong></label>
      <input type='radio' id='icu-mod' name='feature' value='ICU/MOD' />
    </div>
    <div className='radio-group'>
      <label htmlFor='non-icu'><strong>Non ICU</strong></label>
      <input type='radio' id='non-icu' name='feature' value='Non ICU' />
    </div>
  </div>
  <div className='row'>
    <p>CLASS</p>
    <div className='radio-group'>
      <label htmlFor='class-a'><strong>A</strong></label>
      <input type='radio' id='class-a' name='class' value='A' />
    </div>
    <div className='radio-group'>
      <label htmlFor='class-b'><strong>B</strong></label>
      <input type='radio' id='class-b' name='class' value='B' />
    </div>
  </div>
        <button type='submit'>Submit</button> 
        <button type='submit'>Submit</button> 
      
        <button type='submit'>Reset</button>

</div>








</div>

    </div>
  )
}
