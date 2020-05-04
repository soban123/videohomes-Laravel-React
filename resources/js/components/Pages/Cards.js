import React from 'react'
import { FiDatabase} from 'react-icons/Fi';
import { RiWalletLine , RiTwitterLine} from 'react-icons/Ri'; 
import { MdUpdate , MdError} from 'react-icons/Md'; 
import './Dashboard.css' ;

class Cards extends React.Component{

    render(){

        return(

            <div className="cards"> 
           <div className="container1">
            <div className="child">
            <div> <FiDatabase size ="3em" color="orange" /> </div> 
            <div>  <h6> Capacity </h6> <h3> 105 GB </h3>  </div> 
            </div>
            <div className="footer_container">
                <MdUpdate color="gray" size="1.5em"  />
             <div> Update now  </div> 
            </div>
           </div>


           <div className="container1">
            <div className="child">
            <div> <RiWalletLine size ="3em" color="rgb(147, 228, 52)" /> </div> 
            <div>  <h6> Revenue </h6> <h3> 1134$ </h3>  </div> 
            </div>
            <div className="footer_container">
                <MdUpdate color="gray" size="1.5em"  />
             <div> Update now  </div> 
            </div>
           </div>




           <div className="container1">
            <div className="child">
            <div> <MdError size ="3em" color="red" /> </div> 
            <div>  <h6> Errors </h6> <h3> 10 </h3>  </div> 
            </div>
            <div className="footer_container">
                <MdUpdate color="gray" size="1.5em"  />
             <div> Update now  </div> 
            </div>
           </div>



           <div className="container1">
            <div className="child">
            <div> <RiTwitterLine size ="3em" color="lightblue" /> </div> 
            <div>  <h6> Followers </h6> <h3> +1k </h3>  </div> 
            </div>
            <div className="footer_container">
                <MdUpdate color="gray" size="1.5em"  />
             <div> Update now  </div> 
            </div>
           </div>

            </div>
        )
    }
}
export default Cards;