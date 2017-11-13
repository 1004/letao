
define(['jquery'], function ($) {

    // var path = location.search;
    
    var search = location.search;

    var reg = /\?path=(.+)/;

    var path = reg.exec(search) && reg.exec(search)[1];

    path = path || '/m/index.html';

    $('form').on('submit', function () {

        var _this = $(this);

        $.ajax({
            url: '/api/user/login',
            type: 'post',
            data: _this.serialize(),
            success: function (info) {
                console.log(info);
                if(info.success) {
                    location.href = path;
                }
            }
        });

        return false;
    })



})