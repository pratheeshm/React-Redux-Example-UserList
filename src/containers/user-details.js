import React,{Component} from 'react';
import {connect} from 'react-redux';

class UserDetails extends Component{
    userDetails(){
        return (
            <div>
            <div>{this.props.user.age}</div>
            <img src={this.props.user.thumbnail} alt="loading"/>
            <div>{this.props.user.description}</div>
            </div>
        );
    }
    render(){
        if(!this.props.user){
            return (<h2>Select a User...</h2>);
        }
        return(
            <div>{this.userDetails()}</div>
        );
    }
    
}
function mapStateToProps(state){
return{
    user:state.activeUser
}
}

export default connect(mapStateToProps)(UserDetails);