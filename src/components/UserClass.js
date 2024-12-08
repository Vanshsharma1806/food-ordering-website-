import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            count :0
        };
        console.log(this.props.name + "child constructor called")
    }
    componentDidMount(){
        console.log(this.props.name + "child mounted")
    }
    
    render(){
        
        const {name , location} = this.props;
        const {count} = this.state;
        console.log(name + "child render")
        return <div className="user-class">
            <h3>{name}</h3>
            <p>{location}</p>
            <h4>count - {count}</h4>
            <button onClick={()=>{
                this.setState({
                    count : this.state.count+1
                })
            }}>increase</button>

        </div>
    }
}
export default User;