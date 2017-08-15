/**
 * [common 公共效果]
 * @authors luzhm (luzhm@example.org)
 * @date    2016-12-30 21:03:44
 * @version v1.0.0.0
 */
 /**
 * 1.[表单验证规则]
 * 2.[datagrid列表获取数据]
 * 3.[easyui汉化文字]
 * 3.[Input 输入替换]
 * 4.[表单取消和启用验证] 
 * 5.[textarea字数统计和长度截取]  
 * 6.[日期设置和格式化]  
 * 7.[预览图片功能]  
 * 8.[图片缩放功能]
 * 9.[列表查看返回位置功能]
 * 10.[富文本]  
 * 11.[省市区联动]
 * 12.[文字滚动效果]
 * 13.[展开和合并] 
 * 14.[图片剪裁效果]
 * 15.[多个图片剪裁效果]
 * 16.[文件图片上传]
 * 17.[添加多行操作]
 * 18.[列表复选框运用]
 * 19.[data加载本地数据进行分页] 
 * 20.[ajax发送消息]  
 * 21.[提交数据操作]
 * 22.[弹框显示]
 * 23.[生成弹框显示]
 * 24.[生成弹框显示]
 */
/**
 * [表单验证规则] 
 * 搜索和表单验证
*/
function validExtend() {
	var regx = {
		monthday : /^[1|2|3][0-9]?$/,
		plusint : /^([1-9][\d]{0,7})$/,
		plusnum : /^([1-9][\d]{0,9}|0)(\.[\d]{1,})?$/,
		numletter : /^[0-9a-zA-Z]+$/,
		tele : /^((400)-(\d{3})-(\d{4}))|(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/,
		//^(0\d{3,4}-\d{7,8})$|( ^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$|
		tele2 :/^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/,
		telephone :/^(133|153|180|181|189|170|177|130|131|132|155|156|145|185|186|176|185|134|135|136|137|138|139|150|151|152|158|159|182|183|184|157|187|188|147|178)[0-9]{8}$/,
		phone : /^1\d{10}$/,
		tradetime : /^[\d\-\:]+$/,
		phoneblurry : /^[\d\-]+$/,
		money : /^([1-9][\d]{0,}|0)(\.[\d]{1,3})?$/,
		cutmoney :  /^([1-9]?[\d]?(\.[\d]{1,2})?)?$/,
		profit :  /^\d{1,2}$|^\d{1,2}\.\d{1,3}$/,
		moneysix : /^([1-9][\d]{0,}|0)(\.[\d]{1,6})?$/,
		moneyfl : /^\d+(\.)?(\.\d+)?$/,
		numletchi : /^[\u4e00-\u9fa5a-zA-Z0-9]+$/,
		numletchinozero : /^[\u4e00-\u9fa5a-zA-Z][\u4e00-\u9fa5a-zA-Z0-9]*$/,
		numletchipoint : /^[\u4e00-\u9fa5a-zA-Z0-9\.]+$/,
		numletpunchina: /^[\u4e00-\u9fa5a-zA-Z0-9,，.。:;：；\!\！\“\”\？\?\$%@#\《\》\<\>]+$/,
		numpoint : /^[0-9\.]+$/,
		chinesepoint : /^[\u4e00-\u9fa5a-zA-Z\·]{1,}$/,
		chinese : /^[\u4e00-\u9fa5]+$/,
		letchi : /^[\u4e00-\u9fa5a-zA-Z]+$/,
		chiEngPoint : /^([\u4e00-\u9fa5]{2,40})$|^([\u4e00-\u9fa5]{1,20})\·([\u4e00-\u9fa5]{1,20})$|^([a-zA-z]{2,40})$|^([a-zA-z]{1,20})\·([a-zA-z]{1,20})$/,
		integer : /^\d{1,}$/,
		integer6 : /^\d{6}$/,
		integernozero : /^[1-9]\d*$/,
		letter : /^[a-zA-Z]+$/,
		numlettMust : /^(\d+[a-zA-Z]\w*)|([a-zA-Z]+\d\w*)$/,
		verno : /^([0-9]{1,2}[.]){3}[0-9]{1,2}$/,
		app : /^.*[^a][^b][^c]\.(?:app)$/,
		downloadurl : /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
		apk : /^.*[^a][^b][^c]\.(?:apk)$/,
		numchina : /^[\u4e00-\u9fa50-9]+$/,
		code : /^(\d+[a-zA-Z]\w*)|([a-zA-Z]+\d\w*)$/,
		siteurl : /^((https|http|ftp|rtsp|mms)?:\/\/)?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/,
		pass :/^[a-zA-Z0-9]|[!\$&'\(\)\*\+,.;:}{\/\=-@#~]$/,
		percentage : /^[1-9]?[0-9]?$/,
		origizate : /^[0-9a-zA-Z\-]+$/
	};

	$.extend($.fn.validatebox.defaults.rules, {
		length : {//长度限制
			validator : function(_44e, _44f) {
				var len = $.trim(_44e).length;
				if (_44f.length == 1) {

					if (len != _44f[0]) {
						$.fn.validatebox.defaults.rules.length.message = "只能输入{0}位";
						return false;
					} else {
						return true;
					}
				} else {

					if (len < _44f[0] || len > _44f[1]) {
						$.fn.validatebox.defaults.rules.length.message = "只能输入{0}-{1}位"
						return false;
					} else {
						return true;
					}
				}

			},
			message : ""
		},
		mdM : {//日期框选择
			validator : function(value, param) {
				var time = $(param[0]).datetimebox('getValue');
				var d1 = $.fn.datebox.defaults.parser(time);
				var d2 = $.fn.datebox.defaults.parser(value);
				if (value.length > 0 && time.length > 0) {
					if ((d2 - d1) / (1000 * 60 * 60 * 24) > 31) {// 不在一个月内
						$.fn.validatebox.defaults.rules.mdM.message = '不允许超过31天';
						return false;
					} else {
						if (param == "#startTime"
								|| param[0].indexOf("#start") != -1
								|| param[0].indexOf("#begin") != -1) {
							if (d2 < d1) {
								$.fn.validatebox.defaults.rules.mdM.message = '结束日期不得早于开始日期。'
							};
							return d2 >= d1;
						} else {
							if (d2 > d1) {
								$.fn.validatebox.defaults.rules.mdM.message = '开始日期不得早于结束日期。'
							};
							return d2 <= d1;
						}
					}
				} else {
					return true;
				}
			},
			message : ""
		},
		mdMonth : {
			validator : function(value, param) {
				var time = $(param[0]).datetimebox('getValue');
				var d1 = $.fn.datebox.defaults.parser(time);
				var d2 = $.fn.datebox.defaults.parser(value);
				if (value.length > 0 && time.length > 0) {
					if (d2.getYear() != d1.getYear()
							|| d2.getMonth() != d1.getMonth()) {// 不在一个月内
						$.fn.validatebox.defaults.rules.mdMonth.message = '不允许跨月选择';
						return false;
					} else {
						if (param == "#startTime"
								|| param[0].indexOf("#start") != -1
								|| param[0].indexOf("#begin") != -1) {
							if (d2 < d1) {
								$.fn.validatebox.defaults.rules.mdMonth.message = '结束日期必须大于或等于起始日期。'
							};
							return d2 >= d1;
						} else {
							if (d2 > d1) {
								$.fn.validatebox.defaults.rules.mdMonth.message = '结束日期必须大于或等于起始日期。'
							};
							return d2 <= d1;
						}
					}
				} else {
					return true;
				}
			},
			message : ""
		},
		monthDay : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.monthday.test(v);
			},
			message : '请输入1到31的整数'
		},
		discount : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				if(regx.money.test(v) && v <= 0.99 && v >= 0.1){
					return true;
				}
				return false;
			},
			message : '输入的范围是0.1-0.99'
		},
		plusNum : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.plusnum.test(v);
			},
			message : '请输入10位以内的正数'
		},
		integer : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.integer.test(v);
			},
			message : '只能输入整数数字'
		},
		phoneBlurry : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				
				return dj =regx.phoneblurry.test(v);
			},
			message : '只能输入数字和横线'
		},
		tradeTime : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				
				return dj =regx.tradetime.test(v);
			},
			message : '只能输入数字冒号和横线'
		},
		integerNoZero : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.integernozero.test(v);
			},
			message : '只能输入数字整数,不能输入0'
		},
		plusInt : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.plusint.test(v);
			},
			message : '请输入8位以内的正整数'
		},
		certNum : {// 证件号码
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.numletter.test(v);
			},
			message : '请输入数字或字母'
		},
		parcenty : {// 百分比
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.percentage.test(v);
			},
			message : '请输入1-99的整数'
		},
		tele : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.tele.test(v);
			},
			message : '请输入正确的电话号码'
		},
		origizate : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.origizate.test(v);
			},
			message : '请输入由9位数字或字母与“-”组成的组织机构代码！'
		},
		telePhone : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj =regx.telephone.test(v) || regx.tele2.test(v);
			},
			message : '请输入正确的电话格式'
		},
		teleSpecial : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e),
					reg = new RegExp(_44f[0]);
				return  dj = reg.test(v);
			},
			message : '请输入正确的手机号码'
		},
		phone : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.phone.test(v);
			},
			message : '请输入正确的手机号码'
		},
		numLetChina : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.numletchi.test(v);
			},
			message : '请输入汉字，数字或字母'
		},
		numLetChinaNoZero : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.numletchinozero.test(v);
			},
			message : '请输入以中英文开头的汉字，数字或字母'
		},
		numLetChinaPoint : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.numletchipoint.test(v);
			},
			message : '请输入中英文,数字或点'
		},
		numPoint : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.numpoint.test(v);
			},
			message : '请输入数字或点'
		},
		numLetpunChina : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.numletpunchina.test(v);
			},
			message : '请输入中英文、数字及标点符号'
		},
		chinese : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.chinese.test(v);
			},
			message : '请输入汉字'
		},
		personName:{
			validator : function(_44e, _44f) {
				var v = _44e;
				return dj = regx.chinesepoint.test(v);
			},
			message : '请输入中英文或点'
		},
		chiEng:{
			validator : function(_44e, _44f) {
				var v = _44e;
				return dj = regx.chiEngPoint.test(v);
			},
			message : '请输入中英文或点'
		},
		letchi : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.letchi.test(v);
			},
			message : '请输入汉字或字母'
		},
		numChina : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.numchina.test(v);
			},
			message : '只能输入汉字或数字'
		},
		money : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e).replace(',', '');
				return dj = regx.money.test(v) || regx.integer.test(v);
			},
			message : '只能输入数字'
		},
		moneysix : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e).replace(',', '');
				return dj = regx.moneysix.test(v);
			},
			message : '只能输入数或者小数后六位'
		},
		customMoney :{
			validator : function(_44e, _44f) {
				var v = $.trim(_44e).replace(',','');
				return dj = regx.cutmoney.test(v) && v!=0;
			},
			message : '请输入正确的数值'
		},
		profit :{
			validator : function(_44e, _44f) {
				var v = $.trim(_44e).replace(',','');
				return dj = regx.profit.test(v) && v!=0;
			},
			message : '请输入正确的数值'
		},
		moneyfloat : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e).replace(',', '');

				return dj = regx.moneyfl.test(v);
			},
			message : '只能输入数字'
		},
		selectValueRequired : {
			validator : function(value, param) {
				if (value == "" || value.indexOf('选择') >= 0
						|| value.indexOf('全部') >= 0) {
					return false;
				} else {
					return true;
				}
			},
			message : '必选'
		},
		letter : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.letter.test(v);
			},
			message : '只能输入字母'
		},
		verNo : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.verno.test(v);
			},
			message : '输入格式错误'
		},
		downloadurl : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.downloadurl.test(v);
			},
			message : '请上传正确格式的下载地址'
		},
		siteUrl : {
			validator : function(_44e, _44f) {
				var v = _44e;
				var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
					+ "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" // ftp的user@
					+ "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
					+ "|" // 允许IP和DOMAIN（域名）
					+ "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
					+ "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
					+ "[a-z]{2,6})" // first level domain- .com or .museum
					+ "(:[0-9]{1,4})?" // 端口- :80
					+ "((/?)|" // a slash isn't required if there is no file name
					+ "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
					var re = new RegExp(strRegex);
					return re.test(v);
				//return dj = regx.siteurl.test(v);
			},
			message : '请上传正确格式的网址'
		},
		email : {
			validator : function(_44c) {
				return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
						.test(_44c);
			},
			message : "只能输入数字、字母或字符"
		},
		equals : {
			validator : function(value, param) {
				return $(param[0]).val() == value;
			},
			message : ''
		},
		code : {
			validator : function(_44e, _44f) {
				var v = $.trim(_44e);
				return dj = regx.code.test(v);
			},
			message : '密码错误，请重新输入'
		},
		ajaxUserPwd : {
			validator : function(_450, _451) {
				var data = {};
				var _452 = $.ajax({
							url : '/operator/checkPassword',
							dataType : "json",
							data : data,
							async : false,
							cache : false,
							type : "post"
						}).responseText;
				return _452 == "true";
			},
			message : "密码错误"
		},
		pass : {
	        	validator : function(_44e, _44f) {
					var v = $.trim(_44e);
					return dj = regx.pass.test(v);
				},
				message : ''
	    },
		validateIdCard :{
			validator:function(value, param){
			/*
			 * 身份证15位编码规则：dddddd yymmdd xx p
			 * dddddd：6位地区编码
			 * yymmdd: 出生年(两位年)月日，如：910215
			 * xx: 顺序编码，系统产生，无法确定
			 * p: 性别，奇数为男，偶数为女
			 * 
			 * 身份证18位编码规则：dddddd yyyymmdd xxx y
			 * dddddd：6位地区编码
			 * yyyymmdd: 出生年(四位年)月日，如：19910215
			 * xxx：顺序编码，系统产生，无法确定，奇数为男，偶数为女
			 * y: 校验码，该位数值可通过前17位计算获得
			 * 
			 * 前17位号码加权因子为 Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ]
			 * 验证位 Y = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ]
			 * 如果验证码恰好是10，为了保证身份证是十八位，那么第十八位将用X来代替
			 * 校验位计算公式：Y_P = mod( ∑(Ai×Wi),11 )
			 * i为身份证号码1...17 位; Y_P为校验码Y所在校验码数组位置
			 */
			//15位和18位身份证号码的正则表达式
			var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;

			//如果通过该验证，说明身份证格式正确，但准确性还需计算
			if (regIdCard.test(value)) {
				if (value.length == 18) {
					var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //将前17位加权因子保存在数组里
					var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
					var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
					for ( var i = 0; i < 17; i++) {
						idCardWiSum += value.substring(i, i + 1) * idCardWi[i];
					}

					var idCardMod = idCardWiSum % 11;//计算出校验码所在数组的位置
					var idCardLast = value.substring(17);//得到最后一位身份证号码

					//如果等于2，则说明校验码是10，身份证号码最后一位应该是X
					if (idCardMod == 2) {
						if (idCardLast == "X" || idCardLast == "x") {
							return true;
						} else {
							return false;
						}
					} else {
						//用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
						if (idCardLast == idCardY[idCardMod]) {
							return true;
						} else {
							return false;
						}
					}
				}
				return true;
			}
			return false;
			},
			message:'请输入正确的身份证号码！'
		}

	});
	//删除和恢复验证
	$.extend($.fn.validatebox.methods, {
	    remove: function(jq, newposition){
	        return jq.each(function(){
	            $(this).removeClass("validatebox-text validatebox-invalid").unbind('focus').unbind('blur');  
	        });    
	    },  
	    reduce: function(jq, newposition){
	        return jq.each(function(){
	           var opt = $(this).data().validatebox.options;
	           $(this).addClass("validatebox-text").validatebox(opt);
	        });
	    }
	});
}
/**
 * 8.[datagrid列表获取数据]
*/
var totalPage=0,totalNum = 0;
// 列表的公用方法
var eb = {
	loadFilter : function(data) {
            var value = {
                total : data.succ ? data.total : 0,
                rows : [],
                footer : []
            };
            if (data.succ) {
                if (data.records && data.records.length) {
                    for (var i = 0; i < data.records.length; i++) {
                        var o = {};
                        eb._loadArray(data.records[i], o, "");
                        value.rows.push(o);
                    }
                }
                if (data.count && data.count.length) {
                    for (var i = 0; i < data.count.length; i++) {
                        var o = {};
                        eb._loadArray(data.count[i], o, "");
                        value.footer.push(o);
                    }
                }
            }
            if (data.records.length == 0) {
                //$('.ui-nodata').removeClass('fn-hide');
                $('.datagrid-pager').css('visibility', 'hidden');
            } else {
                //$('.ui-nodata').addClass('fn-hide');
                $('.datagrid-pager').css('visibility', 'visible');
            }
            return value;
        },
	_loadArray : function(data, o, pre) {
		if (pre)
			pre = pre + ".";
		for (var att in data) {
			var row = data[att];
			if (typeof(row) == "object") {
				eb._loadArray(row, o, pre + att);
			} else {
				o[pre + att] = row;
			}

		}
	},
	form2Json : function(id) {
		var arr = $("#" + id).serializeArray()
		var jsonStr = "";
		jsonStr += '{';
		$.each(arr, function(i, field) {
					if (field.value) {
						jsonStr += '"' + field.name + '":"' + field.value
								+ '",'
					}
				});
		jsonStr = jsonStr.length > 1 ? jsonStr.substring(0,
				(jsonStr.length - 1)) : jsonStr;
		jsonStr += '}';
		var json = $.parseJSON(jsonStr);
		return json
	},
	doExcel : function(url, id) {
		var strP = $("#" + id).serialize();
		location.href = url + '?' + strP;
	},
	form2J : function(id) {
		var o = {};
		var a = $("#" + id).serializeArray();
		$.each(a, function() {
					if (o[this.name]) {
						if (!o[this.name].push) {
							o[this.name] = [o[this.name]];
						}
						o[this.name].push(this.value || '');
					} else {
						o[this.name] = this.value || '';
					}
				});
		return o;
	},
	parseParam : function (id) {
		var str = $("#"+id).serialize();
        var ret = {},
            parts = (str + "").replace(/\+/g," ").split("&"),
            len = parts.length,
            i = 0, p,
            add = function (k,v) {
                typeof ret[k] !== "undefined" ?
                    $.isArray(ret[k]) ? ret[k].push(v) : ret[k] = [ret[k],v]
                    : ret[k] = v;
            };

        for (; i < len; i++) {
            if (parts[i]) {
                p = parts[i].split("=");
                add(decodeURIComponent(p[0]),decodeURIComponent(p[1]));
            }
        }
        return ret;
    },
	form2obj : function(id) {
		var a = $("#" + id).serialize();
		return a;
	},
	html_encode : function(str)   {   
		 	 var s = ""; 
		     if (str == undefined) return "";   
		     s = str.replace(/&/g, "&gt;");   
		     s = s.replace(/</g, "&lt;");   
		     s = s.replace(/>/g, "&gt;");   
		     s = s.replace(/ /g, "&nbsp;");   
		     s = s.replace(/\'/g, "&#39;");   
		     s = s.replace(/\"/g, "&quot;");   
		     s = s.replace(/\n/g, "<br>");   
		     return s;   
	},
	checksum : function(chars) { 
		 var sum = 0;  
		 for (var i=0; i<chars.length; i++) {  
		 var c = chars.charCodeAt(i);  
			 if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {  
			 	sum++;  
			 }else{      
			 	sum+=2;  
			 }  
		 } 
		 return sum; 
	}   
};
//分页
function pageAction() {
	var page = $("#dg-list").datagrid("getPager");
	$(page).pagination({
		total : 10,
		//currentPage : 1,
		page : 2,
		//pageSize : 10,
		size: 10,
		displayMsg : "",
		layout : ['list', 'sep', 'first', 'prev', 'links', 'next', 'last',
				'manual'],
		beforePageText : '<span class="ui-page-text ui-page-fir">共{pages}页</span>  <span class="ui-page-text">去第</span>',
		afterPageText : '<span class="ui-page-text ui-page-last">页</span>',
		showPageList : false
	});
}
// 排序要显示箭头的，以数组形式传
function sortCell(arr){
	for(var i=0;i<arr.length;i++){
		$('.datagrid-header td[field="'+arr[i]+'"]').find(".datagrid-cell").addClass('datagrid-sort-desc');
	}
}
// 分页样式
function pageCls() {
	$('.pagination-first').text('首页');
	$('.pagination-prev').text('上一页');
	$('.pagination-next').text('下一页');
	$('.pagination-last').text('末页');
	$('.datagrid-pager').find('td').each(function(index) {
				if (index == 0 || index == 4) {
					$(this).find('.l-btn').css({
								'margin-left' : '10px',
								'border-right' : 0
							});
				}
				if (index == 3) {
					$(this).find('.l-btn').css('border-right', 0);
				}
	});
	$('.ui-page-fir').text('共'+totalPage+'页,共'+totalNum+'条');
	
	//列表操作列显示正常
	var listopt = $('.datagrid-view2 tr td:last-child').find('div');
	if(listopt.length){
		listopt.addClass('ui-optionswd');
	}
	
}
//搜索重置
function clearForm(form){
    if(!form){
        form=$('#search-ff');
    }
    form.form('clear');
    form.form('reset');
    // form.form('clear');
}
// 搜索提交
function submitForm(form, table,type) {
    
    if (!form) {
        form = $('#search-ff');
    }
    if (!table) {
        table = $("#dg-list");
    }
    if (form.form('validate')) {
        // eb.backToFstPage("#datagrid");
        table.datagrid({
                    queryParams : spliceForm(form,type)
                });
        pageAction();
    }else{
        //显示日期提示语
        form.find(".validatebox-text[readonly=readonly]").trigger("mouseenter");
    }
    if( type == 'sqecial'){
        moreseleList.changeMessData([]);
    }
}
//针对表单里面有隐藏数据的问题
function spliceForm(form,type,listdata){
	var datas = {},formdata = {};
	if( type == 'hideform'){
		if( listdata == 'list'){
			formdata = eb.form2Json("search-ff");
		}else{
			formdata = eb.form2Json(form.attr('id'));
		}
		datas = $.extend({},formdata,eb.form2Json('hideForm'));
		
	}else{
		datas = eb.form2Json(form.attr('id'));
		
	}
	return datas;
}
/**
 * [easyui汉化文字] 
 * 汉化提示语
 */
if ($.fn.calendar){
    $.fn.calendar.defaults.weeks = ['日','一','二','三','四','五','六'];
    $.fn.calendar.defaults.months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
}
if ($.fn.validatebox){
    $.fn.validatebox.defaults.missingMessage = '请输入';
}
if ($.fn.validatebox){
    $.fn.validatebox.defaults.missingMessage = '请输入';   
}
if ($.fn.numberbox){
    $.fn.numberbox.defaults.missingMessage = '请输入';
}
if ($.fn.combobox){
    $.fn.combobox.defaults.missingMessage = '请输入';
}
if ($.fn.combotree){
    $.fn.combotree.defaults.missingMessage = '请输入';
}
if ($.fn.combogrid){
    $.fn.combogrid.defaults.missingMessage = '请输入';
}
if ($.fn.datebox) {
    $.fn.datebox.defaults.currentText = '今天';
    $.fn.datebox.defaults.closeText = '关闭';
    $.fn.datebox.defaults.okText = '确定';
    $.fn.datebox.defaults.missingMessage = '请输入';
    $.fn.datebox.defaults.formatter = function(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        function formatNumber(value) {
            return (value < 10 ? '0' : '') + value;
        }
        return y + '-' + formatNumber(m) + '-' + formatNumber(d);
    };
    $.fn.datetimebox.defaults.formatter = function(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var M = date.getMinutes();
        var s = date.getSeconds();
        function formatNumber(value) {
            return (value < 10 ? '0' : '') + value;
        }
        return y + '-' + formatNumber(m) + '-' + formatNumber(d) + ' ' + formatNumber(h)
                + ':' + formatNumber(M) + ':' + formatNumber(s);
    };
    $.fn.datebox.defaults.parser = function(s) {
        if (!s)
            return new Date();
        var ss = s.split('-');
        var y = parseInt(ss[0], 10);
        var m = parseInt(ss[1], 10);
        var d = parseInt(ss[2], 10);
        if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
            return new Date(y, m - 1, d);
        } else {
            return new Date();
        }
    };
}
if ($.fn.datetimebox) {
    $.fn.datetimebox.defaults.currentText = '今天';
    $.fn.datetimebox.defaults.closeText = '关闭';
    $.fn.datetimebox.defaults.okText = '确定';
    $.fn.datetimebox.defaults.missingMessage = '请输入';
}
/**
 * [Input 输入替换]
 * @type {Object}
 */
var Input = {
    /**
     * [clearNoPrice 小数点两位]
     * @param  {[Object]} obj [输入对象]
     * @return {[type]}     [description]
     */
    clearNoPrice: function(obj) {
        obj.value = obj.value.replace(/^[0][0-9]/g, "") //清楚以0开始的非小数的字符
        obj.value = obj.value.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
        obj.value = obj.value.replace(/^\./g, ""); //验证第一个字符是数字而不是
        obj.value = obj.value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
        obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        obj.value = obj.value.replace(/^(\d+)\.(\d\d).*$/, '$1.$2'); //保留两位小数
    },
    /**
     * [clearNoInt 非0整数]
     * @param  {[Object]} obj [输入对象]
     * @return {[type]}     [description]
     */
    clearNoInt: function(obj) {
        obj.value = obj.value.replace(/^[0]/g, "")
        obj.value = obj.value.replace(/\D/g, '')
    },
    /**
     * [clearNoChinese 只能输入英文字母和数字,不能输入中文]
     * @param  {[Object]} obj [输入对象]
     * @return {[type]}     [description]
     */
    clearNoChinese: function(obj) {
        obj.value = obj.value.replace(/[^\w\.\/]/ig, '')
    },
    /**
     * [clearNoInt 整数]
     * @param  {[Object]} obj [输入对象]
     * @return {[type]}     [description]
     */
    clearNoInteger: function(obj) {
        obj.value = obj.value.replace(/\D/g, '')
    },
     /**
     * [clearNoInt 非0整数]
     * @param  {[Object]} obj [输入对象]
     * @return {[type]}     [description]
     */
	limeDecima2 : function(obj) {
		// 限制小数点后两位
		$(obj).val(obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'));
	},
	/**
     * [clearNoInt 小数点后一位]
     * @param  {[Object]} obj [输入对象]
     * @return {[type]}     [description]
    */
	limeDecima1 : function(obj) {
		$(obj).val(obj.value.replace(/^(\-)*(\d+)\.(\d).*$/, '$1$2.$3'));
	},
	/**
     * [clearNoInt 小数点后三位]
     * @param  {[Object]} obj [输入对象]
     * @return {[type]}     [description]
    */
	limeDecima3 : function(obj) {
		$(obj).val(obj.value.replace(/^(\-)*(\d+)\.(\d\d\d).*$/, '$1$2.$3'));
	},
	/**
     * [clearNoInt 小数点后6位]
     * @param  {[Object]} obj [输入对象]
     * @return {[type]}     [description]
    */
	limeDecima6 : function(obj) {
		obj.value = obj.value.replace(/^[0]/g, "");
		obj.value = obj.value.replace(/\D/g, "");
		$(obj).val(obj.value.replace(/^(\-)*(\d+)\.(\d{6}).*$/, '$1$2.$3'));
	}
}
/**
 * [表单取消和启用验证]
 * @param  {[Object]} obj [输入对象]
 * @return {[type]}     [description]
*/
function checkToggle(eleshow,eleshide){
	eleshow = $(eleshow);
	eleshow = $(eleshide);
	//显示元素处理
  	$.each(eleshow,function(i,item){
  		checkToggleDetal(item,'show');
	})

  	//隐藏元素处理
	$.each(eleshide,function(i,item){
  		checkToggleDetal(item,'hide');
	})

}
/**
 * [clearNoInt 元素处理函数]
 * @param  {[Object]} obj [输入对象]
 * @return {[type]}     [description]
*/
function checkToggleDetal(item,operate){
	var type = $(item).data('type'),
		flag = true;

	if( operate == 'hide' ){
		flag = false;
		$(item).hide();
	}else{
		$(item).show();
	}
	if( type == 'input' ){
		$(item).find('.ui-input').validatebox({required:flag});
	}else if( type == 'datebox' ){
		$(item).find('.ui-input').datebox({required:flag});
	}else if( type == 'datetimebox' ){
		$(item).find('.ui-input').datetimebox({required:flag});
	}
		
}
/**
 * [clearNoInt textarea字数统计和长度截取]
 * @param  {[Object]} obj [输入对象]
 * @return {[type]}     [description]
*/
function textareaLime(obj) {
	/**
     *(兼容性问题)    
     *支持情况：IE10、Firefox、Chrome 以及 Safari 支持 maxlength 属性
     *不支持情况：IE9以及更早的版本或 Opera 不支持 maxlength 属性
    */	
	//区分汉字和字符的方法：var len = str.replace(/[^\x00-\xff]/g,"aa").length;  
	var str = $.trim($(this).val()),
			maxlength = parseInt($(this).attr('maxlength'));
		if(str.length > maxlength){
			$(this).val(str.substr(0,maxlength));
		}
	var textArea = $(obj).val().length,
		max = $(obj).attr('maxlength'),
		target = $(obj).next().find('.word');
	target.text(max-textArea);	
}
/**
 * [日期设置和格式化] 
*/
function setDateBox(){

	// 日期：只能选择今天和今天以后的日期
	$.each($('.andtoday-limes'), function(i, v) {
		dateboxDetal(this);
	})

	// 日期：只能选择今天以后的日期
	$.each($('.notoday-limes'), function(i, v) {
		dateboxDetal(this,1);
	})

}

function dateboxDetal(obj,number){
	number = number ? number : 0;
	$(obj).datebox('calendar').calendar({
		validator : function(date) {
			var now = new Date();
			var d1 = new Date(now.getFullYear(), now
							.getMonth(), now.getDate()+number);
			return d1 <= date;
		}
	});
}    
var FormatDate = {
    /*1417708800000转化成2014-12-05 00:00:00*/
    formatDate3: function(timestamp, isymd) {
        if (timestamp) {
            var date = new Date(timestamp);
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();
            var h = date.getHours();
            var mi = date.getMinutes();
            var s = date.getSeconds();
            if (!isymd) { //是否年月日
                return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d) + ' ' + (h < 10 ? ('0' + h) : h) + ':' + (mi < 10 ? ('0' + mi) : mi) + ':' + (s < 10 ? ('0' + s) : s);
            } else {
                return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);
            }

        } else
            return;
    },
    /*19201101转换成1970-11-01 或者 19201101121212转换成1970-11-01 12:12:12*/
    dateToString: function(date) {
        if (date == 0) return "无";
        if (date.indexOf('-') > 0) return date;
        if (date.length == 14) {
            return date.substr(0, 4) + "-" + date.substr(4, 2) + "-" + date.substr(6, 2) + " " + date.substr(8, 2) + ":" + date.substr(10, 2) + ":" + date.substr(12, 2);
        } else {
            return date.substr(0, 4) + "-" + date.substr(4, 2) + "-" + date.substr(6, 2);
        }

    },
    /*192011转换成1970-11*/
    monthToString: function(date) {
        if (date == 0) return "无";
        if (date.indexOf('-') > 0) return date;
        return date.substr(0, 4) + "-" + date.substr(4, 2);
    },
    /*192011转换成1970年11月*/
    monthToString2: function(date) {
        if (date == 0) return "无";
        if (date.indexOf('-') > 0) return date;
        return date.substr(0, 4) + "年" + date.substr(4, 2) + "月";
    },
    /*191441转换成19:14:41*/
    timeToString: function(time) {
        if (time == 0) return time;
        if (time.indexOf(':') > 0) return time;
        return time.substr(0, 2) + ":" + time.substr(2, 2) + ":" + time.substr(4, 2);
    },
    /**
     * [formatDate 格式化日期]
     * @param  {[Date]} date [日期对象]
     * @param  {[String]} space [年月日间隔符]
     * @return {[String]}  string     [description]
     */
    formatDate: function(Adate, space) {
        var space = space ? space : "";
        // var Adate=date.toLocaleDateString().split("/");
        var YYYY = Adate.getFullYear(),
            MM = (Adate.getMonth() + 1) >= 10 ? (Adate.getMonth() + 1) : ("0" + (Adate.getMonth() + 1)),
            DD = Adate.getDate() >= 10 ? Adate.getDate() : ("0" + Adate.getDate());
        return YYYY + space + MM + space + DD;
    }
};

