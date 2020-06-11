<template>
    <div class="content-container" ref="movie_body">
        <Loading v-if="isLoad"></Loading>
        <BScroller :handleToScroll="handleToScroll" :handleTouchEnd="handleTouchEnd" v-else>
        <ul>
            <li class="pulldown">{{this.pullDown}}</li>
            <li v-for="(item,key) in moviesList" :key="key">
                <div class="pic-show" @tap="handleToDetail(item.id)">
                    <img :src="item.img | setWH('108.130')">
                </div>
                <div class="movie-detail">
                    <h2 @tap="handleToDetail(item.id)">{{item.nm}}</h2>
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
        </BScroller>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                moviesList:[],
                pullDown:'',
                isLoad:true,
                preCityId:-1,
            }
        },
        activated() {
            var cityId=this.$store.state.city.id;
            if(this.preCityId===cityId){return;}
            this.isLoad=true;

            this.axios.get('/api/movieOnInfoList?cityId='+cityId).then(res=>{
                var msg=res.data.msg;
                if(msg==='ok') {
                    // var movieList=res.data.data.movieList
                    this.moviesList = res.data.data.movieList;
                    this.isLoad=false;
                    this.preCityId=cityId;
                }
            })
        },
        methods:{
            handleToDetail(movieId){
                this.$router.push('/movie/detail/1/'+movieId)
            },
            handleToScroll(pos){
                if (pos.y > 30) {
                    this.pullDown = '正在刷新中...'
                }
            },
            handleTouchEnd(pos){
                if(pos.y>30){
                    this.axios.get('/api/movieOnInfoList?cityId=9').then(res=> {
                        var msg = res.data.msg;
                        if (msg === 'ok') {
                            this.pullDown = "刷新完成";
                            setTimeout(()=> {
                                this.moviesList = res.data.data.movieList;
                                this.pullDown=""
                            },1000)

                        }
                    })
                }
            }
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
.content-container ul li.pulldown{
    margin: 0;
    padding:0;
    border: 0;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 13px;
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
