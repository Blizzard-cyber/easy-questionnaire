## 用途说明
主要起到人机校验或其他限制调用的作用，如：
- 防止机器冒充人类做暴力破解
- 防止大规模在线注册滥用服务
- 防止滥用在线批量操
- 防止信息被大量采集聚合

常见的业务场景有：
- 注册环节：防止无效垃圾注册，从源头进行管理
- 登录环节：防止撞库攻击、暴力破解，保障用户数据案例
- 短信防刷：减少短信接口被刷情况，减少企业不必要成本
- 互动环节：防止批量垃圾互动信息破坏用户UGC内容生态

## 组成部分
- openDB数据表：[opendb-verify-codes](https://gitee.com/dcloud/opendb/blob/master/collection/opendb-verify-codes/collection.json),用于存储验证码数据。
- 集成：获取验证码、校验验证码、刷新验证码的uniCloud公共模块`uni-captcha`。
- 云对象`uni-captcha-co`集成获取验证码的api，`getImageCaptcha`。
- 集成创建、刷新、显示验证码的云端一体验证码组件

## 目录结构@catalogue
<pre>
├─uni_modules                              			存放[uni_module](/uni_modules)规范的插件。
│	└─uni-captcha
│		├─uniCloud
│		│	├─cloudfunctions						云函数目录
│		│	│	├─common							公共模块目录
│		│	│	│	└─uni-captcha					uni-captcha公共模块
│		│	│	└─uni-captcha-co					集成调用uni-captcha方法的云对象
│		│	└─database
│		│	 	├─opendb-verify-codes.schema.json	验证码数据表
│		│		└─db_init.json						初始化数据库文件
│		└─components								组件目录
│			├─uni-captcha					   		 
│			│	└─uni-captcha.vue					普通验证码组件
│			└─uni-popup-captcha				  		
│				└─uni-popup-captcha.vue				弹出式验证码组件
</pre>


## 原理时序
客户端携带场景值（用于防止不同功能的验证码混用，如：`login`、`pay`）调用云对象`uni-captcha-co`的`getImageCaptcha`方法，向服务端发起获取验证码请求。
方法内部通过查询数据表`opendb-verify-codes`，判断:同一设备id、相同场景值、待验证的记录是否已存在；
- 不存在则：调用公共模块`uni-captcha`的`create`方法创建验证码，此时数据表会创建一条验证状态（字段名：`state`）为待验证（字段值`0`）的记录。
- 已存在则：调用公共模块`uni-captcha`的`refresh`方法刷新这个验证码。此时更新现存记录的验证状态（字段名：`state`）的值为已作废（字段值`2`），然后数据表也会创建一条验证状态（字段名：`state`）为待验证（字段值`0`）的记录。

并向客户端返回：格式为base64的图形验证码资源数据（响应体参数名：captchaBase64）。
客户端得到数据后，显示图形验证码，用户识别后（携带参数：场景值scene、验证码captcha）提交表单，服务端调用公共模块`uni-captcha`的`verify`方法验证是否正确。

补充：如果是clientDB操作，不想在扩展校验函数中依赖公共模块，还可以直接查库校验验证码。

以上即完整的流程，你如果直接使用云端一体组件，仅需配置组件的场景值属性`scene`，即可实现上述功能。

## 组件介绍
### 普通验证码组件
**组件名：uni-captcha**

云端一体组件，内置调用`uni-captcha-co`云对象创建/刷新验证码，支持双向数据绑定。
仅需传入属性`scene`:场景值即可。

组件遵从[easycom组件规范](https://uniapp.dcloud.io/component/#easycom%E7%BB%84%E4%BB%B6%E8%A7%84%E8%8C%83)，使用示例：
```js
<template>
	<uni-captcha scene="场景值" v-model="验证码的值"></uni-captcha>
</template>
```
#### Props:
| 字段         | 类型    | 必填 | 默认值  | 说明                                                         |
| ------------ | ------- | ---- | ------- | ------------------------------------------------------------ |
| scene        | String  | 是   | -       | 使用场景值，用于防止不同功能的验证码混用，如：`login`、`pay` |
| value/v-model| String  | -    | -       | 验证码的值 |


### 弹出式验证码组件
**组件名：uni-popup-captcha**

验证码实现人机校验等作用的同时，降低了用户体验。为了提升用户体验：绝大部分情况下，验证码应当是非常态的,当接口被高频调用的情况下才需要。
另外验证码会使得我们的前端界面设计变得复杂。所以弹出式验证码组件，应需而生。

#### 使用示例：
```js
<template>
	<uni-popup-captcha ref="popup-captcha" @confirm="verifyCaptcha" :scene="formData.scene" v-model="formData.captcha"></uni-popup-captcha>
	<button @click="openPopupCaptcha" >显示弹出式验证码</button>
</template>
<script>
	export default {
		data() {
			return {
				formData:{
					captcha:"",
					scene:"test"
				}
			}
		},
		methods: {
			verifyCaptcha(){
				const uniCaptchaCo = uniCloud.importObject("uni-captcha-co")
				uniCaptchaCo.verifyCaptcha(this.formData).then(e=>{
					uni.showToast({
						title: e.errMsg,
						icon: 'none'
					});
				})
			},
			openPopupCaptcha(){
				this.$refs['popup-captcha'].open()
			}
		}
	}
</script>
```
#### Props:
| 字段         | 类型    | 必填 | 说明                                                         |
| ------------ | ------- | ---- | ------------------------------------------------------------ |
| scene        | String  | 是   | 使用场景值，用于防止不同功能的验证码混用，如：`login`、`pay` |
| value/v-model| String  | -    | 验证码的值 |

#### Events
| 字段			| 类型		|   说明														|
| ------------	| -------	|----------------	|
| confirm		| Function	|  点击确定按钮事件	|




## 公共模块
### 获取验证码@create

用法：`uniCaptcha.create(Object params);`

**参数说明**

| 字段         | 类型    | 必填 | 默认值  | 说明                                                         |
| ------------ | ------- | ---- | ------- | ------------------------------------------------------------ |
| scene        | String  | 是   | -       | 使用场景值，用于防止不同功能的验证码混用，如：`login`、`pay` |
| deviceId     | String  | -    | -       | 设备 id，如果不传，将自动从 uniCloud 上下文获取              |
| width        | Number  | -    | 150     | 图片宽度                                                     |
| height       | Number  | -    | 40      | 图片高度                                                     |
| background   | String  | -    | #FFFAE8 | 验证码背景色，设置空字符`''`不使用背景颜色                   |
| size         | Number  | -    | 4       | 验证码长度，最多 6 个字符                                    |
| noise        | Number  | -    | 4       | 验证码干扰线条数                                             |
| color        | Boolean | -    | false   | 字体是否使用随机颜色，当设置`background`后恒为`true`         |
| fontSize     | Number  | -    | 40      | 字体大小                                                     |
| ignoreChars  | String  | -    | ''      | 忽略那些字符                                                 |
| mathExpr     | Boolean | -    | false   | 是否使用数学表达式                                           |
| mathMin      | Number  | -    | 1       | 表达式所使用的最小数字                                       |
| mathMax      | Number  | -    | 9       | 表达式所使用的最大数字                                       |
| mathOperator | String  | -    | ''      | 表达式所使用的运算符，支持 `+`、`-`。不传随机使用            |
| expiresDate  | Number  | -    | 180     | 验证码过期时间(s)                                            |

**响应参数**

| 字段          | 类型   | 说明                |
| ------------- | ------ | ------------------- |
| errCode          | Number | 错误码，0 表示成功  |
| errMsg       | String | 详细信息            |
| captchaBase64 | String | 验证码：base64 格式 |

`注意：`

- 重新生成后，上条验证码不作废
- 刷新验证码，上条验证码作废
- 如果想替换字体，请保证字体格式为 `.ttf` 且包含 `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-` 字符

### 校验验证码@verify

用法：`uniCaptcha.verify(Object params);`

**参数说明**

| 字段     | 类型   | 必填 | 默认值 | 说明                                            |
| -------- | ------ | ---- | ------ | ----------------------------------------------- |
| scene    | String | 是   | -      | 类型，用于防止不同功能的验证码混用              |
| captcha  | String | 是   | -      | 验证码                                          |
| deviceId | String | -    | -      | 设备 id，如果不传，将自动从 uniCloud 上下文获取 |

**响应参数**

| 字段    | 类型   | 说明               |
| ------- | ------ | ------------------ |
| errCode    | Number | 错误码，0 表示成功 |
| errMsg | String | 详细信息           |

`注意：`

- 若提示验证码失效，请重新获取

### 刷新验证码@refresh

用法：`uniCaptcha.refresh(Object params);`

**参数说明**

| 字段     | 类型   | 必填 | 默认值 | 说明                                            |
| -------- | ------ | ---- | ------ | ----------------------------------------------- |
| scene    | String | 是   | -      | 类型，用于防止不同功能的验证码混用              |
| deviceId | String | -    | -      | 设备 id，如果不传，将自动从 uniCloud 上下文获取 |

**响应参数**

| 字段          | 类型   | 说明                |
| ------------- | ------ | ------------------- |
| errCode          | Number | 错误码，0 表示成功  |
| errMsg       | String | 详细信息            |
| captchaBase64 | String | 验证码：base64 格式 |

`注意：`

- 支持传入 create 方法的所有参数，如果不传，则自动按照 deviceId 匹配上次生成时的配置生成新的验证码

## 错误码

_详细信息请查看 message 中查看_

|  模块  | 模块码 | 错误代码 |        错误信息         |
| :----: | :----: | :------: | :---------------------: |
| 验证码 |  100   |    01    | （10001）验证码生成失败 |
|        |        |    02    | （10002）验证码校验失败 |
|        |        |    03    | （10003）验证码刷新失败 |