import { useDispatch } from 'react-redux';

export const addUser = (email, password) => async (dispatch)=>{
    if (email && password) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
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
