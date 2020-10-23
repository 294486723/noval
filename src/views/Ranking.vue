<template>
  <div class="rank-root">
    <div class="left-nav">
      <ul class="left-item">
        <li class="left-list" v-for="(msg, index) in msgs"
          :key="index" @click="tab(msg._id)">
            {{ msg.shortTitle }}
        </li>
      </ul>
    </div>
    <div class="right-nav">
      <router-link class="seller-clearfix"
    v-for="(sum, index) in sums"
    :key="index" :to="'/detail/' + sum._id"
  >
    <div class="seller-img" :to="'/detail/' + sum.id">
      <img :src="'http://statics.zhuishushenqi.com' + sum.cover" alt="" />
    </div>
    <div class="seller-right">
      <span>{{ sum.title }}</span
      ><i>完结</i>
      <p class="seller-desc">{{ sum.shortIntro }}</p>
    </div>
  </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sex: "female",
      msgs: [],
      sums:[]
    };
  },
  mounted() {
     var time = setInterval(() => {
        if(this.msgs!=false){
            clearInterval(time)
            this.tab(this.msgs[0]._id)
        }
    }, 500);
    
  },
  watch: {
    $route: {
      handler(to) {
        console.log(222, to);
        //    console.log(9999,this.data.msgs);
        this.sex = to.params.type;
        this.axios
          .get("/api/ranking/gender")
          .then((res) => {
            this.msgs = res.data[this.sex];
            console.log(6666, this.msgs[0]._id);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      immediate: true,
    },
  },
  methods:{
      tab(i){
            this.axios.get("/api/ranking/"+i)
          .then((res) => {
            console.log(33333, res.data);
            this.sums=res.data.ranking.books
            console.log(444,this.sums);
          })
          .catch((err) => {
            console.log(err);
          });
      }
  }
};
</script>

<style scoped>
.rank-root {
  padding-top: 86px;
  /* display: flex;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0; */
  position: relative;
}
.left-nav {
  width: 20%;
  height: 300px;
  background: #f0f0f563;
  position: fixed;
  top: 86px;
  left:0;
}
.left-item {
  width: 100%;
  height: 590px;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  border-right: 1px solid #f0f0f0;
}
.left-list {
  height: 63px;
  line-height: 63px;
  padding: 0 14px;
  font-size: 15px;
  color: #8a8a8f;
  border-bottom: 1px solid #f0f0f0;
  box-sizing: border-box;
}
/* 右边 */
.right-nav {
  flex: 1;
  width: 80%;
  float: right;
  overflow-y: auto;
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