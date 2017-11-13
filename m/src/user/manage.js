
define(['jquery'], function ($) {
    
    // 添加收货地址
    $('form').on('submit', function () {
        // 缓存DOM元素
        var _this = $(this);

        $.ajax({
            url: '/api/address/addAddress',
            type: 'post',
            // 表单数据
            data: _this.serialize(),
            success: function (info) {
                if(info.success) {
                    // 跳转到地址列表
                    location.href = '/m/user/address.html';
                }
            }
        })

        // 阻止表单默认提交
        return false;
    })


});