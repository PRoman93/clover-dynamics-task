import {api} from "../dal/api";

const GET_DATA = 'dataReducer/GET_DATA'
const LOADING_SUCCESS = 'dataReducer/LOADING_SUCCESS'

const initialState = {
    data: {
        photos: []
    },
    page: 1
}
const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA: {
            return {
                ...state, data: action.data
            }
        }
        case LOADING_SUCCESS: {
            return {
                ...state, loading: action.loading
            }
        }
    }
    return state
}
export default dataReducer

const getDataSuccess = (data) => ({type: GET_DATA, data})
const setLoadingSuccess = (loading) => ({type: LOADING_SUCCESS, loading})


export const getData = (rover, camera, sol, page) => async (dispatch) => {
    dispatch(setLoadingSuccess(true))
    let data = await api.getData(rover, camera, sol = 1000, page)
    dispatch(getDataSuccess(data))
    dispatch(setLoadingSuccess(false))
}
