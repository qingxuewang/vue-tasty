<template>
  <!-- 导航开始 -->
  <div class="nav">
    <ul class="f_ul">
      <li class="f_li f_logo">
      </li>
      <li class="f_li">
        <router-link to="/home" class="f">首页</router-link>
      </li>
      <li class="f_li">
        <router-link to="/introduce" class="f">品牌介绍</router-link>
      </li>
      <li class="f_li">
        <router-link to="/notice" class="f">公告</router-link>
      </li>
      <li class="f_li">
      <router-link to="/foods" class="f">美味菜单</router-link>
    </li>
      <li class="f_li">
        <router-link to="/messages" class="f">留言板</router-link>
      </li>
      <li class="f_li" >
        <router-link to="/login" class="f">会员登陆/注册</router-link>
      </li>
      <li class="f_li">
        <router-link to="/personal" class="f">个人中心</router-link>
      </li>
      <li class="f_li">
        <router-link to="/cart" class="f">购物车</router-link>
      </li>
      <li class="user" v-if="username">
        <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link" style="color: red">
                    欢迎{{username}}
                </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="loginout">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
          handleCommand(command) {
            if(command == 'loginout'){
              sessionStorage.removeItem('user');
              this.$router.push('/foods');
            }
          }
        },
        computed: {
          username(){
            let flag =JSON.parse(sessionStorage.getItem('user'));
                if(flag==null){
                  return 0;
                }else {
                  let message_name = JSON.parse(sessionStorage.getItem('user'))[0].user_name;
                  return message_name;
                }
            }
        },
        components: {}
    }
</script>
<style scoped>
  ul li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  .nav {
    width: 100%;
    background: #fff;
  }
  .nav .f_ul {
    width: 1050px;
    margin: 0 auto;
    height: 45px;
  }
  .nav .f{
    display: inline-block;
    color: #6d6458;
    font: 13px/45px 'Microsoft Yahei',STHeiti,"sans-serif";
    width: 100px;
  }
  .nav .f_li {
    float: left;
    text-align: center;
    border-right: 1px solid #ede7d8;
  }
  .nav .f_logo {
    width: 140px;
    height: 45px;
    background: url("../../assets/logo.png");
    background-size: 100%;
  }
  .nav .f:hover, .active .f {
    background: #c40e1a;
    color: #fff;
    font-size: 15px;
  }
  .user{
    text-align: center;
    height: 45px;
    line-height: 45px;
    border-right: 1px solid #ede7d8;
  }
</style>
