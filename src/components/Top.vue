<template>
    <div class="top">
        <div class="nav">
            <div class="logo"></div>
            <div class="sex">
                <p class="sex-man" :class="{active:msg == 1}" @click="tab(sums[0].sex,sums[0].shu) ;lin(1)">{{sums[0].han}}</p>
                <p class="sex-nv" :class="{active:msg == 2}" @click="tab(sums[1].sex,sums[1].shu) ; lin(2)">{{sums[1].han}}</p>
            </div>
            <router-link class="shujia" to="/bookshelf">
                <!-- <i class="iconfont icon-shujia"></i> -->
            </router-link>
            <router-link to="/login" class="yonghu"></router-link>
        </div>
        <div class="top-search">
            <router-link class="nav-search" to="/search">
                <van-swipe style="height:45px; width:100%" :autoplay="3000" vertical class="van" :show-indicators="false">
                    <van-swipe-item v-for="(font,index) in fonts" :key="index">{{font}}</van-swipe-item>
                </van-swipe>
            </router-link>
        </div>
    </div>
</template>

<script>
import bus from '../router/bus'
export default {
    data() {
        return {
            msg:1,
            // msg: null,
            // sw:false,
            //swiper 字体
             fonts:['天才高手','LOL:打野就变强','权臣的艰辛路','修罗武帝','汉天子'],
            sums:[
              {
                sex:['male','奇幻'],
                han:'男生',
              },
              {
                sex:['female','现代言情'],
                han:'女生',
              }
            ]
        }
    },
    methods: {
        tab(e) {
            bus.$emit('send', e)
            console.log(888,e);
        },
        lin(e){

this.msg=e
        }
    }
}
</script>

