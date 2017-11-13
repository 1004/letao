
define(['jquery', 'template'], function ($, template) {

    // 地址列表
    $.ajax({
        url: '/api/address/queryAddress',
        type: 'get',
        success: function (info) {
            // console.log(info)
            // 为当前登录者的地址
            var html = template('list', {lists: info});
            $('#addressList').html(html);
        }
    })

    // 

});