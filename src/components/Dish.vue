<template>
  <div class="klyd-dish-info">
    <div class="klyd-dish-content">
      <div class="klyd-dish-list" @click="makeQrCode">
        <img :src="imagesUrl" alt=""/>
        <h4>{{data.title}}</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      imagesUrl:""
    }
  },
  props:['data'],
  methods:{
    makeQrCode(){
      var url=this.$store.state.globalSettings.apiUrl+'/admin/dish/'+this.data.imgUrl;
      // var url=url.ToBase64String();
      // console.log(url);
      var url=getBase64Image(url);
      console.log(url);
      this.imagesUrl=url;
    }
  }
}
</script>
<style lang="scss">
  .klyd-dish-info{
    padding:15px;
    .klyd-dish-content{
      display:block;
    }
  }
</style>

