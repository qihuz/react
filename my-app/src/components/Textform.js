import React, {useState} from 'react'



export default function Textform(props) {
  const handleUpclick =()=>
  {
    console.log("Uppercase was clicked" + text);
    let newText= text.toUpperCase();
    setText(newText);
  }
  const handleloclick =()=>
  {
    console.log("Lowercase was clicked" + text);
    let newText= text.toLowerCase();
    setText(newText);
  }
  const handleclearclick =()=>
  {
    console.log("clear was clicked" + text);
    let newText= ''
    setText(newText);
  }
  const handleOnChange =(Event)=>
  {
    
    setText(Event.target.value)
  }
 
  
const [text, setText] = useState('');
  return (
    <>

    <div className="container">
   <h1>{props.heading} </h1>
<div className="mb-3">

<textarea className="form-control" value={text}  onChange={handleOnChange} id="My box" rows="8"></textarea>


</div>
<button className="btn btn-primary mx-2" onClick={handleUpclick}> Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleloclick}> Convert to Lowerrcase</button>
<button className="btn btn-primary mx-2" onClick={handleclearclick}> Clear text</button>


    </div>
    
      <div className="container my-2">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
       <p> {0.008 * text.split(" ").length} minutes read </p>
       <h2>Preview</h2>
       <p>{text}</p>
       
      
      </div> 



    </>
  )


}
