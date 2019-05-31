<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotulist" :key="item.id">
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>
    <!-- end -->

    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu1.png">
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu2.png">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbotulist: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      //获取轮播图的数据
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(res => {
          console.log(res.body);
          if (res.body.status == 0) {
            this.lunbotulist = res.body.message;
          } else {
            Toast({
              message: "加载轮播图失败",
              position: "middle",
              duration: 5000
            });
          }
        });
    }
  }
};
</script>


<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: pink;
    }
    &:nth-child(2) {
      background-color: blueviolet;
    }
    &:nth-child(3) {
      background-color: green;
    }
    &:nth-child(4) {
      background-color: purple;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.mui-grid-view.mui-grid-9 {
  background-color: white;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
  img {
    width: 50%;
  }
  .mui-media-body {
    font-size: 13px;
  }
}
</style>

