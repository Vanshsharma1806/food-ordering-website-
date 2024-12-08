import User from "./UserClass";
import React from "react";
class About extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent class cunstructor")
    }

    componentDidMount(){
        console.log("parent mounted")
    }
    
    render(){

        console.log("Parent class render")
        return <div>
            <h1>this is About component</h1>
            <User name = {"first"} location ={"meerut"} />
            <User name = {"second"} location ={"meerut"} />
            <User name = {"third"} location ={"meerut"} />
            
        </div>
    }
}



export default About;