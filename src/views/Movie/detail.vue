<template>
    <div class="detail-container slide-enter-active" >
        <Header headerTitle="影片详情">
            <div class="back" @touchstart="handleToBack()">
                <div class="first-line"></div>
                <div class="last-line"></div>
            </div>
        </Header>
        <Loading v-if="isLoad"></Loading>
        <div class="detail-content" v-else>
            <div class="img-content">
                <div class="pic-show">
                    <img :src="detailList.img | setWH('148.208')">
                </div>
                <div class="content">
                    <h2>{{detailList.nm}}</h2>
                    <p>{{detailList.enm}}</p>
                    <p>{{detailList.scoreLabel}}</p>
                    <p>{{detailList.cat}}</p>
                    <p>{{detailList.src}}/{{detailList.dur}}分钟</p>
                    <p>{{detailList.pubDesc}}</p>
                </div>
            </div>
            <div class="intro">
                <h4>影片介绍</h4>
                <p>
                    {{detailList.dra}}
                </p>
            </div>
            <div class="intro-img">
                <h4>剧情片段</h4>
                <div >
                    <ul>
                        <li v-for="item in detailList.photos"><img :src="item | setWH('150.69')"></li>

                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Swiper from 'swiper'
    export default {
        name: "detail",
        components: {Header},
        props:['movieId'],
        data(){
          return{
              isLoad:true,
              detailList:{

              }
          }
        },
        methods:{
            handleToBack(){
                this.$router.back()
            }
        },
        mounted() {
            this.axios.get('/api/detailmovie?movieId='+this.movieId).then(res=>{
                var msg=res.data.msg;
                if(msg==='ok'){
                    this.detailList=res.data.data.detailMovie;
                    this.isLoad=false;
                   /* this.$nextTick(()=>{

                       var swiper=new Swiper(this.$refs.introImg,{
                            slidesPreView:'auto',
                            freeMode:true,
                            freeModeSticky: true
                        })
                    })*/
                }
            })
        }
    }
</script>

<style scoped>
    .detail-container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        min-height: 100%;
        overflow: auto;
        background: #fff;
    }
    .detail-container.slide-enter-active{
        animation: .3s slideDetail;
    }
    @keyframes slideDetail {
        0%{
            transform: translateX(100%);
        }
        100%{
            transform: translateX(0);
        }
    }
    .detail-container .back{
        float: left;
       position: absolute;
        top:50%;
    }
    .detail-container .first-line, .detail-container .last-line {
        width: 15px;
        height: 2px;
        background-color:#fff;
    }
    .detail-container .first-line{
        transform: rotate(-45deg) translate(10px ,4px);
    }
    .detail-container .last-line{
        transform: rotate(45deg) translate(10px ,-4px);
    }
    .detail-content{
        position: absolute;
        top:50px;
        width: 100%;
    }
    .detail-content .intro{
        padding: 10px;
    }
    .detail-content .intro h4{
        color: #0b274b;
        padding-bottom: 10px;
    }
    .detail-content .intro p{
        text-indent: 2em;
    }
    .detail-content .img-content{
        background-color: #fbf2f9;
        display: flex;
        padding: 20px;
        height: 200px;
        z-index: 999;
    }
    .detail-content .img-content .content{
        margin-left: 10px;
    }
    .detail-content .img-content .content h2{
        line-height: 50px;
    }
    .detail-content .img-content .content p{
        line-height: 25px;
    }
    .detail-container .detail-content .img-content img{
        width: 130px;
        height: 180px;
    }
    .detail-content .intro-img h4{
        padding: 0 0 10px 10px;
        color: #0b274b;
    }
    .detail-content .intro-img ul{
        display: flex;
        overflow: auto;
    }
    .detail-content .intro-img ul li{
       padding: 0 10px;
    }
    .detail-content .intro-img ul li img{
        width: 90px;
        height: 70px;
    }
    .detail-content .intro-img ul li img:hover{
        transform: scale(1.02);
    }
</style>
