import api from "./index.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const login = async (email, password) => {
    await api.post(`/users/login`, {
        email: email,
        password: password,
    })
    .then(async function (response) {
        console.log(response.data);
        
        await AsyncStorage.setItem("token", response.data.accessToken);
        await AsyncStorage.setItem("userID", response.data.id); 
        await AsyncStorage.setItem("type", response.data.type);
        return true
    })
    .catch(function (error) {
        console.log(error.response.data);
        return error.response.data
    });
};

const register = async (newUser) => {
    await api.post(`/users/register`, {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        birthDate: newUser.birthDate,
        locality: newUser.locality,
    })
    .then(async function (response) {
        console.log(response.data);
        
        login(newUser.email, newUser.password)
    })
    .catch(function (error) {
        console.log(error.response.data);
    });
};

exports.login = login;
exports.register = register;