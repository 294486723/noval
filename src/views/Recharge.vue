<template>
    <div class="recharge">
        <detailtop>
            <div class="shuji">充值</div>
        </detailtop>
        <div class="page-pay">
            <div class="pay-title">请选择充值方式</div>
            <div class="li">
                <div class="weixin"></div>
                <div class="li-ringht">
                    <div class="name">微信
                        <span class="tuijian"></span>
                    </div>
                    <div class="desc">推荐安装微信6.0.2及以上版本用户使用</div>
                    <i class="select" v-show="msg!=1" @click="select(1)"></i>
                    <i class="select-liang" v-show="msg==1"></i>
                </div>
            </div>
            <div class="li">
                <div class="zhifubao"></div>
                <div class="li-ringht">
                    <div class="name">支付宝
                        <!-- <span class="tuijian"></span> -->
                    </div>
                    <div class="desc">数亿用户都在用，安全可托付</div>
                    <i class="select" v-show="msg!=2" @click="select(2)"></i>
                    <i class="select-liang" v-show="msg==2"></i>
                </div>
            </div>
            <div class="pay">
                <div class="pay-title">请选择充值金额</div>
                <div class="value">
                    <div class="pay-block">
                        <p>30元</p>
                        <p>3000追书币</p>
                    </div>
                    <div class="pay-block">
                        <p>50元</p>
                        <p>5000追书币</p>
                        <p>+3500追书券</p>
                        <p class="gift-bg"></p>
                        <p class="gift-value">
                            <span>送70%</span>
                        </p>
                    </div>
                    <div class="pay-block">
                        <p>100元</p>
                        <p>10000追书币</p>
                        <p>+8000追书券</p>
                        <p class="gift-bg"></p>
                        <p class="gift-value">
                            <span>送80%</span>
                        </p>
                    </div>
                    <div class="pay-block">
                        <p>200元</p>
                        <p>20000追书币</p>
                        <p>+20000追书券</p>
                        <p class="gift-bg"></p>
                        <p class="gift-value">
                            <span>送1000%</span>
                        </p>
                    </div>
                </div>

            </div>
            <div class="explain">
                <p>说明:</p>
                <p>1、1元 = 100个追书币</p>
                <p>2、所充值金额暂不支持退款或提现，</p>
                <p>客服时间：周一至周日00:00-24:00</p>
                <a href="" class="tip">
                    
						任何问题都可以来找我哦～
					
                </a>
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
    data() {
        return {
            msg: 1
        }
    },
    methods: {
        select(val) {
            if(this.msg==val){
                this.msg=1
            }else{
                this.msg=val
            }

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
.page-pay {
    font-size: 12px;
    background: #f4f4f4;
    padding: 12.5px 15px 30px;
}
.pay-title {
    color: #999;
    font-size: 14px;
}
.li {
    padding: 17.5px 0px;
    color: #222;
    position: relative;
    height: 75px;
    box-sizing: border-box;
    display: flex;
}
.weixin {
    position: absolute;
    display: inline-block;
    width: 40px;
    height: 40px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc1OTBDOTcwOUE3QTExRTY4NTc3RkYyRTcyN0YzMEM3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc1OTBDOTcxOUE3QTExRTY4NTc3RkYyRTcyN0YzMEM3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzU5MEM5NkU5QTdBMTFFNjg1NzdGRjJFNzI3RjMwQzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzU5MEM5NkY5QTdBMTFFNjg1NzdGRjJFNzI3RjMwQzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4/XTl5AAALhElEQVR42uxd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)
        no-repeat;
    background-size: 100%;
    background-position: 50%;
}
.li-ringht {
    width: 100%;
    position: relative;
    height: 100%;
    margin-left: 50px;
    padding: 2px 0;
}
.name {
    color: #222;
    font-size: 14px;
}
.tuijian {
    display: inline-block;
    width: 22.5px;
    height: 10px;
    margin-left: 7.5px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAATCAYAAAAEaoRHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBDM0IyQjM5OTFERDExRTY4MEQwQjI1NjRDRENFQTYwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBDM0IyQjNBOTFERDExRTY4MEQwQjI1NjRDRENFQTYwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEMzQjJCMzc5MUREMTFFNjgwRDBCMjU2NENEQ0VBNjAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEMzQjJCMzg5MUREMTFFNjgwRDBCMjU2NENEQ0VBNjAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5yrXZ2AAAFR0lEQVR42sxXa2wUVRT+5rGzj75bSqt9SAu2FGoiokVINRiJpL7wAT/ERAgqEpGfxiCRf0YaYzAxIaKYKCQiJIqVhITEiDGp0kqhFGIsYmlr3w+obLe73Zm54zd32qTW3W7915uezN7de+ee853vfOdWiXy5FAlGGe0QbS1NxcIYJu0sbZeeZMEvtAIsvPECLSMRip+ldFhRAMeBEx0CRJxzxu4IOJNjfNrEJMKn5a371z4eJ0w4sVFOHG/Op5zze2+ecjw+e1UdbUfKbYKOqRq0/PsBXybPjcExw1AzSqEE8gB/Npz4uOsl/zQZiBMdhjPeI51Tsyulo+7cid2Uczd4Oec6F4A5ApjU9j2fOz0J0ppo/rlRVokoD9L8CGw8DdH/E6yuC9DLHoP/4U9hXjqIwIZjUPxZMH9vgOKEoQQXQy96hM9CaGWb4K85AGeiB0qogIGv5r6PZeYUPQgt7x4GMgLYUS/g/47YTE4fdfmSEmWbdDCyoGRVADxEyVjC7wj46nekE0rIRXEIevkW2KNtZAiDjN+GXrlNZkjJLIeSXgR92YsyW9BDUNKKOd8Kp7AW0AIQ59+EIOJu4Alxm1KPZ2in5kMoMd5LVDfBWLUXam417IFGiFtXoN+9DXb3GShGJgNaxlT/5dGInI03vQUxMcgk+RhdOvzrPoT522HYvd8z6BL4qnbBuvENnLF2BpHm1UPyEXadJikxMEWP1MPlJ1Op0TFj7Qcw2z+nEwfhhLsQPrREZjRtx2XEf90P82KDfKteWgOj9iMmdkSmXCvZCDHYTAA6iawhC1rx50jUYU5w7z7WSETSJZnTfDOenrfoqAYP6yZXbQSeOAvr2jGoi+6jY3Wwb16RRaTduR7O7Q6IMJ2KjyHeWg+FBevEwwg+1wzrj2MSWS3/Aa/oXCyiA54CkUpitNXjc+JiDOv/y2Ep8VSJ0B3QiZaWdy+U6kxYf56UDorec0xEVBaXYAA2i1SiZY7D7GhH8NkjgBXB5A+7WXz1pBeLjjXi/H0dvuo3yPUSRBtqWaQD/FzqyWKC4Tr9M23dfH0WkX74VrzKwtsPR9VhXT9B5LugMwPWjVNS+nwrd8MevsBgTlAxCojiCAJ19fAtfxl23zn5nnjTXgJLZCnP/jVvk/MDMBv3wO5phJpV7KHsan6SQizhs3veSLucpv6q1GL/o8cRO1Mnm0hoSxvsEaZVWFCJtBPpJWL9TPVlacaaA7A6G+Rau/M7qsl2ok5Zo3Tq5ZtlQdt9P0LNqaJsvsfMkYJGRlJ6sMzxGu3wvJzmIYj0EaU4aeeXKXWlT4xeRezbWtkg07a2kMfvw2z7ihLILQU1iJ6shFb6FPTlO2HFjkAMNVMkomxGOcxUDQSddsh/MXKJuMQItJ7UhelfPpnq6+tT88P0tDVUKFMvm42rqRl3wXiwXh7oFqZvxU6omUuldlvXjjILY9BXlrMeCmAPNkEMt1CLLapQHte+Tpodh9Xbyt91qduuNCajx8xwNtOGUt3qHKKsFW+Q3U9QqsQQD1q8SgagBPOhkB7mxXdlA1KzKzzNpfYqxox3xPhzzR6i/gpVJd0rYnJayyuSzWWahkmb8qyr6Uu0L+buiDHpoErlsIeZ4nAfP1fJFm11fO0V/Kx7ksoOCFUlFZidQC73XWWxlUr1cJ1zuQxKnXtnmZbAOcaEkuA+fZr2ZPIwmRx7wrvYECUluIgHhuV9QaZVepxAqshReQuk5LltHJPcE78l7xzyWuA6LKx5SUEip90LE8OGgYU5zicq0UnaQ1P/uVQsIGdd3rTQtv8jwABvTEO4Nj5K8wAAAABJRU5ErkJggg==)
        no-repeat;
    background-size: 100%;
    background-position: 50%;
}
.desc {
    color: #999;
    font-size: 12px;
}
.select {
    position: absolute;
    right: 0px;
    top: 9px;
    display: inline-block;
    width: 22px;
    height: 22px;
    border: 1px solid #ddd;
    border-radius: 50%;
    padding: 1px;
}
.select-liang{
     position: absolute;
    right: 1px;
    top: 10px;
    display: inline-block;
    width: 22px;
    height: 22px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIzRDlBODQxOTFERDExRTZCMUMxOEY2MzVFMTEyRTIyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIzRDlBODQyOTFERDExRTZCMUMxOEY2MzVFMTEyRTIyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjNEOUE4M0Y5MUREMTFFNkIxQzE4RjYzNUUxMTJFMjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjNEOUE4NDA5MUREMTFFNkIxQzE4RjYzNUUxMTJFMjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7dPlAzAAADN0lEQVR42syZTUgUYRjHn5ldY13dLTApOhSyqGFSSoEXUYLMCCJYhKSiskMhEV36tIiKFC9BIGUiFARlB/smSgsilboVinWIOnSr7KRFmtH2f3aflRp213d2ZnbmDz+Fdd95f4zvzPvMM9rk7iqykAJQC+pBBSgDS0Ch/P07+ALeg3dgCAyDH9lOqGUhrIFG0AK2gHyT43+Ch+AaGAAxJ4Wj4DRYQ/ZkFJwB91QH6Irfi4BBcNtGWZJj3ZVjR+wS3gZegwZyLg0yR7MVYV6r58EtECbnw3P0yZyaWWEe0AVOUu7Dc3ank04n3AEOkHvZLw5Kd4lm+dd4IduNLkbhiCz+sEeEp0A1+JhuSXR7SJYTEqeUazjq8K3Lyi0valwSfEW+sXlTsDNjgEVjyTO80cOynNVSv8wtiRY3LHxl1aQFQ6pf35MU5hJxa85lV9VQ/uHLlH+0R1WaHQt0qWcDOZc9dJG0BQHyrVhJ/qo6lWHsWKtL8e2KLMViNNN3gWZfPlIdXs/ClW7K/hq8YeYQlSxcamaEvryc9GUlbshySlm42Ixs8MgVCh7rNSVtkyynWJftTyl5NY2khRaRtrBIWdpG2fhWrZv59kx/F80+709skQrSNsvO1RJTyt/GpNPXO5SknZBlVxaeMDVEQdohWc6E70TVUt6jy82O/D02QjpkfSUVpAWClLduAz4bjl+YDslyXvnxY1waIpTNmY5fjOubEmf6eC/2owKnZDnjurSPsotxeYSLnJTlDHE9zMXPN0v1hKZRYFdb/Ew7KDsNFvulMXdfGiaWzjT//vP5kxOynAfsmnzi2AQek7ezmR2TG8eAPIZ4Nez25N8nDm55nvWw8Dlx/O+p+Q546kHZZ5TomqbsS7Sa2qpz00hpzdRb4w7LPg8Jc4/tQyZhDrdXOz0g20kpenzpyss2cMlF2R5xIFVhviIPgnYXZNtl3cbMCCelT4EdYDIHojzHTpkzlqmAny83wVq5vTh56+I55t3TVR+R+ErlLmKTzTviqByzwXg3SFtnWXixuFfqaLNVHldd/GLxKuXgxaIxhdLqqpOGDPc4jK9uv1Li1e1b8AKMyOdZ5a8AAwBD1RaOssj7GAAAAABJRU5ErkJggg==) no-repeat;
    background-size: 100%;
    background-position: 50%;
      padding: 1px;
}
.zhifubao {
    position: absolute;
    background: url(https://m.zhuishushenqi.com/image/96ebd44848e3.zhifubao.png)
        no-repeat;
    display: inline-block;
    width: 40px;
    height: 40px;
    background-size: 100%;
    background-position: 50%;
}
.pay {
    margin: 12.5px 0 0;
}
.value {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.pay-block {
    margin-top: 5%;
    width: 47.5%;
    height: 120px;
    border: 1px solid #b93321;
    border-radius: 4px;
    color: #b93321;
    text-align: center;
    box-sizing: border-box;
    padding-top: 25px;
    position: relative;
}
.pay-block p:first-child{
    margin: 0;
    font-size: 28px;
    line-height: 34px;
    font-weight: 600;
}
.pay-block p{
    margin: 0;
    font-size: 14px;
    line-height: 18px;
}
.gift-bg{
    position: absolute;
    top: 0;
    right: 0;
    width:65px ;
    height:65px ;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5MWFjOTQxMy01YjZmLTQxMjgtODRmMy00ZWNjM2E0NTkxNDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NENFNDc3N0E2MkVBMTFFNzk3ODlGNjM0RUQzMzc2OTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NENFNDc3Nzk2MkVBMTFFNzk3ODlGNjM0RUQzMzc2OTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxYTg4MjVmMy1jYWQ2LTQyN2MtYjM5NC0xMGI5ZTA4NmJkMTciIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2MjAzMWQyNi05Yjc2LTExN2EtOTY0Yy04ODJjNjYxM2ZlY2QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz40hmQeAAADpklEQVR42uzd52oUYRSH8UnwiryCxEKIRLEgoqiIKOI1WRERsSFiFyPpSLqabosxvVeNMep7yBmYD5K+m51/ngcO+bznl3d2N0tm8xZP7SyNoqgwIsnyw5SEKWMVusBzYfaFKWcdmsARyPrA1qwjV7AWTeAkciWr0QS2ZkDWBramHbmKFWkCJ5GrWZMmsDUFsjawNenINaxLEzhGLg7zlpVpAsfIRWFqWZsmcIy8F2Rd4CRyHevTBE4i17NCTWBrAmRtYGvckRtYpSZwErmRdWoCW2OO3MRKNYGt0TB7QNYFjpHtJDezWk1ga8SR37FeTWBr2C/XIIsCJ5E/sGZN4Bh5V5gWVq0JnERuZd2awNZQtPTvMSCLAsfIdpLbWLsmsDXoyO2sXhPYGvDLNciiwDGyneQOCDSBrX5H7oRBE9jqA1kb2Op15C44NIGTyB8h0QS2vvur60+waALHyAUg6wInT/JneDSBrR5H/gKRJrD1DWRtYKvbkb9CpQmcRO6GSxM48hMMsjBw5M/Fhf7cTILASeQe6DSBI39/XOjvl0kQ2LK/dBWArAscI3OShYEt+/TJPoXqhVIT2OoCWRvY6nTkPkg1gZPI/bBqAlsdjjwArSaw1e6vrkEWBY6R7SQPAqxbmyMPAaxbq1+uhwDWRraTPAywbi3bFTl/Gz1Wu1fI7u2GnL/NfqHfR0s3hhkGWDe7tZPdx2sEYN2aHXkUYN2a/HI9CrA2sp3kMYB1a3TkcYB1a/DL9TjA2sh2kicA1q3ekScB1q1OCRng/1erggzw8shFaUcGePns21aL04wM8MrVpBkZ4NUj25dkTwGsW7UjTwOsW1XakAFee5WOPAOwPvIswLpVpAEZ4I1V7shzAIMMcIorC1OSi8gAb15vwuzPNWSAN7fSMAdyCRngze91mIO5ggxwZnoV5lAuIAOcuV468g+A9ZF/AqzbC0eeB1i35/7Cax5gbWQ7yb8A1u1ZtpEBzn5PwxzOFjLAW9OTMEeygQzw1vU4zNFMIwO8tT0KcyyTyABvfQ8ziQxw7iAfzwQywLnTgzAnwiwArNt9P8kLAGsj20n+DbBu9xx5EWDd7m4GMsC53Z2NIgOcDuST60UGOB3dDnN6PcgAp6db60EGOH3IZ9aCDHD6uhnm7GqRAU5nN1aLDHC6kc+thAxwurse5nyYPwDrdm055B3sR6Kr/vNymDxOsC6yneS/AOt2JcyFJDLAel1KIgOsi3zRkP8JMACqQ/DUxz6RXQAAAABJRU5ErkJggg==) no-repeat;
}
.gift-value{
    position: absolute;
    top:5px ;
    right:-7px ;
    width: 60px;
    height: 35px;
    line-height: 17.5px;
    color: #fff;
    font-size: 12px;
    transform: rotate(45deg);
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.gift-value span{
    display: block;
}
.explain{
    position: relative;
    color: #999;
}
.explain p{
    margin: 0;
    font-size: 14px;
    line-height: 20px;
}
.tip{
   
    position: absolute;
    width: 120px;
    height:97px ;
    background: url(https://m.zhuishushenqi.com/image/1a176348f863.tip.png) 50% no-repeat;
    background-size: 100% 100%;
    right: 0;
    bottom:-20px ;
    font-size:12px ;
    padding: 25px 18px;
    font-weight: 400;
    line-height:14px ;
    color: #f25e3e;
     box-sizing: border-box;
}
</style>