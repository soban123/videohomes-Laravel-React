import React from 'react'
import Axios from 'axios';
import { Table , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Video extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            data : [],
            loaded: false 
        }
    }
    componentDidMount(){
        Axios.get('videos')
        .then( data=> this.setState({data:data.data , loaded:true}) )
    }
    handleUpdate(id){

        this.props.history.push('/updatevideo' , {id})
    }

    handleApprove(id){

        Axios.post( 'videosapprove/'+id )
        window.location.reload();
    }


     handleDelete  ( id ) {
      

        axios.delete('/videos/delete/'+id  )
        .then(function(data) {
            console.log(data)
            window.location.reload();
          });

      }

    render(){
        console.log(this.state.users)
    
       const array_users =    this.state.data.map( e => { 
        
            return    <tr>
                 <td> {e.id}  </td>
                
                <td> {e.title}</td>
                <td> {e.video_id}</td>
                <td> {e.description}</td>
                <td> {e.video_motion}</td>
                <td> {e.video_type}</td>
                <td> {e.duration}</td>
                <td> {e.size}</td>
                <td> {e.video_path}</td>
                <td  style={{display:'flex' , flexDirection : 'row'}}>     
              <Button size="sm"  variant="outline-success"  onClick={ ()=>{this.handleApprove(e.id) } }  >  Approve </Button>

              <Button size="sm"  variant="outline-primary"  onClick={ ()=>{this.handleUpdate(e.id) } }  >  Update </Button>
                <Button size="sm"  variant="outline-danger" onClick={ ()=>{this.handleDelete(e.id) }  } >  Delete </Button>
                </td>

             </tr>
            
             } )  ;
    
        return ( this.state.loaded ? 
            <div className="table-class"  >
           
    
                <h1 style={{color:'red'}} > Videos </h1>
                <Link to="/addvideo" >  <Button variant="outline-success" style={{margin:'10px'}} > Add Video </Button>   </Link>
                <br />
                <Table striped bordered hover responsive >
      
      <tr>
        <th>id</th>
        <th>Title</th>
        <th> Video Id </th>
        <th> Description </th>
        <th> Video_motion </th>
        <th> VideoType </th>
        <th> Duration </th>
        <th> size </th>
        <th> Vide Path </th>
        <th> Actions  </th>
    
      
      </tr>
        {array_users }
         
        </Table> 
            </div> : <h1>  Loading  </h1> 
        );
        }
}
export default Video;