/**
  * [预览图片功能]
  * @authors luzhm
  * @date    2016-05-23 13:26:18
  * @update [user] [time] [description]
  * @Example
 //========
        MP.provEvent();
  //========
*/
var MP = {
     provEvent: function() {
         
         var _self = this;
         /*
          	预览图片事件
         */
         $('body').on('click', '.picture-preview', function() {

         	//type是根据不同的参数来获取图片的src
             var type = $(this).data('type');

             //动态创建预览图片
             _self.addMaskPic(this, type);
         })

         //删除
         $('body').on('click', '.picture-delete', function() {

         	var img = $(this).closest('.ui-picture-item').find('img');
			
        	img.attr('src','');
			img.next().val('');		
         })
         /*
          	关闭预览图片事件
         */
         $('body').on('click', '#previewClose', function() {

         	//关闭图片和蒙版
             $("#bigpicShow").remove();
             $(".ui-preview-bigpic").remove();
         })
         //图片缩放功能
         $("body").on('click','.picture-viewscale',function(){
        	 _self.pictureSacle(this);
         })
         //图片缩放关闭
         $('body').on('click', '#picScale', function() {

         	  //关闭图片和蒙版
             $(this).remove();
             $("#picScaleMode").remove();
         })
     },
     addMaskPic: function(obj, type) {
         /*
           	显示大图片效果
         */
         var str = '',
             src = "",
             _self = this;
         
         //获取图片的src路径
         if (type == 'select') {
             src = $(obj).prev().find("option:selected").data("path");
         } else if (type == 'self') {
             src = $(obj).attr('src');
         } else if (type == 'listself') {
             src = $(obj).data('path');
         } else {
             src = $(obj).closest('.ui-picture-item').find('img').attr('src');
         }
         if (src && src != 'undefined') {
        	
             str = '<div class="ui-preview-bigpic" ><i class="ui-icon ui-close preview-pic-close" id="previewClose"></i><div class="picture-mode" id="pictureMode"><img src="' + src + '" alt="" width="100%" height="100%"></div></div><div class="ui-preview-menban" id="bigpicShow"></div>';
             $('body').append(str);

            
         }
     },
     pictureSacle : function(obj){
    	 //图片缩放功能
    	 var src = $(obj).attr('src');
    	 //var src = '../../../../images/default.jpg';
    	 str = '<img src="' + src + '" alt=""  id="picScaleMode" class="ui-preview-picscle"><div class="ui-preview-menban" id="picScale"></div>';
         $('body').append(str);
         ImgZoom.init('picScaleMode');
     }
     
} 
/**
 * [ImgZoom 图片缩放功能]
 * @param  {[String]} imgId [图片的id]
 * @authors luzhm 
 * @date    2016-05-23 13:26:18
 * @update [user] [time] [description]
 * @update [user] [time] [description]
 * @Example
//========
   ImgZoom.init('oimg');
 //========
*/
var ImgZoom = {
	init: function(imgId){
		/*以鼠标位置为中心的滑轮放大功能*/
		var oImg = document.getElementById(imgId);
		var _self = this;
		var oImgWidth = ($(window).width()-$(oImg).width())/2,
    		oImgHeight = ($(window).height()-$(oImg).height())/2;
    	
		$(oImg).css({'position':'fixed','left':oImgWidth,'top':oImgHeight}).hover(function(){$(this).css("cursor","move");},function(){$(this).css("cursor","default");})
		this.addWheelEvent(oImg, function(delta) {
			
           var ratioL = (this.clientX - oImg.offsetLeft) / oImg.offsetWidth,
               ratioT = (this.clientY - oImg.offsetTop) / oImg.offsetHeight,
               ratioDelta = !delta ? 1 + 0.1 : 1 - 0.1,
               w = parseInt(oImg.offsetWidth * ratioDelta),
               h = parseInt(oImg.offsetHeight * ratioDelta),
               l = Math.round(this.clientX - (w * ratioL)),
               t = Math.round(this.clientY - (h * ratioT));
           //只能在200*200以上缩放效果
           if(w < 200){
        	   return;
           }
           with(oImg.style) {
               width = w + 'px';
               height = h + 'px';
               left = l + 'px';
               top = t + 'px';
               margin = '0 0 0 0';
           }
       });
	   /*拖拽功能*/
		_self.addEvent(oImg, 'mousedown', function(ev) {
			var oEvent = _self.prEvent(ev),
			oParent = oImg.parentNode,
			disX = oEvent.clientX - oImg.offsetLeft,
			disY = oEvent.clientY - oImg.offsetTop,
			startMove = function(ev) {
				if (oParent.setCapture) {
					oParent.setCapture();
				}
				var oEvent = ev || window.event,
				l = oEvent.clientX - disX,
				t = oEvent.clientY - disY;
				oImg.style.left = l +'px';
				oImg.style.top = t +'px';
				oParent.onselectstart = function() {
					return false;
				}
			}, endMove = function(ev) {
				if (oParent.releaseCapture) {
					oParent.releaseCapture();
				}
				oParent.onselectstart = null;
				_self.removeEvent(oParent, 'mousemove', startMove);
				_self.removeEvent(oParent, 'mouseup', endMove);
			};
			_self.addEvent(oParent, 'mousemove', startMove);
			_self.addEvent(oParent, 'mouseup', endMove);
			return false;
		});
	},
   addEvent: function(obj, sType, fn) {
       if (obj.addEventListener) {
           obj.addEventListener(sType, fn, false);
       } else {
           obj.attachEvent('on' + sType, fn);
       }
   },
   prEvent : function(ev) {
       var oEvent = ev || window.event;
       if (oEvent.preventDefault) {
           oEvent.preventDefault();
       }
       return oEvent;
   },
   removeEvent : function(obj, sType, fn) {
		if (obj.removeEventListener) {
			obj.removeEventListener(sType, fn, false);
		} else {
			obj.detachEvent('on' + sType, fn);
		}
   },
   addWheelEvent : function(obj, callback) {
   	   var _self = this;
   	   /*添加滑轮事件*/
       if (window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
           _self.addEvent(obj, 'DOMMouseScroll', wheel);
       } else {
           _self.addEvent(obj, 'mousewheel', wheel);
       }

       function wheel(ev) {
           var oEvent = _self.prEvent(ev),
               delta = oEvent.detail ? oEvent.detail > 0 : oEvent.wheelDelta < 0;
           callback && callback.call(oEvent, delta);
           return false;
       }
   }
}
/**
 * [列表查看返回位置功能]
 * 翻页功能：
 * 主要效果是在表单查询条件的情况下，返回到列表页面还能是以前选择条件的样子
 * 1.初始化数据 
 * 2.列表编辑/查看
 * 3.列表上架/下架/删除/禁用/启用
 * 4.列表操作成功后的跳转
 * 5.返回到列表页面
 * 6.编辑提交
 * @update [wanghc] [2016-05-16 ] [description]
 * @update [luzhim] [2016-05-17 ] [description]
 * 
 */
