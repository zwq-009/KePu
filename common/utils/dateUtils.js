/**
 * 使用说明
 * 1. 引用:
 * import dateUtils from '@/common/utils/dateUtils.js';
 */

/**
 * 圈子时间格式
 * @param {Object} dateString 
 * 注意:参数如果兼容手机端 dateString必须是时间时间戳或者 “yyy-MM-DD”格式;H5端dateString格式不限制
 * 
 */
function fromCurrentTime(dateString) {
	dateString = parseInt(dateString) * 1000;
	let date = new Date(dateString).getTime();
	let currentDate = new Date().getTime();
	let spaceTime = Math.abs(currentDate - date) / 1000; //把相差的毫秒数转换为秒数
	if (spaceTime < 60) {
		// 间隔时间小于1小时
		// 返回分钟数
		return '刚刚';
	}
	if (spaceTime < 3600) {
		// 间隔时间小于1小时
		// 返回分钟数
		let time = parseInt(spaceTime / 60)
		return time + '分钟前';

	} else if (spaceTime < 86400) {
		// 间隔时间小于1天
		// 返回小时数
		let time = parseInt(spaceTime / 60 / 60);
		return time + '小时前';
	} else if (spaceTime < 172800) {
		// 间隔时间小于2天
		// 返回天数
		let time = parseInt(spaceTime / 60 / 60 / 24);
		return '昨天';
	} else {
		// 间隔时间大于2天
		let time = parseInt(spaceTime / 60 / 60 / 24);
		return time + '天前';
	}

}

/**
 *  距离当前时间天数
 * @param {Object} dateString 
 * 注意:参数如果兼容手机端 dateString必须是时间时间戳或者 “yyy-MM-DD”格式;H5端dateString格式不限制
 * 
 */
function diffDay(dateString) {
	let startDate = new Date();
	let endDate = new Date(dateString);
	return parseInt(Math.abs(endDate - startDate) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数
}




/**
 * 格式化日期  
 * @param {Object} fmt
 * @param {Object} date
 */
function dateFormat(fmt, date) {
	console.log(fmt,date)
	let ret;
	const opt = {
		"Y+": date.getFullYear().toString(), // 年
		"m+": (date.getMonth() + 1).toString(), // 月
		"d+": date.getDate().toString(), // 日
		"H+": date.getHours().toString(), // 时
		"M+": date.getMinutes().toString(), // 分
		"S+": date.getSeconds().toString() // 秒
		// 有其他格式化字符需求可以继续添加，必须转化成字符串
	};
	for (let k in opt) {
		ret = new RegExp("(" + k + ")").exec(fmt);
		if (ret) {
			fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
		};
	};
	return fmt;
}

const dateUtils = {
	fromCurrentTime: fromCurrentTime,
	diffDay: diffDay,
	dateFormat:dateFormat,
	// gotoAppSetting: gotoAppPermissionSetting
}
module.exports = dateUtils
