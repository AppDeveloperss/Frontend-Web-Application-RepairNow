import axios from 'axios'

export class appointmentsServices {

  getAppointmentsInformation=()=>{
    return axios.get('https://repairnow.azurewebsites.net/api/appointments',
      {headers:{"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}})
  }

  getAppointmentWithId=(id)=>{
    return axios.get('https://repairnow.azurewebsites.net/api/appointments/'+id,
      {headers:{"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}})
  }

  postNewAppointment=(dateReserve,dateAttention,hour,clientId,applianceModelId)=>{
    return axios.post('https://repairnow.azurewebsites.net/api/appointments',{
      dateReserve,
      dateAttention,
      hour,
      clientId,
      applianceModelId
    },{headers:{"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}})
  }

  modifyAppointment(id,dateReserve,dateAttention,hour){
    return axios.patch('https://repairnow.azurewebsites.net/api/appointments/'+id,
      {
        dateReserve,
        dateAttention,
        hour
      }
      , { headers: {"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}}
    )
  }


}