var Jump = {
	init : function(formid){
		/**
		 * [Jump.init() 1.初始化数据]			 
		*/

		//触发查询得到表单条件数据
		this.searchData("#"+formid);

		//表单替换名称元素
		this.formName = {
			'organize' : ['partnership','propertyId'],
			'operator' : ['operatorNo','name','roleId','type'],
			'network' : ['networksName','networksType','networksAddress']
		}
		
	},
	formNameRep : function(formName,samename){
		/**
		 * [Jump.formNameRep() 替换表单name名称]
		 * @param  {[String]} samename [替换元素的类型]
		*/
		//替换名称：当只有一个替换字符串为'name-1',多个替换字符串为'name-2'
		var arrplace = [],
			nameType = samename.split("-")[1];
		
		if( nameType == '1' ){
			//替换单个name
			arrplace = samename.split("-")[0].split(",");
		}else if( nameType == '2'){
			//替换多个name
			arrplace = this.formName[samename];
		}

		$.each(arrplace,function(key,item){
			formName = formName.replace(item,item+2);
		})
		
		//得到替换后的表单值
		return formName;
	}, 
	searchData : function(obj){
		/**
		 * [Jump.searchData() 点击查询按钮保存表单的值 ]		 
		*/
		this.formData = $(obj).serialize();
	},
	listOperaJump : function(obj,samename,urlType,moreback,multilayer){
		/**
		 * [Jump.listOperaJump() 2.列表编辑/查看]
		 * @param  {[Object]} obj [编辑，查看元素]
		 * @param  {[String]} samename [表单替换类型]
		 * @param  {[String]} urlType [特殊处理类型]
		 * @param  {[String]} moreback [多个页面处理标志]			 
		*/
		var formId = "#search-ff",
			page = $("#pageRecord").val(),
			url = $(obj).attr('href'),
			_self = this,
			multstr = '';

		//是否替换表单名称
		if( samename ){
			this.formData = this.formNameRep(this.formData,samename);
		}
		
		//处理特殊的URL:一种是需要加？，一种是需要加&
		if( urlType == 'slash' ){
			url += "?";
		}else{
			url += "&";
		}

		//是否有表单元素
		if( this.formData ){
			url += this.formData;
		}

		//是否在多个页面出现
		if( moreback ){
			/*
			 * 话题评论页面
			 * 1：评论管理列表页面/查看页面有编辑的传值1
			 * 2:活动报名列表页面
			 * 3:话题举报列表页面
			 * 4:话题信息列表页面
			 * */	 
			url += '&moreback='+moreback;
		}	
		if( !this.formData && !moreback){
			//加上页数
			url += "page="+page;
		}else{
			url += "&page="+page;
		} 
		//多层的参数
		if( multilayer == 'userPage' ){
			multsrt = $("#multilayer").val();
			url +="&"+multsrt;
		}
		

		//重组href
		$(obj).attr('href',url); 
	},
	formParam : function(samename,multilay){
		/**
		 * [Jump.formParam() 3.列表上架/下架/删除/禁用/启用等等]
		 * 得到的URL后面的参数		
		 * @param  {[String]} samename [替换元素的类型] 
		*/
		var formData = $("#search-ff").serialize(),
	  	     page = $("#pageRecord").val(),
	  	     params = '';
		
		//判断是否是当前页面的最后一条数据(只针对删除)
		var len = $(".datagrid-view2").find('.datagrid-body').find('tr').length;
		if( len == 1 && page != '1' ){
			page = parseInt(page) - 1;
		}
		params = "page="+page;
		
		if( formData ){
			params += "&"+formData;
		}

		if( samename ){
			//是否替换表单名称
			params = this.formNameRep(params,samename); 
		}
		//多层的参数
		if( multilay == 'userPage' ){
			multsrt = $("#multilayer").val();
			params +="&"+multsrt;
		}
		

		return params;
	},
	backListJump : function(obj,moreback){
		/**
		 * [Jump.backListJump() 5.返回到列表页面]
		 * @param  {[String]} obj [返回元素]
		 * @param  {[String]} moreback [2个页面标志]			 
		*/
		var url = $(obj).attr('href'),
			param = window.location.search;
		if( moreback == 'more'){
			param +="&morejump=2";
		}
		$(obj).attr('href',url+param); 
	},
	editorSubmit : function(url,detal){
		/**
		 * [Jump.editorSubmit() 6.编辑提交]
		 * @param  {[String]} url [列表URL]
		 * @param  {[String]} detal [表单提交前的特殊处理]			 
		*/
		var param  = window.location.search;
		//贷款编辑页面
		$("#ajaxSubmitEditor").click(function(){			
			ajaxSubmitForm('editorForm',url+param);
		})
		//机构管理
		$("#ajaxdirectEditor").click(function(){
			directSubmit(this,url+param,'',detal);
		})
	},
	succJump : function(url,samename,multilay){
		/**
		 * [Jump.succJump() 4.列表操作成功后的跳转 ]		 
		 * 删除成功后跳转地址
		 * @param  {[String]} url [列表URL]
		 * @param  {[String]} samename [替换类型]
		*/
		var param = this.formParam(samename,multilay);
		window.location.href= url + "?"+param;
	},
	listSuccJump : function(url,samename){
		/**
		 * [Jump.listSuccJump() 删除，上架，禁用等URL重组]			 
		*/
		var formdata = Jump.formParam(samename);
		return url+"?"+formdata;
	}
}
/**
 * [插件：富文本] 
*/
var editor;
function richEdit(){
	if (typeof(KindEditor) != 'undefined') {
		KindEditor.options.filterMode = false;
		KindEditor.ready(function(K) {
			var arryObj = ['.richEditor'];
			for (var i = 0; i < arryObj.length; i++) {
				editor = K.create(arryObj[i], {
							cssPath : '/js/kindeditor/plugins/code/prettify.css',
							uploadJson : '/fileupload/picture/0',
							fileManagerJson : '/fileManager/filemanagerJSON',
							allowFileManager : true,
							extraFileUploadParams : { 'width':'720','height':'1280','size':'100','isCrop':false},
							width : 670,
							// allowImageUpload : false,不允许本地上传
							/*
							 * items : [ 'fontname', 'fontsize', '|',
							 * 'forecolor', 'hilitecolor', 'bold', 'italic',
							 * 'underline', 'removeformat', '|', 'justifyleft',
							 * 'justifycenter', 'justifyright',
							 * 'insertorderedlist', 'insertunorderedlist', '|',
							 * 'emoticons', 'image', 'link'],
							 */
							items:['source', '|', 'fullscreen', 'undo', 'redo', 'print', 'cut', 'copy', 'paste',
							       'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
							       'justifyfull',  'subscript',
							       'superscript','quickformat', '|', 'selectall', '-',
							       'title', 'fontname', 'fontsize', '|', 'textcolor', 'bgcolor', 'bold',
							       'italic', 'underline', 'strikethrough', 'removeformat', '|', 'image',
							       'flash', 'media', 'advtable', 'hr', 'link', 'unlink','xiumi'],
							afterCreate : function() {
								var self = this;
								K.ctrl(document, 13, function() {
											self.sync();
											document.forms['example'].submit();
										});
								K.ctrl(self.edit.doc, 13, function() {
											self.sync();
											document.forms['example'].submit();
										});
							},
							afterBlur : function() {
								this.sync();
							},
							afterChange : function() {
							      $('.word_count1').html(this.count()); //字数统计包含HTML代码
							      $('.word_count2').html(this.count('text'));  //字数统计包含纯文本、IMG、EMBED，不包含换行符，IMG和EMBED算一个文字
							      //////////
							      //限制字数
							      var limitNum = 2000;  //设定限制字数
							      var pattern = '还可以输入' + limitNum + '字'; 
							      $('.word_surplus').html(pattern); //输入显示
							      if(this.count('text') > limitNum) {
								       pattern = ('字数超过限制，请适当删除部分内容');
								       //超过字数限制自动截取
								       var strValue = editor.text();
								       strValue = strValue.substring(0,limitNum);
								       editor.text(strValue);      
							       } else {
								       //计算剩余字数
								       var result = limitNum - this.count('text'); 
								       pattern = '还可以输入' +  result + '字'; 
							       }
							       $('.word_surplus').html(pattern); //输入显示
							      ////////
							     } 
						});
			}
		});
	}
}
/*浏览器窗口变化*/
function domresize(){
	$('#dg-list').datagrid('resize',{  
		width:$(".ui-info-box").width()-34
	});
}

