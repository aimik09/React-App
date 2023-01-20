import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newtext = text.toLocaleUpperCase();

        setText(newtext)
    }

    const handleClearText =() => {


      let newText = '';
      setText(newText)
      

    }

    // const handleCaptialText = () =>{

    //   let newText = text.;
    //   setText(newText)

    // }
//
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleCopy =() =>
    {
      console.log ("I'm Copy");
      var text = document.getElementById ("mytext");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace =() =>{

      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }

    const [text, setText] = useState('Enter Text Here2');
    //text = "new text"; // wrong way to change the state
    //setText("new Text"); //Correct way to change the state

  return (
    <>
  <div className= "Container" style={{color : props.mode=== 'dark'?'white': '#1c1e5a' }}>

  <h2>{props.heading}</h2>

  <div className="mb-3">

<textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor : props.mode=== 'dark'?'grey': 'white', color: props.mode=== 'dark'?'white': '#1c1e5a' }}
id="mytext" rows="3"></textarea>

  </div>
  <button className="btn btn-primary"  onClick={handleUpClick}>Convert to UperCase</button>
  <button className="btn btn-primary"  onClick={handleClearText}>Clear All The Text</button>
  <button className="btn btn-primary"  onClick={handleCopy}>Copy Your Text</button>
  <button className="btn btn-primary"  onClick={handleExtraSpace}>Remove Extra Space </button>
  {/* <button className="btn btn-primary"  onClick={handleCaptialText}>Capitalize Text</button> */}
  </div>
  </>
  )
}
