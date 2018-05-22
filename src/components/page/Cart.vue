<template>
    <div>
      <Header></Header>
      <div class="content">
        <div class="logo"></div>
        <el-table
          :data="cartList"
          style="width: 100%">
          <el-table-column
            type="index"
            width="50">
          </el-table-column>
          <el-table-column label="商品" min-width="125">
            <template slot-scope="scope">
              <span style="height: 50px;line-height:50px">{{scope.row.foods_name}}</span>
            </template>
          </el-table-column>
          <el-table-column label="图片" min-width="150">
            <template slot-scope="scope">
              <img :src=scope.row.foods_img style="width:80px">
            </template>
          </el-table-column>
          <el-table-column prop="foods_price" label="单价" min-width="80">
          </el-table-column>
          <el-table-column label="数量" min-width="150">
            <template slot-scope="scope">
              <button @click="add(scope.row.foods_id,-1)">-</button>
              {{scope.row.foodCount}}
              <button @click="add(scope.row.foods_id,1)">+</button>
            </template>
          </el-table-column>
          <el-table-column label="小计" min-width="120">
            <template slot-scope="scope">
              <span>{{scope.row.foods_price*scope.row.foodCount}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" min-width="150">
            <template slot-scope="scope">
              <el-button type="danger" size="small" @click="remove(scope.row.foods_id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-col :span="24" class="toolbar" style="margin-top: 20px" v-if="cartList.length>0">
          <el-button type="danger" @click="clear" >清空购物车</el-button>
          </el-pagination>
          <span style="margin-left: 150px">已选择{{count}}件商品</span>
          <span style="margin-left: 100px">总价：¥{{totalPrice}}</span>
          <el-button type="success" style="margin-left: 100px" @click="order">去下单</el-button>
        </el-col>
        <div style="height: 60px"></div>
        <div class="empty" v-if="cartList.length==0">
          购物车空空的哦~，去看看心仪的商品吧~
          <el-button type="success" round @click="go">去购物></el-button>
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
  //辅助函数，语法糖
  import {mapState,mapGetters,mapMutations} from 'vuex'
  import * as Types from '../../store/mutations-type.js'
    export default {
        data() {
            return {
            }
        },
        methods: {
          ...mapMutations([Types.CHANGE_COUNT,Types.REMOVE_CART,Types.CLEAR_CART]),
          //商品数量更改
          add(id,count){
            this[Types.CHANGE_COUNT]({id,count});
          },
          remove(id){
            this[Types.REMOVE_CART](id);
          },
          clear(){
            this[Types.CLEAR_CART]()
          },
          go(){
            this.$router.push('/foods');
          },
          order(){
            let flag =JSON.parse(sessionStorage.getItem('user'));
            if (flag===null){
              this.$router.push('/login');
            }else {
              this.$router.push('/order');
            }
          }
        },
        computed: {
          ...mapState(['cartList']),
          ...mapGetters(['count']),
          ...mapGetters(['totalPrice']),
          // cartList(){
          //   return this.$store.state.cartList;
          // }
        },
        components: {
          Header,Footer,Meal
        }
    }
</script>
<style scoped>
  .content{
    width: 850px;
    margin: 15px auto;
  }
  .logo{
    width: 850px;
    height:100px;
    background: url("../../assets/cart.png") no-repeat 150px -15px;
    background-size: 100% 100%;
  }
  .empty{
    height: 285px;
    text-align: center;
  }
</style>
