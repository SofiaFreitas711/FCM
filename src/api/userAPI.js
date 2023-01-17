import api from "./index.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

exports.login = async (email, password) => {
    await api.post(`/users/login`, {
        email: email,
        password: password,
    })
    .then(async function (response) {
        console.log(response.data);
        
        await AsyncStorage.setItem("token", response.data.accessToken);
        await AsyncStorage.setItem("userID", response.data.id); 
        await AsyncStorage.setItem("type", response.data.type); 
    })
    .catch(function (error) {
        console.log(error.response.data);
    });
};