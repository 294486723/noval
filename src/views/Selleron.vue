<template>
  <div class="hobby-shu">
      <detailtop>
      <div class="shuji">畅销短篇</div>
    </detailtop>
      <router-link class="seller-clearfix"
    v-for="(msg, index) in msgs"
    :key="index"
    :to="'/detail/' + msg._id"
  >
    <div class="seller-img" :to="'/detail/' + msg.id">
      <img :src="'http://statics.zhuishushenqi.com' + msg.cover" alt="" />
    </div>
    <div class="seller-right">
      <span>{{ msg.title }}</span
      ><i>完结</i>
      <p class="seller-desc">{{ msg.shortIntro }}</p>
    </div>
  </router-link>
 </div>
</template>

<script>
import detailtop from "../components/Detailtop";
export default {
  name: "hobby",
  components:{
      detailtop
  },
  data() {
    return {
      msgs: [],
    };
  },
  mounted() {
    this.axios
      .get(
        "apibook/by-categories?gender=male&type=hot&major=玄幻&minor=&start=0"
      )
      .then((res) => {
        this.msgs = res.data.books;
        console.log(this.msgs);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.catalog {
  background: #fff;
}
.shuji {
  font-size: 14px;
  color: #fff;
  text-align: center;
  width: 50%;
}
.seller-clearfix {
  width: 100%;
  display: flex;
  padding: 0 15px;
  height: 91px;
  margin-bottom: 10px;
  /* line-height: 91px; */
  box-sizing: border-box;
}
.seller-img img {
  width: 63px;
}

.seller-right {
  font-size: 14px;
  padding-left: 20px;
}
.seller-right span{
  color: #333;
}
.seller-right i {
  font-style: normal;
  background: #008000;
  font-size: 12px;
  padding: 1px 2px;
  margin-left: 5px;
  color: #fff;
  border-radius: 2px;
}
.seller-right p {
  font-size: 12px;
  color: #999;
  height: 32px;
  overflow: hidden;
}
</style>