<template>
    <div class="vip">
        <div class="po">
            <detailtop>
            <div class="shuji">VIP书库</div>
        </detailtop>
        </div>
        
        <div class="vip-top">
            <div class="filter-item">
                <ul class="kind-item">
                    <li :class="{corlorchange:index==sexflag}" @click="sexclick(index)" v-for="(gender,index) in genders" :key="index">{{gender}}</li>
                </ul>
            </div>
            <div class="filter-item">
                <ul class="kind-item">
                    <li :class="{corlorchange:index1==majorflag}" @click="getdata(val1,index1)" v-for="(val1,index1) in major" :key="index1">{{val1.major}}</li>
                </ul>

            </div>
            <div class="filter-item">
                <ul class="kind-item">
                    <li :class="{corlorchange:index1==yt}" @click="mins(val1)" v-for="(val1,index1) in booklists" :key="index1">{{val1}}</li>
                </ul>
            </div>
        </div>
       <div class="op">
            <router-link class="seller-clearfix" v-for="(msg, index) in bookitem" :key="index" :to="'/detail/' + msg._id">
            <div class="seller-img" :to="'/detail/' + msg.id">
                <img :src="'http://statics.zhuishushenqi.com' + msg.cover" alt="" />
            </div>
            <div class="seller-right">
                <span>{{ msg.title }}</span><i>完结</i>
                <p class="seller-desc">{{ msg.shortIntro }}</p>
            </div>
        </router-link>
       </div>
    </div>
</template>
<script>
import detailtop from '../components/Detailtop'
export default {
    components: {
        detailtop
    },
    data() {
        return {
            genders: ['男生', '女生', ],
            booklists: [],
            type: 'hot',
            sexkinds: [], //控制三大类的数据
            sexflag: 0,//控制性别
            sextype: 'male', //默认男生
            major: '',
            majorflag: 0,
            two: '玄幻',
            three: '东方玄幻',
            bookitem: [],
            yt:0
        }
    },
    methods: {
        // sexclick(i){
        //     this.sexflag = i
        //     if (i == 0) {
        //         this.sextype = 'male'
        //     } else if (i == 1) {
        //         this.sextype = 'female'
        //     } else {
        //         this.sextype = 'press'
        //     }
        // },
        // getdata(i,t){
        //     this.axios.get('api/cats/lv2').then(res=>{
        //         console.log(888,res);
        //     })
        // },
        sexclick(i) {
            this.sexflag = i
            if (i == 0) {
                this.sextype = 'male'
            } else  {
                this.sextype = 'female'
            }
            // } else {
            //     this.sextype = 'press'
            // }
            this.getdata(this.major[0].major, 0)
            this.two=this.major[0].major
           
            this.mins(this.booklists[0])
             this.three=this.booklists[0]
            // console.log(this.booklists[0]);
            // console.log(this.booklists[0]);
        },
        // 控制分类
        getdata(i, t) {
            console.log(7474, i, t);
            this.majorflag = t
            //  this.two =i.major
            console.log();
            this.axios.get('api/cats/lv2').then(res => {
                console.log(5858, res);
                this.sexkinds[0] = res.data.male
                this.sexkinds[1] = res.data.female
                // this.sexkinds[2] = res.data.press
                this.major = this.sexkinds[this.sexflag]
                this.booklists = this.major[this.majorflag].mins
                console.log(5252, this.booklists)
                this.mins(this.booklists[t])
            }).catch(err => {
                console.log(err);
            });
            this.two = i.major

        },
        mins(i,t) {
            this.three = i
            this.yt=t
            this.axios.get('api/book/by-categories?gender=' + this.sextype + '&type=' + this.type + '&major=' + this.two + '&minor=' + this.three + '&start=0&limit=20').then(res => {
                console.log(45, res.data);
               this.bookitem = res.data.books
            }).catch(err => {
                console.log(err);
            })
        }

    },
    // mounted(){
    //     this 
    // }
    mounted() {
        this.axios.get('api/cats/lv2').then(res => {
            console.log(5858, res);
            this.sexkinds[0] = res.data.male
            this.sexkinds[1] = res.data.female
            this.sexkinds[2] = res.data.press
            this.major = this.sexkinds[this.sexflag]
            this.booklists = this.major[this.majorflag].mins
            console.log(this.major);
            console.log(5252, this.booklists)
            this.axios.get('api/book/by-categories?gender=' + this.sextype + '&type=' + this.type + '&major=' + this.two + '&minor=' + this.three + '&start=0&limit=20').then(res => {
                console.log(4545, res.data);
                this.bookitem = res.data.books
                console.log(7575,this.bookitem);
            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        });
    }
}
</script>

<style scoped>
.corlorchange{
    color: #58B6d8;
}
.po{
    position: fixed;
    width: 100%;
}
.vip {
    position: relative;
}
.shuji {
    font-size: 14px;
    color: #fff;
    text-align: center;
    width: 50%;
}
.vip-top {
    position:fixed;
    top: 44px;
    left: 0;
    width: 100%;
    color: #666;
    background: #fff;
    z-index: 100;
    font-size: 13px;
}
.filter-item {
    line-height: 43px;
    overflow: hidden;
}
.kind-item {
    overflow-x: auto;
    display: flex;
}
.kind-item li {
    padding: 0 10px 0 14px;
    flex-grow: 0;
    flex-shrink: 0;
}
.op{
    background-color: #f5f2ed;
    padding-top: 173px;
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