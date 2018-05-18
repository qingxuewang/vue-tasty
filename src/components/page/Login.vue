<template>
    <div class="login-wrap">
      <div class="ms-title"><h1>欢迎光临Tasty餐厅</h1></div>
      <div class="ms-login">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
          <el-form-item prop="userName" label="账号">
            <el-input v-model="ruleForm.userName" placeholder="请输入账号" ></el-input>
          </el-form-item>
          <el-form-item prop="userPw" label="密码">
            <el-input type="password" placeholder="请输入密码" v-model="ruleForm.userPw" @keyup.enter.native="submitForm('ruleForm')"></el-input>
          </el-form-item>
          <div class="login-btn">
            <el-button type="primary" @click="submitForm">登录</el-button>
            <el-button type="primary" @click="go">返回首页</el-button>
            <el-button type="primary" @click="handleCommand" >注册</el-button>
          </div>
        </el-form>
      </div>
    </div>
</template>

<script>
  import axios from 'axios';
    export default {
        data() {
            return {
              logining: false,
              ruleForm: {
                userName: '',
                userPw:''
              },
              rules: {
                userName: [
                  { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                userPw: [
                  { required: true, message: '请输入密码', trigger: 'blur' }
                ]
              }
            }
        },
        methods: {
          handleCommand() {
            this.$router.push('/register');
          },
          go() {
            this.$router.push('/home');
          },
          submitForm(){
            this.$refs.ruleForm.validate((valid) => {
              if(valid) {
                this.logining = true;
                var data={
                  user_name:this.ruleForm.userName,
                  user_pw:this.ruleForm.userPw,
                };
                axios.post('/api/member/login',data)
                  .then((response) => {
                    this.logining = false;
                    if (response.data == -1) {
                      this.$message({
                        message: '该用户不存在(⊙o⊙)',
                        type: 'warning'
                      });
                    } else if (response.data == 0) {
                      this.$message({
                        message: '密码错误(⊙o⊙)',
                        type: 'warning'
                      });
                    } else if (response.status == 200) {
                      this.$message({
                        type: 'success',
                        message: '登陆成功!'
                      });
                      sessionStorage.setItem('user', JSON.stringify(response.data));
                      var a =JSON.parse(sessionStorage.getItem('user'));
                      console.log(a);
                      this.$router.push('/home');
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              } else{
                console.log('error submit!!!');
                return false;
              }
            });
          },
        },
        computed: {},
        components: {}
    }
</script>
<style scoped>
  .login-wrap{
    position: absolute;
    width:100%;
    height:100%;
    background: url('../../assets/bg0.jpg') no-repeat;
    background-size:100% 100%;
  }
  .ms-title{
    text-align: center;
    font-size: 28px;
    margin-top: 150px;
    color: #2a88bd;
  }
  .ms-login{
    position: relative;
    left:40%;
    top:15%;
    width:350px;
    height:250px;
  }
  .login-btn{
    position: relative;
    left: 40px;
    margin-top: 35px;
    text-align: center;
  }

</style>
