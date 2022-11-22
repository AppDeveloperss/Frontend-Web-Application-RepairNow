import axios from 'axios'

export class reportsServices {

  getReportsInformation=()=>{
    return axios.get('https://localhost:44306/api/reports',
      {headers:{"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}})
  }

  getReportWithId=(id)=>{
    return axios.get('https://localhost:44306/api/reports/'+id,
      {headers:{"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}})
  }

  modifyReport(id,observation,diagnosis,repairDescription,date){
    return axios.patch('https://localhost:44306/api/reports/'+id,
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