// [展开和合并]
function toggleSub(obj, insurance) {
	var tit = $(obj).parents('.ui-guarant-tit');

	if (tit.next('.ui-guarant-tab').is(':visible')) {
		if (insurance != 'yes') {
			tit.css('border-bottom', 0);
		}
	} else {
		if (insurance != 'yes') {
			tit.css('border-bottom', '1px solid #e7e7e2');
		}
	}
	$(obj).find('.ui-icon-arrow').toggleClass('ui-icon-arrow-up');
	tit.next('.ui-guarant-tab').toggleClass('fn-hide');
}

/**
 * [文字滚动效果] 
*/
(function($) {
	$.fn.extend({
				iScroll : function(options) {
					var defaults = {
						oWrap : "#scroll-list", // form表单
						nTime : 2000
						// 时间
					};
					var opts = $.extend(defaults, options);

					var _wrap = $(opts.oWrap); // 定义滚动区域
					var _interval = opts.nTime; // 定义滚动间隙时间
					var _moving; // 需要清除的动画
					_wrap.hover(function() {
								clearInterval(_moving); // 当鼠标在滚动区域中时,停止滚动
							}, function() {
								_moving = setInterval(function() {
											var _field = _wrap.find('li:first'); // 此变量不可放置于函数起始处,li:first取值是变化的
											var _h = _field.height(); // 取得每次滚动高度(多行滚动情况下,此变量不可置于开始处,否则会有间隔时长延时)
											_field.animate({
														marginTop : -_h + 'px'
													}, 600, function() { // 通过取负margin值,隐藏第一行
														_field
																.css(
																		'marginTop',
																		0)
																.appendTo(_wrap); // 隐藏后,将该行的margin值置零,并插入到最后,实现无缝滚动
													})
										}, _interval) // 滚动间隔时间取决于_interval
							}).trigger('mouseleave'); // 函数载入时,模拟执行mouseleave,即自动滚动
				}
			});
})(jQuery);

/**
 * [省市区联动] 
*/
;(function() {
	$.fn.extend({
		LinkageMenu : function(options) {
			var defaults = {
				aSelector : ["#agentAreaProvince", "#agentAreaCity",
						"#agentAreaCounty"], // 选择器ID数组[]
				aSelectored : ["000000"], // ["顶级父ID","一级ID","二级ID"] 选中
				aSelectCode : "#setAreaCode",// 传递后台的code
				aInitval : [],// 默认值text
				sFristID : "000000",// 一级数据查询标识
				dataList : [],// 缓存数据
				sUrl : "",// 获取数据缓存,
				editorparam : "",
				callback : function() {
				} // 回调事件
			};
			var opts = $.extend(defaults, options);
			var dataList = opts.dataList;
			var selector = opts.aSelector;
			var aSelectored = opts.aSelectored;
			var aInitval = opts.aInitval;
			var aSelectCode = opts.aSelectCode;// 传递后台的code
			if (dataList.length == 0) {
				$.ajax({
							type : 'POST',
							url : opts.sUrl,
							dataType : 'json',
							async : false,
							success : function(data) {
								dataList = data;
							}
						});

			};
			/* 数据初始化 */
			for (var i = 0; i < selector.length; i++) {
				var selectorText = aInitval[i] ? aInitval[i] : "请选择";
				var selectorHtml = '<option value="">' + selectorText
						+ '</option>';
				dataList[aSelectored[i]]
						&& $.each(dataList[aSelectored[i]], function(sindex,
										data) {
									var selected = aSelectored[i + 1] == data.areaId
											? "selected"
											: "";
									selectorHtml += '<option data-code="'
											+ data.areaCode + '" value="'
											+ data.areaId + '" ' + selected
											+ '>' + data.areaName + '</option>';
								});
				$(selector[i]).html(selectorHtml);
				if ($(selector[i])[0]) {
					var dataCode = getDataCode($(selector[i])[0], i);
					$(aSelectCode).val(dataCode);
				}

				/* 事件绑定 */
				if (i < selector.length - 1) {
					$(selector[i]).bind("change", function() {
						
						var thisID = "#" + $(this).attr("id");
						var index = 0;
						for (var j = 0; j < selector.length; j++) {
							if (selector[j] == thisID) {
								index = j;
							}
						}
						var value = $(this).val();

						var text = $(this).find("option:selected").text();
						var nextText = aInitval[j + 1]
								? aInitval[j + 1]
								: "请选择";
						var html = '<option value="">' + nextText + '</option>';

						if (dataList[value]) {
							$.each(dataList[value], function(sindex, data) {
										html += '<option data-code="'
												+ data.areaCode + '" value="'
												+ data.areaId + '">'
												+ data.areaName + '</option>';
									});
							$(selector[index + 1]).html(html);
							$(selector[index]).next().val(value);
						} else {
							for (var k = index; k < selector.length; k++) {
								var minnNextText = aInitval[k + 1] ? aInitval[k
										+ 1] : "请选择";
								$(selector[k + 1]).html('<option value="">'
										+ selectorText + '</option>');

							}
						}

						if ($(selector[index])[0]) {
							var dataCode = getDataCode($(selector[index])[0],
									index);
							$(aSelectCode).val(dataCode);
						}
					});
				}

			}
			//select默认选中数据
			if(opts.editorparam){
				oneshow(opts.editorparam[0],opts.editorparam[1],opts.editorparam[2]);
				
			}else{
				
				return;
			}
			

		}
		
	});
})(jQuery);
function oneshow(param1,param2,param3){
	var province = $("#agentAreaProvince").find("option");
	
	$.each(province,function(i,v){
		if(v.value == param1 ){
			$(this).attr("selected","selected");
			$(this).trigger("change");
			twoshow(param2,param3);
		}
	})
}
function twoshow(param2,param3){
	
	var province = $("#agentAreaCity").find("option");
	
	$.each(province,function(i,v){
		if(v.value == param2 ){
			$(this).attr("selected","selected");
			$(this).trigger("change");
			threeshow(param3);
		}
	})
	
}
function threeshow(param3){
	
	var province = $("#agentAreaCounty").find("option");
		
		$.each(province,function(i,v){
			if(v.value == param3 ){
				$(this).attr("selected","selected");
				$("#countyName").val(v.value);
				//$(this).trigger("change");
				//threeshow(param3);
			}
		})
		
	}
function getDataCode(o, i) {
	var dataCode = o.selectedOptions
			? $(o.selectedOptions).attr("data-code")
			: o.options(o.selectedIndex).getAttribute("data-code");
	if (dataCode && dataCode != "null") {
		dataCode = dataCode;
	} else {
		dataCode = "";
	}
	return dataCode;
}

