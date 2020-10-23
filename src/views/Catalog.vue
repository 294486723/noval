<template>
  <div class="catalog">
    <detailtop>
      <div class="shuji">优质书源</div>
    </detailtop>
    <div class="chapter-header">
      <div class="chapter-header-left">
        <h3>目录</h3>
        <span>共{{ msgs.length }} 章</span>
      </div>
      <div class="chapter-header-right">
        <span>倒序</span>
      </div>
    </div>
    <ul class="chapter-item">
      <li class="chapter-list" v-for="(msg, index) in msgs" :key="index">
        {{ msg.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import detailtop from "../components/Detailtop";
export default {
  name: "catalog",
  components: {
    detailtop,
  },
  data() {
    return {
      msgs: [],
    };
  },
  mounted() {
    console.log(this.$route.params);
    this.axios
      .get("/apiatoc/568fef99adb27bfb4b3a58dc?view=chapters")
      .then((res) => {
        console.log(res.data);
        this.msgs = res.data.chapters;
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
.chapter-header {
  padding: 15px 20px;
  font-size: 16px;
  color: #222;
  display: flex;
  justify-content: space-between;
}
.chapter-header-left .chapter-header-right {
  display: inline-block;
}
.chapter-header-left h3 {
  margin: 0;
  display: inline-block;
  font-size: 14px;
}
.chapter-header-left span {
  color: #999;
  font-size: 12px;
}
.chapter-header-right span {
  font-size: 14px;
  color: #222;
}
/* .chapter-item{

} */
.chapter-list {
  margin-left: 20px;
  height: 50px;
  line-height: 50px;
  color: #999;
  font-size: 12px;
  border-bottom: 1px solid #f8f8f8;
}
</style>