<template>
    <div class="city-container">
        <div class="hot-city">
            <p>热门城市</p>
            <ul class="btn-city">
                <li>上海</li>
                <li>北京</li>
                <li>广州</li>
                <li>深圳</li>
                <li>杭州</li>
                <li>武汉</li>
                <li>江苏</li>
            </ul>
        </div>
        <div class="all-city">
            <ul class="list-city">
                <li class="f-letter">A</li>
                <li>阿拉善盟</li>
                <li>安阳</li>
                <li>鞍山</li>
                <li>安庆</li>
                <li>安阳</li>
                <li>阿坝</li>
                <li>阿勒泰</li>
                <li>安丘</li>
                <li class="f-letter">B</li>
                <li>阿拉善盟</li>
                <li>安阳</li>
                <li>鞍山</li>
                <li>安庆</li>
                <li>安阳</li>
                <li>阿坝</li>
                <li>阿勒泰</li>
                <li>安丘</li>
                <li class="f-letter">C</li>
                <li>阿拉善盟</li>
                <li>安阳</li>
                <li>鞍山</li>
                <li>安庆</li>
                <li>安阳</li>
                <li>阿坝</li>
                <li>阿勒泰</li>
                <li>安丘</li>
            </ul>
        </div>
        <div class="first-letter">
            <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
                <li>F</li>
                <li>G</li>
                <li>H</li>
                <li>I</li>
                <li>J</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .city-container{
        width: 100%;
        position: absolute;
        top:95px;
        bottom:45px;
        overflow: auto;
    }
    .hot-city,.all-city{
        background-color: #fff5f0;
    }
    .hot-city{
        width: 97%;
        overflow: hidden;
        padding:20px 0;
        float: left;
    }
    .hot-city p,.list-city .f-letter{
        background-color: #f0f0f0;
        line-height: 30px;
        font-weight: 400;
        padding-left: 15px;
    }
    .btn-city li{
        display: inline-block;
        width: 29%;
        height: 33px;
        border:1px solid #e6e6e6;
        background-color: #fff;
        text-align: center;
        line-height: 33px;
        border-radius: 3px;
        margin-top: 15px;
        margin-left: 15px;
    }
    .all-city{
        width: 97%;
        float: left;
    }
    .all-city .list-city li{
        line-height: 32px;
        padding-left: 20px;
    }
    .first-letter{
        height: 100%;
        text-align: center;
        justify-content: center;
        border-left: 1px solid #e6e6e6;
       margin-right: 7px;
        position: absolute;
        right: 0;
        top:40px;
    }
    .first-letter ul li{
        line-height: 20px;
    }
</style>
