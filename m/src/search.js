
define(['jquery', 'template'], function ($, template) {

    // 
    $('.search_btn').on('click', function () {
        // 获得搜索关键字
        var key = $('.search_input').val().trim();

        if(key == '') return;

        // 将 key 记录在 localStorage 中
        var keys = localStorage.getItem('keys') || [];

        if(typeof keys == 'string') {
            keys = JSON.parse(keys);
        }

        keys.push(key);

        localStorage.setItem('keys', JSON.stringify(keys));

        // 向服务端发起请求
        location.href = '/m/searchList.html?key=' + key;
    });

    // 列出查询历史
    var res = localStorage.getItem('keys') && JSON.parse(localStorage.getItem('keys'));
    
    // 如果本地存储不为空
    if(res) {
        // 调用模板引擎，将本地存储中的历史展示
        var html = template('storage', {storage: res});
        // 更新DOM
        $('#history').html(html);
    }

    // 清空/删除历史
    $('#history').on('click', '.fa-close, .fa-trash', function () {
        // 如果用户点击的为清空
        if($(this).is('.icon_clear')) { // 清空
            // 置空历史
            res = [];
            // 重新存入历史（空数且）
            localStorage.setItem('keys', JSON.stringify(res));

            // 清空DOM（历史）
            $(this).parents('#history').empty();

            return;
        }

        // 删除单条
        
        // 根据历史记录的索引值进行删除
        var index = $(this).attr('data-id');
        // 从数组中根据索引值进行删除
        res.splice(index, 1); 

        // 重新存入本地存储
        localStorage.setItem('keys', JSON.stringify(res));

        // 页面DOM进行删除
        $(this).parent().fadeOut(function () {

            // 如果当前只有1条搜索历史时将
            // 相当于清空历史
            if($(this).siblings().size() == 0) {
                return $(this).parents('#history').empty();
            }

            // 删除当前DOM
            $(this).remove();
        });      

    })
})