function toggleAddr(i, url,options) {
	$("body").LinkageMenu({
		aSelector : ["#agentAreaProvince" + i, "#agentAreaCity" + i,
				"#agentAreaCounty" + i], // 选择器ID数组[]
		sUrl : url,
		aSelectCode : '#setAreaCode' + i,
		editorparam : options
	});
}
/**
 * [Jcrop.init() 图片剪裁效果]
 * @authors luzhm
 * @date    2016-06-24 10:50:18
 * @update [user] [time] [description]
 * @update [user] [time] [description]
*/
var Jcrop = {
		
		init : function(id,type){
			/**
			 * [Jcrop.init() 初始化图片显示效果]
			*/
			var _self = this;
			var scalesize = type == 'loan' ? 3.86 : 1;
			$('#'+id).Jcrop({
		      onChange:   _self.showCoords,
		      onSelect:   _self.showCoords,
		      onRelease:  _self.clearCoords,
		      //allowSelect : false,
		      aspectRatio : scalesize,
		      allowSelect: false
		      //minSize : [200,200]
		    },function(){
		      api = this;
		      if( type == 'loan' ){
		    	  api.setSelect([10,50,203,100]);
		      }else{
		    	  //api.setSelect([100,65,300,300]);
		    	  api.setSelect([0,0,50,50]);
		      }
		     
		      api.setOptions({ bgFade: true });
		      api.ui.selection.addClass('jcrop-selection');
		      if( id == 'wrapImg'){
		    	  //$(".jcrop-holder").css({'z-index':'999'});
		    	  $(".jcrop-selection").find('.jcrop-tracker').css({'filter':'alpha(opacity=40)','background-color':'#fff'});
		      }
		      
		    });
			_self.event();
		},
		event : function(){
			/**
			 * [Jcrop.init() 图片的事件]
			*/
			var jcrop_api;
			$('#coords').on('change','input',function(e){
		      var x1 = $('#x1').val(),
		          x2 = $('#x2').val(),
		          y1 = $('#y1').val(),
		          y2 = $('#y2').val();
		      jcrop_api.setSelect([x1,y1,x2,y2]);
		    });
		},
		showCoords : function(c){
			/**
			 * [Jcrop.showCoords() 获取剪裁的数据]
			*/
		    $('#x1').val(Math.round(c.x));
		    $('#y1').val(Math.round(c.y));
		    $('#x2').val(Math.round(c.x2));
		    $('#y2').val(Math.round(c.y2));
		    $('#w').val(Math.round(c.w));
		    $('#h').val(Math.round(c.h));
		},
		clearCoords : function(){
			/**
			 * [Jcrop.clearCoords() 清空数据]
			*/
	    	$('#coords input').val('');
	    },
	    cropperShow : function(id,type){
	    	/**
			 * [Jcrop.cropperShow() 显示上传图片的弹框]
			*/
	    	
	    	//var htm = '<form id="ImgCropper" class="easyui-dialog picture-combox"><div class="jc-demo-box picutre-wrapimg" id="wrapImg"><img src="" alt="" id="target" class="crop-image"/></div><div id="coords" class="coords"><div class="inline-labels fn-hide"><label>X1<input type="text" id="x1" name="x1" /></label><label>Y1<input type="text" id="y1" name="y1" /></label><label>X2<input type="text"  id="x2" name="x2" /></label><label>Y2<input type="text" id="y2" name="y2" /></label><label>W<input type="text" id="w" name="width" /></label><label>H<input type="text"  id="h" name="height" /></label></div></div><div class="ui-btn-double ui-btn-long"><input type="button" class="ui-dlgOk-btn" value="确定" onclick="Jcrop.cropUpload(this,\''+type+'\',\''+id+'\');" /><div class="ui-relative ui-clinet-upload"><input type="button" class="ui-dlgOk-btn redactive-userlist" value="上传"/><input type="file" class="file-wrap file-hid ui-update-pic" id="file-wrapjcrop" name="file" onchange="uploadFileJrop(this,\''+type+'\',\''+id+'\',Jcrop.localUploadFile);"></div></div></form>';
	    	
	    	
	    	var htm = '<form id="ImgCropper" class="easyui-dialog picture-combox"><div class="jc-demo-box picutre-wrapimg" id="wrapImg"><img src="" alt="" id="target" class="crop-image"/></div><div id="coords" class="coords"><div class="inline-labels fn-hide"><label>X1<input type="text" id="x1" name="x1" /></label><label>Y1<input type="text" id="y1" name="y1" /></label><label>X2<input type="text"  id="x2" name="x2" /></label><label>Y2<input type="text" id="y2" name="y2" /></label><label>W<input type="text" id="w" name="scaleWidth" /></label><label>H<input type="text"  id="h" name="scaleHeight" /></label></div></div><div class="ui-btn-double ui-btn-long"><input type="button" class="ui-dlgOk-btn" value="确定" onclick="Jcrop.cropUpload(this,\''+type+'\',\''+id+'\');" /><div class="ui-relative ui-clinet-upload"><a href="javascript:;" class="ui-dlgOk-btn a-upload"><input type="file" class="file-wrap file-hid ui-update-pic" id="file-wrapjcrop" name="file" onchange="Jcrop.localUploadFile(this,\''+type+'\');">上传</a></div></div><div class="fn-hide crop-menban" id="cropMenban"></div></form>';
	    	
	    	$('body').append(htm);
	    	$("#ImgCropper").dialog({
	    		iconCls : 'icon-save',
	            modal : true,
	    		onClose : function(){
	    			$(this).remove();
	    		}
	    	})
	    	
	    	
	    },
	    //localUploadFile : function(idname,url,type){
	    localUploadFile : function(imgFile,scaletype){
	    	//var url = '../images/sago.jpg';
	    	//上传后显示图片并初始化
	    	//$("#wrapImg").html('<img src="'+url+'" alt="" id="target" class="crop-image"/>');
	    	//Jcrop.init('target',type);
	    	
	    	//$('body').append('<!--[if gt IE 10 ]><script type="text/javascript">window.ie9= true;<\/script>');
	    	//return false;
	    		var path = '',images = '';
	    		
	    		//$("#ImgCropper").find('img').attr('src','');
	    		//限制图片的格式
	    		if ($(imgFile).val() != '') {
	    			var name = $(imgFile).val(), fileSize = 0;
	    			var type = name.substr(name.lastIndexOf(".") + 1).toLocaleLowerCase();
	    			if (type != 'png' && type != 'jpg' && type != 'bmp') {
	    				alert('格式不正确，请重新上传。');
	    				return;
	    			}
	    		}
	    		var img = $("#wrapImg");	
	    		
	    		var objPreview = null;
   			 	var objPreviewFake = null;
   			 	var objPreviewSizeFake = null;
	    		 var windowURL = window.URL || window.webkitURL;
	    		//获取路径
	    		

	    		if(imgFile.files && imgFile.files[0]){
	    			//firefox
	    			
	    		    path = window.URL.createObjectURL(imgFile.files[0]);
	    			
	    		    $("#wrapImg").html('<img src="'+path+'" alt="" id="target" class="crop-image"/>');
		    		images = 'target';
		    		
	    		}else{
	    			//if (window.ie9){
	    				//alert('请设置IE的安全级别为中才可以使用！');
	    				//return false;
	    			//}
	    			//IE 浏览器兼容	    			
	    			img.html('<div id="preview_fake"><img id="target" onload="onPreviewLoad(this)"/><img id="preview_size_fake"/></div>');
	    			imgFile.select();
	    			path = document.selection.createRange().text;
	    				    			
	    			objPreview = $('#target')[0];
	    			objPreviewFake = $('#preview_fake')[0];
	    			objPreviewSizeFake = $('#preview_size_fake')[0];
	    			   
	    			// IE7,IE8 在设置本地图片地址为 img.src 时出现莫名其妙的后果
	    			//（相同环境有时能显示，有时不显示），因此只能用滤镜来解决
	    			// IE7, IE8因安全性问题已无法直接通过 input[file].value 获取完整的文件路径

	    			objPreviewFake.filters.item(
	    			    'DXImageTransform.Microsoft.AlphaImageLoader').src = path;
	    			objPreviewSizeFake.filters.item(
	    			    'DXImageTransform.Microsoft.AlphaImageLoader').src = path;
	    			autoSizePreview( objPreviewFake,
	    			    objPreviewSizeFake.offsetWidth, objPreviewSizeFake.offsetHeight );
	    			objPreview.style.display = 'none';
	    			//$("#ImgCropper").append('<div class="crop-menban"></div>');
	    			images = 'preview_fake';
	    		}
	    		$("#ImgCropper").find('img').attr('src',path);
	    		$("#wrapImg").next().val(path);
	    		
	    		Jcrop.init(images,scaletype);
	
	    },
	    cropUpload : function(obj,type,id) {
	    	/**
			 * [Jcrop.cropUpload() 图片提交事件]
			*/
	    	var _self = this;
	    	var image = $("#target").attr('src');
	       if(	image ){
	    	   $(obj).attr('disabled','disabled');
	    	   this.uploadFileJcrop('/fileupload/picture/0',id,uploadImgCB,type,obj);
	       }else{
	    	   alert('请上传图片');
	       }
	      
	    },
	    uploadFileJcrop : function(url, idName, callback,type,btns) {
	    		//console.log(Jcrop.otherData(type));
	    	    //文件上传
	    		$.ajaxFileUpload({
	    			url : url,
	    			secureuri : false,
	    			fileElementId : 'file-wrapjcrop',
	    			dataType : 'json',
	    			data :  Jcrop.otherData(type),
	    			success : function(data) {
	    				if (data.succ) {
	    					
	    					if (data.entity && data.entity.fileSetUrl) {
	    						callback && callback(idName, data.entity.fileSetUrl);
	    					} else {
	    						callback && callback();
	    					}
	    					$("#ImgCropper").dialog('close');
	    				} else {
	    					alert(data.message);
	    				}
	    				$(btns).removeAttr('disabled');
	    			},
	    			error : function(data) {
	    				alert('系统出错，请重试');
	    				$(btns).removeAttr('disabled');
	    			}
	    		});
	    	
	    },
	    otherData : function(type){
	    	/**
			 * [Jcrop.otherData() 图片组装数据]
			 * @param  {[String]} formid [表单的id]
			 * @param  {[String]} dlg [弹框的id]
			*/
	    	 var otherdata = {};
		        
	    	if( type == 'produce'){
	    		//商品管理[4]
	    		otherdata = { 'width':'720','height':'720','winWidth':'400','winHeight':'400','size':'60','isCrop':true};
	    	}else if( type == 'merchant'){
	    		//商家品牌标识[3-2-6]
	    		otherdata = { 'width':'200','height':'200','winWidth':'400','winHeight':'400','size':'50','isCrop':true};
	    	}else if( type == 'loan'){
	    		//贷款页面新增编辑[4-4-2]
	    		otherdata = { 'width':'1080','height':'417','winWidth':'400','winHeight':'400','size':'110','isCrop':true};
	    	}else if( type == 'headpicture'){
	    		//操作员头像[4-4-2]
	    		otherdata = { 'width':'200','height':'200','winWidth':'400','winHeight':'400','size':'20','isCrop':true};
	    	}else if( type == 'nocrop'){
	    		return { 'width':'720','height':'1280','size':'200','isCrop':false};
	    	}else if( type == 'share'){
	    		return { 'width':'176','height':'176','size':'32','isCrop':false};
	    	}else{
	    		//其他页面
	    		return { 'width':'720','height':'1280','size':'100','isCrop':false};
	    		
	    	}
	    	otherdata = $.extend({},eb.form2Json("ImgCropper"),otherdata);
	    	return otherdata;
	    },
	    oneUpdateData : function(type){
	    	/**
			 * [Jcrop.oneUpdateData() 第一次上传显示弹框图片]			 
			*/
	    	 var otherdata = {};
		        
	    	if( type == 'produce'){
	    		//商品管理[4]
	    		otherdata = { 'width':'720','height':'720','size':'60','isCrop':false};
	    	}else if( type == 'merchant'){
	    		//商家品牌标识[3-2-6]
	    		otherdata = { 'width':'200','height':'200','size':'50','isCrop':false};
	    	}else if( type == 'loan'){
	    		//贷款页面新增编辑[4-4-2]
	    		otherdata = { 'width':'1080','height':'417','size':'110','isCrop':false};
	    	}else if( type == 'headpicture'){
	    		//操作员头像[4-4-2]
	    		otherdata = { 'width':'200','height':'200','size':'20','isCrop':false};
	    	}
	    	return otherdata;
	    }

}
/*图片剪裁兼容IEstart*/
function onPreviewLoad(sender){
    autoSizePreview( sender, sender.offsetWidth, sender.offsetHeight );
}
function autoSizePreview( objPre, originalWidth, originalHeight ){
    var zoomParam = clacImgZoomParam( 400, 400, originalWidth, originalHeight );
    objPre.style.width = zoomParam.width + 'px';
    objPre.style.height = zoomParam.height + 'px';
    $("#cropMenban").css({width:zoomParam.width + 'px',height:zoomParam.height + 'px'}).show();
  
}
function clacImgZoomParam( maxWidth, maxHeight, width, height ){
    var param = { width:width, height:height, top:0, left:0 };
    if( width>maxWidth || height>maxHeight ){
        rateWidth = width / maxWidth;
        rateHeight = height / maxHeight;
        if( rateWidth > rateHeight ){
            param.width = maxWidth;
            param.height = height / rateWidth;
        }else{
            param.width = width / rateHeight;
            param.height = maxHeight;
        }
    }
    param.left = (maxWidth - param.width) / 2;
    param.top = (maxHeight - param.height) / 2;
    return param;
}

/**
 * 
 * @authors luzhm
 * @date    2016-09-23 13:26:18
 * @version 1.0.0 
 * @description  多个图片剪裁效果
 * @update [wanghc] [2016-05-16 ] [description]
 * @update [luzhim] [2016-05-17 ] [description]
 * 
 */
