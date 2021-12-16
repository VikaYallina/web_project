import { 
    GET_VIDEO,
    ADD_VIDEO,
    UPDATE_VIDEO,
    DELETE_VIDEO,
    VIDEO_LOADING    
} from "../actions/types";

const initialState = {
    items:[],
    loading: false
}

export default function(state=initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_VIDEO:
            return {
                ...state,
                items: payload,
                loading: false
            };
        case ADD_VIDEO:
            return {
                ...state,
                items: [payload, ...state.items]
            };
        case DELETE_VIDEO:
            return {
                ...state,
                items: state.items.filter(item => item._id!==action.payload) 
            };
        case UPDATE_VIDEO:
            const { id, data } = payload;
            return{
                ...state,
                items: state.items.map(item => {
                    if(item._id===id){
                        item = data;
                    }
                })
            };
        case VIDEO_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}