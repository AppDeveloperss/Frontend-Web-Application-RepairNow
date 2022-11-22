import axios from "axios";

export class clientServices{

  patchPlan=(id,plan)=>{
    return axios.patch('https://localhost:44306/api/users/'+id.toString(),{
      plan
    },{headers:{"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}})
  }

}