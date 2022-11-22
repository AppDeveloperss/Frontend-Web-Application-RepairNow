import axios from "axios";

export class clientServices{

  patchPlan=(id,plan)=>{
    return axios.patch('https://repairnow.azurewebsites.net/api/users/'+id.toString(),{
      plan
    },{headers:{"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}})
  }

}