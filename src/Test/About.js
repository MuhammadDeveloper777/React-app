import React from 'react';
import {useState} from 'react';
export function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor:'#e6ffff'
     } );
     const [btnText, setBtntext] = useState("Enable Dark Mode" ); 
    const toogleStyle=()=>{
            if(myStyle.color == 'white' ){
                setMyStyle({
                    color: 'black',
                    backgroundColor:'white'
                })
                setBtntext(" Enable Dark Mode ")
            }
            else{
                setMyStyle({
                    color:'white',
                    backgroundColor:'black'
                })
                setBtntext(" Enable White Mode ")
            }
    }
    return (
       
        <>
         
            <ul class="nav my-5" style={myStyle}>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#" >Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <button type="button" onClick={toogleStyle} class="btn btn-primary mx-3">Primary</button>
        </>
    );
}
