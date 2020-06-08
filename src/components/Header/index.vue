<template>
    <div class="header-container">
        <h2>{{headerTitle}}</h2>
    </div>
</template>

<script>
    export default {
        name: "index",
        props:['headerTitle']
    }
</script>

<style scoped>
    .header-container{
        width: 100%;
        height: 50px;
        top:0;
        left: 0;
        position: fixed;
        background-color: var(--primary-color);
    }
    .header-container h2{
        color:#fff;
        font-weight: normal;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
    }
</style>
