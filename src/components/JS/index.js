import Vue from 'vue';
import MessageBox from './MessageBox'

export var messageBox=(function () {
    var defaults={
        //设置默认值
        title:'',
        content:'',
        cancle:'',
        ok:'',
        handleCancel:null,
        handleOK:null,
    };
    var MyComponent=Vue.extend(MessageBox)
    return function (opts) {//配置参数
        for(var attr in opts){
            defaults[attr]=opts[attr];
        }
        var vm=new MyComponent({
            el:document.createElement('div'),
            data:{
                title:defaults.title,
                content:defaults.content,
                cancel:defaults.cancle,
                ok:defaults.ok
            },
            methods:{
                handleCancel(){
                    defaults.handleCancel&&defaults.handleCancel(this);
                    document.body.removeChild(vm.$el);
                },
                handleOK(){
                    defaults.handleOK&&defaults.handleOK(this);
                    document.body.removeChild(vm.$el);
                }
            },
        });
        document.body.appendChild(vm.$el);

    }
})();
