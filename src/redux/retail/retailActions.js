import { GET_DATA, GET_SALES_DATA } from "./retailTypes"

export const getData = () => {
    return {
        type: GET_DATA
    }
}

export const getSalesData = () => {
    return {
        type: GET_SALES_DATA
    }
}