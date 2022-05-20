本插件是一个[uni_modules钩子脚本](https://uniapp.dcloud.io/uni_modules?id=uni_modulesconfigjson)，仅限uni_modules插件使用
#### 为什么使用 uni_modules_tools
在实际开发中很多插件需要配置文件才可以正常运行，比如uni-id、uni-pay等；
有些配置内容属于密钥，在发表到插件市场的时候我们通常不希望这些配置被暴露。
传统的方式你需要手动备份密钥内容，上传结束后再将配置填回。这样插件作者发表插件会比较不便。

而现在有了 `uni_modules_tools` 只需配置`/uni_modules_tools/config.js`即实现
- 在插件上传之前，自动根据配置改写项目中对应配置。
- 上传结束（成功和失败都触发）后自动恢复项目中的配置。

#### 示例目录结构
<pre>
├─ uni_modules						// 存放uni_module规范的插件。
│	└─uni-config-center
│		└─uniCloud
│			└─cloudfunctions
│				└─common
│					└─uni-config-center
│						└─uni-id
│							└─config.json
├─ manifest.json
├─ uni_modules.config.json		//uni_modules的配置文件
└─ uni_modules_tools
	├─ copy						//用于自动修改配置文件时的，临时备份目录
	├─ config.js				//插件配置文件，下面会有示例说明
	├─ main.js					//插件核心代码，入口文件；你无需修改此文件中的代码，除非你了解内部逻辑
	└─ readme.md 				//插件文档
</pre>


#### 使用方式
`/uni_modules_tools/config.js`的格式为：
```
{
	"文件路径" : {"键名":"改后的内容"}
}
```

- 文件仅支持json格式，如：`manifest.json`、`uni-config-center`下的`config.json`等

使用示例，比如你需要：
- 修改manifest.json文件的appid内容改为：请重新获取appid
- 修改uni_modules/uni-config-center/uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json 文件的内容app-plus -> oauth -> weixin 和 apple 下的 `appid` `appsecret` `apple`值为：`请填写你的自己的appid` `请填写你的自己的appsecret` `请填写你的自己的bundleId`

1. 配置,根目录下的`/uni_modules_tools/config.js`文件，如下：

```
{
	"/manifest.json": {
		"appid": "请重新获取appid"
	},
	"/uni_modules/uni-config-center/uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json": {
		"app-plus": {
			"oauth": {
				"weixin": {
					"appid": "请填写你的自己的appid",
					"appsecret": "请填写你的自己的appsecret"
				},
				"apple": {
					"bundleId": "请填写你的自己的bundleId"
				}
			}
		}
	}
}
```

2. 根目录下的`/uni_modules.config.json`配置如下：
```
{
	"scripts":{
		"preupload": "node uni_modules_tools/main.js change",
		"postupload": "node uni_modules_tools/main.js recovery"
	}
}
```

3. 项目依赖hjson-js需要在uni_modules_tools目录，执行npm install完成依赖的安装

#### 测试方式
- 在项目根目录直接执行 `node uni_modules_tools/main.js change` 	即可测试修改相关配置的效果
- 在项目根目录直接执行 `node uni_modules_tools/main.js recovery` 即可测试恢复相关配置的效果

> 本插件中使用了[hjson-js](https://www.npmjs.com/package/hjson) 感谢@hjson-js的作者