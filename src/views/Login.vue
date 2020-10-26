<template>
    <div class="login">
        <div class="detail-top">
            <div class="left" @click="$router.go(-1)">
                <i class="left-1"></i>
                <i class="left-2">返回</i>
            </div>
            <div class="shuji">登陆</div>
            <div class="right">
                <!-- <i class="right-book"></i> -->
                <i class="right-home"></i>
            </div>
        </div>
        <!-- <div class="login-moble">
            <div class="login-top">手机登陆</div>
            <div class="login-bottom">
                <form action="">
                    <input type="text" placeholder="请输入用户名">
                </form>
            </div>
        </div> -->
        <div class="logintop">
            <div class="third">
                第三方账号登录
            </div>
            <div class="loginkind">
                <router-link to="/qq" class="loginitem">
                    <span class="qq"></span>
                    <h3>QQ</h3>
                </router-link>
                <router-link to="/qq" class="loginitem">
                    <span class="bd"></span>
                    <h3>百度</h3>
                </router-link>
                <router-link to="/qq" class="loginitem">
                    <span class="wb"></span>
                    <h3>微博</h3>
                </router-link>
            </div>
            <router-link :to="'/loginkj?returnUrl='+$route.query.returnUrl" class="kj">
                酷匠账号登录>
            </router-link>
        </div>
        <div class="k_border"></div>
        <div class="loginbottom">
            <p class="desc">微信扫码关注公众号【酷匠好书】，方便下次阅读</p>
            <img src="http://s.kjcdn.com/groundwork/images/qrcode/kjwx.jpg" alt="" class="qrcode">
            <p class="agree">
                登录即代表您已同意酷匠
                <router-link to="/serve">《服务协议》</router-link>
                和
                <router-link to="/private">《隐私条款》</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {

}

</script>

