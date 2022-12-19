import React from 'react';
import {useState} from 'react';
export default function EventHandiling(props) {
const [text, setText] = useState( 'i am developer');
const handleChange=(e)=>{
console.log('this is data')
setText(e.target.value);
}

   

const handleUpClick=()=>{
     console.log("Click on button");
    let newtext=text.toUpperCase();
    setText(newtext);
}
  return (
    <>
    <form>
  <div className="mb-3 mx-3" >

    <input type='text' value={text} onChange={handleChange}/>
    
  
  </div>
  
  <button type="submit" className="btn btn-primary mx-3" onClick={handleUpClick}>Submit</button>
</form>
    </>
  );
  
  }
