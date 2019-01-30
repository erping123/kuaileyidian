<template>
  <div class="login">
    <el-card class="klyd-login-card">
      <div slot="header">管理员登录</div>
      <div>
        <el-form label-width="120px">

          <!--管理员名-->
          <el-form-item label="管理员名：">
            <el-input type="text" placeholder="请输入管理员名" v-model="formData.aname"></el-input>
          </el-form-item>
          <!--登录密码-->
          <el-form-item label="登录密码：">
            <el-input type="password" placeholder="请输入管理员密码" v-model="formData.apwd"></el-input>
          </el-form-item>

          <!--按钮-->
          <el-form-item>
            <el-button type="primary" @click.native="doLogin">登录</el-button>
            <el-button @click="doCancel">取消</el-button>
          </el-form-item>

        </el-form>
      </div>
    </el-card>
  </div> 
</template>
<script>
export default {
  data(){   //普通组件的模型数据是函数返回值
    return{
      //测试功能可以填写值
      formData:{
        aname:'admin',
        apwd:'123456'
      }
    }
  },
  methods: {
    doLogin(){ //执行登录
      //var aname=this.formData.aname;
      //var apwd=this.formData.apwd;
      // 发送ajax请求
      //加个条件验证，为空的时候
      var url=this.$store.state.globalSettings.apiUrl+`/admin/login/${this.formData.aname}/${this.formData.apwd}`;
      this.$axios.get(url).then((result)=>{
        console.log(result);
        if(result.data.code==200){//登录成功
          // 把用户名存入vuex仓库
          this.$store.commit('setAdminName',this.formData.aname);
          // 跳转到main页面
          this.$router.push('/main');
        }else{//登录失败
          //弹出提示框窗口succ/warning/error
          this.$alert('用户名或密码有误','登录失败',{type:'error'});  
        }
      }).catch((err)=>{
        console.log(err);
      })
    },
    doCancel(){ //清除用户的输入
      this.formData.aname="";
      this.formData.apwd="";
    }
  }
}
</script>
<style lang="scss">
  .klyd-login-card{
     width:400px;
     margin:100px auto;
     .el-card__header{
       text-align:center;
       font-size:1.2em;
    } 
  }
</style>