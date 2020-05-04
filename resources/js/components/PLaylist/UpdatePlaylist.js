import React , { useState , useEffect  }  from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {  Form, FormGroup, Label, Input  } from 'reactstrap';

import './addplaylist.css';


function Update(props) {


   
    let [title, setTitle] = useState('');
    let [duration, setDuration] = useState('');
    let [Album, setAlbum] = useState('');
    let [Artist, setArtist] = useState('');
    let [Id, setId] = useState('');

useEffect(()=>{
    console.log(props.history.location.state.id)
    let id = props.history.location.state.id ;
    setId(id);

      axios.get( 'playlists/'+id  )
      .then( data=>{
          console.log(data.data)
        setTitle(data.data.title)
        setDuration(data.data.duration)
        setArtist(data.data.Artist)
        setAlbum(data.data.Album)
       
          

      } )

} , [])
    

  const handleSubmit = (event) =>
  {
    event.preventDefault();
   let obj = {
     title,
     duration,
     Album,
     Artist,
     
   }

   axios.put('/playlists/update/'+Id, obj ) 

  .then(function(data) {
    console.log(data)
    props.history.push('/playlist')
  });
  
  } 
 
  

    return (
        <div>
       
                
     <Form md={5} onSubmit={handleSubmit} >
     <fieldset className="form1" >
     <legend className="head2"> Update Playlist </legend>
      
     
            <FormGroup>
         
              <Input type="text" name="title"  value={ title } onChange={ (event) => { setTitle(event.target.value) }  } placeholder="Title" />
            </FormGroup>
     
         
            <FormGroup>
             
              <Input type="time" value={ duration } onChange={ (event) => { setDuration(event.target.value) }  } name="" placeholder="Duration in Time eg: 2:03:56" />
            </FormGroup>

            <FormGroup>
            <Input type="text" name="Album" width={"10px"} value={Album} onChange={ (event) => { setAlbum(event.target.value) }  }  placeholder="Album"/>
            </FormGroup>
          
            <FormGroup>
             
             <Input type="Artist" value={ Artist } onChange={ (event) => { setArtist(event.target.value) }  } name="password" id="examplePassword" placeholder="Artist" />
           </FormGroup>

           {/* <FormGroup>
             
             <Input type="password" value={ pass } onChange={ (event) => { setPass(event.target.value) }  } name="password" id="examplePassword" placeholder="Password in integer" />
           </FormGroup> */}
       
     
       
        <button className="btn btn-danger center " type="submit"> Update </button>
        
      
</fieldset>

      </Form>
            
        </div>
    );
}

export default Update;