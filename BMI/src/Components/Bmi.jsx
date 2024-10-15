import React, { useState } from 'react'
import './Bmi.css'

const Bmi = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const[bmi, setBmi] = useState('');
  const[massage,setMassage] = useState('');

  const calcBmi = (event) =>{
    event.preventDefault();

    if(weight===0 || height===0){
      alert("Please enter a valid weight and height.");
    }
    else{}
     const  bmi = (weight / (height*height) * 703 );
      setBmi(bmi.toFixed(1));

      if(bmi < 25){
        setMassage("You are Underweight.");
      }
      else if(bmi >= 25 && bmi <30){
        setMassage("You are Normal Weight");
      }
      else{
        setMassage("You are Overweight");
      }
  }

const reload = () =>{
  window.location.reload();
}

  return (
    <div className='container'>
      <h1 className='heading'>BMI Calculator</h1>
      <form onSubmit={calcBmi}>
        <div>
          <label className='weight'>Weight (lbs)</label>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} />

        </div>
        <div>
          <label className='height'>Height (in)</label>
          <input value={height} onChange={(e) => setHeight(e.target.value)} />
          
        </div>
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-reload' onClick={reload}type='submit'>Reload</button>
        </div>
      </form>

      <div className='result'>
        <h3 className='bmi'>Your BMI is : {bmi} </h3>
        <p>{massage}</p>
      </div>
    </div>
  )
}


export default Bmi