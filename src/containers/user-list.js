import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import userSelected from '../actions/user-select.js';
class UserList extends Component{
    userName(){
        return this.props.users.map((user)=>{
            return (<li onClick={()=>this.props.userSelected(user)} key={user.id}>{user.first} {user.last}</li>);
        });
    }
    render(){
        return(
            <ul>
                {this.userName()}
            </ul>
        );
    }
}
function mapStateToProps(state){
    return{
        users:state.users
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({
        userSelected:userSelected
    },dispatch);

}
export default connect(mapStateToProps,matchDispatchToProps)(UserList);