var moreJocp = {
	init : function(option,type){
		/**
		 * [moreJocp.init() 初始化图片]
		*/	
		//图片路径
		this.imgURl = '';
		this.events(option,type);
		
	},
	events : function(option,type){
		/**
		 * [moreJocp.events() 操作事件]
		*/
		var self = this;
		$.each(option,function(i,item){
			//选择
			$( item.listid ).on('click','.upload-picutre',function(){
				self.effects(this,item,'select');
			})
			//删除
			$( item.listid ).on("click",".upload-picutre-dele",function(){
				self.effects(this,item,'delete',item.maxlength);
					
			})
			//添加
			$( item.addid ).click(function(){
				self.effects(this,item,'add',item.maxlength);
			})

			if( type == 'add' ){
				$( item.addid ).click();	
			}
		})
		
	},
	effects : function(obj,item,type,maxlen,addid){
		/**
		 * [moreJocp.effects() 操作显示效果]
		*/
		var len = 0,htl;
		if( type == 'select' ){
			var id = '',index = $(obj).parents('.ui-picture-item').index();
			id = 'file-wrap'+(10+index+1);
			Jcrop.cropperShow(id,item.jocptype,obj);
		}else if( type == 'delete' ){
			len = $(obj).closest(".front-coverlist").find('img').length;		
			
			if( len == parseInt(maxlen) ){
				$(obj).closest(".front-coverbox").next().show();
			}
			//if(len > 1){
				$(obj).parents(".ui-picture-item").remove();
			//}
		}else if( type == 'add' ){
			len = $(obj).closest("div").prev().find('img').length;
			
			htm = template('frontModule');
			$( item.listid ).append(htm);
			if( len ==  parseInt(maxlen) - 1 ){
				
				$(obj).closest('div').hide();
				
			}
		}
		
	},
	getMorePicURl : function(){
		var img = $("#frontcoverImg").find(".cover-picture"),
			urlArray = [],url = '',
			self = this;
		
		$.each(img,function(i,item){
			var str = $(item).attr('src');
			if( str ){
				//urlArray.push(self.imgURl+str);
				urlArray.push(str);
			}
		})
		url = urlArray.join(",");
		return url;
	},
	coverInit : function(url){
		//封面图片初始化
		var imageArray = url.split(","),datas = {},htm,
			imglen = 0,self = this;
		//$.each(imageArray,function(i,item){
			//var urlparam = item.split("/upload/");
	 		//self.imgURl = urlparam[0];
			//imageArray[i] = '/upload/'+urlparam[1];
		//})
		datas['urls'] = imageArray;
		htm= template('frontModule2',datas);
	    $("#frontcoverImg").html(htm);
	    imglen = $(".cover-picture").length;
	    if( imglen == 5 ){
	    	$("#frontcoverAdd").hide();
	    }
		
	},
	saveImgURl : function(url){
		//保存图片的URL前缀地址，例如http:192.168.32.139:8089/
		this.imgURl = url;
	}
}
/**
 * [文件图片上传] 
*/
//文件上传
function uploadFileCompre(obj, url, callback,filetye) {
	var idName = $(obj).attr('id'),
		fileElementId = idName ? idName : "file-wrap",
		filetype = '';

	if ($(obj).val() != '') {
		var name = $(obj).val(), fileSize = 0;
		var type = name.substr(name.lastIndexOf(".") + 1).toLocaleLowerCase();
		
		if( filetye == 'file' ){
			//客户端格式：APK|apk|IPA|ipa|IOS|ios
			if(uploadtype == 'andriod' && type != 'apk' ){
				  alert('格式不正确，请重新上传。');
			      return;
			}else if(uploadtype == 'ios' && (type != 'ipa' && type != 'ios')){
				  alert('格式不正确，请重新上传。');
			      return;
			}
		}else{
			if (type != 'png' && type != 'jpg' && type != 'bmp') {
				alert('格式不正确，请重新上传。');
				return;
			}
		} 
		
		
		$.ajaxFileUpload({
			url : url,
			secureuri : false,
			fileElementId : fileElementId,
			dataType : 'json',
			data :  Jcrop.otherData(comprestyle),
			success : function(data) {
				if (data.succ) {
					alert('成功上传！');
					if ($("#ajaxUploadImagePath").length > 0) {
						$("#ajaxUploadImagePath").val(data.entity.fileSetUrl);
					}
					if (data.entity && data.entity.fileSetUrl) {
						callback && callback(idName, data.entity.fileSetUrl,listinfor);
					} else {
						callback && callback();
					}
				} else {
					alert(data.message);
				}
			},
			error : function(data) {
				alert('系统出错，请重试');
			}
		});
	}
}
//图片上传回调函数
function photoSuccAdd(name,data){
	var index=$("#buspic-lists").find(".ui-buspic-item:last").find("img"),
		phototemp = $("#discountMode").html(),mode,imgId ='#imgfile-wrap',
		maxlength = $("#oneAddPic").length ? parseInt($("#oneAddPic").val()) : 2;
		
		index = index.length?(parseInt(index.attr("id").substring(12))+1):0;
		mode = phototemp.replace(/{{n}}/g, index);
		imgId= imgId+index;
		$("#buspic-lists").append(mode);
		$(imgId).attr('src',data);
		$(imgId).next().validatebox({    
		    required: true   
		   
		});
		$(imgId).next().val(data);

		
		if(index == maxlength){
			$("#fileAdd").hide();
		}
		$("#Imageshop-img").val('yes');
}
/**
 * [添加多行操作] 
 * 添加多行的操作
 * 调用方法：addmoreLine.addmoreEvent('#produceSpecial',['groupbuyingName']);
*/
var addmoreLine = {
	init : function(opts){
		//listid,itemnames,itemnum,maxtotal
		
	},	
	addmoreEvent : function(opts) {
		/*
		 * [
			{'id':'#produceSpecial','name':['groupbuyingName'],maxleng:10},
			{'id':'#loanExplanate','name':['groupbuying','profitType', 'profit'],maxleng:0},
		]
		 * */
		var _self = this;
		
		$.each(opts,function(i,item){
			//添加一行
			$(item.id).on("click",".insurance-add",function() {
				_self.addline(this,item.id,item.name,item.maxleng,item.dealtype,item.nametype,item.addpositon);

			})
			//删除一行
			$(item.id).on("click",".insurance-reduce",function() {	
				_self.reduceline(this,item.id,item.name,item.maxleng,item.dealtype,item.nametype);
			});
			//编辑页面出现最大条数自动移除加号
			var addline = $(item.id).find(".ui-dlg-ins-item");
			if(addline.length == item.maxleng){
				addline.eq(item.maxleng-1).find('.ui-guarant-addfir').remove();
			}
			
		})
		
	},
	addline : function(obj,listid,itemnames,maxtotal,dealtype,nametype,addpositon){
		/*
		 添加一行的操作
		*/
		var p = $(obj).parents('li'), thisObj = $(obj).parents('li').clone(), 
			    pre = $(obj).data("changename"),
			    index = $(obj).closest('.ui-dlg-ins-item').index(),
			    len = $(listid).find('.ui-dlg-ins-item').length,
			    redbtn = '<a class="ui-guarant-reduce insurance-reduce" href="javascript:;" data-changename="' + pre + '"></a>', 
			    addbtn = '<a class="ui-guarant-addfir insurance-add" href="javascript:;" data-changename="'+ pre + '"></a>';
			
			
			thisObj.insertAfter(p);
			thisObj.find('input').val('');
			thisObj.find('.addmore-text').text("");
			$.parser.parse(thisObj);
			if (p.find('.ui-guarant-reduce').length == 0) {// 本体无-
				if(addpositon == 'activeaddpos'){
					
					p.find(".relate-reducepos").after(redbtn);
				
				}else{
					p.append(redbtn);
				}
				
			}
			
			p.hasClass('ui-info-item-grey') ? thisObj
					.removeClass('ui-info-item-grey') : thisObj
					.addClass('ui-info-item-grey');

			$(obj).remove();
			if (thisObj.find('.ui-guarant-reduce').length == 0) {
				$(redbtn).insertAfter(thisObj.find('.ui-guarant-addfir'));
			}
			if(len == maxtotal-1){
				thisObj.find(".insurance-add").remove();
			}
			
			this.addResetName(listid,itemnames,nametype);
			this.loanInteset('add',thisObj,dealtype,len,index,listid);
	},
	reduceline : function(obj,listid,itemnames,maxtotal,dealtype,nametype){
		/*
		 删除一行的操作
		*/
		var p = $(obj).parents('.ui-dlg-ins-item'), 
			    pre = $(obj).data("changename"), 
			    index = $(obj).closest('.ui-dlg-ins-item').index(),
			    redbtn = '<a class="ui-guarant-reduce insurance-reduce" href="javascript:;" data-changename="'+ pre + '"></a>', 
			    addbtn = '<a class="ui-guarant-addfir insurance-add" href="javascript:;" data-changename="'+ pre + '"></a>', 
			    idx = p.prevAll('.ui-dlg-ins-item').length, 
			    total = $(obj).parents('.ui-dlg-ins-list').find('.ui-dlg-ins-item').length; 
			   
			//if (p.parents('.easyui-dialog').find('#ins-oneType').length == 0) {// 只新增一级的
				//idx++;
				//total++;
			//}
			
			if(dealtype == 'loan'){
				if(index == 0){
					
					return;
				}
				this.deleDescript(index);
			}else if(dealtype == 'redpack'){
				//删除活动管理保存的数据
				var savedata = activeMana.retrunSaveData();
				var saveindex = 0;
				var newdata = {}
				delete savedata[index];
				$.each(savedata,function(i,item){
					
					newdata[saveindex] = item;
					saveindex++;
				})
				console.log(newdata);
				//this.deleSaveData(savedata);
				activeMana.changeSaveData(newdata);
			}
			//删除的是最后一个
			if (idx == total-1) {
				$(addbtn).insertBefore(p.prev('.ui-dlg-ins-item')
						.find('.ui-guarant-reduce'));
				if (idx == 1) {
					p.prev('.ui-dlg-ins-item').find('.ui-guarant-reduce').remove();
				}
			} else {
				
				if (idx == 0) {
					//只剩下两条的情况
					if(idx+2 == total ){
						p.next('.ui-dlg-ins-item').find('.ui-guarant-reduce').remove();
					}else if($(listid).find('.ui-guarant-addfir').length == 0){
						$(addbtn).insertBefore($(listid).find('.ui-dlg-ins-item').eq(total-1).find('.ui-guarant-reduce'));
					}
				}
				if(idx != 0 && $(listid).find('.ui-guarant-addfir').length == 0) {
					$(addbtn).insertBefore($(listid).find('.ui-dlg-ins-item ').eq(total-1).find('.ui-guarant-reduce'));
				}
				
			}
			
			p.remove();
		    this.addResetName(listid,itemnames,nametype);
	},
	deleSaveData : function(savedata){
		return savedata;
	},
	addResetName : function(listid,itemnames,nametype){
		var prevname = '',nextname = '';
		nametype = nametype?true:false;
		//遍历重组新增的name形成name[0]
		var linemode = $(listid).find('.ui-dlg-ins-item');
		$.each(linemode, function(i, v) {
			var changename = $(this).find(".traversal-eles");
			$.each(changename,function(j,item){
				if(nametype){
					prevname= itemnames[j].split("/")[0];
					nextname = itemnames[j].split("/")[1];
					$(item).attr("name", prevname+'['+i+'].'+nextname);
				}else{
					$(item).attr("name", itemnames[j]+'['+i+']');
				}
				
			})
		});
	},
	loanDesript : function(listid,target){
		var recordrows = [],_self = this;
		$(listid).on('keyup','.loandate-descripte',function(){
			//_self.updateDescript(recordrows,this,target);
			$("#generateInterCheck").val('');
		})
		//贷款下拉框
		$(listid).on('change','.loan-interest-sele',function(){
			var type = $(this).data('type'),
				pos = 0,
				value = $(this).find('option:selected').text();
			
			pos = type == 'date'?0:1;
			$(listid).find(".ui-dlg-ins-item").find('.loan-select'+pos).text(value);
			$(target).find('.loan-desctit').find('.loan-select'+pos).text(value);
			
		})
		
		//生成利率说明
		$("#generateInter").click(function(){
			_self.updateDescript2();
		})
	},
	deleDescript: function(index){
		//删除对应的利率说明的信息
		//var $loandescs = $("#loanDescript").find('.loan-descriptrow');
		//$loandescs.eq(index).remove();
		$("#generateInterCheck").val('');
	},
	updateDescript : function(recordrows,obj,target){
		
		
		var value = $(obj).val();
		var index = $(obj).closest('.ui-dlg-ins-item').index();
		var type = $(obj).data('type'),pos = 0;
		var flag = true,str ='',date = 0,interest = '0.000';
		
		value = isNaN(value)?0:value;
		$.each(recordrows,function(i,item){
			if(item == index){
				flag = false;
				return;
			}
		})
		if(flag){
			if(type == 'date'){
				date = value;
			}else{
				
				interest = this.getFloatStr(value);
			}
			str = ' <tr class="loan-descriptrow"><td>'+date+'</td><td>'+interest+'</td></tr>';
			$(target).append(str);
			recordrows.push(index);
		}else{
			
			if(type == 'date'){
				pos = 0;
			}else{
				pos = 1;
				value = this.getFloatStr(value);
			}
			$(target).find('.loan-descriptrow').eq(index).find('td').eq(pos).text(value);
		}
		
	},
	updateDescript2 : function(recordrows,obj,target){
		
		
		var value = $(obj).val();
		var listrecord = $('#loanExplanate').find('.ui-dlg-ins-item');
		var type = $(obj).data('type'),str ='',_self = this;
		
		value = isNaN(value)?0:value;
		$.each(listrecord,function(i,item){
			var itemrecord = $(item).find(".loandate-descripte");
			var value1 = itemrecord.eq(0).val();
			var value2 = itemrecord.eq(1).val();
			var date = 0,interest = '0.000';
			if(value1 && /^\d{1,}$/.test(value1)){
				date = value1;
			}
			if(value2 && /^\d{1,2}$|^\d{1,2}\.\d{1,3}$/.test(value2)){
				interest =_self.getFloatStr(value2);
			}
			if(value1 != "" || value2 != '' ){
				
				str += ' <tr class="loan-descriptrow"><td>'+date+'</td><td>'+interest+'</td></tr>';
			}
		})
		$("#loanDescript").find('tbody').html(str);
		$("#generateInterCheck").val('pass');
		
	},
	loanInteset : function(type,thisObj,dealtype,len,indexpos,listid){
		if(dealtype == 'loan' && type == 'add'){
			var loanele = $(listid).find('.ui-dlg-ins-item').eq(0).find('select');
			if(len == 1){
			$.each(loanele,function(i,item){
				
				var value = $(item).find('option:selected').text();
				var text2 = '';
				if( i == 1){
					text2 = 'loan-interset-seletext2';
				}
				thisObj.find('.loan-getdate').eq(i).html('<em class="loan-interset-seletext '+text2+' loan-select'+i+'">'+value+'</em>');
			})}
			if(indexpos == 0){
				$(thisObj).prev().find('.ui-guarant-reduce').hide();
			}
			

		}
	},
	getFloatStr : function(num){
        num += '';
        num = num.replace(/[^0-9|\.]/g, ''); //清除字符串中的非数字非.字符
        
        if(/^0+/) //清除字符串开头的0
            num = num.replace(/^0+/, '');
        if(!/\./.test(num)) //为整数字符串在末尾添加.00
            num += '.000';
        if(/^\./.test(num)) //字符以.开头时,在开头添加0
            num = '0' + num;
        num += '000';        //在字符串末尾补零
        num = num.match(/\d+\.\d{3}/)[0];
        return num;
    }
	

}
/**
 * [列表复选框运用]
*/

