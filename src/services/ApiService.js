import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: apiUrl,
    });
  }

  async getRandomPerson() {
    const response = await this.api.get("/persons/random");
    return response.data;
  }

  async getNames(){
    const response = await this.api.get("/names");
    return response.data;
  }

  async autocompleteName(name){
    const response = await this.api.get(`/names/autocomplete?q=${name}`);
    return response.data;
  }

  async sendSkip(personId){
    const response = await this.api.put(`/persons/${personId}/skip`);
    return response.data;
  }

  async sendReport(personId){
    const response = await this.api.put(`/persons/${personId}/report`);
    return response.data;
  }

  async namePerson(personId, nameId){
    const response = await this.api.put(`/persons/${personId}/name/${nameId}`);
    return response.data;
  }
}

export default ApiService;