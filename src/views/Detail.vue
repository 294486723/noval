<template>
    <div class="detail">
        <detailtop>
            <div class="shuji">书籍详情</div>
        </detailtop>
        <div class="book-detail">
            <img :src="'http://statics.zhuishushenqi.com' + msgs.cover" alt="" />
            <div class="book-right">
                <h1>{{ msgs.title }}</h1>
                <div class="right-author">
                    <span class="author"> {{ msgs.author }}</span><i>|</i> <span>{{ msgs.majorCate }}</span><i>|</i>
                    <span>{{ msgs.wordCount }}万字</span>
                </div>
                <p>完结</p>
            </div>
        </div>
        <div class="read-link">
            <div class="link-top">
                <button class="join-book" @click="join">加入书架</button>
                <button class="ready-read">开始阅读</button>
            </div>
            <div class="link-bottom"><span>开通VIP ， 免费阅读此书</span></div>
        </div>
        <div class="reader-data">
            <ul class="reader-item">
                <li>
                    <span>追人气</span>
                    <span class="item-cont">{{ msgs.latelyFollower }}</span>
                </li>
                <li>
                    <span>读者留存率</span>
                    <span class="item-cont">{{ msgs.retentionRatio }}</span>
                </li>
                <li>
                    <span>日更字数/天</span>
                    <span class="item-cont item-day">{{ msgs.postCount }}</span>
                </li>
            </ul>
        </div>
        <div class="introduction">
            <p>{{ msgs.longIntro }}</p>
        </div>
        <router-link class="inner-zhang" :to="'/catalog/' + msgs.id">
            <div class="inner-mu">目录</div>
            <div class="inner-right">
                <span>{{ msgs.lastChapter }}</span>
                <i></i>
            </div>
        </router-link>
        <div class="hot-comment">
            <div class="hot-commmont-top">
                <h2>热门书评</h2>
            </div>
            <div class="hot-inner">
                <img src="http://statics.zhuishushenqi.com/avatar/6e/da/6eda1c0a11554b8fe749870cd4d9e579" alt="" />
                <div class="hot-right">
                    <p class="right-name">茶靡</p>
                    <p class="right-title">痴心女人傻男人</p>
                    <p class="right-score">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </p>
                    <p class="right-content">
                        其实我不太爱看虐文，我比较感性，有些描写稍微惨一点我可能都会哭。但是这本小说我完整的看完了。
                        简童，上海滩最优秀骄傲的大小姐。学历，家庭，颜值都足够有傲视天地的资本。就因为一次一眼万年的相遇，把简童多年来的骄傲打入尘埃。当我全心全意爱你的时候，我在你眼中一文不值。因为误会男主一次次伤害女主，一次次毁了女主的骄傲，一次次失去了女主的心。我讨厌女主这样作贱自己，讨厌男主被迷雾遮住了眼，看不透自己的心。
                        结局我不知道是幸运还是不幸，一次次的伤害，一次次往自己的刚刚结疤的伤口上撒盐，身心应该总是会有阴影。结局两人有情人终成眷属，但是我觉得迟了。一次次的伤害没那么容易痊愈。
                    </p>
                    <div class="right-love">
                        <span>4天前</span>
                        <p class="right-love-you">0人觉得有用</p>
                    </div>
                </div>
            </div>
            <div class="hot-inner">
                <img src="http://statics.zhuishushenqi.com/avatar/6e/da/6eda1c0a11554b8fe749870cd4d9e579" alt="" />
                <div class="hot-right">
                    <p class="right-name">茶靡</p>
                    <p class="right-title">痴心女人傻男人</p>
                    <p class="right-score">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </p>
                    <p class="right-content">
                        其实我不太爱看虐文，我比较感性，有些描写稍微惨一点我可能都会哭。但是这本小说我完整的看完了。
                        简童，上海滩最优秀骄傲的大小姐。学历，家庭，颜值都足够有傲视天地的资本。就因为一次一眼万年的相遇，把简童多年来的骄傲打入尘埃。当我全心全意爱你的时候，我在你眼中一文不值。因为误会男主一次次伤害女主，一次次毁了女主的骄傲，一次次失去了女主的心。我讨厌女主这样作贱自己，讨厌男主被迷雾遮住了眼，看不透自己的心。
                        结局我不知道是幸运还是不幸，一次次的伤害，一次次往自己的刚刚结疤的伤口上撒盐，身心应该总是会有阴影。结局两人有情人终成眷属，但是我觉得迟了。一次次的伤害没那么容易痊愈。
                    </p>
                    <div class="right-love">
                        <span>4天前</span>
                        <p class="right-love-you">0人觉得有用</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="hobby">
            <div class="hobby-top">
                <h4>你可能感兴趣</h4>
                <!-- <span class="hobby-more" >更多</span> -->
                <router-link class="hobby-more" to="/hobby">更多</router-link>
            </div>
            <ul class="hobby-img">
                <router-link class="hobby-list" v-for="(sum, index) in sums.slice(0, 4)" :key="index" :to="'/detail/' + sum._id">
                    <img :src="'http://statics.zhuishushenqi.com' + sum.cover" alt="" />
                    <p>{{ sum.title }}</p>
                </router-link>
            </ul>
        </div>
        <div class="book-copyright">
            <h2>版权信息</h2>
            <div class="copyright-desc">第三方</div>
        </div>
        <foot></foot>
    </div>