//列表多选分页数据显示功能
var moreseleList  = {
 	init : function(subname,subid,datas){
 		//添加文章
 		//保存数据记录的对象
 		this.storedata = datas;
 		//门店的ID
		this.modeid = $("#sotreCheEle");
		//门店的item的name
		this.itemclass = 'stores-selelist';
		//门店的记录数据的name
		this.record = 'stores-seleitem-name';
		//列表的id
		this.listid = $('#dg-list');
		this.subname = subname;
		this.subid = subid;
		this.pagedata = null;
		this.listEvent();
 	},
 	listEvent : function(){
 		//文章删除：点击删除图标操作
 		var _self = this;
		$("#storeChks").on('click','.store-item-close',function(){
			
			var nameid = $(this).prev().data('id');
			var listdata = $('#dg-list').datagrid('getData').rows;
			var subid = _self.subid;
			
			$.each(_self.pagedata,function(i,item){
				if(item[subid] == nameid){
				$.each(_self.storedata,function(key,value){
					if(item[subid]+"" == key){
						$('#dg-list').datagrid('uncheckRow', i);
						
					}
				})
				}
			})
			delete _self.storedata[nameid];
			$(this).closest('.stores-selelist').remove();
			
		})
 	},
 	additem : function(target,item){
 		/*
 		添加记录到已选门店
 		*/
 		var subname = this.subname;
 		var subid = this.subid;
 		var str = '<div class="'+this.itemclass+' ui-relative">'+
					'<span class="stores-seleitem '+this.record+'" data-id="'+item[subid]+'">'+item[subname]+'</span>'+
					'<i class="ui-icon ui-close store-item-close"></i>'+
				'</div>';
	   	target.append(str);
 	},
 	additemCheck : function(rowData,type,ismore){
 		/*
 		添加文章：判断是单个勾选或者全选操作
 		*/
 		var _self = this,savedata = this.storedata;
 		if(rowData.length){
 			$.each(rowData,function(i,item){
				_self.addOpearte(_self,item,savedata,type);
			})
 		}else{
 			_self.addOpearte(_self,rowData,savedata,type);
 		}
 		
 	},
 	addOpearte: function(_self,item,savedata,type){
 		/*
 		  勾选或者去掉勾选的相应操作
 		*/
 		
 		var subname = item[this.subname],subid = item[this.subid];
 		var datas = _self.searchRepeat(savedata,subid,type);
		if(datas.flag){
			_self.additem(_self.modeid,item);
			savedata[subid] = subname;
			
		}else{
			if(datas.type != 'add'){
				delete savedata[subid];
				_self.modeid.find("."+_self.itemclass).eq(datas.pos).remove();
			}
			
		}
		console.log(savedata)
 	},
 	getSaveData : function(type){
 		var str = '',index = 0
	 		$.each(moreseleList.storedata, function(key, value){
	 			
				str += key+',';
				index++;
			}); 
 		if(type == 'issave'&& index == 0){
 			return true;
 		}else if(type == 'getval'){
 			return str.substring(0,str.length-1);
 		}else{
 			return false;
 		}
 		
 	},
 	searchRepeat : function (data,id,type){
   		/*
 		  查询是否有相同项
 		*/
   		var flag = true,pos = -1,_self = this,
   			modedata = _self.modeid.find("."+_self.record);
   			
   		$.each(modedata,function(i,item){
   			var itemid = $(item).data('id');
   			if(itemid == id){
   				flag = false;
   				pos = i;
   				return;
   			}	
   		})
   		return {'flag':flag,'pos':pos,'type':type};
    },
    succCheck : function(data){
    	/*
 		  添加文章：加载一页数据后勾选已选记录
 		*/
 		var savedata = this.storedata,_self = this;
 		this.pagedata = data.rows;
    	$.each(data.rows,function(i,v){
			var isflag = false;
			var subid = v[_self.subid];
			for( var key in savedata ){
				if( parseInt(key) == subid){
					isflag = true;
					break;
				}
			}
			if(isflag){
				_self.listid.datagrid('checkRow', i);
			}               
   		})
    },
    messInit : function(subname,subid,datas,formnames){
 		//发布初始化：保存数据记录的id数组
    	//保存数据记录的对象
 		this.releasedata = datas;
		this.subname = subname;
		this.subid = subid;
		this.formnames = formnames;
 	},
 	messAdditem : function(rowData,type,noshowrecord){
 		/*
 		判断是单个勾选或者全选操作
 		*/
 		var _self = this;
 		if(rowData.length){
 			$.each(rowData,function(i,item){
				_self.messOperate(item,type);
			})
 		}else{
 			_self.messOperate(rowData,type);
 		}
 		
 	},
 	messOperate: function(item,type){
 		/*
 		  勾选或者去掉勾选的相应操作
 		*/
 		
 		var subid = parseInt(item[this.subid]);
 		var savedata = this.releasedata;
 		var flag = true,pos = -1,_self = this,
 			nowDate = formatDate(new Date());
   		$.each(savedata,function(i,item){
   			if(parseInt(i) == subid){
   				pos = i;
   			}	
   		})
		if(type == 'add' && pos == -1){
			savedata[subid] = this.formnames[0]+"=&"+this.formnames[1]+"=&"+this.formnames[2]+"=&"+this.formnames[3]+"="+nowDate;
			$("#"+subid).show();

		}else{
			if(type != 'add'){
				delete savedata[subid];
				$("#"+subid).hide().next().html(nowDate);
			}
			
		}
		console.log(savedata)
 	},
 	saveMessData : function(){
 		return this.releasedata;
 	},
 	saveArticleData : function(){

 		return this.storedata;
 	},
 	changeMessData : function(subid,data){
 		var checkhome = this.formnames[0],sticky = this.formnames[1];
 		if( data.indexOf(checkhome) == -1){
 			data += '&'+checkhome+'=';
 		}
 		if( data.indexOf(sticky) == -1 ){
 			data += '&'+sticky+'=';
 		}
 		this.releasedata[subid] = data;
 		this.releaseShow(subid);
 		console.log(this.releasedata);
 	},
 	succMessCheck : function(data,merchantId){
    	/*
 		  发布勾选：加载一页数据后勾选已选记录
 		*/
 		var savedata = this.releasedata,_self = this;
 		this.pagedata = data.rows,id = this.subid;
 		$.each(data.rows,function(i,v){
			var isflag = false;
			var subid = v[id];
			for( var key in savedata ){
				if( parseInt(key) == subid){
					isflag = true;
					break;
				}
			}
			if(isflag){
				$("#dg-list").datagrid('checkRow', i);
				//渲染数据
				_self.releaseShow(subid,'refre',_self.stringToArray(savedata[subid]))
			}               
   		})
    },
    getMessData : function(param){
    	
    	var $saveeles = $("#userData");
    	
    	$saveeles.val(param);
    	$saveeles.prev().text('重新选择');
    },
    getArticleData : function (data,leve){
	    var str = '',strid = [],storeval =$("#storeId").val(),isadd=true;

    	for( var i in data ){
    		str += '<div class="stores-list"><span class="stores-item stores-item-listname" data-id="'+i+'">'+data[i]+'</span><a class="ui-guarant-reduce rerule-reduce storeitem-dele" href="javascript:;" style="display: inline-block;"></a></div>'; 
    		strid.push(i);
    	}
        $("#storeNameShow").append(str);
    	$("#storeId").val(strid.join(","));
	    
	},
	releaseShow : function(subid,type,datas){
		//显示数据
		var str = '',obj = {},_self = this;
		if( type == 'refre' ){
			obj = datas;
			$('#'+subid).show();
		}else{
			obj = eb.form2Json('dlgPlace')
		}
		for( var i in obj ){
			if( i == _self.formnames[2] && obj[i]){
				str +='序号';
			}
			str += obj[i]+" ";
		}
		$('#'+subid).next().html(str);

	},
	stringToArray : function(str){
		var obj = {},array = str.split("&"),array2 = [],
			name = "",value ="";
		$.each(array,function(i,item){
			array2 = item.split("=");
			name = array2[0];
			obj[ name ] = decodeURI(array2[1]);

		})
		return obj;
	},
	releaseSet : function(id){
		//发布设置操作
	  var text = $("#"+id).text(),data = { "id" : id },
	      formdata = (moreseleList.saveMessData())[id];

	  $('#dlgPlace').form('clear').form('reset');
	  data['content'] = moreseleList.stringToArray(formdata);
	  $('#operateModule').html(template('releaseInfo', data));
	  $(".release-datebox").datebox({});
	  showAlert('dlgPlace');

	}
}

//团购操作
var groupBuy = {
	getDataItem : function (data,leve){
	    var str = '',strid = [],storeval =$("#storeId").val(),isadd=true;
	    if(leve == 1){
	        $("#bussNameShow").text(data[0].name);
	        
	        $("#bussNameCheck").val(data[0].id);
	        $("#comdNameChekcd").val("");
	        $("#comdNameShow").text("");
	    }else if(leve == 2){
	        $("#comdNameShow").text(data[0].name);
	       
	        $("#comdNameChekcd").val(data[0].id);
	    }else if(leve == 3){
	    	$.each(data,function(i,v){
	    		//isadd = storeDropRepeat(v.id);
	    		//if(isadd){
	    			str += '<div class="stores-list"><span class="stores-item stores-item-listname" data-id="'+v.id+'">'+v.name+'</span><a class="ui-guarant-reduce rerule-reduce storeitem-dele" href="javascript:;" style="display: inline-block;"></a></div>'; 
	    		//}
	    	})
	        $("#storeNameShow").append(str);
	    	$("#storeId").val('yes');
	    }else if(leve == 'activeadd'){
	    	
	    	$.each(data,function(i,v){
	    		isadd = storeDropRepeat(v.id);
	    		if(isadd){
	    			str += '<div class="stores-list"><span class="stores-item stores-item-listname" data-id="'+v.id+'">'+v.name+'</span><a class="ui-guarant-reduce rerule-reduce storeitem-dele" href="javascript:;" style="display: inline-block;"></a></div>'; 
	    		}
	    	})
	        $("#storeNameShow").append(str);
	    	$("#storeId").val('yes');
	    }
	    $("#relateProduce2").removeAttr('disabled');
	},
	buyDlgShow : function(){
		
		//显示弹框
		$("#relateProduce").click(function(event) {
        	showAlert("dlgList",'','adaptive');
        	$("#businessLoad").attr("src","/groupbuying/merchant/listView");    
	    })
	    $("#relateProduce2").click(function(event) {
	    	var bussNameId = $("#bussNameCheck").val();
	        showAlert("dlgList2",'','adaptive');
	        $("#businessLoad2").attr("src",'/groupbuying/product/listView?merchantId='+bussNameId);      
	    })
	    $("#relateProduce3").click(function(event) {
	        showAlert("dlgList3",'','adaptive');
	        $("#businessLoad3").attr("src",'/groupbuying/store/listView');      
	    })
	    //参与门户删除
	    $("#storeNameShow").on('click','.storeitem-dele',function(){
            var len = $('.storeitem-dele').length;
            if(len > 1){
                $(this).closest('.stores-list').remove();
            }
     	})
     
  }
}
function storeDropRepeat(name){
	 //参与门店去除重复的名字
	 var storename = $(".stores-item-listname"),
	 	 flag = true;
	 $.each(storename,function(i,v){
		 var value = $(v).data('id');
		 if(value == name){
			 flag = false;
		 }
		 
	 })
	 flag = storename.length?flag:true;
	return flag;
}



function checkbox(){
	//多选框判断
    $("#formBox").on('click', '.checkbox-item', function() {
        var $chks = $(this).closest('.checkbox-list').find('.checkbox-item'),
            $checkele = $(this).closest('.checkbox-list').find('.checkbox-checked'),
            count = 0 ,flag = '';
        $.each($chks, function(i, item) {
            if (item.checked) {
                count++;
            }
        })
        flag = count ? 'true' : '';  
        $checkele.val(flag);
    })
}
//[data加载本地数据进行分页]
var datagridLoad = {
	onePurch : function (arrid,data,leve){
		//一元购添加值
		//this.purchRecord = data;
		//合并数组
		this.purchRecord.push.apply(this.purchRecord, data);
		this.onePurchAdd(arrid);
	},
	onePurchInit : function(type,data){
		this.purchRecord = [];
		if( type == 'editor'){
			this.purchRecord = data;
			this.onePurchAdd();
		}
		
	},
	restructeData : function(data,params){
		var total = data.length;
		var datas = { 
				"version": "1.0.6.1", 
				"code": "000000", 
				"message": null, 
				"entity": { "total": total, "size": 10, "count": 1, "page": 1, "records":[] }, 
				"succ": true 
			};
	    datas.entity.records = params;
	    return datas;
	},
	onePurchAdd : function(ids){
		floadTable(this.purchRecord);
		var datas = groupBuy.restructeData(this.purchRecord,this.purchRecord.slice(0,10));
		$("#dg-list").datagrid('loadData', datas);
		$("#nexworkInfo").show();
		
		
	},
	onePurchDele : function(comid){
		
		var datas = this.purchRecord,pos = -1;
	    $.each(datas,function(i,item){
			if( item.id == comid){
				pos = i;
				return false;
			}
		})
		if( pos != -1 ){
			datas.splice(pos,1);
			var datas = groupBuy.restructeData(this.purchRecord,this.purchRecord.slice(0,10));
			$("#dg-list").datagrid('loadData', datas);
			
		}
	},
	onePurchId : function(){
		//groupBuy.onePurchId()一元购都id
		var array = [],str = '';
		$.each(this.purchRecord,function(i,item){
			array.push(item.id);
		})
		str= array.join(",");
		return str;
	}
	
			 
}

