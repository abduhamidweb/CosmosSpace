import axios from "axios";

const dbURL = "http://localhost:8080";

const req = {
  logInfo: async () => {
    // const result = await axios.get(`${dbURL}/login`);
    const result = await fetch(`${dbURL}/login`);
    console.log(result);
    return result.data;
  },

  sendPost: (logInfo) => {
    axios.post(`${dbURL}/login`, logInfo);
  },

  deleteInfo: (id) => {
    axios.delete(`${dbURL}/login/${id}`, {});
  },

  cnl: () => {
    console.log("ura");
    
  },
}
export default req;
