<template>
    <div class="cinema-list">
        <div class="list-item" v-for="(item,index) in cinemaList" :key="index">
            <h3>{{item.nm}}<span class="money">元起</span></h3>
            <p>{{item.addr}}</p>
            <div class="other">
                <div v-for="(num,index) in item.tag" v-if="num===1" :key="index" :class="index | classCard">{{index | formatCard}}</div>
            </div>
            <div class="km">
                <span>{{item.distance}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                cinemaList:[],
                tag:Object,
            }
        },
        mounted() {
            this.axios.get('/api/cinemaList?cityId=10').then(res=>{
                var msg=res.data.msg
                if(msg==='ok'){
                    this.cinemaList=res.data.data.cinemas;
                    console.log(res.data.data.cinemas)
                }
            })
        },
        filters:{
            formatCard(key){
                var card=[
                    {key:'allowRefund',value:'退款'},
                    {key:'endorse',value:'改签'},
                    {key:'sell',value:'购买'},
                    {key:'snack',value:'小吃'}
                ];
                for(var i=0;i<card.length;i++){
                    if(key===card[i].key){
                        return card[i].value
                    }
                }
                return '';
            },
            classCard(key){
                var card=[
                    {key:'allowRefund',value:'bl'},
                    {key:'endorse',value:'bl'},
                    {key:'sell',value:'re'},
                    {key:'snack',value:'re'}
                ];
                for(var i=0;i<card.length;i++){
                    if(key===card[i].key){
                        return card[i].value
                    }
                }
                return '';
            }
        }
    }
</script>

<style scoped>
    .cinema-list {
        width: 100%;
        overflow: auto;
        position: absolute;
        top:95px;
        bottom:52px;
    }

    .cinema-list .list-item {
        margin: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid #ebe8e3;
    }

    .cinema-list .list-item h3{

        font-size: 17px;
        font-weight: normal;
        overflow: hidden;
        width: 300px;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .cinema-list .list-item h3 .money{
        font-size: 11px;
        color: #f03d37;
        margin-left: 10px;
    }

    .cinema-list .list-item p {
        font-size: 13px;
        color: #666;
        width: 340px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
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
        font-size: 12px;
    }
    .cinema-list .list-item .bl{
        border: 1px solid #589daf;
        color: #589daf;
        padding: 2px 5px;
        margin-right: 10px;
    }

    .cinema-list .list-item .re{
        border: 1px solid #f90;
        margin-right: 10px;
        color: #f90;
        padding: 2px 5px;
    }
    .cinema-list .list-item .km{
        float: right;
        font-size: 13px;
        color:#666;
        margin-top: -20px;
    }
</style>
