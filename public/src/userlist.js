
define(['jquery', 'template'], function ($, template) {

    // 获取用户列表
    $.ajax({
        url: '/api/user/queryUser',
        type: 'get',
        data: {page: 1, pageSize: 10},
        success: function (info) {
            console.log(info);

            var html = template('list', info);

            $('tbody').html(html);
        }
    })

    // 
    $('table').on('click', '.btn', function () {
        // 缓存当前点击DOM元素
        var _this = $(this);
        // 获取父元素(td)
        var td = $(this).parent();
        // 获取DOM中存的用户ID
        var id = td.attr('data-id');
        // 获取DOM中存的用户的状态
        var status = td.attr('data-status');

        // 1 传 0
        // 0 传 1
        // 0 和 1 切换
        status = Math.abs(status - 1);

        $.ajax({
            url: '/api/user/updateUser',
            type: 'post',
            data: {id: id, isDelete: status},
            success: function (info) {
                // console.log(info)
                // DOM状态
                if(status == 1) {
                    _this.text('启 用');

                    td.prev().text('是');
                } else {
                    _this.text('禁 用');

                    td.prev().text('否');
                }

                // 状态
                td.attr('data-status', status);
                _this.toggleClass('btn-info btn-warning');
            }
        })
    })

})