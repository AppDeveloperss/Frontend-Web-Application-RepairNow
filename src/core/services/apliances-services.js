import axios from 'axios'

const httpSignal=axios.create(
    {
    baseURL:"https://localhost:44306/api/",
    headers:{
      "Authorization": "Bearer "+ sessionStorage.getItem("jwt")
    }
})

export class appliancesServices {

    getAppliancesInformation=()=>{
      return httpSignal.get("appliances")
    }

    getApplianceWithId=(id)=>{
      return httpSignal.get("appliances/"+id)
    }

    postNewAppliance=(name,description,brand,model,year,urlImage,insuranceDate,clientId)=>{
      return axios.post('https://localhost:44306/api/appliances',{
        name,
        description,
        brand,
        model,
        year,
        urlImage,
        insuranceDate,
        clientId
      },{headers:{"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}})
    }

    patchAppliance=(id,name,description,brand,model,year,urlImage,insuranceDate)=>{
      return axios.patch('https://localhost:44306/api/appliances/'+id.toString(),{
        name,
        description,
        brand,
        model,
        year,
        urlImage,
        insuranceDate,
      },{headers:{"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}})
    }
    

}