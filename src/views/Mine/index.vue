<template>
    <div>
    <Header headerTitle="我的"></Header>
    <div class="login-container">
        <form action="#" class="form">
            <input placeholder="账户名/手机/email" type="text" class="item user">
            <input placeholder="请输入您的密码" type="password" class="item pwd">
        </form>
        <button class="btn-login">登录</button>
        <div class="help-others">
            <span class="regiter">立即注册</span>
            <span class="findpwd">找回密码</span>
        </div>
    </div>
    <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer';

    export default {
        name: "index",
        components: {Header, Footer},
        data(){
            return{
            }
        }
    }
</script>

<style scoped>
.login-container{
    width: 100%;
    position: absolute;
    top:50px;
    display: block;
    text-align: center;
}
    .login-container .form .item{
        margin-top: 20px;
        width: 80%;
        height: 35px;
       border-radius: 6px;
        padding-left: 20px;
        border-color: #e97c7f;
    }
    .login-container .btn-login {
        background-color: #e54847;
        border: none;
        color: #fff;
        font-size: 18px;
        width: 85%;
        height: 40px;
        border-radius: 6px;
        text-align: center;
        margin-top: 30px;
    }
    .help-others{
        font-size: 12px;
        color: var(--active-color);
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
    }
    .help-others span:hover{
        cursor: pointer;
        color: #ff2806;
    }

</style>
