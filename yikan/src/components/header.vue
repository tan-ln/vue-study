<template>
    <div class="header">
        <div class="left">
            <div class="avatar"></div>
            <div class="name">西松活动...</div>
        </div>
        <div class="center">
            <div class="title">医看影像解剖大全</div>
            <div class="unlock-status">
                已经解锁
                <span class="unlock-num">35/50</span>
                部
            </div>
        </div>
        <div class="right">
            <a href="#">
                <span>解剖</span>
                <span>主页</span>
            </a>
        </div>
        <div class="cover">
            点击下面按钮,帮我解锁吧!每人可解锁一套解剖图集!
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.header {
    width: 100vw;
    height: 2.9866667rem;
    box-sizing: border-box;
    background: url(../../static/images/banner_02.png);
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
}
.header .cover {
    width: 100vw;
    height: 0.7466667rem;
    line-height: 0.7466667rem;
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 0.293333rem;
    color: rgb(240, 102, 84);
    text-align: center;
    letter-spacing: 0.1rem;
}

.header .left .avatar {
    width: 0.90666667rem;
    height: 0.90666667rem;
    background: url(../../static/images/avatar_03.png);
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 50%;
    position: absolute;
    top: 0.53333333rem;
    left: 0.6133333rem;
    border: 0.08rem solid rgb(83, 68, 174);
}

.header .left .name {
    width: 1.466667rem;
    height: 0.24rem;
    position: absolute;
    font-size: 0.24rem;
    color: #fff;
    left: 0.56rem;
    bottom: 0.966667rem;
    letter-spacing: 0.0533rem;
    white-space: nowrap;
}

.header .center {
    width: 5.1466667rem;
    height: 2.213333rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: #fff;
    top: 0.7466rem;
}

.header .center .title {
    font-size: 0.48rem;
    height: 0.8266667rem;
    letter-spacing: 0.1866667rem;
    white-space: nowrap;
 }

.header .center .unlock-status {
    font-size: 0.32rem;
    letter-spacing: 0.08rem;
}

.header .center .unlock-status .unlock-num {
    color: rgb(221, 61, 83);
}

.header .right {
    position: absolute;
    right: 0;
    top: 0.722222rem;
    height: 0.96rem;
    width: 1.12rem;
    text-align: center;
    background-color: rgb(240, 109, 84);
    border-top-left-radius: 0.96rem;
    border-bottom-left-radius: 0.96rem;
    box-shadow: 0 0.1rem rgb(205, 103, 87), 
    0 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
}
.header .right a {
    display: flex;
    flex-direction: column;
    width: 0.8rem;
    height: 0.96rem;
    position: absolute;
    text-decoration: none;
    color: #fff;
    font-size: 0.32rem;
    letter-spacing: 0.05rem;
    right: 0;
    top: 0.06rem;
}
.header .right a span{
    margin-top: 0.07333rem;
}
</style>
