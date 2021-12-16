import { ADD_VIDEO, GET_VIDEO, VIDEO_LOADING, SET_MESSAGE } from "./types"
import ApiData from "../services/api.data";

export const getVideos = () => (dispatch) => {
    dispatch({type: VIDEO_LOADING});
    ApiData.getVideos()
            .then(res => {
                dispatch({
                    type: GET_VIDEO,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type:SET_MESSAGE,
                    payload: err.response.data
                });
            });
}

export const getVideoById = (id) => (dispatch) =>{
    ApiData.getItemById(id)
            .then(res => {
                dispatch({
                    type: GET_VIDEO,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type:SET_MESSAGE,
                    payload: err.response.data
                });
            });
}

export const addVideo = (item) => (dispatch) =>{
    ApiData.addVideo(item)
            .then(res => {
                dispatch({
                    type: ADD_VIDEO,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type:SET_MESSAGE,
                    payload: err.response.data
                });
            });
}

export const deleteVideo = (id) => (dispatch) => {
    ApiData.deleteVideo(id)
        .then(res => dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
        .catch(err => {
            dispatch({
                type:SET_MESSAGE,
                payload: err.response.data
            });
        });
}

export const updateVideo = (id, item) => (dispatch) => {
    ApiData.updateVideo(id, item)
        .then(res => dispatch({
            type: UPDATE_ITEM,
            payload: Promise.all([id, res.data])
        }))
        .catch(err => {
            dispatch({
                type:SET_MESSAGE,
                payload: err.response.data
            });
        });
}