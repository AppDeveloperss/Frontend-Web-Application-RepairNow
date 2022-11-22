import axios from 'axios'

export class ModifiedUserServices{

  modifyUser(id,firstName,lastName,address,phone,email,password){
    return axios.patch('https://repairnow.azurewebsites.net/api/users/'+id,
      {
        firstName,
        lastName,
        address,
        phone,
        email,
        password
      }
      , { headers: {"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}}
    )
  }


}
