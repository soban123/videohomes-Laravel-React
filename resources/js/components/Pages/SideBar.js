import React from "react";
import { GoDashboard , GoPlay  , GoDeviceCameraVideo} from 'react-icons/go';
import { RiPlayListAddLine} from 'react-icons/Ri';
import {Link} from 'react-router-dom'
import "./Sidebar.css";

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="Nav">

       <div className="_head">
           <div className="element"> 
            <GoPlay size='2.5em' style={{color:'skyblue'  }} />
           </div>
            <div className="element"> 
            <b className=""> Video Homes</b>
            </div>
       </div>

        <div  class="btn">
            <div className="element"> 
          <GoDashboard    size='2em' style={{color:'white'  }} />
          </div>
          <div className="element">
         <Link to="/dashboard" > <h1 className="links"> Dashboard </h1> </Link>
          </div>
        </div>

        <div >
        <div className="element"> 
          <RiPlayListAddLine  className='icons'  size='2em' style={{color:'white',verticalAlign: 'middle'   }} />
          </div>
          <div className="element"> 
          <Link to="/playlist" > <h1 className="links"> Playlist </h1> </Link>
          </div>
        </div>

        <div>
        <div className="element"> 
        <GoDeviceCameraVideo  className='icons'  size='2em' style={{color:'white' , paddingleft:'5px'  }} />
        </div>
        <div className="element"> 
        <Link to="/video" > <h1 className="links"> Videos </h1> </Link>
        </div>
     
        </div>

      

      </div>
    );
  }
}
