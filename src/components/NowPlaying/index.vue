<template>
    <div class="content-container">
        <ul>
            <li v-for="(item,key) in moviesList" :key="key">
                <div class="pic-show">
                    <img :src="item.img | setWH('108.130')">
                </div>
                <div class="movie-detail">
                    <h2>{{item.nm}}</h2>
                    <p>观众评<span class="score">{{item.sc}}</span></p>
                    <p>{{item.star}}</p>
                    <p>
                        上映时间：{{item.rt}}
                    </p>
                    <p>
                       播放场次：{{item.wish}}
                    </p>
                </div>
                <div class="btn-buy">
                    <span>购票</span>
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
                moviesList:[],
            }
        },
        mounted() {
            this.axios.get('/api/movieOnInfoList?cityId=10').then(res=>{
                var msg=res.data.msg;
                if(msg==='ok'){
                   // var movieList=res.data.data.movieList
                    this.moviesList=res.data.data.movieList
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

    .content-container .movie-detail .score{
        color:#faaf00;
        font-size: 15px;
        font-weight: 700;
        margin-left: 5px;
    }
    .content-container .btn-buy{
        background-color:var(--active-color);
        color:#fff;
        font-size: 12px;
        line-height: 28px;
        text-align: center;
        border-radius: 5px;
        width: 47px;
        height: 27px;
        position: absolute;
        right: 10px;
    }
</style>
