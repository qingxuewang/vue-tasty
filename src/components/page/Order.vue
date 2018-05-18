<template>
  <div>
    <Header></Header>
    <div class="content">
      <h3>复合并确认订单信息</h3>
      <el-form ref="form" :model="form" :rules="rules" label-width="100px" style="margin-top: 20px">
        <el-form-item label="收货人姓名" prop="name">
          <el-input v-model="form.name"  style="width: 50%;"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="tel">
          <el-input v-model="form.tel"  style="width: 50%;"></el-input>
        </el-form-item>
        <el-form-item label="送货地址" prop="address">
          <el-input v-model="form.address"  style="width: 50%;"></el-input>
        </el-form-item>
      <hr>
      <h3>支付及配送方式</h3>
      支付方式：在线支付 <br>
      运费：0<br>
      送货日期：工作日与假期均可送
      <hr>
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
        <el-table-column prop="foodCount" label="数量" min-width="150">
        </el-table-column>
        <el-table-column label="小计" min-width="120">
          <template slot-scope="scope">
            <span>{{scope.row.foods_price*scope.row.foodCount}}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-col :span="24" class="toolbar" style="margin-top: 20px">
        </el-pagination>
        <span>已选择{{count}}件商品</span>
        <span style="margin-left: 150px">总价：¥{{totalPrice}}</span>
        <el-form-item >
          <el-button style="margin-left: 550px" type="primary" @click="submitForm">提交订单</el-button>
        </el-form-item>
      </el-col>
      </el-form>
      <div style="height: 100px"></div>
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
        form: {
          name: '',
          tel:'',
          address:''
        },
        rules: {
          name: [
            { required: true, message: '请输入收货人姓名', trigger: 'blur' },
          ],
          tel: [
            { required: true, message: '请输入联系电话', trigger: 'blur' },
          ],
          address: [
            { required: true, message: '请输入收货地址', trigger: 'blur' },
          ]
        }
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
      my(){
        var a=JSON.parse(sessionStorage.getItem('user'));
        console.log(a);
          this.form.name = a[0].user_name,
          this.form.tel = a[0].user_tel,
          this.form.address = a[0].user_address
      },
      //提交订单按钮
        submitForm(){
          this.$refs.form.validate((valid) => {
            if (valid) {
              this.$router.push('/pay');
            }
        })
      },
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
    },
    created(){
      this.my();
    }
  }
</script>
<style scoped>
  .content{
    width: 850px;
    margin: 15px auto;
  }

</style>
