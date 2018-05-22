<template>
    <div class="register-wrap">
      <div class="ms-title"><h1>欢迎光临Tasty餐厅</h1></div>
      <div class="content">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item prop="name" label="用户名称">
            <el-input v-model="form.name" placeholder="请输入用户名称" style="width: 40%;"></el-input>
          </el-form-item>
          <el-form-item prop="sex" label="性别">
            <el-select class="select-sex" v-model="form.sex" placeholder="请选择性别" style="width: 40%;">
              <el-option label="男" value="1"></el-option>
              <el-option label="女" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="birth" label="出生日期" style="width: 50%;">
            <el-col :span="24">
              <el-date-picker type="date" placeholder="选择日期" @change="dateChange" format="yyyy-MM-dd" v-model="form.birth" value-format="yyyy-MM-dd" style="width: 100%;">
              </el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item prop="pass" label="密码">
            <el-input v-model="form.pass" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass" label="确认密码">
            <el-input v-model="form.checkPass" type="password" placeholder="请再次输入密码"></el-input>
          </el-form-item>
          <el-form-item prop="phone" label="手机">
            <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addSubmit">提交</el-button>
            <el-button type="warning" @click="resetForm">重置</el-button>
            <el-button type="success" @click="handleCommand">返回登陆</el-button>
            <el-button type="success" @click="handle">返回首页</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
  import axios from 'axios';
    export default {
        data() {
          var validatePass = (rule, value, callback) => {
            if(value === '') {
              callback(new Error('请输入密码'));
            } else {
              if(this.form.checkPass !== '') {
                this.$refs.form.validateField('checkPass');
              }
              callback();
            }
          };
          var validatePass2 = (rule, value, callback) => {
            if(value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.form.pass) {
              callback(new Error('两次输入的密码不一致'));
            } else {
              callback();
            }
          };
          var validatePhone = (rule, value, callback) => {
            var phoneReg = /^1[34578]\d{9}$/;
            if (value === '') {
              callback(new Error('请输入手机号'));
            } else if (!phoneReg.test(this.form.phone)){
              callback(new Error('请输入正确的手机号'));
            } else {
              callback();
            }
          };
            return {
              form: {
                name: '',
                pass: '',
                checkPass: '',
                phone: '',
                birth: '',
                sex: ''
              },
              date:'',
              rules: {
                name: [
                  { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                pass: [
                  { validator: validatePass, trigger: 'blur' },
                  { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
                ],
                checkPass: [
                  { validator: validatePass2, trigger: 'blur' }
                ],
                phone: [
                  { validator: validatePhone, trigger: 'blur' }
                ],
                birth: [
                  { required: true, message: '请选择出生日期',type: 'date', trigger: 'change' }
                ],
                sex: [
                  { required: true, message: '请选择性别', trigger: 'change' }
                ]
              }
            }
        },
        methods: {
          resetForm() {
            this.$message({
              message: '重置表单成功',
              type: 'warning'
            });
            this.$refs.form.resetFields();
          },
          handleCommand() {
            this.$router.push('/login');
          },
          handle(){
            this.$router.push('/home');
          },
          dateChange(val) {
            console.log(val);
            this.form.birth = new Date(val);
            this.date = val;
            console.log(this.date);
          },
          //提交
          addSubmit(){
            this.$refs.form.validate((valid) => {
              if (valid){
                this.$confirm('确认提交吗？', '提示', {}).then(() => {
                  this.addLoading = true;
                  var data={
                    user_name:this.form.name,
                    user_pw:this.form.pass,
                    user_sex:this.form.sex,
                    user_birth:this.date,
                    user_tel:this.form.phone,
                  };
                  console.log(data);
                  axios.post('/api/member/register',data).then((response)=>{
                    if (response.data == 1){
                      this.addLoading = false;
                      this.$message({
                        message: '提交成功',
                        type: 'success'
                      });
                      this.$router.push('/login');
                    };
                  }).catch((error)=>{
                    console.log(error)
                  })
                })
              }
            })
          },
        },
        computed: {},
        components: {}
    }
</script>
<style scoped>
  .register-wrap{
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
  .content{
    position: relative;
    width: 500px;
    top: 10%;
    left: 38%;
  }
</style>
