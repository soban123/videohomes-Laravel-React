import React from 'react'
import Axios from 'axios';
import { Table , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Play extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            data : [],
            loaded: false 
        }
    }
    componentDidMount(){
        Axios.get('playlists')
        .then( data=> this.setState({data:data.data , loaded:true}) )
    }
    handleUpdate(id){

        this.props.history.push('/updateplaylist' , {id})
    }

     handleDelete  ( id ) {
      

        axios.delete('/playlists/delete/'+id  )
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
                {/* <td> {e.playlistId} </td> */}
                <td> {e.title}</td>
                <td> {e.duration}</td>
                <td> {e.Album}</td>
                <td> {e.Artist}</td>
                <td  style={{display:'flex' , flexDirection : 'row' }}>              
              <Button size="sm"  variant="outline-primary"  onClick={ ()=>{this.handleUpdate(e.id) } }  >  Update </Button>
                <Button size="sm"  variant="outline-danger" onClick={ ()=>{this.handleDelete(e.id) }  } >  Delete </Button>
                </td>
             </tr>
            
             } )  ;
    
        return ( this.state.loaded ? 
            <div className="table-class"  >
           
    
                <h1 style={{color:'red'}}> Playlist </h1>
                <Link to="/addplaylist" >  <Button variant="outline-success" style={{margin:'10px'}} > Add Playlist </Button>   </Link>
                <br />
                <Table striped bordered hover >
      
      <tr>
        <th>id</th>
        {/* <th>playlist Id</th> */}
        <th>Title</th>
        <th> Duration </th>
        <th> Album </th>
        <th> Artists </th>
        <th> Actions </th>
    
      
      </tr>
        {array_users }
         
        </Table> 
            </div> : <h1>  Loading  </h1> 
        );
        }
}
export default Play;