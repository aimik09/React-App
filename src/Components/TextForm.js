import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Upper case was Clicked" + text);
        let newtext = text.toLocaleUpperCase();

        setText(newtext)
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here2');
    //text = "new text"; // wrong way to change the state
    //setText("new Text"); //Correct way to change the state
  return (
    <div>
<h2>{props.heading}</h2>
<div className="mb-3">
<textarea className="form-control" value = {text} onChange={handleOnChange} id="mytext" rows="3"></textarea>

</div>
<button className="btn btn-primary"  onClick={handleUpClick}>Convert to Uper Case</button>
    </div>
  )
}