function floadTable(data){
		//列表
		$("#dg-list").datagrid({
			method:'post',
			fitColumns:true,
			rownumbers:true,
			nowrap: true,//当数据长度超出列宽时将会自动截取
			//idField:'userid',//id字段
			//sortName:'userid',//当数据表格初始化时以哪一列来排序
			//sortOrder:'desc',//'asc'/'desc'（正序/倒序）
			//remoteSort: false,//定义是否通过远程服务器对数据排序
			resizable:false,
			checkOnSelect:false,
			pagination:true,
			pageSize:10,
			columns:[[
				{field:'name',align:'center',width:"22%",title:'网点名称'},
		        {field:'networksAddress',align:'center',width:"26%",title:'网点地址'},
		        {field:'networksTel',align:'center',width:"20%",title:'联系电话'},
		        {field:'networksOpening',align:'center',width:"20%",title:'营业时间'},
				{field:'opt',align:'center',width:"10%",title:'操作',
					formatter:function(value,rec){
		
						return '<a class="detail-link ui-opeway ui-opeway" href="javascript:;" onclick="groupBuy.onePurchDele('+rec.id+')">删除</a>';
					}}
			]],
			queryParams: eb.form2Json("search-ff"),
		loadFilter:function(data){
		        return eb.loadFilter(data);//自定义过滤方法
		},
		onLoadSuccess:pageCls
		});
		pageAction2(data);
}
/**
 * [ajax发送消息]
 * [callServer ajax发送消息]
 * @param  {[Objec]} options [ajax请求的参数]
 * @param  {[Objec]} btn [点击的元素]
 * @return {[null]}     [description]
 */
function callServer(options, btn) {
	var layerLoad = null,
  		isflag = true,//一个开关，防止二次提交
  		option = {},setting = {};
	
    setting = {
        url: '',//请求地址
        type: 'post',// 请求类型,默认是get,请求的方式主要有post/get
        data: '',// 请求参数,主要有String和object这两种
        dataType: 'json',// 请求返回的类型，主要有text,html,script,jsonp,json,xml
        async : true,// 请求是同步还是异步，默认true位异步，false代表同步
        cache:true,//是否从缓存加载请求，默认true,false则重新请求数据
        isOpenLaday : false,//是否要显示加载中图标,默认不显示加载图标
        timeout : 0,//设置请求超时时间（毫秒），默认0表示无超时时间
        /*
        1.设置json格式数据"application/json; charset=utf-8",
        2.发送表单数据"application/x-www-form-urlencoded; charset=utf-8"
        3.发送纯文本"text/plain; charset=utf-8"
        4.发送html文本"text/html; charset=utf-8"
        */
        contentType :"application/x-www-form-urlencoded",//内容编码类型,默认发送表单数据类型
        beforeSend : function(XMLHttpRequest){},//发送请求前的函数
        complete : function(XMLHttpRequest,textStatus){},//请求完成后的回调函数
        success : function(data,textStatus){},//请求成功后的回调函数
        error : function(XMLHttpRequest,textStatus,errorThrown){},//请求失败事的回调函数
        global : true,//是否触发全局ajax事件

    }
    option = $.extend(setting, options);
  
    if( isflag ){
    	$.ajax({
	        url: option.url,
	        type: option.type,
	        dataType : option.dataType,
	        data : 　option.data,
	        cache:option.cache,
	        async: option.async,
	        beforeSend : function(){
	        	isflag = false;
	        },
	        complete: function(XMLHttpRequest,status) {
	        	isflag = true;
	        },
	        success: function(data) {
	        	option.success && option.success(data);
	        },
	        error: function(data) {
	        	//如果错误有返回信息则显示
	        	formCheckInfo( '请求失败，请重新请求');
	            option.error && option.error(data);
	        }
	    });
    }
}

/**
 * [弹框显示] 
*/
function showAlert(dlgid,text,type){
	 var dlg=$('#'+dlgid),
	    top=document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset,
	    h=parseInt(dlg[0].offsetHeight);
	 if(text){
		 dlg.find('.ui-dlg-tit').text(text);
	 }
	 if(type=="min"){
		 dlg.dialog({top:30});
	 }else if(type=='middle'){
		 dlg.dialog({top:200});
	 }else if(type == 'adaptive'){
		 dlg.dialog({top:top+40,width:'80%'}).dialog('center');
	 }else{
		 dlg.dialog({top:parseInt(window.screen.availHeight-h)/2+top-200});
	 }
     dlg.dialog('open');
}

/**
 * [提交数据操作] 
*/
var WE = {
	init : function(dlg,formid,eurl,dlgheight){
		this.deleData = {
			'role' : ['agentAreaCityName','truename'],
			'operate' : ['agentAreaCityName','truename'],
			'article' : ['agentAreaCityName','truename','agentAreaCounty']
		}
		this.submitData(dlg,formid,eurl,dlgheight);
	},
	saveCheck : function(formid,dlg,type,eurl){
		/**
		 * [WE.saveCheck() 表单提交前的验证]
		 * @param  {[String]} formid [form的Id]
		 * @param  {[String]} dlg [显示弹框的id]
		 * @param  {[String]} eurl [跳转的URL]
		*/
		var form = $("#"+formid);
		if (form.form('enableValidation').form('validate')) {
			if( type == 'checked' ){
				this.ajaxSubmit(formid,dlg,eurl);
			}else{
				showAlert(dlg);	
			}
						
		}else{
			//显示日期提示语
			form.find(".validatebox-text[readonly=readonly]").trigger("mouseenter");
		}
	},
	submitData : function(dlg,formid,eurl,dlgheight){
		/**
		 * [WE.submitData() 新增/删除提交]
		 * @param  {[String]} formid [form的Id]
		 * @param  {[String]} dlg [显示弹框的id]
		 * @param  {[String]} eurl [跳转的URL]
		*/
		var _self = this;

		//新增编辑提交
		$('#operaSubmit').click(function(){
			_self.ajaxSubmit(dlg,formid,eurl);
			
		})
		//删除
		$('#listDele,#listRest').click(function(){	
			_self.ajaxSubmit(dlg,formid,eurl);	
		})
		//直接提交
		$('#direSubmit').click(function(){	
			_self.directSubmit(this,eurl,dlgheight);	
		})
		
	},
	ajaxSubmit : function(sdlg,formid,eurl){
		/**
		 * [WE.ajaxSubmit() 提交的ajax]
		 * @param  {[String]} formid [form的Id]
		 * @param  {[String]} dlg [显示弹框的id]
		 * @param  {[String]} eurl [跳转的URL]
		*/
		$.ajax({
			url:$("#"+formid).attr('action'),
			type: 'post',
			dataType: 'json',
			data: eb.parseParam(formid),
			success:function(data){
				var message = '';
				$("#"+sdlg).dialog('close');
				if(data.succ){
					message = data.message?data.message:'操作成功';
					dlgCloseJump(message,eurl)
				} else {
					alert(data.message);
				}
			},
            error: function() {
                alert('系统错误，请重试');
            }
		});
	},
	dlgSms : function(dlg,type,params){
		/**
		 * [WE.dlgSms() 删除/禁用/冻结等操作]
		 * @param  {[String]} dlg [显示弹框的id]
		 * @param  {[String]} type [操作类型]
		 * @param  {[String]} params [提交参数]
		*/
		var arrparam = [params];
		//参数获取
		if( params.indexOf("-") != -1 ){
			arrparam = params.split("-");
		}

		if( type == 'dele'){
			$("#paramDel").val(arrparam[0]);
		}else if( type == 'disable' ){
			$("#paramOne").val(arrparam[0]);
			$("#paramTwo").val(arrparam[1]);
		}else if( type == 'reset' ){
			$("#paramRet").val(arrparam[0]);
		}
		showAlert(dlg);
	},
	directSubmit : function(obj,eurl,dlgheight) { 
	    /**
		 * [WE.directSubmit() 直接提交]
		 * @param  {[String]} obj [点击元素]
		 * @param  {[String]} eurl [操作类型]
		 * @param  {[String]} dlgheight [弹框高度]
		*/
	    var form = $(obj).parents('form');
	    var formid = form.attr('id');
	    if (form.form('enableValidation').form('validate')) {
	    	
	    	$(obj).attr("disabled", true); 
	        $.ajax({
	            url: form.attr('action'),
	            type: 'post',
	            dataType: 'json',
	            data: form.serialize(),
	            success: function(data) {
	            	var msg = data.message;
	            	if(data.succ){
	            		msg = msg ? msg : '操作成功';
	  					dlgCloseJump(msg,eurl,dlgheight);
		  			}else{
		  				alert(msg);
		  			}
	                $(obj).removeAttr('disabled');
	            },
	            error: function() {
	                alert('系统错误，请重试');
	                $(obj).removeAttr('disabled');
	            }
	        });
	    }else{
			//显示日期提示语
			form.find(".validatebox-text[readonly=readonly]").trigger("mouseenter");
		}
	},
	cancelArticle : function(obj,id,type){
		//删除显示弹框
		var datas  = $("#dg-list").datagrid('getData').rows,
			index = $(obj).closest('tr').index(),
			param1 = (this.deleData[type])[0],
			param2 = (this.deleData[type])[1],
			param3 = (this.deleData[type])[2];
		
		
		var data = {
		    title: (datas[index])[param1],
		    theme : (datas[index])[param2],
		    sort : (datas[index])[param3],
		    id : id
		};
		$('#articleMain').html(template('articleInfo', data));
		showAlert('dlgDele');
	}
}
/**
 * [生成弹框显示]
 * @param  {[Object]} msg [弹框显示消息(必填)]
 * @param  {[String]} url [跳转地址(必填)]
*/
function dlgCloseJump(options){
	var o = {
        message: "", //消息
        type : "jump", //类型
        autoclose : false, //是否自动关闭弹框
        times : 2000
      
    };
	o = $.extend(o, options);
	var dlgmode = '<div id="dlgShowState" class="easyui-dialog ui-dlg-alert">'+
	   			  '<h3 class="ui-dlg-tit" >'+o.msg+'</h3><input type="button" class="ui-dlgOk-btn ui-okclose" value="确定" /></div>';
	$('body').append(dlgmode);
	$("#dlgShowState").dialog({
		iconCls : 'icon-save',
        modal : true,
		onClose : function(){
			if(type == 'reload'){
				window.location.reload();
			}else{
				location.href=url;
			}
			
		}
	})
	//自动关闭
	if(o.autoclose ){
		setTimeout(function(){
			$("#dlgShowState").dialog('close');
		},o.times);
	}
	
}
/**
 * [百度编辑器]
 * @param  {[String]} ids [编辑器id]
 * @param  {[String]} url [提交地址]
*/
function uEditor(ids,url){

    var ue;
    //初始化编辑器
    $.each(ids,function(i,item){
        ue = UE.getEditor(item);
        ue.addListener('contentChange',function(a,b,c){
        	//当写入编辑内容时赋值验证信息
        	var msg = ue.getContent();
        	$("#"+item+"Check").val(msg);
        }) 
    })
    //秀米插件
    UE.registerUI('dialog', function (editor, uiName) {
        var btn = new UE.ui.Button({
            name   : 'xiumi-connect',
            title  : '秀米',
            onclick: function () {
                var dialog = new UE.ui.Dialog({
                    iframeUrl: url,
                    editor   : editor,
                    name     : 'xiumi-connect',
                    title    : "秀米图文消息助手",
                    cssRules : "width: " + (window.innerWidth - 60) + "px;" + "height: " + (window.innerHeight - 60) + "px;",
                });
                dialog.render();
                dialog.open();
            }
        });

        return btn;
    });
}
$(function(){
	//输入小数点后一位
	$(".decimal-pointone").keyup(function() {
		Input.limeDecima1(this);
	})
	//输入小数点后两位
	$(".decimal-pointtwo").keyup(function() {
		Input.limeDecima2(this);
	})
	//只能输入整数
	$(".num-digital").keyup(function() {
		Input.clearNoIntegerZero(this);
	})
	//只能输入数字，小数点后两位
	$(".decimal-digital").keyup(function() {
		Input.clearNoPrice(this);
	})
	
	//textarea长度限制
	$('.textarea-lenline').keyup(function() {
		textareaLime(this);
    });

    //全局的ajaxError处理信息
	$(document).ajaxError(function(event, jqXHR, options, errorMsg) {
        var home = $(jqXHR.responseText).filter("#protectId").length;
        home && location.reload();
    })

	$('body').delegate('.ui-dlgCancel-btn,.ui-okclose', 'click', function() {
				$(this).parents('.easyui-dialog').dialog('close');
			});
	$('body').delegate('.ui-bus-confirm', 'click', function() {
				$(this).parents('.easyui-dialog').dialog('close');
			});

	window.onresize = function(){
		setTimeout(domresize,300);
	};

	$.extend($.fn.datagrid.defaults.onLoadError=function(data){
		var home = $(data.responseText).filter("#protectId").length;
       
        if(home){
        	location.reload();
        }else{
        	//返回页面报错隐藏分页
        	$("#dg-list").datagrid("getPager").hide();
        }
	});
})