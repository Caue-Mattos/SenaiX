
import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const[data, setData] = useState();

    useEffect(() =>{
        async function loadStorageData() {
            const[token, use]= await AsyncStorage.multiGet([
                "@SenaiX:token",
                "@SenaiX:user",
            ]);
            if(token[1] && user[1]) {
                api
            }
        }
    })
};