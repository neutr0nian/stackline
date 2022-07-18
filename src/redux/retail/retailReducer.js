import data from '../../data/retailData.json'
import { GET_DATA } from './retailTypes'

const initialState = {
    retailData: data[0]
}

//reducer
export const retailDataReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_DATA:
            return state
        default:
            return state
    }
}

