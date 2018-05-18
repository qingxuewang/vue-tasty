<template>
  <div>
    <Header></Header>
    <div class="content">
      <div class="memorabilia_main" >
        <div class="men_con">
          <h2>Tasty大事记</h2>
          <div class="men_main">
            <div class="date_years">
              <h3>2018's</h3>
              <p>Tasty餐厅第10家欢乐餐厅落户四川成都市西南石油大学。</p>
              <img src="../../assets/date_2018.jpeg" alt="" />
            </div>
            <div class="date_years date_right">
              <h3>2017’s</h3>
              <p>推出学生餐，给学生群体更好的体验。</p>
              <img src="../../assets/date_2017.jpeg" alt="" />
            </div>
            <div class="date_years">
              <h3>2016's</h3>
              <p>推出经济实惠午餐。</p>
              <img src="../../assets/date_2016.jpeg" alt="" />
            </div>
            <div class="date_years date_right">
              <h3>2015’s</h3>
              <p>正式推行一年两次更换大菜单，提供物美价廉可口的食物。</p>
              <img src="../../assets/date_2015.jpeg" alt="" />
            </div>
            <div class="date_years">
              <h3>2014's</h3>
              <p>Tasty餐厅首次落户于四川成都市。</p>
              <img src="../../assets/date_2014.jpeg" alt="" />
            </div>
          </div>
        </div>
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
    background-color: #fff1d7;
  }
  .memorabilia_main {
    width: 890px;
    margin: 0 auto;
    overflow: hidden;
  }
  .men_con {
    padding: 20px 20px 40px 20px;
    width: 830px;
    background: #fff7e9 url(../../assets/big_event_line.png) repeat-y center;
    overflow: hidden;
  }
  .men_con h2 {
    font: 25px/40px 'Microsoft Yahei',STHeiti,"sans-serif";
    color: #d21b17;
    padding-bottom: 10px;
  }

  .men_main {
    overflow: hidden;
  }

  .date_years {
    float: left;
    padding-left: 17px;
    text-align: right;
    overflow: hidden;
    width: 407px;
  }
  .date_years p {
    color: #7d3d16;
    font: 12px/20px "宋体";
    background: url(../../assets/man_dotted.png) no-repeat right center;
    padding-right: 24px;
  }

  .date_years h3 {
    font: 48px/50px 'Microsoft Yahei',STHeiti,"sans-serif";
    color: #7d3d16;
    padding-right: 24px;
  }

  .date_years img {
    margin-top: 5px;
    padding-right: 24px;
    width: 300px;
  }
  .date_right {
    float: right;
    padding-right: 17px;
    text-align: left;
    overflow: hidden;
    width: 407px;
    margin-top: -65px;
  }

  .date_right p {
    color: #7d3d16;
    font: 12px/20px "宋体";
    background: url(../../assets/man_dotted.png) no-repeat left center;
    padding-left: 24px;
  }

  .date_right h3 {
    font: 48px/50px 'Microsoft Yahei',STHeiti,"sans-serif";
    color: #7d3d16;
    padding-left: 24px;
  }

  .date_right img {
    margin-top: 5px;
    padding-left: 24px;
  }
</style>
