<template>
  <div class="settings">
    <!-- 面包屑 -->
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>全局设置</el-breadcrumb-item>
    </el-breadcrumb>

    <br>
    <!-- 卡片 -->
    <el-card shadow="never">
      <el-form label-width="110px">
        <el-form-item label="应用名称：">
          <el-input v-model="appName"></el-input>
        </el-form-item>

        <el-form-item label="数据api地址：">
          <el-input v-model="apiUrl"></el-input>
        </el-form-item>

        <el-form-item label="管理后台地址："> 
          <el-input v-model="adminUrl"></el-input>
        </el-form-item>

        <el-form-item label="顾客api地址：">
          <el-input v-model="appUrl"></el-input>
        </el-form-item>

        <el-form-item label="系统备案号：">
          <el-input v-model="icp"></el-input>
        </el-form-item>

        <el-form-item label="系统版权声明：">
          <el-input v-model="copyright"></el-input>
        </el-form-item>

        <el-form-item label="应用名称：">
          <el-button type="primary" @click="doSubmit">提交</el-button>
          <el-button @click="doCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data(){
    return{
      appName:'',
      apiUrl:'',
      adminUrl:'',
      appUrl:'',
      icp:'',
      copyright:''
    }
  },
  mounted(){
    // 将$store存储在全局配置数据赋值给中间变量-formData,方便输入表单双向绑定
    //引用复制，两个变量指向同一个对象
    //this.formData=this.$store.state.globalSettings;
    // 对象复制，创建出两个一样的对象
    this.appName=this.$store.state.globalSettings.appName;
    this.apiUrl=this.$store.state.globalSettings.apiUrl;
    this.adminUrl=this.$store.state.globalSettings.adminUrl;
    this.appUrl=this.$store.state.globalSettings.appUrl;
    this.icp=this.$store.state.globalSettings.icp;
    this.copyright=this.$store.state.globalSettings.copyright;
    
  },
  methods:{
    doSubmit(){
      var url=this.$store.state.globalSettings.apiUrl+'/admin/settings';
      var data={
        appName:this.appName,
        apiUrl:this.apiUrl,
        adminUrl:this.adminUrl,
        appUrl:this.appUrl,
        icp:this.icp,
        copyright:this.copyright,
      };
      this.$axios.put(url,data).then((result)=>{
        if(result.data.code==200){
          this.$message.success('全局设置修改成功！');
          // TODO:修改$store中的全局设置
          this.$store.commit('setGlobalSettings',this.data);
        }else{
          this.$message.success('全局设置修改失败！');
        }
      }).catch((err)=>{
        console.log(err);
      })
    },
    doCancel(){
      this.appName=this.$store.state.globalSettings.appName;
      this.apiUrl=this.$store.state.globalSettings.apiUrl;
      this.adminUrl=this.$store.state.globalSettings.adminUrl;
      this.appUrl=this.$store.state.globalSettings.appUrl;
      this.icp=this.$store.state.globalSettings.icp;
      this.copyright=this.$store.state.globalSettings.copyright;
    }
  }
}
</script>
<style lang="scss">

</style>
