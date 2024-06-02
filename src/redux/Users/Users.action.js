import { GET_USERS, RESET } from "../Type"

export const getUsers = (data) => {
    return {
        type: GET_USERS,
        payload:data
    }
}
export const createUsers = (data) => {
    return {
        type: GET_USERS,
        payload:data
    }
}
export const deleteUsers = (data) => {
    return {
        type: GET_USERS,
        payload:data
    }
}
export const singleUsers = (data) => {
    return {
        type: GET_USERS,
        payload:data
    }
}
export const updatedUsers = (data) => {
    return {
        type: GET_USERS,
        payload:data
    }
}
export const resetUsers=()=>{
    return{
        type:RESET
    }
}

