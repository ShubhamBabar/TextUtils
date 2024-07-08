import React, { useState } from 'react'

export default function About() {
    const [mode,setMode]=useState({
        color:'black',
        backgroundColor:'white'
    });

    const [btnText,setBtnText]=useState("Enable Dark mode");

    const toggle=()=>{
        if(mode.color==='white'){
            setMode({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark mode")
        }
        else{
            setMode({
                color:'white',
                backgroundColor:'black'
            })
            setBtnText("Enable Light mode")
        }
    }
  return (
<>
    <div className="accordion container my-3 py-3" style={mode} id="accordionExample">
        <h2 style={mode}>About Us</h2>
        <div className="accordion-item">
            <h2 className="accordion-header" >
            <button className="accordion-button" style={mode}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mode}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={mode} aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mode}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" style={mode} aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mode}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>   
</div>
{/* <div className="container my-3">
                <button className="btn btn-primary" onClick={toggle}>{btnText}</button>
        </div> */}

    
    </>
  )
}
