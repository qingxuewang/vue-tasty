<template>
    <div>
      <Header></Header>
      <div class="content">
        <div class="main">
          <div class="logo"></div>
          <el-button type="primary" @click="handleAdd" round style="margin-left: 700px">我要留言</el-button>
          <div class="news" v-for="message in MessagesList">
            <h3>{{message.message_title}}</h3>
            <p>”{{message.message_content}}</p>
            <hr />
          </div>
        </div>
      </div>
      <!--新增界面-->
      <el-dialog title="新增" :visible.sync="addFormVisible" :close-on-click-modal="false">
        <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
          <el-form-item label="标题" prop="message_title">
            <el-input v-model="addForm.message_title"></el-input>
          </el-form-item>
          <el-form-item label="内容" prop="message_content">
            <el-input type="textarea" v-model="addForm.message_content"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="addFormVisible = false">取消</el-button>
          <el-button type="primary" @click.native="addSubmit" >提交</el-button>
        </div>
      </el-dialog>
        <Meal></Meal>
        <Footer></Footer>
    </div>
</template>

<script>
  import axios from 'axios';
  import Header from '../common/Header.vue'
  import Footer from '../common/Footer.vue'
  import Meal from '../common/Meal.vue'
    export default {
        data() {
            return {
              MessagesList:[],
              addFormVisible: false,//新增界面是否显示
              addForm: {
                message_title: '',
                message_content: '',
              },
              addFormRules: {
                message_title: [
                  { required: true, message: '请输入标题', trigger: 'blur' }
                ],
                message_content: [
                  { required: true, message: '请输入内容', trigger: 'blur' }
                ]
              },
            }
        },
        methods: {
          getMessages(){
            axios.get('/api/member/messages')
              .then(response=>{
                this.MessagesList = response.data;
              }).catch(error=>{
                console.log(error);
            })
          },
          handleAdd() {
            let flag =JSON.parse(sessionStorage.getItem('user'));
            if (flag===null){
              this.$router.push('/login');
            }else {
              this.addFormVisible = true;
            }
          },
          addSubmit(){
            let message_name = JSON.parse(sessionStorage.getItem('user'))[0].user_name;
              this.$refs.addForm.validate((valid) => {
                if (valid){
                  this.$confirm('确认提交吗？', '提示', {}).then(() => {
                    var data={
                      message_name:message_name,
                      message_title:this.addForm.message_title,
                      message_content:this.addForm.message_content,
                    };
                    axios.post('/api/member/messages',data).then((response)=>{
                      this.$message({
                        message: '提交成功',
                        type: 'success'
                      });
                      this.addFormVisible = false;
                      this.getMessages();
                    }).catch((error)=>{
                      console.log(error)
                    })
                  })
                }
              })
          }
        },
        computed: {},
        components: {
          Header,Footer,Meal
        },
        created(){
          this.getMessages();
        }
    }
</script>
<style scoped>
  .content{
    background-color: #fff1d7;
  }
  .main{
    width: 850px;
    margin: 0 auto;
    background-color: #fff8ed;
  }
  .logo{
    width: 728px;
    height: 158px;
    margin: 0 auto;
    background: url("../../assets/message.png") no-repeat ;
    background-size: 100% 100%;
  }
  .news h3{
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .news p{
    text-indent: 2em;
    font-size: 16px;
    line-height: 28px;
    margin-top: 15px;
  }
</style>
