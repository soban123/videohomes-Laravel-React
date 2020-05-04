import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch , Link ,Route } from 'react-router-dom'

//pages if playlistt
import Dashboard from './Pages/Dashboard'
import Playlist from './PLaylist/Playlist'
import Navbar from './Pages/Navbar';
import Sidebar from './Pages/SideBar'
import Addplaylist from './PLaylist/Addplaylist'
import UpdatePlaylist from './PLaylist/UpdatePlaylist'

//Pages of Videos
import Video from './Videos/Videos'
import Addvideo from './Videos/addvideo'
import UpdateVideo from './Videos/UpdateVideo'

import 'bootstrap/dist/css/bootstrap.css'


function Home() {
    return (
        <div >

            <Sidebar />
            <Navbar />
             <div style={{marginLeft:'260px' , padding:'20px' }}>           
             <Switch>
            <Route exact path="/dashboard"  component={Dashboard} />
            <Route exact path="/playlist"  component={Playlist} />
            <Route exact path="/addplaylist"  component={Addplaylist} />
            <Route exact path="/updateplaylist"  component={UpdatePlaylist} />
            
            <Route exact path="/video"  component={Video} />
            <Route exact path="/addvideo"  component={Addvideo} />
            <Route exact path="/updatevideo"  component={UpdateVideo} />
            </Switch>

            </div>

            
        </div>
    );
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render( <Router>  <Home /> </Router> , document.getElementById('home'));
}
