import axios from 'axios'

export class reportsServices {

  getReportsInformation=()=>{
    return axios.get('https://repairnow.azurewebsites.net/api/reports',
      {headers:{"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}})
  }

  getReportWithId=(id)=>{
    return axios.get('https://repairnow.azurewebsites.net/api/reports/'+id,
      {headers:{"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}})
  }

  modifyReport(id,observation,diagnosis,repairDescription,date){
    return axios.patch('https://repairnow.azurewebsites.net/api/reports/'+id,
      {
        observation,
        diagnosis,
        repairDescription,
        date
      }
      , { headers: {"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}}
    )
  }

}