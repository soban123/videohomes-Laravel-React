import React , { useState , useEffect  }  from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {  Form, FormGroup, Label, Input  } from 'reactstrap';

import './addvideo.css';


function UpdateVideo(props) {


   
    let [title, setTitle] = useState('');
    let [videoid, setVideoId] = useState('');
    let [description, setDescription] = useState('');
    let [videomotion, setMotion] = useState('');
    let [videotype, setVideotype] = useState('');
    let [userId, setUserId] = useState('');
    let [duration, setDuration] = useState('');
    let [size, setSize] = useState('');
    let [videopath, setVideoPath] = useState('');
    let [Id , setId ] = useState('')



    useEffect(()=>{
        console.log(props.history.location.state.id)
        let id = props.history.location.state.id ;
        setId(id);
    
          axios.get( 'videos/'+id  )
          .then( data=>{
              console.log(data.data)
              setTitle(data.data.title)
              setVideoId(data.data.video_id)
              setDescription(data.data.description)
                setMotion(data.data.video_motion)
                setVideotype(data.data.video_type)
                setUserId(data.data.user_id)
                setDuration(data.data.duration)
                setSize(data.data.size)
                setVideoPath(data.data.video_path)
              
    
          } )
    
    } , [])



  const handleSubmit = (event) =>
  {
    event.preventDefault();
   let obj = {
     title,
     videoid,
     description,
     videomotion,
     videotype,
     userId,
     duration,
     size,
     videopath
     
   }

   axios.put('/videos/update/'+Id, obj ) 

  .then(function(data) {
    console.log(data)
    props.history.push('/video')
  });
  
  } 
 
  

    return (
        
       
                
      <Form   onSubmit={handleSubmit} >
          <fieldset className="form2" >
     <legend className="head2"> Update Video  </legend>
    
            <FormGroup>
            <label> Title </label>
              <Input type="text" name="title"  value={ title } onChange={ (event) => { setTitle(event.target.value) }  } placeholder="Title" />
            </FormGroup>
     
         
            <FormGroup>
            <label> Video Id </label>
              <Input type="text" value={ videoid } onChange={ (event) => { setVideoId(event.target.value) }  } name="" placeholder="Id" />
            </FormGroup>

            <FormGroup>
            <label>  Description </label>
            <Input type="text" name="Description" width={"10px"} value={description} onChange={ (event) => { setDescription(event.target.value) }  }  placeholder="Album"/>
            </FormGroup>
          
            <FormGroup>
            <label> Video Motion </label>
             <Input type="video_motion" value={ videomotion } onChange={ (event) => { setMotion(event.target.value) }  }  id="motion" placeholder="Video_Motion" />
           </FormGroup>

           <FormGroup>
           <label> Video Type </label>
             <Input type="text" value={ videotype } onChange={ (event) => { setVideotype(event.target.value) }  }  placeholder="Eg :HD , ULtra HD" />
           </FormGroup>
       
           <FormGroup>
           <label> userId </label>
             <Input type="text" value={ userId } onChange={ (event) => { setUserId(event.target.value) }  }  placeholder="ID" />
           </FormGroup>

           <FormGroup>
           <label> Duration </label>
             <Input type="text" value={ duration } onChange={ (event) => { setDuration(event.target.value) }  }  placeholder="In hours Eg : 3  " />
           </FormGroup>
       
           <FormGroup>
           <label> Size </label>
             <Input type="text" value={ size } onChange={ (event) => { setSize(event.target.value) }  }  placeholder="Size in ie : 200 " />
           </FormGroup>
          
           <FormGroup>
           <label> Video Path </label>
            <Input type="text" value={ videopath } onChange={ (event) => { setVideoPath(event.target.value) }  }  placeholder="Eg : example.com/video " />
           </FormGroup>
       
       
         <button className="btn btn-danger center " type="submit"> Submit </button>
        
      

      </fieldset>

      </Form>
      

            
        
    );
}

export default UpdateVideo;