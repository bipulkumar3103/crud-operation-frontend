import axios from 'axios'

const URL='http://localhost:5000'

export const addUser= async (data)=>{
    try{
        return await axios.post(`${URL}/addUser`,data)
    }catch(error){
        console.log('Error while calling add user Api',error);
        
    }
}

export const allUser=async ()=>{
    try{
        return await axios.get(`${URL}/allUser`)
        
    }catch(error){
        console.log('Error while calling all user Api',error);
        
    }
}
export const getUser=async(id)=>{
    try{
        return await axios.get(`${URL}/editUser/${id}`)
    }catch(error){
        console.log('Error while calling Edit user Api',error);

    }
}
export const editUser=async(user,id)=>{
    try{
        return await axios.put(`${URL}/editUser/${id}`,user)
    }catch(error){
        console.log('Error while calling update user Api',error);

    }
}
export const deleteUser=async(id)=>{
    try{
        return await axios.delete(`${URL}/allUser/${id}`)
    }catch(error){
        console.log('Error while calling delete user Api',error);

    }
}