
define(['jquery'], function ($) {

    $('#code').on('click', function () {

        $.ajax({
            url: '/api/user/vCode',
            type: 'get',
            success: function (info) {
                console.log(info);
            }
        })

    })

    $('form').on('submit', function () {

        var _this = $(this);

        $.ajax({
            url:'/api/user/register',
            type: 'post',
            data: _this.serialize(),
            success: function (info) {
                // console.log(info)
                if(info.success) {
                    location.href = '/m/user/login.html';
                }

                if(info.error) {
                    alert(info.message);
                }
            }
        })

        return false;
    })

})