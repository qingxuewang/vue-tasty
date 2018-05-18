<template>
    <div>
      <Header></Header>
      <el-carousel :interval="2000" arrow="always" height="590px">
        <el-carousel-item v-for="(item,index) in imgs" :key="index">
          <img :src="item.url" width="100%" height="100%">
        </el-carousel-item>
      </el-carousel>
      <Meal></Meal>
      <Footer></Footer>
    </div>
</template>

<script>
  import Header from '../common/Header.vue'
  import Footer from '../common/Footer.vue'
  import Meal from '../common/Meal.vue'
    export default {
        data() {
            return {
              imgs:[
                {url:'http://www.pizzahut.com.cn/phdi2014//UploadFile//image/20171013/20171013220844_8567.jpg'},
                {url:'http://www.pizzahut.com.cn/phdi2014//UploadFile//image/20180420/20180420215617_8586.jpg'},
                {url:'http://www.pizzahut.com.cn/phdi2014//UploadFile//image/20180420/20180420173400_7225.jpg'},
              ]
            }
        },
        methods: {},
        computed: {},
        components: {
          Header,Footer,Meal
        }
    }
</script>
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
</style>
