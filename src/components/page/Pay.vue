<template>
    <div>
      <Header></Header>
      <div class="content">
        <p>订单编号：{{this.$route.params.order_number}}</p>
        <h1>模拟支付平台</h1>
        <div class="main">
          <h3>单击确认支付，则模拟支付成功</h3>
          <el-button type="primary" round style="margin-left: 165px;margin-top: 150px" @click="pay">确认支付</el-button>
        </div>
      </div>
      <div style="position: fixed;bottom: 0; width: 100%" >
        <Meal></Meal>
        <Footer></Footer>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import Header from '../common/Header.vue'
  import Footer from '../common/Footer.vue'
  import Meal from '../common/Meal.vue'
    export default {
        data() {
            return {}
        },
        methods: {
          pay(){
            // alert(this.$route.params.order_number);
            axios.get('/api/member/pay',{params: {
                order_number: this.$route.params.order_number
              }})
              .then(response=>{
                if (response.data == 1){
                  this.$message({
                    message: '支付成功',
                    type: 'success'
                  });
                  this.$router.push('/personal');
                }
              }).catch(error=>{
              this.$message({
                message: '支付失败',
                type: 'error'
              });
              console.log(error);
            })
          }
        },
        computed: {},
        components: {
          Header,Footer,Meal
        }
    }
</script>
<style scoped>
  .content{
    width: 850px;
    height: 550px;
    margin: 15px auto;
    background-color: #fff1d7;
  }
  .content p{
    font-size: 16px;
    padding-top: 15px;
    padding-left: 15px;
  }
  .content h1,h3{
    padding-top: 35px;
    text-align: center;
  }
  .main{
    width: 450px;
    height: 350px;
    background-color: white;
    margin: 40px auto;
  }
</style>
