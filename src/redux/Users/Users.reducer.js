import { CREATE_USERS_SUCCESS, DELETED_USERS_SUCCESS, GET_USERS_SUCCESS, RESET, SINGLE_USERS_SUCCESS, UPDATE_USERS_SUCCESS } from "../Type";

const initialState = {
  usersData: [
    { id: 1, name: "ss", email: "ss@gmail.com", userName: "s1", mobile: 1234567890, role: "Js Dev" },
    { id: 2, name: "aa", email: "aa@gmail.com", userName: "a1", mobile: 1234567890, role: "React Js Dev" }
  ]
}
const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        usersData: state.usersData,
        // message : 'Role has been created successfully.'
      }
    case CREATE_USERS_SUCCESS:
      const create = state.usersData;
      create.push(action.payload)
      return {
        ...state,
        isEdit: null,
        usersData: [...create],
        message : 'Role has been created successfully.'
      }
    case DELETED_USERS_SUCCESS:
      const deletes = state.usersData;
      deletes.splice(action.payload, 1)
      return {
        ...state,
        usersData: [...deletes]
      }
    case SINGLE_USERS_SUCCESS:
      const singleuser = state.usersData;
      singleuser.splice(action.payload, 1)
      return {
        ...state,
        usersData: [...singleuser]
      }
    case UPDATE_USERS_SUCCESS:
      const update = state.usersData;
      update.splice(action.id, 1, {
        // title: action.payload.title,
        // discription: action.payload.discription
      })
      return {
        ...state,
        isEdit: null,
        data: [...update]
      }
    case RESET:
      return{
        ...state,
        message:null
      }
    default:
      return state
  }
}

export default UsersReducer;