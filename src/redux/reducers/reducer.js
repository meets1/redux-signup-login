const initialState = {
    person: []
}
const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGN_UP":
            console.log("hello",action)
            return {
                ...state,
                person: action.payload
            }
        // case "LOGOUT":
        //     localStorage.clear();
        //     return {
        //         ...state,
        //         person: null
        //     };

        default:
            return state;
    }
}

export default mainReducer;
// import { addUser } from "../actions/actionCreators";

// const initialData = {
//     data: []
// }

// const formReducer = (state = initialData, action) => {
//     switch (action.type) {
//         case "SIGN_UP":
//             const { id, email, password } = action.payload;
//             return {
//                 ...state,
//                 data: [
//                     ...state.data, {
//                         id: id,
//                         email: email,
//                         password: password
//                     }
//                 ]
//             }
//             default: return state;
//     }
// }

// export default formReducer;