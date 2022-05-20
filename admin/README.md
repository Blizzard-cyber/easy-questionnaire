
# 易调研平台管理端

> 账号：admin 密码admin

## 实现功能

- 首页采用G2 可视化引擎绘制，大屏数据可视化展板内容使用echart绘制
- 模仿iview左菜单栏的收缩
- 使用mock数据模拟后台接口
- iview表格，render函数使用
- 路由拦截，localstorage存储用户名密码
- 大屏数据-新型冠状病毒大数据可视化展板
- 暂时只有前端部分，目前还处于完善阶段

## 食用步骤

需要安装nodejs 通过npm\yarn命令操作

``` bash
# 拷贝到本地
git clone https://github.com/Blizzard-cyber/easy-questionnaire.git

# npm安装所有依赖
npm install  

# npm启用本地开发服务器
npm run serve  

# npm打包，生成的静态页面在项目的dist文件夹下
npm run build  
```

## 参考

- [iview](http://v1.iviewui.com/)
- [G2 可视化引擎](https://antv-g2.gitee.io/zh/)
- [echart](https://www.echartsjs.com/zh/index.html)

## License

[MIT License](https://github.com/SaberInoryKiss/iview-saber/blob/master/LICENSE)
