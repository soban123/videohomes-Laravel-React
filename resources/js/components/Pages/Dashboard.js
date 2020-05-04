import React from 'react'

import Graph1 from './Graph1'
import Graph2 from './Graph2'

import Cards from './Cards'
import './Dashboard.css' ;
class Body extends React.Component{

    render(){

        return(
            <>
            <Cards />
            <div className="graphs">
            <Graph2 />
            <Graph1 />
            </div>
            </>
        )
    }
}
export default Body;