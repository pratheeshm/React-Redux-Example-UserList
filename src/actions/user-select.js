const userSelected=function(user){
    return{
        type:"USER_SELECTED",
        payload:user
    };
}

export default userSelected;