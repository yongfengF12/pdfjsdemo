<template>
  <div class="home">
    12121
    <Loading :loading="loading" />
    <Canvas :src="pdfFile" v-on:loadingFun="closeLoading" />
  </div>
</template>

<script>
import pdfFile  from 'file-loader!../../assets/1.pdf';
import Canvas from './canvas';
import Loading from '../Loading';
export default {
  name: 'home',
  data(){
    return {
    	pdfFile,
//    pdfFile:"http://118.25.23.208/test.pdf",
//    pdfFile:"http://localhost:8071/api/pdf",
      pdfFile:"http://118.25.23.208:8071/test.pdf",
      loading:true
    }
  },
  methods: {
    closeLoading:function(val){
      this.loading = val;
    }
  },
  components:{
    Canvas,
    Loading
  }
}
</script>

<style scoped>
.btn{
	position: fixed;
	top: 0;
	right: 0;
	padding: 30px;
	background: rgba(0,0,0,0.8);
}
</style>
