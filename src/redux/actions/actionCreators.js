import { useDispatch } from 'react-redux';

export const addUser = (email, password) => async (dispatch)=>{
    if (email && password) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        // localStorage.setItem('password', password);
        // setData([...data, { email: email, password: password }]) 
        // setEmail('');
        // setPassword(''); 
        let data = [{ email, password }]
        console.log("333333")
        dispatch(actionData(data))
    }
    else {
        alert('pls fill something');
    }

}

export const actionData = (data) => {
    console.log("THIS IS DATA",data)
    return {
        type: "SIGN_UP",
        payload: data
    }
}

// const SIGN_UP = SIGN_UP;

// dispatch({type:SIGN_UP,payload:data})

// export const actionCreators = {
//     userSignup: (guest) => ({ type: Types.REGISTER, payload: { guest } }),
//     signupSuccess: (user)=>({type: Types.REGISTER_SUCCESS,payload:{user}}),
//     userLogin:(user)=>({type:Types.LOGIN_SUCCESS,payload:{user}})
// }
