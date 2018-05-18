<template>
    <div>
      <Header></Header>
      <div class="content">
        <div class="main" v-for="(item,index) in tableData">
          <h1>{{item.notice_title}}</h1>
          <p>{{item.notice_content}}</p>
          <p style="float: right">{{item.notice_person}}</p>
          <p style="float: right">{{item.notice_data | getData}}</p>
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
            return {
              tableData:[]
            }
        },
        methods: {
          getNotice(){
            axios.get('/api/member/notice')
              .then(response=>{
                this.tableData = response.data;
              }).catch(error=>{
              console.log(error);
            })
          },
        },
        computed: {},
        components: {
          Header, Footer,Meal
        },
      filters:{
        getData:function (val){
          var a = val.substring(0,10);
          var b = val.substring(11,13);
          var c =parseInt(b)+8;
          var d = val.substring(14,16);
          val = a+" "+c+":"+d;
          return val;
        }
      },
        created(){
          this.getNotice();
        }
    }
</script>
<style scoped>
  .content{
    margin: 0 auto;
    width: 1450px;
    height: 800px;
    background: url("../../assets/bg.jpg") no-repeat;
    background-size: 100%;
  }
  .main{
    width: 750px;
    margin: 0 auto;
  }
  .main h1{
    padding-top: 50px;
    padding-bottom: 25px;
    text-align: center;
  }
  .main p{
    text-indent: 2em;
    padding-bottom: 25px;
  }
</style>
