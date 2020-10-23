<template>
    <div class="bookshift">
        <detailtop>
            <div class="shuji">我的书架</div>
        </detailtop>
        <div class="bookshift-tab">
            <p class="item">我的书架</p>
            <p class="line"></p>
            <p class="item">阅读记录</p>
        </div>
        <div class="bookList">
            <div class="booklist-top"></div>
            <div class="booklist" v-for="(cont,index) in count" :key="index">
                <router-link class="booklist-right"  :to="'/detail/' + cont.id">
                    <img :src="'http://statics.zhuishushenqi.com' +cont.tu" alt="">
                     <h4 class="booklist-right-title">{{cont.title}}</h4>
                </router-link>
                 <!-- <input type="checkbox" class="ipt" @click="ipt"> -->
                 <button class="ipt" @click="ipt" :data-index="index">删除</button>
            </div>
        </div>
    </div>
</template>

<script>
import detailtop from "../components/Detailtop"
export default {
    components: {
        detailtop
    },
    computed: {
        count() {
            console.log(99, this.$store.state.count);
            return this.$store.state.count

        }
    },
    methods:{
        ipt(e){
console.log(e.target.dataset.index);
var index=e.target.dataset.index
this.$store.commit('ipt',index)
        }
    }
}
</script>

<style scoped>
.shuji {
    font-size: 14px;
    color: #fff;
    text-align: center;
    width: 50%;
}
.bookshift-tab {
    display: flex;
    height: 50px;
    line-height: 50px;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #fff;
    font-size: 14px;
    color: #999;
}
.bookshift-tab p {
    margin: 0;
    text-align: center;
}
.line {
    width: 1px;
    height: 10px;
    margin: 2px;
    background: #dfdfdf;
}
.item {
    width: 48%;
}
.booklist{
    display: flex;
     width: 100%;
    padding: 15.8px 15.8px 15.8px 15px;
    position: relative;
}
.booklist-right{
    width: 70%;
    display: flex;
}
.booklist-right img{
    width: 18%;
}
.booklist-right-title{
    margin: 0 0 0 5%;
    font-size: 14px;
    color: #333;
}
.ipt{
   font-size: 14px;
    position: absolute;
    top: 38%;
    right: 10%;
    flex: 1;
    width: 11%;
    height: 25%;  
}
</style>