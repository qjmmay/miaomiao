<template>
    <div>
        <Header headerTitle="喵喵电影"></Header>
        <div class="content">
            <div class="movie-menu">
                <router-link class="city-name" tag="div" to="/movie/city">
                    <span>{{$store.state.city.nm}}</span>
                    <i class="iconfont iconxiangxiajiantou"></i>
                </router-link>
                <router-link class="hot-playing" tag="div" to="/movie/nowPlaying">
                    <span>正在热映</span>
                </router-link>
                <router-link class="come-movie" tag="div" to="/movie/comming">
                    <span>即将上映</span>
                </router-link>
                <router-link class="search" tag="div" to="/movie/search">
                    <i class="iconfont iconsearch"></i>
                </router-link>
            </div>
            <!--二级路由，进行缓存-->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer';
    import  {messageBox} from '@/components/JS'
    export default {
        name: "index",
        components: {Header, Footer},
        data() {
            return {}
        },
        mounted() {

            setTimeout(()=> {
                var self=this;
                this.axios.get('/api/getLocation').then(res => {
                    var msg = res.data.msg;
                    var nm=res.data.data.nm;
                    var id=res.data.data.id
                    if(this.$store.state.city.id==id){
                        return;
                    }
                    if (msg === 'ok') {
                        messageBox({
                            title: '定位',
                            content: nm,
                            cancle: '取消',
                            ok: '切换定位',
                            handleCancel() {

                            },
                            handleOK() {
                                //更改本地存储或者状态管理
                                self.$store.commit('city/CITY_INFO',{nm,id})
                            /*   window.localStorage.setItem('nowNm',nm);
                                window.localStorage.setItem('nowId',id);*/
                                window.location.reload();
                            }
                        })
                    }
                })
            },3000)


        }
    }
</script>

<style scoped>
    .content {
        width: 100%;
    }

    .content .movie-menu {
        width: 100%;
        display: flex;
        height: 45px;
        position: absolute;
        top: 49px;
        justify-content: space-around;
        border-bottom: 2px solid #ebe8e3;
    }

    .movie-menu > div {
        font-size: 16px;
        line-height: 45px;
    }

    .movie-menu > div:visited {
        color: var(--active-color);
        border-bottom: 2px solid var(--active-color);
    }

    .movie-menu > div.router-link-active {
        color: var(--active-color);
        border-bottom: 2px solid var(--active-color);
    }


    .movie-menu .city-name i.iconfont {
        font-size: 12px;
    }

    .hot-playing, .come-movie {
        font-weight: 600;
        opacity: 0.7;
    }

    .movie-menu .search i.iconfont {
        color: var(--active-color);
        font-size: 22px;
    }
</style>