<style scoped>
.active{
    background: #fff;
    color:#999
}
/* 循环字体 */
.van {
font-size: 12px;
color: #999;
position: relative;
top: -5px;
left: 15px;
}
.top {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 9;
}
.nav {
    height: 50px;
    background: #b83320;
    line-height: 50px;
    position: relative;
}
.logo {
    position: absolute;
    top: 35%;
    left: 15px;
    width: 78px;
    height: 18px;
    display: inline-block;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAToAAABIBAMAAACU8SQRAAAALVBMVEVHcEz////////////////////////////////////////////////////////NXt0CAAAADnRSTlMA4fGcFXjOJ7Q7WmlLh+5Ft9UAAAOBSURBVGje5ZpNaxNBGMfHJmnaWEPxIl5CDl68hIIHPZUIS/VUetBrqSAeQw5CPYUcRDwF8SaI5Oyh5C7I4lmkX0AwSV82L93PYLKZzO48u7M7MztP3OJz6TJMpj/+O/O8zRKytIYbtiPC2Q06PCYkx0+8IPH2fT6pTfStE0HXzgydGe344a6Ybs2bMFqnM89Jwfs73KID/WtAt3humnqzaekcAV22tUOh241Y1K0G6AjZ4OkI2bx+dBIWoBNZWjon03S42gH7T+iiTsXCtldI5+jTPaYDE2thT44DhqtdJ46u7CZZX3wqTn1v3EJ5s8l0Tqbpzs3QOTh0UxTtQAbV48a+yNOdZZqummm6Nsq+M0V3mmntuuHFbOqNY+gCR74Q6T8N0TVR6IBHEdCJ4ixbckAQ6eqadBuCghaJTjFHWRYt892sRidn6ejYfpxg0hFNutZyzkgxc19LPGaD9HQnyzl/EOnmTxUdukNYW2aKrgN7Grh0PbWqh22HA0S6vi4dW8vOIF2RrVVXrbb95o9nL2M8yoUmXSkUs5XobsGqRJMuOQugiEHXbsdVjHwz2Mu/8r5T65mnG9LlmpJ0ey6INDkXBkYmbCVd1UPLsijtBJGsyP7jwIbu031rnG4q0E5A95H98C7bxzWW89RN010qaRci4Ynv+3RDI3RVJe1Cb9F72+xgDLqG6Y5UtAufAM+e8s0FNqGWmm5HQbu8700eWpYV1bXaCdM981pfGlUP9Uay2u25CZn7Yjt6D1eMTrsmm9kHee02K8l07h1ZOmHvM7hmXV67H64E3cwNsh2oR5cDVZScdjddGbpZCElJtw76i9Jndl++uzjRpgvkaVdExd+1VkHX8unGJrRzjNL94gMZinbjJG8spPPj0aJolM7v9ldBtwsuJKXzOwW6qTZdgw9kqbVzjNIFfnWApd0oVK9I0hUD02ysfadNtwUCGYp2c2fg38e9tgIWX20XotqBpvfdpVw3LUyXgxdl0tqV1bTTolsHgUxeOwW6M126MghkKNrJ3TLF9T6X3U+gnfhrmbLCHaMu3QkIZFA7ZTqj2h2CQJZaO6N0HXiNh6FdX5euAQIZvBFI+kpL6jblXkeTDgYyFLrtUk2Lrii6xjNLR95o0ZVAmxeLjnz++u357weP3r96cbsm/2ZjPyK103+Vyt2FUMtbx59+Utp3M9p/RvcXlN2FjxlfktkAAAAASUVORK5CYII=);
    background-size: 100% 100%;
}
.sex {
    position: absolute;
    top: -9%;
    left: 38%;
    width: 98px;
    height: 29px;
    font-size: 14px;
    color: #fff;
    display: flex;
}
.sex p {
    width: 49px;
    height: 29px;
    line-height: 29px;
    display: inline-block;
    border: 1px solid #fff;
    text-align: center;
}
.sex-man {
    border-top-left-radius: 14.5px;
    border-bottom-left-radius: 14.5px;
}
.sex-nv {
    border-top-right-radius: 14.5px;
    border-bottom-right-radius: 14.5px;
}
.shujia {
    position: absolute;
    right: 15%;
    width: 25px;
    height: 100%;
    line-height: 50px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAKlBMVEVHcEz///////////////////////////////////////////////////+LBpLMAAAADXRSTlMApSzS4boSaI048EtBf5mWRgAAANhJREFUOMvV0z0KwjAYxvGItVqK4AWEro6CqyDSVRB3wQsI7iLoAQQv4OxBvIDgt/DexTchjX3gOYDN8ELz69D+Q4ypwornIicqLdG1YFKzkv2F9H57ySDPZ17S3VA6Qeq6dffS1TEK0tanq5eJjgcVTSRvKnsdTyobHS8qR/c1TJY6blQiOIuyNOw8MHHnt2LStHPLJLFzyiSWcriyGAgHAuFAIBwIhAOBcCAQDgTCgUA4EAgHAuFAIBwIhANx4S5eIvdzxZ3TcJ/iC1J9bRzu6bm/zkxl1xfJoE8h5ybMjAAAAABJRU5ErkJggg==)
        no-repeat 50%;
    background-size: 100%;
}
.yonghu {
    position: absolute;
    right: 5%;
    width: 25px;
    height: 100%;
    line-height: 50px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJ1BMVEVHcEz///////////////////////////////////////////////8NopmKAAAADHRSTlMA1sQO8CSnQW6ZWoSHROfVAAABhklEQVRYw+2Yr0+DMRCGl8HGwELAfGLJFGRi4AADCUFNoAgkiJGAmwCHQGAIZoJAcAgCFofFdCnj1/1RJGRhtGt7710yBPke/+Tr3bXvLSsUcnJcdvabdvZcYtzTNwu4cUx95lBjmX64xoyx+kDpNiBlkX4xLf0I+JlJcrgElFNXeQWUzFUMb0yRxx2rFH2lyip7vvLCKh1feWOVtq/0pA1DWtb0FcsqNMQoFMXBFOUrmqwYpeLCKK6l4vIrnpjmISviQhFKiuhzPmMao4pxzbLQrCTN4vtXnFzNbKzPX+DCykF/LpsPoLE7CCZ7AxnbzuU/BIxVN/zsE2uU/OwzW+IcY4OsPBzj1BK8YugxL1GIWkqpB5WusBKmmk5EiTdtgmIcQQlGUJzdRpV38bmiJysmlCq0JpCdkSUUIy4lUkw5qbSg9c3v8uek8imtPlx/idIEIqDCKGey2UfmP84oa9IeB7v8yCgf0rEEB9NmlB6aR8lkyhjFyBUL/KbmFeLI/2zI+TO+AHPambLIoiO3AAAAAElFTkSuQmCC)
        no-repeat 50%;
    background-size: 100%;
}
.top-search {
    background: #fff;
    height: 40px;
    line-height: 40px;
    padding-top: 5px;
}
.nav-search {
    display: block;
    width: 96%;
    height: 30px;
    background: #e9e9e9;
    margin: 0 auto;
    border-radius: 4px;
}
</style>