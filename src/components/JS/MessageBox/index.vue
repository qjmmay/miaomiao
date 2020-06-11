<template>
    <div class="message-box">
        <h2>{{title}}</h2>
        <p>{{content}}</p>
        <div>
            <span class="cancle" @touchstart="handleCancel()">{{cancel}}</span>
            <span class="ok" @touchstart="handleOK()">{{ok}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
.message-box{
    width:200px;
    height:140px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    box-shadow: 2px 2px 2px 2px #ccc;
    position: absolute;
    left: 50%;
    top:50%;
    margin: -70px 0 0 -100px;
}
    .message-box h2{
        text-align: center;
        line-height: 40px;
        font-size: 18px;
    }
    .message-box p{
        text-align: center;
        line-height: 40px;
    }
    .message-box >div{
        display: flex;
        position: absolute;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #ccc;
        line-height: 40px;
        text-align: center;
    }
    .message-box .cancle{
        flex: 1;
        border-right: 1px solid #ccc;
    }
    .message-box .ok {
        flex: 1;
        float: right;
    }
</style>