</template>

<script>
import detailtop from "../components/Detailtop";
import foot from "../components/Foot"
export default {
    name: "detail",
    components: {
        detailtop,
        foot
    },
    data() {
        return {
            msgs: [],
            sums: [],
            nums: [],
        };
    },
    watch: {
        $route: {
            handler(to) {
                console.log(1111, to);
                this.axios
                    .get("/api/book/" + this.$route.params.id)
                    .then((res) => {
                        console.log(res.data);
                        this.msgs = res.data;
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                this.axios
                    .get(
                        "/api/book/by-categories?gender=male&type=hot&major=玄幻&minor=&start=0&limit=4"
                    )
                    .then((res) => {
                        this.sums = res.data.books;
                        console.log(this.sums);
                    })
                    .catch((err) => {
                        console.log(err);
                    });

            },
            immediate: true,
        },
    },
    methods: {
        join() {
            this.$store.commit('join',{
              tu:this.msgs.cover,
            title:this.msgs.title,
            id:this.msgs._id
            })
        }
    },
};
</script>

<style scoped>
.detail {
    background: #f4f4f4;
}
.shuji {
    font-size: 14px;
    color: #fff;
    text-align: center;
    width: 50%;
}
.book-detail {
    background: #fff;
    padding: 20px;
    height: 127px;
    display: flex;
    box-sizing: border-box;
}
.book-detail img {
    width: 65px;
}
.book-right {
    flex: 1;
    padding-left: 20px;
}
h1 {
    font-size: 16px;
    color: #222;
    margin: 0;
}
.right-author {
    font-size: 12px;
    color: #999;
}
.right-author i {
    padding: 0 10px;
}
.book-right p {
    margin: 0;
    font-size: 12px;
    color: #999;
}
.read-link {
    width: 100%;
    background: #fff;
    padding: 0 20px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #ebebeb;
}
.link-top {
    font-size: 16px;
    display: flex;
}
.join-book {
    width: 150px;
    display: inline-block;
    color: #b93321;
    background: #fff;
    margin-right: 16px;
    height: 44px;
    border: 1px solid #b93321;
    border-radius: 2px;
    text-align: center;
}
.ready-read {
    width: 150px;
    display: inline-block;
    background: #b93321;
    color: #fff;
    margin-left: 16px;
    height: 44px;
    border: 1px solid #b93321;
    border-radius: 2px;
    text-align: center;
}
.link-bottom {
    margin: 20px 0 0;
    color: #ff9a57;
    font-size: 14px;
    text-align: center;
}
.reader-data {
    background: #fff;
    padding: 20px 0;
    box-sizing: border-box;
    color: #222;
    height: 84px;
    border-bottom: 1px solid #ebebeb;
}
.reader-item {
    display: flex;
    box-sizing: border-box;
}
.reader-item li {
    text-align: center;
    width: 33%;
}
.reader-item li span {
    display: block;

    font-size: 12px;
    color: #999;
}
.reader-item .item-cont {
    margin: 5px 0 0;
    font-size: 16px;
    color: #222;
}
.reader-item .item-day {
    font-size: 12px;
    color: #999;
}
.introduction {
    background: #fff;
    padding: 20px;
    font-size: 13px;
    color: #222;
    line-height: 25px;
    box-sizing: border-box;
}
.introduction p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    margin: 0;
    overflow: hidden;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
}
.inner-zhang {
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 20px 10px 20px 20px;
    box-sizing: border-box;
    border-top: 1px solid #f4f4f4;
}
.inner-mu {
    color: #333;
    padding-top: 5px;
    font-size: 14px;
}
.inner-right {
    color: #999;
    display: inline-block;
    /* float: right; */
    font-size: 12px;
}
.inner-right i {
    /* float: right; */
    height: 20px;
    width: 20px;
    display: inline-block;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAENklEQVR4Xu3dzW0TURTF8feClHXowIvYYukFyTolQAWYEqgASoAKCB3QAVnHkWAb2xIpwTTghybgKB8zztzxfNx3zvEO8oJ87//Hk5PNxKAX9QYi9fQaPggAOQIBEADyDZCPrxtAAMg3QD6+bgABIN8A+fi6AQSAfAPk4+sGEADyDZCPrxtAAMg3QD6+bgABIN8A+fi6AQSAfAPk4+sGEADyDZCPrxtAAMg3QD6+bgABIN8A+fi6AQSAfAPk4+sGEADyDZCPrxtAAMg3QD6+bgABIN8A+fi6AQSAfAPk4z+5ASaT03cxpVmKcb3ZbL6sVlcX5DvKdvyiZQjhzf8Bvi0Wl98fD/MAwGR88jXGOLt/aJPS++Vyfp7tFkjfeFnLsNl8uF5dfb6/kjsA4/HJ9CDGn2X7EoK8FJXGDyGklNaL5fxlKYDj49dnLw4OflSNKgR5IKiKv33314vLB7f+3R9ejaajdHj4e9eYQuAbwXPxU0p/Fsv5UekNUPzlZHL6KYbwUQh8hy57d8/FL74nhfD28QfBpz8FjE/OY4zFp8fKl24CX0DqxK9qVvqLoIkQ+Cq8493sE7/4Zyt/EygE/g3sG38ngNvPBLoJ3CpoI/6zAITAZ/+24tcCIAS+ELQZvzYAIfCBoO34JgBCMCyCLuKbAQjBMAi6it8IgBD0i6DL+I0BCEE/CLqOvxcAIegWQR/x9wYgBN0g6Ct+KwCEoF0EfcZvDYAQtIOg7/itAhCC/RAMEb91AELQDMFQ8TsBIAQ2BEPG7wyAENRDMHT8TgEIwW4EHuJ3DkAIyhF4id8LACF4iMBT/N4ACME/BN7i9wqAHYHH+L0DYEXgNf4gANgQeI4/GAAWBN7jDwoAHUEO8QcHgIogl/guAKAhyCm+GwAoCHKL7wpA7ghyjO8OQK4Ico3vEkBuCHKO7xZALghyj+8agHcECPHdA/CKACV+FgC8IUCKnw0ALwjQ4mcFYGgEiPGzAzAUAtT4WQLoGwFy/GwB9IUAPX7WALpGwBA/ewBdIWCJDwGgbQRM8WEAtIWALT4UgH0RMMaHA9AUAWt8SABWBMzxYQHURRBSuggxnhXnq17oT0eBfnRsnecdMMeHvgG2YZsiQP+fv90P9A3QFAFLfIobwIqAKT4VgDofDNni0wHYhYAxPiWAWwT3npBaPE41xDgre7T6rp8QUL5G8SGwKtZoND26ufm1RonZZA5qAE0WhvY9AoBW1DiPABgXhnZcANCKGucRAOPC0I4LAFpR4zwCYFwY2nEBQCtqnEcAjAtDOy4AaEWN8wiAcWFoxwUArahxHgEwLgztuACgFTXOIwDGhaEdFwC0osZ5BMC4MLTjAoBW1DiPABgXhnZcANCKGucRAOPC0I4LAFpR4zwCYFwY2nEBQCtqnEcAjAtDOy4AaEWN8wiAcWFoxwUArahxnr+aEMOu5NitsQAAAABJRU5ErkJggg==) -10%
        no-repeat;
    background-size: 60%;
    transform: rotate(-90deg);
}
.hot-comment {
    background: #fff;
    margin-bottom: 10px;
}
.hot-commmont-top h2 {
    padding: 0 20px;
    font-size: 14px;
}
.hot-right {
    padding-left: 15px;
}
.hot-inner {
    display: flex;
    padding-left: 20px;
    font-size: 12px;
    border-bottom: 1px solid #ebebeb;
}
.hot-inner p {
    margin: 0;
}
.hot-inner img {
    width: 35px;
    height: 35px;
    border-radius: 35px;
}
.right-name {
    color: #a58d5e;
}
.right-title {
    color: #000;
}
.right-score {
    padding: 6.5px;
}
.right-score i {
    width: 12px;
    height: 12px;
    display: inline-block;
    background: url(data:image/png;base64,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)
        50% no-repeat;
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: 0;
}
.right-content {
    height: 40px;
    line-height: 20px;
    color: #999;
    overflow: hidden;
}
.right-love {
    font-size: 12px;
    color: #999;
}
.right-love-you {
    float: right;
}
.hobby {
    width: 100%;
    background: #fff;
    margin-bottom: 10px;
}
.hobby-top {
    height: 45px;
    line-height: 45px;
    padding: 0 15px;
    font-size: 14px;
    color: #222;
    display: flex;
    justify-content: space-between;
}
.hobby-top h4 {
    display: inline-block;
    margin: 0;
}
.hobby-more {
    color: #b93321;
    font-size: 12px;
}
.hobby-img {
    display: flex;
    box-sizing: border-box;
}
.hobby-list {
    font-size: 12px;
    color: #333;
    width: 90px;
    padding: 0 15px;
    box-sizing: border-box;
}
.hobby-list img {
    height: 80px;
}
.hobby-list p {
    height: 35px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
}
.book-copyright {
    background: #fff;
    padding: 0 20px;
    box-sizing: border-box;
}
.book-copyright h2 {
    margin: 0;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #222;
}
.copyright-desc {
    font-size: 12px;
    color: #999;
    padding-bottom: 10px;
    box-sizing: border-box;
}
</style>