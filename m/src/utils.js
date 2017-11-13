
define(['jquery'], function ($) {

    // 验证用户是否是登录状态
    // 由于服务商没有提供专门检测登录接口
    // 可以通过cookie来实现
    // 
    // if(!$.cookie('itcast-name')) {
    //     location.href = '/m/user/login.html'
    // }

    function checkLogin() {
        // 检测登录
        $.ajax({
            url: '/api/user/checkUserLogin',
            type: 'get',
            success: function (info) {
                if(info.error) {
                    location.href = '/m/user/login.html?path=' + location.href;
                }
            }
        });
    }

    // 获取地址参数
    function qs(prop) {
        // ?key=val&key1=val1&key2=val2
        var search = location.search.slice(1);

        // ['key=val', 'key1=val1', 'key2=val2'];
        var params = search.split('&');

        var tmp;
        var o = {};
        for(var i=0; i<params.length; i++) {
            // [key, val]
            // [key1, val1]
            // [key2, val2]
            tmp = params[i].split('=');

            o[tmp[0]] = tmp[1];
        }

        return o[prop];
    }

    return {
        checkLogin: checkLogin,
        qs: qs
    }
})