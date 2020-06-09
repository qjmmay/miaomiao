<template>
    <div class="search-container">
        <div class="search">
            <input type="text"  class="input" placeholder=" 请输入关键词" v-model="keyword" @keyup="getData()">
        </div>
        <div class="show-result">
            <h2>电影/电视剧/综艺</h2>
            <ul>
                <li v-for="(item,index) in searchDataList" :key="index">
                    <div class="pic-show">
                        <img :src="item.img | setWH('108.130')">
                    </div>
                    <div class="info">
                        <p class="zh-name">{{item.nm}}<span>{{item.ver}}</span></p>
                        <p class="e-name">{{item.enm}}</p>
                        <p class="type">{{item.cat}}</p>
                        <p class="up-date">{{item.pubDesc}}</p>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                searchDataList:[],
                keyword:''
            }
        },
        mounted() {

        },
        methods:{
            getData(){
                this.axios.get('/api/searchList?cityId=10&kw='+this.keyword).then(res=>{
                    var msg=res.data.msg;
                    if(msg==='ok'){
                        console.log(res.data.data.movies);
                         this.searchDataList=res.data.data.movies.list;
                    }
                })
            }
        }
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
        padding: 10px 20px;
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
        padding: 8px 0;
        border: none;
        border-radius: 4px;

    }
    .search-container .show-result h2{
        color: #999;
        border-bottom: 1px solid #e6e6e6;
        font-size:18px;
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
        font-size: 20px;
       line-height: 30px;
    }
   .info .zh-name span{
       font-size: 14px;
        color: #fc7103;
       position: absolute;
       width: 80px;
       overflow: hidden;
       white-space: nowrap;
       text-overflow: ellipsis;
        right: 0;
   }
    .info .e-name,.info .type,.info .up-date{
        font-size: 14px;
        line-height: 40px;

    }
</style>
