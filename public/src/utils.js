
define(['jquery'], function ($) {

    $.ajax({
        // /api http://localhost:3000
        url: '/api/employee/checkRootLogin',
        type: 'get',
        success: function (info) {
            if(info.error) {
                // location.href = '/login.html';
            }
        }
    })

})