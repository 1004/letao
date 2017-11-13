
define(['jquery', 'template'], function ($, template) {

    var html;
    // 获取顶级分类
    $.ajax({
        url: '/api/category/queryTopCategory',
        type: 'get',
        success: function (info) {
            // console.log(info)
            // 调用模板引擎
            html = template('topTpl', info);
            // 更新DOM
            $('#top').html(html);
            
            // 默认取出第一个顶级分类的子分类
            $('#top').find('li').eq(0).trigger('click');
        }
    });

    // 点击获取二级分类
    $('#top').on('click', 'li', function () {
        // 顶级分类 id
        var id = $(this).attr('data-id');
        // 获得一级分类名称
        var title = $(this).attr('data-title');

        // 更改当前点击元素的样式
        $(this).addClass('now').siblings().removeClass('now');

        $.ajax({
            url: '/api/category/querySecondCategory',
            type: 'get',
            data: {id: id},
            success: function (info) {
                // 将一级分类标题传入模板
                info.title = title;
                // 调用模板引擎
                html = template('childTpl', info);
                // 更新DOM
                $('#child').html(html);
            }
        })
    })



})