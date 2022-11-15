import axios from "axios";


const urlVoluntario = "http://localhost:8080/voluntario";

export const postVoluntario = (voluntario) => {
    return axios
      .post(urlVoluntario, voluntario)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  };