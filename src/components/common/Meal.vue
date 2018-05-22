<template>
    <div class="Meal_time">
      <ul>
        <li class="mt m_bre">
          <a class="track" href="javascript:void(0);">
            <div class="mt_box_1">
              <img class="meal_ico" src="../../assets/01.png" alt="" />
              <div class="meal_info">
                <h3>休闲早餐</h3>
                <p>供应时间：7:30-10:30</p>
              </div>
            </div>
          </a>
        </li>
        <li class="mt m_bre">
          <a class="track" href="javascript:void(0);">
            <div class="mt_box_1">
              <img class="meal_ico" src="../../assets/02.png" alt="" />
              <div class="meal_info">
                <h3>工作日特惠午餐</h3>
                <p>供应时间：10:30-14:00</p>
                每周一至周五（节假日除外）
              </div>
            </div>
          </a>
        </li>
        <li class="mt m_bre">
          <a class="track" href="javascript:void(0);">
            <div class="mt_box_1">
              <img class="meal_ico" src="../../assets/03.png" alt="" />
              <div class="meal_info">
                <h3>下午茶</h3>
                <p>供应时间：14:00-17:00</p>
              </div>
            </div>
          </a>
        </li>
        <li class="mt m_bre">
          <a class="track" href="javascript:void(0);">
            <div class="mt_box_1">
              <img class="meal_ico" src="../../assets/04.png" alt="" />
              <div class="meal_info">
                <h3>会员福利</h3>
                <P>多款尝新特惠抢购</P>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped>
  .Meal_time {
    width: 100%;
    height: 109px;
    background: #302722;
  }

  .Meal_time ul {
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
  }

  .Meal_time li {
    float: left;
    height: 120px;
    overflow: hidden;
    position: relative;
  }

  .meal_ico, .meal_info {
    float: left;
  }

  .meal_info {
    color: #aca9a7;
    font: 11px/20px 'Microsoft Yahei',STHeiti,"sans-serif";
  }

  .meal_info p {
    color: #aca9a7;
    font: 11px/20px 'Microsoft Yahei',STHeiti,"sans-serif";
  }

  .meal_info h3 {
    color: #fff;
    font: 15px/22px 'Microsoft Yahei',STHeiti,"sans-serif";
  }

  .Meal_time .mt {
    /*background: url(../images/meal_bg.gif) no-repeat top right;*/
  }
  .mt_box_1, .mt_box_2, .mt_box_3, .mt_box_4 {
    overflow: hidden;
    padding-top: 33px;
  }

  .meal_ico {
    padding-left: 31px;
    padding-right: 8px;
  }

  .red_line {
    height: 4px;
    background: #af0d10;
  }

  .track {
    display: inline-block;
    height: 109px;
    width: 99.4%;
    margin-right: 2px;
  }

  .track:hover {
    /*background: url(../images/meal_hover_bg.png) repeat-x left top;*/
  }

  .slide_txt li {
    width: 321px;
  }

  .m_bre {
    width: 250px;
  }

  .m_lun {
    width: 250px;
  }

  .m_tea {
    width: 250px;
  }

  .m_win {
    width: 250px;
  }

  .m_bre .meal_ico {
    padding-left: 8px;
  }

  .m_lun .meal_ico {
    padding-left: 8px;
  }

  .m_tea .meal_ico {
    padding-left: 8px;
  }

  .m_win .meal_ico {
    padding-left: 8px;
  }

</style>
