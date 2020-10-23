<template>
  <div class="rank">
    <div class="rank-top">
      <detailtop>
        <div class="shuji">排行榜</div>
      </detailtop>
      <div class="rank-list">
        <ul class="rank-type">
          <router-link to="/ranklist/female/" class="rank-type-one act"
            >女频</router-link
          >
          <router-link to="/ranklist/epub/" class="rank-type-one act"
            >出版</router-link
          >
          <router-link to="/ranklist/male/" class="rank-type-one"
            >男频</router-link
          >
        </ul>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import detailtop from "../components/Detailtop";
export default {
  components: {
    detailtop,
  },
};
</script>

<style scoped>
.rank {
  background: #fff;
}
.rank-top{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.shuji {
  font-size: 14px;
  color: #fff;
  text-align: center;
  width: 50%;
}
.rank-type {
  display: flex;
  height: 42px;
  line-height: 42px;
  text-align: center;
  padding: 0 15px;
  font-size: 14px;
  border-bottom: 1px solid #ebebeb;
  position: relative;
  box-sizing: border-box;
}
.rank-list{
   background: #fff;
}
.rank-type-one {
  flex: 1;
  color: #8a8a8f;
}
/* .active::before{
  color: #ee4745;
  background: #ee4745;
  content: "";
  display: block;
  position: absolute;
  left: 50%;
  bottom:-1px ;
  width:30px ;
  height: 2.5px;
  margin-left: -15px;
  border-radius: 2px;
  transition: all .2s;
} */
.rank-type-one .act {
  background: #ee4745;
  position: absolute;
  left: 50%;
  bottom: -1px;
  width: 30px;
  height: 2.5px;
  margin-left: -15px;
  border-radius: 2px;
  transition: all 0.2s;
}
</style>