<template>
    <div class="content-container">
        <Loading v-if="isLoad"></Loading>
        <BScroller v-else>
            <ul>
                <li v-for="(item,index) in comingList" :key="index">
                    <div class="pic-show" @tap="handleToDetail(item.id)">
                        <img :src="item.img | setWH('108.130')">
                    </div>
                    <div class="movie-detail">
                        <h2 @tap="handleToDetail(item.id)">{{item.nm}}</h2>
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
        </BScroller>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                comingList: [],
                isLoad:true,
                preCityId:-1
            }
        },
        activated() {
            var cityID=this.$store.state.city.id;
            if(cityID===this.preCityId){return;}
            this.isLoad=true;
            this.axios.get('/api/movieComingList?cityId='+cityID).then(res => {
                var msg = res.data.msg
                if (msg === 'ok') {
                    this.comingList = res.data.data.comingList;
                    this.isLoad=false;
                    this.preCityId=cityID;
                }
            })
        },
        methods:{
            handleToDetail(movieId){
                this.$router.push('/movie/detail/2/'+movieId);
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

    .content-container .btn-pre {
        background-color: #3c9fe6;
        color: #fff;
        font-size: 12px;
        padding: 5px 10px;
        border-radius: 5px;
        position: absolute;
        right: 10px;
    }
</style>
