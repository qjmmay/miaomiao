<template>
    <div class="city-container">
        <div class="hot-city">
            <p>热门城市</p>
            <ul class="btn-city">
                <li v-for="(item,index) in hotCities" :key="index">{{item.nm}}</li>
            </ul>
        </div>
        <div class="all-city">
            <ul class="list-city" v-for="(item,index) in citiesList" :key="index">
                <li class="f-letter">{{item.index}}</li>
                <li v-for="(itemList,index) in item.list" :key="index">
                    {{itemList.nm}}
                </li>

            </ul>

        </div>
        <div class="first-letter">
            <ul>
                <li v-for="(item,key) in citiesList" :key="key" @click="toLetter()">{{item.index}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                citiesList:[],
                hotCities:[]
            }
        },
        mounted() {
            this.axios.get('/api/cityList').then(res => {
                var msg = res.data.msg;
                if (msg === 'ok') {
                    var data = res.data.data.cities;
                    //[{index:'A',list:[{nm:'',id:''}]]
                    this.formatCityList(data)
                }
            })
        },
        methods: {
            formatCityList(cities) {
                var cityList = [];
                var hotList = [];
                for (var i = 0; i < cities.length; i++) {
                    var firstLetter = cities[i].py.substring(0, 1).toUpperCase();
                    var hot=cities[i].isHot;
                    if(hot===1){
                        hotList.push({nm:cities[i].nm})
                    }
                    if (toCompute(firstLetter)) {//新添加
                        cityList.push({index: firstLetter, list: [{nm: cities[i].nm, id: cities[i].id}]});
                    }else {
                        for(var j=0;j<cityList.length;j++){
                            if(cityList[j].index===firstLetter){
                                cityList[j].list.push({nm:cities[i].nm,id:cities[i].id})
                            }
                        }
                    }
                }
                console.log(JSON.stringify(hotList))
                cityList.sort((n1,n2)=>{
                    if(n1.index>n2.index){
                        return 1;
                    }else if(n1.index<n2.index){
                        return -1;
                    }else{
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
                this.citiesList= cityList;
                this.hotCities=hotList;
            },

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

    .hot-city, .all-city {
        background-color: #fff5f0;
    }

    .hot-city {
        width: 100%;
        overflow: hidden;
        padding: 15px 0;
        float: left;
    }

    .hot-city p, .list-city .f-letter {
        background-color: #f0f0f0;
        line-height: 30px;
        font-weight: 400;
        padding-left: 20px;
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

    .all-city .list-city li {
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
       top:95px;
        padding-top: 40px;
        background-color: #fff;
    }

    .first-letter ul li {
        line-height: 20px;
    }
</style>
