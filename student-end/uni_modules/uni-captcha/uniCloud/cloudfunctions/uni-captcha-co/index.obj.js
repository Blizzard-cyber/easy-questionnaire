// 开发文档: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
const uniCaptcha = require('uni-captcha')
const db = uniCloud.database();
const verifyCodes = db.collection('opendb-verify-codes')
module.exports = {
	async getImageCaptcha({scene}) {
		let {deviceId} = this.getClientInfo();
		let res = await verifyCodes.where({scene,deviceId,state:0}).limit(1).get()
		console.log("res: " + JSON.stringify(res));
		let action = res.data.length?'refresh':'create'
		console.log(action);
		return await uniCaptcha[action]({
			scene,
			width:100,
			height:44
		})
	}
}
