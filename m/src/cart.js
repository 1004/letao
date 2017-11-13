
define(['jquery', './utils', 'template', 'mui'], function ($, utils, template, mui) {

    // 检测登录
    utils.checkLogin();

    var cart = $('#cart');
    var total = 0;

    $.ajax({
        url: '/api/cart/queryCart',
        type: 'get',
        success: function (info) {

            var html = template('cartList', {list: info});

            $('#cart').html(html);

            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });

            // 
            cart.find('li').each(function () {
                total += parseFloat($(this).attr('data-account'));
            });

            // 初始默认全选的价格
            $('#total').text(total.toFixed(2));

            cart.find('input').on('click', function () {

                total = 0;

                var li = $(this).parents('li');

                li.siblings().each(function () {
                    if($(this).find('input').is(':checked')) {
                        total += parseFloat($(this).attr('data-account'))
                    }
                });

                if($(this).is(':checked')) {
                    total += parseFloat(li.attr('data-account'));
                }

                $('#total').text(total.toFixed(2));
            })
        }
    });

});