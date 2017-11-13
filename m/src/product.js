
define(['jquery', 'template', './utils', 'mui'], function ($, template, utils, mui) {

    // 商品id
    var id = utils.qs('id');

    // 获得商品信息
    $.ajax({
        url: '/api/product/queryProductDetail',
        type: 'get',
        data: {id: id},
        success: function (info) {
            // console.log(info);

            var html = template('productTpl', info);
            // 添加DOM
            $('#product').html(html);

            // 
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });

            // 
            mui('.mui-slider').slider({
                interval: 5000 //自动轮播周期，若为0则不自动播放，默认为0；
            });

            // 选择号码
            $('.p_size').children().on('click', function () {
                $(this).addClass('selected').siblings().removeClass('selected');
            });

            // 修改商品数量
            $('.p_number span').on('click', function () {

                // $(this).parent().find('input')

                var input = $(this).siblings('input');
                var total = $(this).parent().find('b').text();
                total = parseInt(total);

                var num = parseInt(input.val());

                // 减商品数量
                if($(this).is('.jian') && num > 1) {
                    input.val(--num);
                }

                // 加商品数量
                if($(this).is('.jia') && num < total) {
                    input.val(++num);
                }
            })
        }
    })

    // 添加购物车
    $('.btn_addCart').on('click', function () {
        // 商品参数
        var num = $('.num').val().trim();
        var size = $('.p_size').find('.selected').text().trim();

        $.ajax({
            url: '/api/cart/addCart',
            type: 'post',
            data: {productId: id, num: num, size: size},
            success: function (info) {
                console.log(info);

                if(info.success) {
                    mui.toast('添加购物车成功', {
                        duration: 'short',
                        type: 'div'
                    }) 
                }
            }
        })
    })

});