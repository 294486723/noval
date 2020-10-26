<template>
    <div class="search">
        <detailtop>
            <div class="shuji">搜索</div>
        </detailtop>
        <div class="page-search">
            <div class="page-one">
                <van-search class="search-mo" v-model="vvalue" placeholder="请输入搜索关键词" @input="ipt" />
                <ul class="search-item">
                    <li v-for="ipt in iptval" :key="ipt">
                        <p>{{ipt}}</p>
                    </li>
                </ul>
                <span class="search-que">确定</span>
            </div>
            <div class="serch-tui">
                <div class="tui-title">热门推荐</div>
                <div class="tui-list" v-for="font in fonts" :key="font">
                    <div class="tui-item">{{font}}</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import detailtop from "../components/Detailtop"
export default {
    data() {
        return {
            vvalue: null,
            iptval: '',
            fonts:['天才高手','LOL:打野就变强','权臣的艰辛路','修罗武帝','汉天子'],
        }
    },
    methods: {
        ipt() {
            this.axios.get('api/book/auto-complete?query=' + this.vvalue).then(res => {
                console.log(111, res);
                this.iptval = res.data.keywords
                
            }).catch(err => {
                console.log(err);
            })
        }
    },
    components: {
        detailtop
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
.page-search {
    background: #fff;
    padding: 16.5px 16.5px 0;
    width: 100%;
}
.page-one {
    display: flex;
    align-items: center;
}
.van-search {
    width: 80%;
    padding: 0;
}
.van-search__content {
    width: 80%;
    background: #ebebf0;
    border-radius: 15px;
}
.search-que {
    margin-left: 5%;
    display: block;
    font-size: 15px;
    color: #748389;
}
.search-item {
   width: 100%;
    position: absolute;
    top: 15%;
    left: 0;
    font-size: 17px;
    color: #222;
    background: #fff;
    padding-left: 10%;
}
.serch-tui{
    margin-top:14px ;
}
.tui-title{
    font-size: 22px;
    color: #6b6b6b;

}
.tui-item{
    float: left;
    padding:0 10px ;
    margin:10px 10px 0;
    height:30px ;
    background: #efeff4;
    line-height:30px ;
    font-size:12px ;
    color: #9b9ba3;
    border-radius:15px ;
}
</style>