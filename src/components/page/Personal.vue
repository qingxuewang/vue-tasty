<template>
    <div>
      <Header></Header>
      <div class="content">
          <div class="main">
            <h1>Hi,{{this.form.name}}</h1>
            <el-tabs v-model="activeName"  type="card"  style="margin-top:50px">
              <el-tab-pane label="个人信息" name="first">
                <el-form ref="form" :model="form" :rules="rules" label-width="80px" style="margin-top:80px;margin-left: 150px">
                  <el-form-item  label="用户名称">
                    <el-input v-model="form.name" :disabled="true" style="width: 40%;">
                    </el-input>
                  </el-form-item>
                  <el-form-item prop="sex" label="性别">
                    <el-radio v-model="form.sex" label="1">男</el-radio>
                    <el-radio v-model="form.sex" label="0">女</el-radio>
                  </el-form-item>
                  <el-form-item prop="birth" label="出生日期" style="width: 50%;">
                    <el-col :span="24">
                      <el-date-picker type="date" placeholder="选择日期"   v-model="form.birth" value-format="yyyy-MM-dd" style="width: 100%;">
                      </el-date-picker>
                    </el-col>
                  </el-form-item>
                  <el-form-item prop="phone" label="手机">
                    <el-input v-model="form.phone" placeholder="联系电话" style="width: 50%;"></el-input>
                  </el-form-item>
                  <el-form-item prop="address" label="收货地址">
                    <el-input v-model="form.address" placeholder="收货地址" style="width: 50%;"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="addSubmit">提交</el-button>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="我的订单" name="second">
                <el-table :data="tableData" style="width: 100%;margin-top: 25px" >
                  <el-table-column  label="日期" min-width="40">
                    <template slot-scope="scope" >
                      <span>{{scope.row.order_date | getData}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="金额" min-width="50">
                    <template slot-scope="scope" >
                      <span>{{scope.row.order_price | getPrice}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column prop="order_context" label="订单内容" min-width="120">
                  </el-table-column>
                  <el-table-column prop="order_user" label="收货信息" min-width="80">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.order_user }}</p>
                        <p>电话: {{ scope.row.order_tel }}</p>
                        <p>地址: {{ scope.row.order_address }}</p>
                        <div slot="reference" class="name-wrapper">
                          <el-tag size="medium">{{ scope.row.order_user }}</el-tag>
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column prop="order_state" label="是否付款" min-width="50">
                    <template slot-scope="scope">
                      <span>{{scope.row.order_pay | getpay}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column prop="order_state" label="订单状态" min-width="50">
                    <template slot-scope="scope">
                      <span>{{scope.row.order_state | getstate}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" width="160">
                    <template slot-scope="scope">
                      <el-button size="small" type="primary" @click="handleEdit(scope.row)" v-if="!(scope.row.order_pay)">去付款</el-button>
                      <el-button type="danger" size="small" @click="handleDel(scope.row)">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="密码修改" name="third">
                <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm" style="width: 400px;
    margin: 80px 150px;">
                  <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm2.pass" placeholder="请输入密码" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm2.checkPass" placeholder="请再次输入密码" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </div>
      </div>
      <Meal></Meal>
      <Footer></Footer>
    </div>
</template>

<script>
  import Header from '../common/Header.vue'
  import Footer from '../common/Footer.vue'
  import Meal from '../common/Meal.vue'
  import axios from 'axios'
    export default {
        data() {
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
          var validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              if (this.ruleForm2.checkPass !== '') {
                this.$refs.ruleForm2.validateField('checkPass');
              }
              callback();
            }
          };
          var validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm2.pass) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
          };
            return {
              activeName: 'first',
              form: {
                name: '',
                phone: '',
                birth: '',
                sex: '',
                address: '',
              },
              date:'',
              rules: {
                address: [
                  { required: true, message: '请输入收货地址', trigger: 'blur' }
                ],
                phone: [
                  { validator: validatePhone, trigger: 'blur' }
                ],
                birth: [
                  { required: true, message: '请选择出生日期',type: 'string', trigger: 'change' }
                ],
                sex: [
                  { required: true, message: '请选择性别', trigger: 'change' }
                ]
              },
              ruleForm2: {
                pass: '',
                checkPass: '',
              },
              rules2: {
                pass: [
                  { validator: validatePass, trigger: 'blur' },
                  { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
                ],
                checkPass: [
                  { validator: validatePass2, trigger: 'blur' },
                  { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
                ],
              },
              tableData:[]
            }
        },
        methods: {
          init(){
            var name = JSON.parse(sessionStorage.getItem('user'))[0].user_name;

            axios.post('/api/member/initdata',{name:name}).then((response)=>{
              sessionStorage.removeItem('user');
              sessionStorage.setItem('user', JSON.stringify(response.data));
              this.form.name = response.data[0].user_name;
              this.form.sex = response.data[0].user_sex;
              this.form.sex = response.data[0].user_sex;
              this.form.birth = response.data[0].user_birth;
              this.form.phone = response.data[0].user_tel;
              this.form.address = response.data[0].user_address;
            }).catch((error)=>{
              console.log(error)
            })
          },
          dateChange(val) {
            console.log(val);
            this.form.birth = new Date(val);
            this.date = val;
            console.log(this.date);
          },
          addSubmit(){
            this.$refs.form.validate((valid) => {
              if (valid){
                this.$confirm('确认提交吗？', '提示', {}).then(() => {
                  var data=this.form;
                  console.log(data);
                  axios.post('/api/member/personal',data).then((response)=>{
                    if (response.data == 1){
                      this.$message({
                        message: '修改成功',
                        type: 'success'
                      });
                    };
                  }).catch((error)=>{
                    console.log(error)
                  })
                })
              }
            })
          },
          resetForm(formName) {
            this.$refs[formName].resetFields();
            this.$message('输入框重置成功');
          },
          submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                let para = {
                  name:this.form.name,
                  pass:this.ruleForm2.pass
                };
                console.log(para);
                axios.post('/api/member/modifyPassword',para)
                  .then(response=>{
                    if(response.data==1){
                      this.$message({
                        message: '修改密码成功',
                        type: 'success'
                      });
                      this.ruleForm2.pass='';
                      this.ruleForm2.checkPass='';
                    }
                  })
                  .catch(error=>{
                    console.log(error);
                  })
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          getOrder(){
            var name = JSON.parse(sessionStorage.getItem('user'))[0].user_name;
            axios.get('/api/member/order',{params: {
              order_user: name
            }})
              .then(response=>{
                this.tableData = response.data.reverse();
              }).catch(error=>{
              console.log(error);
            })
          },
          //删除
          handleDel: function (row) {
            this.$confirm('确认删除该记录吗?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              axios.get('/api/member/deleteorder',{
                params:{order_id:row.order_id}
              })
                .then(req=>{
                  this.$message({
                    message: '删除成功',
                    type: 'success'
                  });
                  this.getOrder();
                }).catch(error=>{
                console.log(error);
              })
            }).catch(()=>{
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            })
          },
        },
        computed: {
        },
        components: {
          Header, Footer,Meal
        },
        filters:{
          getData:function (val){
            var a = val.substring(5,10);
            var b = val.substring(11,13);
            var c =parseInt(b)+8;
            var d = val.substring(14,16);
            val = a+" "+c+":"+d;
            return val;
          },
          getpay:function (val) {
            return val == 1 ? '已付款' : val ==0 ?'未付款' : '未知';
          },
          getstate:function (val) {
            return val == 1 ? '已配送' : val ==0 ?'未配送' : '未知';
          },
          getPrice:function (val) {
            return '￥'+val;
          }
        },
        created(){
          this.init();
          this.getOrder();
        }
    }
</script>
<style scoped>
  ul li{
    list-style: none;
    float: left;
  }
  a{
    text-decoration: none;
  }
  .content{
    margin: 0 auto;
    width: 1450px;
    height: 800px;
    background: url("../../assets/bg.jpg") no-repeat;
    background-size: 100%;
  }
  .main{
    width: 750px;
    height: 800px;
    margin: 0 auto;
  }
  .main h1{
    padding-top: 50px;
    text-align: center;
  }
</style>
