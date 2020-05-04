import React , { useState  }  from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {  Form, FormGroup, Label, Input  } from 'reactstrap';

import './addplaylist.css';


function Addusers(props) {


   
    let [title, setTitle] = useState('');
    let [duration, setDuration] = useState('');
    let [Album, setAlbum] = useState('');
    let [Artist, setArtist] = useState('');



  const handleSubmit = (event) =>
  {
    event.preventDefault();
   let obj = {
     title,
     duration,
     Album,
     Artist,
     
   }

   axios.post('/playlists', obj ) 

  .then(function(data) {
    console.log(data)
    props.history.push('/playlist')
  });
  
  } 
 
  

    return (
        
       
                
      <Form   onSubmit={handleSubmit} >
          <fieldset className="form1" >
     <legend className="head2"> Add Playlist </legend>
    
            <FormGroup>
          <label > Title </label>
              <Input type="text" name="title"  value={ title } onChange={ (event) => { setTitle(event.target.value) }  } placeholder="Title" />
            </FormGroup>
     
         
            <FormGroup>
             <label>  Duration </label>
              <Input type="time" value={ duration } onChange={ (event) => { setDuration(event.target.value) }  } name="" placeholder="Duration in Time eg: 2:03:56" />
            </FormGroup>

            <FormGroup>
              <label> Album </label>
            <Input type="text" name="Album" width={"10px"} value={Album} onChange={ (event) => { setAlbum(event.target.value) }  }  placeholder="Album"/>
            </FormGroup>
          
            <FormGroup>
             <label> Artist </label>
             <Input type="Artist" value={ Artist } onChange={ (event) => { setArtist(event.target.value) }  } name="password" id="examplePassword" placeholder="Artist" />
           </FormGroup>

       
     
       
        <button className="btn btn-danger center " type="submit"> Submit </button>
        
      

      </fieldset>

      </Form>
      

            
        
    );
}

export default Addusers;