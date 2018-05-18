<template>
    <div>
      <Header></Header>
      <div class="sku-box store-content " style="margin-top: 15px">
        <div class="gray-box">
          <header class="title-header">
            <h5 class="title">意面</h5>
          </header>
          <div class="item-box">
            <div class="item" v-for="(food,index) in FoodsList"  :key='index' v-if="food.catelog_id==1">
              <div class="item-img"><img :title="food.foods_des" :src="food.foods_img" style="opacity: 1">
              </div>
              <h6>{{food.foods_name}}</h6>
              <h3>{{food.foods_des}}</h3>
              <div class="item-btns clearfix">
                <span class="item-blue-btn" @click="addCart(food)">加入购物车</span>
              </div>
              <div class="item-price clearfix">
                <i>¥</i><span>{{food.foods_price}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="gray-box">
        <header class="title-header">
          <h5 class="title">小吃</h5>
        </header>
        <div class="item-box">
          <div class="item" v-for="(food,index) in FoodsList"  :key='index' v-if="food.catelog_id==2">
            <div class="item-img"><img :title="food.foods_des" :src="food.foods_img" style="opacity: 1">
            </div>
            <h6>{{food.foods_name}}</h6>
            <h3>{{food.foods_des}}</h3>
            <div class="item-btns clearfix">
              <span class="item-blue-btn" @click="addCart(food)">加入购物车</span>
            </div>
            <div class="item-price clearfix">
              <i>¥</i><span>{{food.foods_price}}</span>
            </div>
          </div>
        </div>
      </div>
        <div class="gray-box">
          <header class="title-header">
            <h5 class="title">披萨</h5>
          </header>
          <div class="item-box">
            <div class="item" v-for="(food,index) in FoodsList"  :key='index' v-if="food.catelog_id==3">
              <div class="item-img"><img :title="food.foods_des" :src="food.foods_img" style="opacity: 1">
              </div>
              <h6>{{food.foods_name}}</h6>
              <h3>{{food.foods_des}}</h3>
              <div class="item-btns clearfix">
                <span class="item-blue-btn" @click="addCart(food)">加入购物车</span>
              </div>
              <div class="item-price clearfix">
                <i>¥</i><span>{{food.foods_price}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="gray-box">
          <header class="title-header">
            <h5 class="title">缤纷饮料</h5>
          </header>
          <div class="item-box">
            <div class="item" v-for="(food,index) in FoodsList"  :key='index' v-if="food.catelog_id==4">
              <div class="item-img"><img :title="food.foods_des" :src="food.foods_img" style="opacity: 1">
              </div>
              <h6>{{food.foods_name}}</h6>
              <h3>{{food.foods_des}}</h3>
              <div class="item-btns clearfix">
                <span class="item-blue-btn" @click="addCart(food)">加入购物车</span>
              </div>
              <div class="item-price clearfix">
                <i>¥</i><span>{{food.foods_price}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="gray-box">
          <header class="title-header">
            <h5 class="title">冰激凌</h5>
          </header>
          <div class="item-box">
            <div class="item" v-for="(food,index) in FoodsList"  :key='index' v-if="food.catelog_id==5">
              <div class="item-img"><img :title="food.foods_des" :src="food.foods_img" style="opacity: 1">
              </div>
              <h6>{{food.foods_name}}</h6>
              <h3>{{food.foods_des}}</h3>
              <div class="item-btns clearfix">
                <span class="item-blue-btn" @click="addCart(food)">加入购物车</span>
              </div>
              <div class="item-price clearfix">
                <i>¥</i><span>{{food.foods_price}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="gray-box">
          <header class="title-header">
            <h5 class="title">K记饭桶</h5>
          </header>
          <div class="item-box">
            <div class="item" v-for="(food,index) in FoodsList"  :key='index' v-if="food.catelog_id==6">
              <div class="item-img"><img :title="food.foods_des" :src="food.foods_img" style="opacity: 1">
              </div>
              <h6>{{food.foods_name}}</h6>
              <h3>{{food.foods_des}}</h3>
              <div class="item-btns clearfix">
                <span class="item-blue-btn" @click="addCart(food)">加入购物车</span>
              </div>
              <div class="item-price clearfix">
                <i>¥</i><span>{{food.foods_price}}</span>
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
  import axios from 'axios';
  import Header from '../common/Header.vue'
  import Footer from '../common/Footer.vue'
  import Meal from '../common/Meal.vue'
  import * as Types from '../../store/mutations-type.js'
    export default {
        data() {
            return {
              FoodsList:[],
            }
        },
        methods: {
          getFoods(){
            axios.get('/api/member/foods')
              .then(response=>{
                this.FoodsList = response.data;
              }).catch(error=>{
                  console.log(error);
            })
          },
          addCart(food){
            this.$store.commit(Types.ADD_CART,food)
          }
        },
        computed: {},
        components: {
          Header,Footer,Meal
        },
        created(){
          this.getFoods();
        }
    }
</script>
<style scoped>
  .sku-box{
    position: relative;
  }
  .store-content{
    width: 1220px;
    padding: 0 0 25px;
    margin: 0 auto;
    position: relative;
  }
  .gray-box{
    overflow: hidden;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0,0,0,.14);
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
    margin-top: 10px;
  }
  .title-header{
    display: block;
    position: relative;
    font-size: 18px;
    line-height: 60px;
    color: #666;
    background: #fafafa;
  }
  .title-header .title {
    margin-left: 30px;
  }
  .sku-box .item-box{
    clear: both;
    overflow: hidden;
    margin: 0 -1px -1px -1px;
  }
  .sku-box .item{
    position: relative;
    float: left;
    border-right: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    width: 25%;
    height: 429px;
    background: #fff;
    box-sizing: border-box
  }
  .sku-box .item:hover{
    box-shadow: 0 0 38px rgba(0,0,0,.08) inset;
    transition: all .15s ease;
  }
  .sku-box .item .item-img img{
    cursor: pointer;
    display: block;
    width: 206px;
    height: 250px;
    margin: 50px auto 10px;
  }
  .sku-box .item h3, .sku-box .item h6{
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .sku-box .item h6{
    line-height: 1.2;
    font-size: 16px;
    color: #424242;
    margin: 0 auto;
    padding: 0 14px;
  }
  .sku-box .item h3{
    line-height: 1.2;
    font-size: 12px;
    color: #d0d0d0;
    margin: 8px auto 14px;
  }
  .sku-box .item .item-btns{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 29px;
    text-align: center;
    opacity: 0;
    z-index: 10;
  }
  .sku-box .item:hover .item-btns{
    opacity: 1;
    transition: all .2s ease-in;
  }
  .sku-box .item .item-btns .item-blue-btn{
    background-color: #5c85e5;
    background-image: linear-gradient(#779ae9,#5078df);
    border: 1px solid #5c81e3;
    color: #fff;
    margin-left: 10px;
  }
  .sku-box .item .item-btns .item-blue-btn:hover{
    border: 1px solid #5374c8;
    background-color: #5074db;
    background-image: linear-gradient(#6e8ed5,#4769c2);
  }
  .sku-box .item .item-btns .item-blue-btn:active{
    border: 1px solid #3e61d7;
    background-color: #5c85e5;
    background-image: linear-gradient(#4d72de,#6189e6);
  }
  .sku-box .item .item-price{
    font-family: Arial;
    color: #c30a18;
    margin-top: 24px;
    text-align: center;
    opacity: 1;
  }
  .sku-box .item .item-price i{
    font-size: 16px;
  }
  .sku-box .item .item-price span{
    font-size: 18px;
    padding-left: 4px;
  }
  .sku-box .item:hover .item-price{
    opacity: 0;
    transition: all .1s ease-out;
  }
  .sku-box .item .item-btns .item-blue-btn{
    display: inline-block;
    box-sizing: border-box;
    width: 100px;
    height: 30px;
    font-size: 12px;
    line-height: 28px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 200;
    transition: all .1s ease;
  }
</style>
