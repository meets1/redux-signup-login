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
        default:
            return state;
    }
}

export default mainReducer;
