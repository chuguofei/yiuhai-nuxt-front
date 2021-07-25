export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    next();
    if (process.client) {
      // 百度统计
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?790c6a44700c3fd27d0030024fba7cb9";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    }
  });
};
