const userData = {
	name: "admin",
	headimgurl: "/static/images/avi.png",
	id: "369*****75",
	phone: "176***2542",
	withdrawable: 536.25,
	coming: 255.88,
	came: 1568.55,
	withdrawed: 756.32
}

const income = {
	month: [{
		order_no: 202005042514821,
		money: 200.25,
		status: 1,
		create_time: '2020.05.04 15:20'
	}, {
		order_no: 202005052514523,
		money: 158.35,
		status: 1,
		create_time: '2020.05.05 22:46'
	}, {
		order_no: 202005062515747,
		money: 357.85,
		status: 1,
		create_time: '2020.05.06 12:36'
	}, {
		order_no: 202005072514141,
		money: 118.75,
		status: 1,
		create_time: '2020.05.07 20:18'
	}],
	today: [{
		order_no: 202005072514141,
		money: 118.75,
		status: 1,
		create_time: '2020.05.07 20:18'
	}, {
		order_no: 202005072514141,
		money: 118.75,
		status: 1,
		create_time: '2020.05.07 20:18'
	}],
	yesterday: [{
		order_no: 202005062515747,
		money: 357.85,
		status: 1,
		create_time: '2020.05.06 12:36'
	}, {
		order_no: 202005062515747,
		money: 357.85,
		status: 1,
		create_time: '2020.05.06 12:36'
	}]
}
const extractList = [{
	extract_no: 20200506250041,
	real_money: 1001.11,
	status: 1,
	create_time: '2020.05.06 12:36'
}, {
	extract_no: 20200506456211,
	real_money: 28.39,
	status: 1,
	create_time: '2020.05.05 18:33'
}, {
	extract_no: 20200506456211,
	real_money: 17.28,
	status: 2,
	create_time: '2020.05.05 18:33'
}, {
	extract_no: 20200506456211,
	real_money: 57.85,
	status: 3,
	create_time: '2020.05.05 18:33'
}]
const pool = {
	pool: "128.28",
	least_money: 10,
	fee: "0.10",
}
export default {
	userData,
	incomeMonth: income.month,
	incomeToday: income.today,
	incomeYesterday: income.yesterday,
	extractList,
	pool
}
