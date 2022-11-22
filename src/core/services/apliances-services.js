import axios from 'axios'

const httpSignal=axios.create(
    {
    baseURL:"https://repairnow.azurewebsites.net/api/",
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
      return axios.post('https://repairnow.azurewebsites.net/api/appliances',{
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
      return axios.patch('https://repairnow.azurewebsites.net/api/appliances/'+id.toString(),{
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