import axios from "axios";

export const getContacts = () => {
    return axios
        .get("https://randomuser.me/api/?results=100")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
};

export default getContacts;
