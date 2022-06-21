import axios from "axios"
//import { useDispatch } from "react-redux";

const UPDATE_USERNAME = 'UPDATE_USERNAME'
const ADD_USER = 'ADD_USER'
const ADD_REPO = 'ADD_REPO'
const GET_README = 'GET_README'

//const dispatch = useDispatch()

const initialState = {
  name: '',
  list: [],
  repos: [],
  readme: ''

}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    case ADD_USER: {
      return {
        ...state,
        list: [...state.list, action.list],
      };
    }
    case ADD_REPO: {
      return {
        ...state,
        repos: action.repos,
      };
    }
    case GET_README: {
      return {
        ...state,
        readme: action.readme,
      };
    }
    default:
      return state;
  }
}

export function updateUsername (name) {
  return {
    type: UPDATE_USERNAME,
    name
  }
}
export function addUser(list) {
  return {
    type: ADD_USER,
    list
  };
}
export function addRepo() {
  return (dispatch, getState) => {
    const store = getState()
    const {name} = store.users
    axios(`https://api.github.com/users/${name}/repos`).then(({ data })=>{
        return dispatch({
          type: ADD_REPO,
          repos: data
        })
    })
  }
}
export function getReadme(repo) {
  return (dispatch, getState) => {
    const store = getState()
    const { name } = store.users;
    axios(`https://raw.githubusercontent.com/${name}/${repo}/master/README.md`).then(({ data }) => {
      return dispatch({
        type: GET_README,
        readme: data
      })
    })
  }
}