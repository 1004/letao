
require.config({
    baseUrl: '/m',
    paths: {
        // 指定模块名称
        jquery: 'assets/jquery/jquery.min',
        cookie: 'assets/jquery-cookie/jquery.cookie',
        template: 'assets/artTemplate/template-web',
        mui: 'res/mui/js/mui.min'
    },
    shim: {
        // 包装非模块
    }
})