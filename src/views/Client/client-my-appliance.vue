<template>

    <div v-if="isShowAppliances">

      <div class="content flex flex-column align-items-center">
        <section class="title">
          <h1 class="title__text">{{$t("MY APPLIANCES")}}</h1>
        </section>

        <section class="add mb-4">
          <pv-button @click="openDialog" class="pi pi-plus">{{$t("Add device")}}</pv-button>
        </section>


        <pv-data-view :value="appliances" layout="grid" :paginator="true" :rows="2">
          <template #grid="slotProps">
            <div class="contain-panel col-12 md:col-6">
              <pv-panel class="panel" :header="slotProps.data.name">

                <img class="panel__image" :src="slotProps.data.urlImage" :alt="slotProps.data.brand+slotProps.data.name"/>
                <div class="panel__text">{{slotProps.data.brand}} - {{slotProps.data.year}}</div>
                <pv-button class="panel__button" icon="pi pi-eye" @click="goToAppliance(slotProps.data.id)"></pv-button>

              </pv-panel>
            </div>
          </template>
        </pv-data-view>
      </div>

    </div>

    <div v-else>
      <client-especific-appliance @returnBack="showAppliances" :id="idAppliance"></client-especific-appliance>
    </div>

    <cliente-new-appliance-dialog @close="closeDialogNewAppliance" :display="dialogNewAppliance" :client-id="Number(this.$route.params.id)" :closable="false"></cliente-new-appliance-dialog>


</template>


<script>
import clientEspecificAppliance from "@/components/client/General/client-especific-appliance.vue";
import {appliancesServices} from '@/core/services/apliances-services.js'
import {getAppliancesOfUserId} from '@/core/helpers/get-appliances-helpers.js'
import ClienteNewApplianceDialog from "@/components/client/Dialogs/client-new-appliance-dialog.vue";

export default {
  components:{
    ClienteNewApplianceDialog,
    clientEspecificAppliance
  },
  data(){
    return{
      idAppliance:null,
      appliances:null,
      isShowAppliances:true,
      dialogNewAppliance:false,
    }
  },
  services:null,
  created() {
    this.services=new appliancesServices()
  },
  mounted(){
    this.getData()
  },
  methods:{
    openDialog(){this.dialogNewAppliance=true},
    closeDialog(){this.dialogNewAppliance=false},
    closeDialogNewAppliance(isChangeAnything){
      if(isChangeAnything)this.getData()
      this.closeDialog()
    },
    goToAppliance(id){
      this.idAppliance=Number(id)
      this.isShowAppliances=false
    },
    showAppliances(){
      this.getData()
      this.isShowAppliances=true
    },
    getData(){
      this.services.getAppliancesInformation().then(response=>{
        this.appliances=getAppliancesOfUserId(this.$route.params.id,response.data)
      })
    }
  }
}
</script>

<style scoped>
.content{
    margin: auto 0;
    height: 95vh;
}
.title{
    text-align: center;
    padding: 2rem;
}
.contain-panel{
    width:100%;
    padding: 1rem;
    background-image: url("@/assets/img/backgrounds/appliance_pattern.jpg");
    background-size: cover;
}
.panel{
    text-align: center;
    width:100%;
    height: 100%;
}
.panel__image{
    width:80px;
    height: 80px;
    vertical-align: middle;
}
.panel__text{
    color: rgb(55, 55, 65);
    font-weight: bold;
    padding: 1rem;
}
@media(min-width:768px){

}

</style>