import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'http://localhost:8080/api/';

// class that is used to get data from api
class ApiData{
    getContent(){
        return axios.get(API_URL + 'home/all', {headers: authHeader()})
    }

    getVideos(){
        return axios.get(API_URL + 'item', {headers: authHeader()})
    }

    getVideoById(id){
        return axios.get(API_URL +  `item/${id}`, {headers: authHeader()})
    }

    addVideo(item){
        return axios.post(API_URL + 'item', item ,{ headers: authHeader()})
    }

    updateVideo(id, item){
        return axios.post(API_URL + `item/${id}`, item ,{headers: authHeader()})
    }

    deleteVideo(id){
        return axios.delete(API_URL +  `item/${id}`, {headers: authHeader()})
    }

    getItemById(id){
        return axios.get(API_URL + `item/${id}`);
    }
}

export default new ApiData();