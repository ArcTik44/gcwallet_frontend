import axios from "axios";
import { IUser, LoginCred, RegisterCred, UpdateCred } from "./auth";
import { ICard, IGym, NewCardAdd } from "./helpers";

const instance = axios.create({
    baseURL:'http://127.0.0.1:8080'
});

instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.post['Accept'] = 'application/json';

instance.defaults.headers.put['Content-Type'] = 'application/json';
instance.defaults.headers.put['Accept'] = 'application/json';

const userSignIn = async (user:LoginCred):Promise<IUser |null>=>{
    const {data} = await instance.post(`/api/users/signin`,{...user},{timeout:10000});
    return data as IUser;
}

const userSingUp = async (user:RegisterCred):Promise<IUser|null> => {
    const {data} = await instance.post(`/api/users/signup`,{...user});
    return data as IUser;
}

const userUpdate =async (user:UpdateCred):Promise<IUser|null> => {
    const {data} = await instance.put(`/api/users/update`,{...user});
    return data;
}

const getUserById = async (userId:string):Promise<IUser|null> =>{
    const {data} = await instance.get(`/api/users/${userId}`);
    return data as IUser;
}

const getAllGyms =async ():Promise<IGym[]|null> => {
    const {data} = await instance.get(`/api/gyms`);
    return data;
}

const getGymById = async (gymId:string|undefined):Promise<IGym|null> =>{
    const {data} = await instance.get(`/api/gyms/${gymId}`);
    return data as IGym;
}

const getCardById = async (cardId:string|undefined):Promise<ICard|null> =>{
    const {data} = await instance.get(`/api/cards/${cardId}`);
    return data as ICard;
}

const addNewCard = async (card_data:NewCardAdd):Promise<string> =>{
    const {data} = await instance.post(`/api/users/newcard`,{card_data});
    return data as string;
}

export{
    userSingUp,
    userSignIn,
    userUpdate,
    getUserById,
    getAllGyms,
    getGymById,
    getCardById,
    addNewCard
}