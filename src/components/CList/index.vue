<template>
    <div class="cinema-list">
        <div class="list-item">
            <h3>UA电影城（上海梅龙镇广场店）<span class="money">元起</span></h3>
            <p>静安区南京西路1038号梅龙镇广场10楼（近江宁路）</p>
            <div class="other">
                <span class="change">改签</span>
                <span class="exit">退</span>
                <span class="discount">折扣卡</span>
                <span class="snack">小吃</span>
            </div>
            <div class="km">
                <span>112km</span>
            </div>
        </div>
        <div class="list-item">
            <h3>UA电影城（上海梅龙镇广场店）<span class="money">元起</span></h3>
            <p>静安区南京西路1038号梅龙镇广场10楼（近江宁路）</p>
            <div class="other">
                <span class="change">改签</span>
                <span class="exit">退</span>
                <span class="discount">折扣卡</span>
                <span class="snack">小吃</span>
            </div>
            <div class="km">
                <span>112km</span>
            </div>
        </div>
        <div class="list-item">
            <h3>UA电影城（上海梅龙镇广场店）<span class="money">元起</span></h3>
            <p>静安区南京西路1038号梅龙镇广场10楼（近江宁路）</p>
            <div class="other">
                <span class="change">改签</span>
                <span class="exit">退</span>
                <span class="discount">折扣卡</span>
                <span class="snack">小吃</span>
            </div>
            <div class="km">
                <span>112km</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .cinema-list {
        width: 100%;
        overflow: auto;
    }

    .cinema-list .list-item {
        margin: 20px 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid #ebe8e3;
    }

    .cinema-list .list-item h3 {

        font-size: 17px;
        font-weight: normal;
    }

    .cinema-list .list-item h3 .money {
        font-size: 11px;
        color: #f03d37;
    }

    .cinema-list .list-item p {
        font-size: 13px;
        color: #666;
        line-height: 40px;
    }

    .cinema-list .list-item .other span {
        font-size: 13px;
        margin-right: 10px;
        padding: 0 5px;
        border-radius: 3px;
    }
    .other{
        display: flex;
    }
    .cinema-list .list-item .exit, .cinema-list .list-item .change {
        border: 1px solid #589daf;
        color: #589daf;
    }

    .cinema-list .list-item .snack, .cinema-list .list-item .discount {
        border: 1px solid #f90;
        color: #f90;
    }
    .cinema-list .list-item .km{
        float: right;
        font-size: 13px;
        color:#666;
        margin-top: -20px;
    }
</style>
