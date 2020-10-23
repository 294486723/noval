<template>
  <div class="foot">
    <div class="foot-search">
      <div class="searchicon"></div>
      <input class="foot-ipt" type="text" />
      <button class="foot-btn">搜索</button>
    </div>
    <div class="category">
      <a href="">分类</a>
      <a href="">书架</a>
      <a href="">联系我们</a>
    </div>
    <div class="foot-info">
      <a href="">
        <img
          src="https://statics.zhuishushenqi.com/msite/icon/recordIcon.png"
          alt=""
        />
        <span>沪公网安备 31011202006103号</span>
      </a>
    </div>
    <div class="foot-co-info">
        上海元聚网络科技有限公司 增值电信业务经营许可证沪B2-20170022 网络文化经营许可证沪网文（2016）3206-227号 出版物经营许可证新出发沪批字第U7659号
    </div>
    <div class="foot-phone">客服电话：0793-8688116</div>
  </div>
</template>

<script>
export default {
  name: "foot",
};
</script>

<style scoped>
.foot {
  padding: 17.5px 0 12.5px;
  font-size: 12px;
}
.foot-search {
  position: relative;
  padding: 0 15px;
  margin: 0 0 15px;
}
.searchicon {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  left: 15px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJFMUVBRDIzN0VGMzExRTY4QjYzODBEQTAyQkM5N0UyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJFMUVBRDI0N0VGMzExRTY4QjYzODBEQTAyQkM5N0UyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkUxRUFEMjE3RUYzMTFFNjhCNjM4MERBMDJCQzk3RTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkUxRUFEMjI3RUYzMTFFNjhCNjM4MERBMDJCQzk3RTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4C8jWDAAACC0lEQVR42qyVTUhUURiGj9OgRRCCyEhGFOSiUCMEIVtUSysptFaWhrizDAS1kog22aIQHXAhROJCLAhBFIzKWrRIcGEgIrRLR6IUwQT78+c58A5c8NyZ68y88HC/udwz7znfd853smKxmHFoD1TCRTgPhyEHfsAXeAMvYdEEUJbDxP5xFxQlGfsX+uA+/Er0YchrCE9hVAaz0AolsF+rOwhXYVBjb8EUHAu6kk64qxm2QRQ2E4wthldwHBbgtJ6+K6mWwQZcgu4kBlYzUA6TcEg1CvmZ5ChNVu3w1gTXGlTBd6iA634mNXAU5rSC3eonPFDc4mdyRfFz+G9S0xD8gZNwxGVySvGESV1rqo3RbtxhUqh43qSnb3pGXCa/FW+labJXz02XSbw1nEjTpMgvI9bkg+LLaRjYc1Kqc/bZZfJacQPkpWjSrLY06upj1uSjdlYuPEvB4AzcUS2eJGort2EV6uGxZhVEZTAM2TDgSpXXxHbcGzqM92AsSavP1sQ+Qb7e2c5xLsh9claNLqIivod38FUnOqL02CZaoDHLnlquwzVNMuGlZQc/hJueve+SPeEduinHlbr4ZVanyfqaxGU3wgUNjuj3EkxrdTOebw/AiDJhlIVG6E9mslvt0+yrPB3E7rpo2GRO6yr+C6jVDu2xqwyZzOqf6tHreRcOm8zLHsomWFFtHm0LMAD6K3rQvKojnwAAAABJRU5ErkJggg==)
    no-repeat;
  background-size: 50%;
  background-position: 50%;
}
.foot-ipt {
  box-sizing: border-box;
  float: left;
  width: 82%;
  height: 30px;
  padding-left: 30px;
  border: 1px solid #ebebeb;
  border-image-repeat: 2px;
}
.foot-btn {
  margin-left: 5%;
  width: 12%;
  height: 30px;
  border: 1px solid #ebebeb;
  border-radius: 2px;
  background: #fff;
}
.category {
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  padding-top: 9px;
  display: flex;
  text-align: center;
}
.category a {
  width: 33%;
  color: #333;
  font-size: 12px;
}
.foot-info {
  padding: 20px 0 0;
  color: #999;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.foot-info a {
  color: #999;
  display: inline-block;
  line-height: 20px;
}
.foot-info img {
  vertical-align: middle;
}
.foot-info span {
  margin: 0;
  margin-left: 5px;
  vertical-align: middle;
}
.foot-co-info{
    text-align: center;
    padding: 0 11px;
    margin: 15px 0 0;
    font-size: 12px;
    color: #999;
}
.foot-phone{
    text-align: center;
    margin: 15px 0 0;
    color: #999;
    font-size: 12px;
}
</style>