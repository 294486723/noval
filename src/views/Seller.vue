<template>
  <div class="seller">
    <h4 class="seller-top">畅销短篇</h4>
    <router-link
      class="seller-clearfix"
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
    <div class="seller-more">
      <router-link to="/selleron">
         <span>查看更多</span>
          <i></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import bus from '../router/bus'
// import func from '../../vue-temp/vue-editor-bridge';
export default {
  data() {
    return {
      msgs: [],
      sum:[],
    };
  },
  mounted() {
    this.axios.get(`apibook/by-categories?gender=${'male'}&major=${'奇幻'}&minor=&start=0&limit=4`).then((res) => {
        that.msgs = res.data.books;
      })
      .catch((err) => {
        console.log(err);
      });

   var that=this
    bus.$on('send',function(data){
      console.log(data[0],data[1]);
       this.axios.get(`apibook/by-categories?gender=${data[0]}&major=${data[1]}&minor=&start=0&limit=4`).then((res) => {
        that.msgs = res.data.books;
      })
      .catch((err) => {
        console.log(err);
      });    
    })
  },
  
};
</script>

<style scoped>
.seller {
  background-color: #fff;
}
.seller-top {
  margin: 0;
  font-size: 14px;
  padding: 0 15px;
  /* height: 45px; */
  line-height: 45px;
  overflow: hidden;
  box-sizing: border-box;
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
.seller-more {
  /* padding-top: 10px; */
  text-align: center;
  color: #b93321;
  font-size: 12px;
  margin: 0 15px;
  height: 45px;
  line-height: 45px;
}
.seller-more span{
  color: #b93321;
}
.seller-more i {
  width: 12px;
  height: 12px;
  display: inline-block;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAEJklEQVR4Xu3dy1XbQBSA4ZlUQDpQB7HdADt8skpSQUIHpALogBJCB2FpZxPSALgDqwRY58TKEY8DGEnWY0aee+/PGizN/J8eHotj7/gxPQPe9OgZvAOAcQTJAfg9yQ7+evfh6Cb/Y7zNKMNPCsBylp0750/uR14Ut75w349W+cUoM2F0I8kAWM6yM+f86XYHvymOQRBPZzoAptmV8/6waqggMA6gHD4I4iBI5gywmGUn3vnzpmGCIDyCZACUQ1tOswvn/VcQhA9d94pJAQDBeOGftpQcABCMiyBJACAYD0GyAEAwDoKkAYAgPoLkAYAgLgIRAEAQD4EYACCIg0AUABCERyAOAAjCIhAJAAThEIgFAIIwCEQDAMFwBOIBgGAYAhUAQNAfgRoAIOiHQBUAEHRHoA4ACLohUAkABO0RqAUAgnYIVAMAwW4E6gGAoBmBCQAgqEdgBgAIqhGYAgCCtwjMAQDBawQmAYDgGYFZACB4QGAaAAgAcH8UWP6vZPNngKeroVUEAHhxU2wRAQC23hpbQwCAigUySwgAULNMbgUBABo+LLOAAAA7PjLXjgAAu5+ZUL1OAIAWADQvFgGgJQCtCADQAYBGBADoCEAbAgD0AKAJAQB6AtCCAAADAGhAAICBAKQjAEAAAJIRACAQAKkIABAQgEQEAAgMQBoCAEQAIAkBACIBkIIAABEBtEXgNsWX+Sq/jLwrlS8PgBFmfedDJUVxO7/J34+wK282AYCRZn0xzdbe+6xuc/Pr9V5a7GWjI815MptZzLIf3vlvDTt0N79eH+xjhwEQedZbxN/r1+ICICKA1OOXQwdAJAAS4gPAeHwARAAg5ch/GjqXgIAIpMXnDGA8PgACAZB45HMJIP79DHAPMACC5COfM8CA8OWfaojPGaAnAi3xAdADgKb4AOgIQFt8AHQAoDE+AFoC0BofAC0AaI4PgB0AtMcHQAMAC/EBUAPASnwAVACwFB8AWwCsxQfACwAW4wPgEYDV+ABQ9KleiyWNyl8x/TyA5SPf/PMAxH8gYPIMQPznq4E5AMR/fStgCgDx394HmgFA/Or3CSYAEL/+TaJ6AMRvXiFQDYD4u5eH1AIg/u74atcBiN8uvkoAxG8fXx0A4neLrwoA8bvHVwOA+P3iqwBA/P7xxQMg/rD4ogEQf3h8sQCIHya+SADEDxdfHADih40vCgDxw8cXA4D4ceKLAED8ePGTB0D8uPGTBkD8+PGTBUD8ceInCYD448VPDgDxx42fFIDlJPvs3vmfTVPgN8Xx0Sq/GH+a9G4xmYdCl9Psynl/WDfVxI+DUAQA4seJn9YlYJadOedPt4dK/HjxkwJQ7sximl167z89DvnOb4oTrvmGAJRD/TXJJv+cK79HN/+4yvO4w+fVk7kHIMV+ZgAA+5n3ZLb6H7/RWK5gVA+UAAAAAElFTkSuQmCC)
    50% no-repeat;
  background-size: contain;
}
</style>