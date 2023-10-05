import { AppReducerConstants } from "./ReducerConstants/ReducerConstants";

const IntialState = {
    isOverlay: false
}

const AppReducers = (state = IntialState, action) => {
    switch (action.type) {

        case AppReducerConstants.IS_OVERLAY:

            //  console.log("AppReducerConstants.IS_OVERLAY", action.payload)
            return {
                ...state, isOverlay: action.payload
            }

        default:
            return state;
    }
}

export default AppReducers;