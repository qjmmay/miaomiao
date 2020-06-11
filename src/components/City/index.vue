<template>
    <div class="city-container">
        <Loading v-if="isLoad"></Loading>
        <BScroller ref="city_list" v-else>
            <div class="city">
                <div class="hot-city">
                    <p>热门城市</p>
                    <ul class="btn-city">
                        <li v-for="(item,index) in hotCities" :key="index" @tap="handleToCity(item.nm,item.id)">{{item.nm}}</li>
                    </ul>
                </div>
                <div class="all-city" ref="city_sort">
                    <div v-for="item in citiesList" :key="item.index">
                        <h2 class="f-letter">{{item.index}}</h2>
                        <ul>
                            <li v-for="(itemList,index) in item.list" :key="index" @tap="handleToCity(itemList.nm,itemList.id)">
                                {{itemList.nm}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </BScroller>
        <div class="first-letter">
            <ul>
                <li v-for="(item,index) in citiesList" :key="index" @touchstart="handleToIndex(index)">{{item.index}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                citiesList: [],
                hotCities: [],
                isLoad: true
            }
        },
        mounted() {
            var hotCities = window.localStorage.getItem('hotList');
            var citiesList = window.localStorage.getItem('cityList');
            if (hotCities && citiesList) {
               this.hotCities = JSON.parse(hotCities);
               this.citiesList =JSON.parse(citiesList) ;
                this.isLoad = false;
            } else {
                this.axios.get('/api/cityList').then(res => {
                    var msg = res.data.msg;
                    if (msg === 'ok') {
                        var data = res.data.data.cities;
                        //[{index:'A',list:[{nm:'',id:''}]]
                        var {cityList, hotList} = this.formatCityList(data);
                        this.citiesList = cityList;
                        this.hotCities = hotList;
                        this.isLoad = false;
                        window.localStorage.setItem('cityList', JSON.stringify(cityList));
                        window.localStorage.setItem('hotList', JSON.stringify(hotList));
                    }
                })
            }
        }
        ,
        methods: {
            formatCityList(cities) {
                var cityList = [];
                var hotList = [];
                for (var i = 0; i < cities.length; i++) {
                    var firstLetter = cities[i].py.substring(0, 1).toUpperCase();
                    var hot = cities[i].isHot;
                    if (hot === 1) {
                        hotList.push({nm: cities[i].nm,id:cities[i].id})
                    }
                    if (toCompute(firstLetter)) {//新添加
                        cityList.push({index: firstLetter, list: [{nm: cities[i].nm, id: cities[i].id}]});
                    } else {
                        for (var j = 0; j < cityList.length; j++) {
                            if (cityList[j].index === firstLetter) {
                                cityList[j].list.push({nm: cities[i].nm, id: cities[i].id})
                            }
                        }
                    }
                }
                cityList.sort((n1, n2) => {
                    if (n1.index > n2.index) {
                        return 1;
                    } else if (n1.index < n2.index) {
                        return -1;
                    } else {
                        return;
                    }
                })

                function toCompute(firstLetter) {
                    for (var i = 0; i < cityList.length; i++) {
                        if (cityList[i].index === firstLetter) {
                            return false;
                        }
                    }
                    return true;
                }

                return {cityList, hotList};
            }
            ,
            handleToIndex(index) {
                console.log('dsd' + index)
                var first = this.$refs.city_sort.getElementsByClassName('f-letter');
                this.$refs.city_list.toScrollTop(-first[index].offsetTop)
            },
            handleToCity(nm,id){
                this.$store.commit('city/CITY_INFO',{nm,id})
                window.localStorage.setItem('nowNm',nm);
                window.localStorage.setItem('nowId',id);
                this.$router.push({path:'/movie/NowPlaying'})
            }
        }
    }
</script>

<style scoped>
    .city-container {
        width: 100%;
        position: absolute;
        top: 95px;
        bottom: 45px;
        overflow: auto;
    }

    .city {
        overflow: hidden;
    }

    .hot-city, .all-city {
        background-color: #fff5f0;
    }

    .hot-city {
        width: 100%;
        overflow: hidden;
        padding: 15px 0;
        float: left;
    }

    .hot-city p, .all-city .f-letter {
        background-color: #f0f0f0;
        line-height: 30px;
        font-weight: 400;
        padding-left: 20px;
    }

    .all-city h2 {
        font-size: 16px;
        font-weight: normal;
    }

    .btn-city li {
        display: inline-block;
        width: 25%;
        height: 33px;
        border: 1px solid #e6e6e6;
        background-color: #fff;
        text-align: center;
        line-height: 33px;
        border-radius: 3px;
        margin-top: 15px;
        margin-left: 20px;
    }

    .all-city {
        width: 100%;
        float: left;
    }

    .all-city li {
        line-height: 32px;
        padding-left: 20px;
    }

    .first-letter {
        height: 100%;
        text-align: center;
        justify-content: center;
        border-left: 1px solid #e6e6e6;
        position: fixed;
        right: 0;
        top: 95px;
        padding-top: 40px;
        background-color: #fff;
    }

    .first-letter ul li {
        line-height: 20px;
    }
</style>
