import axios from 'axios'

const httpSignal=axios.create(
  {baseURL:"https://localhost:44306/api/"})


export class usersServices {

  getUserInformation=()=>{
    return httpSignal.get("users")
  }

  getUserInformationById=(id)=>{
    return httpSignal.get("users/"+id,
    { headers: {"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}});
  }

  register = (email,password,firstName,lastName,address,phone,type,plan) => {
    return axios.post("https://localhost:44306/api/users/Signup",{
      email,
      password,
      firstName,
      lastName,
      address,
      phone,
      type,
      plan
    })
  }

  login = (email,password) =>{
    return axios.post("https://localhost:44306/api/users/Login",
      {
        email,
        password
      })
  }
}

