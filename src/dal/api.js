import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/',
})

export const api = {
    getData(rover, camera, sol, page = 1) {
        debugger
        let params = {sol, page, camera, api_key: 'VGJc79ijLqnClE9fXyAuHBOkQJGwl2Y1zCJGU9At'};
        if (!camera) delete params.camera;
        return instance.get(`${rover}/photos`, {params}).then(res => res.data)
    }
}


