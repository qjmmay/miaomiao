<template>
    <div class="search-container">
        <div class="search">
            <input type="text"  class="input" placeholder=" 请输入关键词">
        </div>
        <div class="show-result">
            <h2>电影/电视剧/综艺</h2>
            <ul>
                <li>
                    <div class="pic-show">
                        <img src="http://p0.meituan.net/128.180/movie/dc99d67cdf8b1f9d7aa1eeb2e9f10c471714713.jpg">
                    </div>
                    <div class="info">
                        <p class="zh-name">熊出没·狂野大陆<span>0</span></p>
                        <p class="e-name">Boonie Bears:The Wild Life</p>
                        <p class="type">喜剧,科幻,动画</p>
                        <p class="up-date">2020</p>
                    </div>
                </li>
                <li>
                    <div class="pic-show">
                        <img src="http://p0.meituan.net/128.180/movie/dc99d67cdf8b1f9d7aa1eeb2e9f10c471714713.jpg">
                    </div>
                    <div class="info">
                        <p class="zh-name">熊出没·狂野大陆<span>0</span></p>
                        <p class="e-name">Boonie Bears:The Wild Life</p>
                        <p class="type">喜剧,科幻,动画</p>
                        <p class="up-date">2020</p>
                    </div>
                </li>
                <li>
                    <div class="pic-show">
                        <img src="http://p0.meituan.net/128.180/movie/dc99d67cdf8b1f9d7aa1eeb2e9f10c471714713.jpg">
                    </div>
                    <div class="info">
                        <p class="zh-name">熊出没·狂野大陆<span>0</span></p>
                        <p class="e-name">Boonie Bears:The Wild Life</p>
                        <p class="type">喜剧,科幻,动画</p>
                        <p class="up-date">2020</p>
                    </div>
                </li>
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
    .search-container{
        width: 100%;
        position: absolute;
        top:95px;
        bottom:50px;
        overflow: auto;
    }
    .search-container .search{
        padding: 8px 20px;
        background-color: #f5f5f5;
        border-bottom: 1px solid #e5e5e5;
        text-align: center;
    }
    .search-container .search .input{
        font-size: 12px;
        font-weight: 500;
       width: 100%;
        margin:0 5px;
        outline: none;
        padding: 5px 0;
        border: none;
        border-radius: 4px;

    }
    .search-container .show-result h2{
        color: #999;
        border-bottom: 1px solid #e6e6e6;
        font-size:17px;
        padding: 10px 15px;
    }
    .search-container .show-result ul li{
        display: flex;
        align-items: center;
        overflow: hidden;
        padding: 10px 10px 25px;
        border-bottom: 1px solid #e6e6e6;
    }

   .info .zh-name{
        font-size: 18px;
    }
   .info .zh-name span{
       font-size: 16px;
        color: #fc7103;
       position: absolute;
       right: 20px;
   }
    .info .e-name,.info .type,.info .up-date{
        font-size: 12px;
        line-height: 22px;
    }
</style>
