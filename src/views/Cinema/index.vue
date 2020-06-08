<template>
    <div>
        <Header headerTitle="喵喵影院"></Header>
        <div class="cinema-content">
            <div class="content-menu">
                <div class="menu-item">
                    <span>全城</span>
                    <i class="iconfont iconxiangxiajiantou"></i>
                </div>
                <div class="menu-item">
                    <span>品牌</span>
                    <i class="iconfont iconxiangxiajiantou"></i>
                </div>
                <div class="menu-item">
                    <span>特色</span>
                    <i class="iconfont iconxiangxiajiantou"></i>
                </div>
            </div>
           <c-list></c-list>
        </div>
        <Footer></Footer>
    </div>

</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer';
    import CList from '@/components/CList';
    export default {
        name: "index",
        components: {Header, Footer,CList},
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .cinema-content {
        width: 100%;
        position: absolute;
        top: 50px;
    }

    .content-menu {
        width: 100%;
        height: 45px;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #ebe8e3;
    }

    .content-menu .menu-item {
        text-align: center;
        line-height: 45px;
    }

    .content-menu .menu-item span {
        font-weight: normal;
        font-size: 15px;
    }

    .content-menu .menu-item i.iconfont {
        font-size: 8px;
        font-weight: bolder;
    }


</style>