<style scoped>
.shuji {
    font-size: 14px;
    color: #fff;
    text-align: center;
    width: 50%;
}
/* .login{
    padding-top: 0.92rem;
    max-width: 8rem;
    margin: 0 auto;
    font-size: 0.28rem;
    color: #333;
} */
.detail-top {
    display: flex;
    font-size: 12px;
    background: #b93321;
    height: 44px;
    line-height: 44px;
}
.left {
    width: 25%;
    padding-left: 10px;
    box-sizing: border-box;
    display: flex;
}
.left-1 {
    width: 15px;
    height: 44px;
    display: inline-block;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAD7ElEQVR4Xu3d63XbMAxAYXKyppukmySTtN2o3aQbuMeJfeI4lgiSEAkCN39DypLuZ8mm88iJryFn4HQ6PaeUvuWcfwx5QOGDZOE4hnWcgUv8n5dN/LKEAAAdYSVT7+Jfp5hBAABJxcYxG/FNIQBAY9zStEJ8MwgAUCrZ8H1hfBMIANAQeG9KZfzpCACgCKAx/lQEAFAC0Bl/GgIAKABQin/dk9ec84vCbok2AQDRadoepBz/b0rpKef8r3O3xNMBID5VXweuHv98RABoBOAhPgCCxwdAAwAvz/zroXMLqEDgLT5XgODxASAE4PGZzy2A+G9ngNcAOxA8P/O5AhSuABHicwXYQBAlPgAeAIgUHwB3AKLFB8ANgIjxAXABEDU+AFJKkeOHBxA9fmgAxH+//4VcCST+x6vfcACI//m9bygAxP+68hUGAPEfr3uHAED87U++3AMg/v7Hnq4BEL/8Uy9uARC/HN/tOgDxZfFdAiC+PL47AMSvi+8KAPHr47sBQPy2+C4AEL89/vIAiN8Xf2kAxO+PvywA4uvEXxIA8fXiLweA+LrxlwJAfP34ywAg/jHxlwBA/OPimwdA/GPjmwZA/OPjmwVA/DHxTQIg/rj45gAQf2x8UwCIPz6+GQDEnxPfBADiz4s/HQDx58afCoD48+NPA0B8G/GnACC+nfjDARDfVvzVAfxJKX0f+R+27OXr36PhvxyqfBUAQaeB4QDO+wuCzmqK06cAAIFiwc5NTQMAgs5yStOnAgCBUsWOzUwHAIKOegpTTQAAgULJxk2YAQCCxoKd00wBAEFnzYbp5gCAoKFixxSTAEDQUbRyqlkAIKgs2TjcNAAQNFatmGYeAAgqajYMXQIACBrKCqcsAwAEwqKVw5YCAILKuoLhywEAgaBqxZAlAYCgonBh6LIAQKCDYGkAIOhHsDwAEPQhcAEABO0I3AAAQRsCVwBAUI/AHQAQ1CFwCQAEcgRuAYBAhsA1ABCUEbgHAIJ9BCEAgGAbQRgAIHiMIBQAEHxFEA4ACD4jCAkABB8IwgIAwTuC0ABAAIC3Z0Hkv1kU/gpwvRtGRQCAmxfFEREA4O6tcTQEAHiwQBYJAQA2lsmjIADAzodlERAAoPCRuXcEACj/zITrdQIACAB4XiwCgBCAVwQAqADgEQEAKgF4QwCABgCeEACgEYAXBADoAOABAQA6ARyA4DXn/KKwW6JNAEB0msqDlFYMf+ecn8uPpjcCAHrnsnfFcHj886EDQBFAx+1gSnwAKMe/bq7ydjAtPgAOAlBxJZgaHwAHAhAgmB4fAAcD2EFgIj4ABgB4gMBMfAAMAnCD4Gn0+/zSIf4HnJnqn1/5JcgAAAAASUVORK5CYII=)
        no-repeat;
    background-size: 125%;
    background-repeat: no-repeat;
    background-position: 50%;
}
.left-2 {
    display: inline-block;
    width: 24px;
    height: 44px;
    font-style: normal;
    color: #fff;
    padding-left: 5px;
}
.right {
    width: 25%;
    text-align: right;
    height: 44px;
}
.right-home {
    width: 25px;
    height: 44px;
    margin-right: 10%;
    display: inline-block;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAC2UlEQVRoQ+2ZS6hOURTHf39JKOUxlfKOUkpMFEZSl5tCed0kBl7FNVKUujHFgC4jeRR5xFBSUmZKSvLOjYEBIQlJllaO+nC/c/bZ55z7fW5nTb7B2Xut9dv/dfZeZ39ikJgGCQc1SLspWStSK1LRClRaWmbWBcwFXgC9kr5WxFHdrmVmR4CdDYlfA9ZKel8FTOmKmJn7PAZs7SfhGwnMm7JhSgUxszHAaWBpSqLXgTWS3pUJUxqImY0CLgBLAhK8CWyQ9CpgbNCQUkASiEvA4qCovwY9AZZJ8t/CVhjEzMYBDrEoIpunQIck/y1khUDMbFbyTswukEUf0CnpfgEf8duvmXnyrsTkIgkkc58DKyXdi/UVpUgCcR6YHhu4n3mPgS5Jd2J85gYxsznAGWBGTMCMOR+BTZJc6VyWC8TMOoCzwOhcUfIN/gKsk3Qlz7RgEDNbDpwDhucJEDnWYbyduRo6PwjEzFYkSgwExO/cvcFcL+lyCEwmiJmtBk4OkBJ/5+wwGyX5xpJqTUHMbAiwB9gPDMtyVOHzb8Au4ISkH83ipIF4OV2E+LOmRDgDVqWVWRpIN3CoxGSKutot6XCMImOBHuCDd6rA+KKZRMz3c8V3ypfA8bTWP/Nl9+Bm9gCYGZFI0SmvgWmSPmU5CgXxVntqlrMKnvuX5AJJj7J8/w8gCyU9rEEaV8DMWllatSL/lGOEIt5a3AY+JweqH2gjgfnAiKx6b3juL3vLFLkLbAaeAd8bQIYm3zDeLUwIhGkpSI8k78/6NTPz09l7pxBrKcg2Sb0pIFv8HjiEAmgpyA5JfmXaTJHtwNEapMkKVHGyt7UifhM4JbAcygR56zeYkrxpTbVQRfwCbVKWs+R5mSB+Yz9PkscvBeSWd6FZzioA6ZM0MSRuqCKdwKnA+6x9kg6m7Fp7gQMhyQHdkvyfr0wLAsn00gYDapA2EOGPFGpFakUqWoFBU1o/ASNuD0IW//0zAAAAAElFTkSuQmCC)
        no-repeat 50%;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
}
.logintop,
.loginbottom {
    width: 100%;
    text-align: center;
}
.third {
    width: 80%;
    margin: 0 auto;
    padding-top: 24px;
    position: relative;
    font-size: 15px;
    color: #999999;
    text-align: center;
}
.third::before,
.third::after {
    content: "";
    display: inline-block;
    width: 20%;
    margin: 5px 3%;
    border-bottom: 1px solid #e4e4e4;
}
.loginkind {
    margin: 30px 10px 20px 10px;
    color: #222;
}
.loginitem {
    display: inline-block;
    width: 24%;
}

.loginitem span {
    display: inline-block;
    width: 70px;
    height: 70px;
    background: url("http://s.kjcdn.com/wap/main/images/icon/mine/login.png")
        no-repeat;
    background-size: cover;
}
.loginitem .qq {
    background-position-x: 0;
}
.loginitem .bd {
    background-position-x: -124px;
}
.loginitem .wb {
    background-position-x: -186px;
}
.loginitem h3 {
    line-height: 28px;
    font-size: 14px;
    color: #333;
}
.kj {
        font-size: 24px;
    display: block;
    color: #58b6d8;
    margin: 0 0 20px 0;
    
}
.desc {
    padding: 38px 0 37px 0;
    color: #2b2b2b;
    font-size: 14px;
}
.qrcode {
    width: 124px;
    height: 124px;
}
.agree {
    padding: 40px 0 0 0;
    font-size: 13px;
    color: #bbbbbb;
}
.agree a {
    color: #2b2b2b;
}
</style>