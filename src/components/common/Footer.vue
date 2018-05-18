<template>
  <div>
    <div class="red_line"></div>
    <div class="footer">
      <div class="web_map">
        <dl style="width: 154px">
          <dt>关于我们</dt>
          <dd><a href="">品牌介绍</a></dd>
          <dd><a href="">新闻中心</a></dd>
          <dd><a href="">企业责任</a></dd>
        </dl>
        <dl style="width: 143px">
          <dt>美味菜单</dt>
          <dd>
            <a class="s" href="">新品推荐</a>
          </dd>
          <dd>
            <a class="s" href="">工作日特惠午餐</a>
          </dd>
          <dd>
            <a class="s" href="">下午茶</a>
          </dd>
        </dl>
        <dl style="width: 139px">
          <dt>关注我们</dt>
          <dd><a href="">新浪微博</a></dd>
          <dd><a href="">腾讯微博</a></dd>
          <dd><a href="">人人网</a></dd>
        </dl>
        <dl style="width: 139px">
          <dt>加入我们</dt>
          <dd><a href="">中国创业网</a></dd>
        </dl>
        <dl style="width: 139px">
          <dt>联系我们</dt>
          <dd><a href="">联系我们</a></dd>
        </dl>
        <dl style="width: 170px">
          <dt>法律条款</dt>
          <dd><a href="">网站协议</a></dd>
          <dd><a href="">隐私政策</a></dd>
        </dl>
        <dl>
          <dt>其他品牌网站</dt>
          <dd><a href="">腾讯</a></dd>
          <dd><a href="">淘宝</a></dd>
          <dd><a href="">百度</a></dd>
        </dl>
      </div>
      <div class="copy_right">版权所有 SWPU </div>
    </div>
    <!-- 底部结束 -->
  </div>
</template>

<script>
</script>
<style scoped>
  a{
    text-decoration: none;
  }
  .red_line {
    height: 4px;
    background: #af0d10;
  }
  .footer {
    background: #1f1510;
  }

  .web_map {
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .web_map dl {
    float: left;
  }

  .footer dt {
    color: #fff;
    font: bold 12px/24px "宋体";
  }

  .footer dd a {
    color: #d2d0cf;
    font: 12px/24px "宋体";
    position: relative;
  }
  .copy_right {
    text-align: center;
    color: #d2d0cf;
    height: 90px;
    font: 12px/31px "宋体";
    border-top: 1px solid #403834;
  }
</style>
