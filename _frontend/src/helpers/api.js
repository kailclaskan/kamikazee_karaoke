import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class KamikazeeApi {
    static async request(endpoint, data={}, method = "get"){
        console.debug("API Call: ", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        //const headers = { Authorization: `Bearer ${KamikazeeApi.token}`};
        const params = (method = "get") ? data : {};

        try{
            return(await axios({url, method,data,params/*, headers*/})).data;
        } catch (e) {
            console.error("API Error: ", e.response);
            let message = e.response.data.error.message;
            throw Array.isArray(message) ? message: [message];
        }
    }
    static async getRandomSong () {
        let res = await this.request("kamikazee");
        return res;
    }
    static async getRandomSongBasedOnGenre (genre) {
        let res = await this.request(`kamikazee/genre/${genre}`)
        return res;
    }
    static async getRandomSongBasedOnDate(min,max){
        if(min < max){
            let res = await this.request(`kamikazee/date/${min}/${max}`);
            return res;
        }
    }
    static async getRandomSongBasedOnArtist(artist){
        let res = await this.request(`kamikazee/artist/${artist}`)
        return res;
    }
    static async getGenres(){
        let res = await this.request(`define/genres`);
        return res;
    }
    static async getArtists(){
        let res = await this.request(`define/artists`);
        return res;
    }
}

export default KamikazeeApi;