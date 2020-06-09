<template>
    <div class="content-container">
        <ul>
            <li v-for="(item,index) in comingList" :key="index">
                <div class="pic-show">
                    <img :src="item.img | setWH('108.130')">
                </div>
                <div class="movie-detail">
                    <h2>{{item.nm}}</h2>
                    <p><span class="score">{{item.wish}}</span>人想看</p>
                    <p>{{item.star}}</p>
                    <p>
                       {{item.rt}}
                    </p>
                    <p>
                       上映时间: {{item.comingTitle}}
                    </p>
                </div>
                <div class="btn-pre">
                    <span>预售</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                comingList:[],
            }
        },
        mounted() {
            this.axios.get('/api/movieComingList?cityId=10').then(res=>{
                var msg=res.data.msg
                if(msg==='ok'){
                    this.comingList=res.data.data.comingList;
                }
            })
        }
    }
</script>

<style scoped>
    .content-container ul li {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e6e6e6;
        padding: 10px;
    }
    .content-container .btn-pre{
        background-color: #3c9fe6;
        color:#fff;
        font-size: 12px;
        padding: 5px 10px;
        border-radius: 5px;
        position: absolute;
        right: 10px;
    }
</style>
