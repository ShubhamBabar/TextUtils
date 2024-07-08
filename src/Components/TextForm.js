import React ,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText]=useState("");

    //Handle upperclick function 
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        if(text==='' ){
          props.showAlert('Please enter some text','warning');
        }else{
          props.showAlert('Text converted to Uppercase','success');
        }
        
    }

    //Handle clear text function 
    const Clear=()=>{
      props.showAlert('Text cleared','danger');
        setText("")
    }
    const handleonchange=(event)=>{
        setText(event.target.value);
    }
    
    //Handle Lowerclick function 
    const handleLwClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        if(text==='' ){
          props.showAlert('Please enter some text','warning');
        }else{
          props.showAlert('Text converted to Lowercase','success');
        }
        
    }
    
    //Handle copy function 
    const handleCopy=()=>{    
        let copiedText=document.querySelector('#textArea');
        copiedText.select();
        navigator.clipboard.writeText(copiedText.value); 
        if(text==='' ){
          props.showAlert('Please enter some text','warning');
        }else{
          props.showAlert('Text copied successfully','success'); 
        }
             
    }
    
    //Handle remove extra space function 
    const handleExtraSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      if(text===''){
        props.showAlert('Please enter some text','warning');
      }else{
        props.showAlert('Extra space has been removed','success');
      }
      
  }

  
  return (
    <>
      <div className="container my-3">
        <h2>{props.heading}</h2>
        <div className="  mb-3">
        <textarea className={`form-control bg-${props.mode==='dark'?'white':'secondary'} text-${props.mode==='dark'?'dark':'white'}`} style={{ color:'black'}} value={text} onChange={handleonchange} placeholder="Enter text here.." id="textArea" rows="14"></textarea>
        </div>
        {/* buttons for functionality */}
        <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Upprcase</button>
        <button className="btn btn-primary m-2" onClick={handleLwClick}>Convert to Lowercase</button>
        <button className="btn btn-primary m-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary m-2" onClick={handleExtraSpace}>Remove extra space</button>
        <button className="btn btn-danger m-2" onClick={Clear}>Clear TextArea</button>      
     </div>
     <div className="container my3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split("").length*0.008} min read</p>
        <h2>Preview</h2>
        <p className='text-break'>{text}</p>
     </div>
    </>
  
  )
}
