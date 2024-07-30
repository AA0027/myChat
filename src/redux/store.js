export const setUser = (user) => ({
    type: "USER",
    payload: user
});

export const setChannel = (channel) => ({
    type: "CHANNEL",
    payload: channel,
});

export const setMessages = (message) => ({
    type: "MESSAGES",
    payload: message,
});

const initState = {
    user: {
        id: 0,
        name: "",
        userId: "",
    },
    channel: {
        url: "",
        name: "",
        num: 0,
    },
    messages: [],
};


const reducer = (state = initState, action) => {
    switch(action.type){
        case "USER":
            return {...state, user: {...(state.user), ...(action.payload)}}
        case "CHANNEL":
            return {...state, channel: {...(state.channel), ...(action.payload)}}
        case "MESSAGES":
            return {...state, messages: [...(action.payload)]}
        default:
            return state;
    }
};

export default reducer;