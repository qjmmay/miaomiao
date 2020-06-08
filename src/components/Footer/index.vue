<template>
    <div class="footer-container">
        <router-link class="item movie" tag="div" to="/movie">
            <i class="iconfont iconmovie"></i>
            <p>电影</p>
        </router-link>
        <router-link class="item cinema" tag="div" to="/cinema">
            <i class="iconfont icondianyingyuan"></i>
            <p>影院</p>
        </router-link>
        <router-link class="item mine" tag="div" to="/mine">
            <i class="iconfont iconmine"></i>
            <p>我的</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .footer-container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position:fixed;
        bottom: 0;
        left: 0;
        height: 45px;
        border-top: 2px solid #ebe8e3;;
        text-align: center;
        padding-bottom: 5px;
        background-color: white;
    }
    .footer-container .item i.iconfont{

        opacity: 0.8;
        font-size: 22px;
    }
    .footer-container .item p{
        font-size: 14px;
    }
    .item:hover,.item:active{
        color: #f0120b;
        cursor: pointer;
    }
    .item.router-link-active {
            color: var(--active-color);
    }
</style>
