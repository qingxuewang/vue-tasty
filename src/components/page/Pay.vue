<template>
    <div>
      <Header></Header>
      <div class="content">
        <h1>模拟支付平台</h1>
        <div class="main">
          <h3>单击确认支付，则模拟支付成功</h3>
          <el-button type="primary" round style="margin-left: 150px;margin-top: 150px">确认支付</el-button>
        </div>
      </div>
      <div style="position: fixed;bottom: 0; width: 100%" >
        <Meal></Meal>
        <Footer></Footer>
      </div>
    </div>
</template>

<script>
  import Header from '../common/Header.vue'
  import Footer from '../common/Footer.vue'
  import Meal from '../common/Meal.vue'
    export default {
        data() {
            return {}
        },
        methods: {},
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
  .content h1,h3{
    padding-top: 35px;
    text-align: center;
  }
  .main{
    width: 450px;
    height: 350px;
    background-color: white;
    margin: 55px auto;
  }
</style>
