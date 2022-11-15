import axios from "axios";


const urlSindicato = "http://localhost:8080/sindicato";

export const postSindicato = (sindicato) => {
    return axios
      .post(urlSindicato, sindicato)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  };