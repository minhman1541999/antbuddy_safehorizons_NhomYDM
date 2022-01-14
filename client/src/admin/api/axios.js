import axios from "axios";

const getData = async (path) => {
    const values = await axios
        .get(`http://localhost:8080/${path}`)
        .then((response) => {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    return values;
};

const getDataById = async (path, id) => {
    const values = await axios
        .get(`http://localhost:8080/${path}/${id}`)
        .then((response) => {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    return values;
};

const createData = (path, object) => {
    const values = axios
        .post(`http://localhost:8080/${path}`, object)
        .then((response) => {
            console.log("New Values: ", response);
        })
        .catch(function (error) {
            console.log(error);
        });
    return values;
};

const updateData = (path, object) => {
    const values = axios
        .put(`http://localhost:8080/${path}`, object)
        .then((response) => {
            console.log("Update Values: ", response);
        })
        .catch(function (error) {
            console.log(error);
        });
    return values;
};

const deleteData = (path, id) => {
    const values = axios
        .delete(`http://localhost:8080/${path}/${id}`)
        .then((response) => {
            console.log("Delete Values: ", response);
        })
        .catch(function (error) {
            console.log(error);
        });
    return values;
};

export default {
    getData,
    getDataById,
    createData,
    updateData,
    deleteData
}