const Reducer = (state, action) =>{
    if(action.type === "INCREMENT"){
        return (state = state + 1)
    }

    if(action.type === "DECREMENT"){
        return (state = state - 1)
    }
};