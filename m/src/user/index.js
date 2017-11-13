
define(['jquery', '../utils'], function ($, utils) {

    // 检测登录
    utils.checkLogin();

    // 退出登录
    $('.logout').on('click', function () {

        $.ajax({
            url: '/api/user/logout',
            type: 'get',
            success: function (info) {
                if(info.success) {
                    location.href = '/m';
                }
            }
        });
    })
})