/**
 * 
 * @authors luzhm (luzhm@seaway.net.cn)
 * @date    2017-04-01 11:40:20
 * @version $Id$
 * @description 
 * 1.[RMB 人民币操作]
 * 2.[FloatObj 加减乘除的四个接口]
 * 3.[valid 验证类]
 * 3.[Input 输入替换]
 * 4.[browser 浏览器检测] 
 * 5.[FormatDate 日期格式化] 
 * @update [user] [date] [instruction]
 */
/**
 * [RMB 人民币操作]
 * @type {Object}
 */
var Rmb = {
    /**
     * [upDigit 数字金额大写转换(可以处理整数,小数,负数)]
     * @param  {[type]} n [description]
     * @return {[type]}   [description]
     */
    upDigit: function(n) {
        var fraction = ['角', '分'];
        var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
        var unit = [
            ['元', '万', '亿'],
            ['', '拾', '佰', '仟']
        ];
        var head = n < 0 ? '欠' : '';
        n = Math.abs(n);
        var s = '';
        for (var i = 0; i < fraction.length; i++) {
            s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
        }
        s = s || '整';
        n = Math.floor(n);
        for (var i = 0; i < unit[0].length && n > 0; i++) {
            var p = '';
            for (var j = 0; j < unit[1].length && n > 0; j++) {
                p = digit[n % 10] + unit[1][j] + p;
                n = Math.floor(n / 10);
            }
            s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
        }
        return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
    },
    /**
     * [formatRMB 格式化]
     * @param  {[muber]} money  [传入需要格式化的钱（分为单位）]
     * @param  {[string]} format [thousands：转换千分位,tenthousand:转换万元,空保留小数]
     * @return {[string]}        [返回格式化后的钱]
     */
    formatRMB: function(money, format) {
        var RMB = null;
        if (isNaN(money)) {
            RMB = 0;
        } else {
            RMB = (Number(money)).toFixed(2); //分转换成元保留两位小数
            switch (format) {
                case "thousands":
                    RMB = (RMB + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
                    break;
                case "tenthousand":
                    RMB = parseInt(RMB) >= 10000 ? (parseInt(RMB) / 10000) + "万" : parseInt(RMB);
                    break;
                default:
                    RMB = RMB;
            }
        }
        return RMB
    },
    /**
     * [numToCard 数字四位以空格分隔]
     * @param  {[muber]} string  [传入需要格式化的钱（分为单位）]
     * @return {[string]}        [返回格式化后的钱]
     */
    numToCard: function(string) {
        return string.replace(/(\d{4})(?=\d)/g, "$1" + " ")
    },
    /**
     * [toDecimal2 截取小数点后两位]
     * @param  {[number]}  num [数字]
     * @return {number}      [格式化的数字]
     */
    toDecimal2: function(num) {
        var snum = num.toString(10),
            dotted = snum.indexOf("."),
            array = [];
        if (dotted > 0) {
            array = snum.split(".");
            if (array[1].length == 1) {
                snum += "0";
            } else {
                snum = array[0] + "." + array[1].substr(0, 2);
            }
        } else {
            snum = snum + '.00';
        }
        return snum;
    }
};


/**
 * [FloatObj 加减乘除的四个接口]
 * @param  {[type]} fractionDigits [description]
 * @return {[type]}                [description]
 */
var FloatObj = {
    /**
     * [add 加法]
     * @param  {[number]} a [数字]
     * @param  {[number]} b [数字]
     * @param  {[number]} digits [保留小数点位数]
     * @return {[number]}             [格式化后的数字]
     */
    add: function(a, b, digits) {
        return this.operation(a, b, digits, 'add')
    },
    /**
     * [subtract 减法]
     */
    subtract: function(a, b, digits) {
        return this.operation(a, b, digits, 'subtract')
    },
    /**
     * [multiply 乘法]
     */
    multiply: function(a, b, digits) {
        return this.operation(a, b, digits, 'multiply')
    },
    /**
     * [divide 除法]
     */
    divide: function(a, b, digits) {
        return this.operation(a, b, digits, 'divide')
    },
    /*
     * 核心方法，实现加减乘除运算，确保不丢失精度
     * 思路：把小数放大为整数（乘），进行算术运算，再缩小为小数（除）
     *
     * @param a {number} 运算数1
     * @param b {number} 运算数2
     * @param digits {number} 精度，保留的小数点数，比如 2, 即保留为两位小数
     * @param op {string} 运算类型，有加减乘除（add/subtract/multiply/divide）
     *
     */
    operation: function(a, b, digits, op) {
        var o1 = this.toInteger(a)
        var o2 = this.toInteger(b)
        var n1 = o1.num
        var n2 = o2.num
        var t1 = o1.times
        var t2 = o2.times
        var max = t1 > t2 ? t1 : t2
        var result = null;
        switch (op) {
            case 'add':
                if (t1 === t2) { // 两个小数位数相同
                    result = n1 + n2
                } else if (t1 > t2) { // o1 小数位 大于 o2
                    result = n1 + n2 * (t1 / t2)
                } else { // o1 小数位 小于 o2
                    result = n1 * (t2 / t1) + n2
                }
                return this.toFormat(result / max, digits)
            case 'subtract':
                if (t1 === t2) {
                    result = n1 - n2
                } else if (t1 > t2) {
                    result = n1 - n2 * (t1 / t2)
                } else {
                    result = n1 * (t2 / t1) - n2
                }
                return this.toFormat(result / max, digits)
            case 'multiply':
                result = (n1 * n2) / (t1 * t2)
                return this.toFormat(result, digits)
            case 'divide':
                result = (n1 / n2) * (t2 / t1)
                return this.toFormat(result, digits)
        }
    },
    /**
     * [toFixed 修复各个浏览器计算不一样问题]
     * @param  {[type]} fractionDigits [description]
     * @return {[type]}                [description]
     */
    toFormat: 　 function(amount, fractionDigits) {
        //没有对fractionDigits做任何处理，假设它是合法输入  
        var isHasDotted = amount.toString().indexOf("."),
            snum = amount.toString();
        if (isHasDotted > 0) {
            var tempArray = snum.split(".");
            if (tempArray[1].length >= fractionDigits) {
                tempArray[1] = tempArray[1].substring(0, fractionDigits)
            } else {
                tempArray[1] = tempArray[1] + Array(fractionDigits).join(0);
            }
            return tempArray.join(".")
        } else {
            //整数补0
            snum += "." + Array(fractionDigits + 1).join(0);
        }

        return snum;
    },
    // 22.122.toFixed(-2)
    /*
     * 判断obj是否为一个整数
     */
    isInteger: function(obj) {
        return Math.floor(obj) === obj
    },
    /*
     * 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100
     * @param floatNum {number} 小数
     * @return {object}
     *   {times:100, num: 314}
     */
    toInteger: function(floatNum) {
        var ret = { times: 1, num: 0 }
        var isNegative = floatNum < 0
        if (this.isInteger(floatNum)) {
            ret.num = floatNum
            return ret
        }
        var strfi = floatNum + ''
        var dotPos = strfi.indexOf('.')
        var len = strfi.substr(dotPos + 1).length
        var times = Math.pow(10, len)
        var intNum = parseInt(Math.abs(floatNum) * times + 0.5, 10)
        ret.times = times
        if (isNegative) {
            intNum = -intNum
        }
        ret.num = intNum
        return ret
    }
}


/**
 * [valid 验证类]
 * @type {Object}
 */
var Valid = {
    /**
     * [isNum 是否位数字]
     * @param  {[string]}  num [description]
     * @return {Boolean}     [description]
     */
    isNum: function(num) { //# 是否为数
        return !isNaN(num);
    },
    /**
     * [isEmail description]
     * @param  {[type]}  mail [description]
     * @return {Boolean}      [description]
     */
    isEmail: function(mail) { //# 是否为 邮箱
        return /^([a-z0-9]+[_\-\.]?)*[a-z0-9]+@([a-z0-9]+[_\-\.]?)*[a-z0-9]+\.[a-z]{2,5}$/i.test(mail);
    },
    /**
     * [isFloat 浮点数]
     * @param  {[type]}  num [description]
     * @return {Boolean}     [description]
     */
    isFloat: function(num) { //# 是否为 浮点数
        return /^(([1-9]\d*)|(\d+\.\d+)|0)$/.test(num);
    },
    /**
     * [isInt 正整数]
     * @param  {[type]}  num [description]
     * @return {Boolean}     [description]
     */
    isInt: function(num) { //# 是否为 正整数
        return /^[1-9]\d*$/.test(num);
    },
    /**
     * [isChinese 是否全为汉字]
     * @param  {[type]}  str [description]
     * @return {Boolean}     [description]
     */
    isChinese: function(str) { //# 是否全为 汉字
        return /^([\u4E00-\u9FA5]|[\uFE30-\uFFA0])+$/gi.test(str);
    },
    /**
     * [isChinese 是否为中文名称]
     * @param  {[type]}  str [description]
     * @return {Boolean}     [description]
     */
    isChineseName: function(str) {
        return /^([\u4E00-\u9FA5]|[\uFE30-\uFFA0]{2,5})+([·|•]([\u4E00-\u9FA5]|[\uFE30-\uFFA0]){2,5})*$/gi.test(str);
    },
    /**
     * [isCEN  是否为中文数字英文符号]
     * @param  {[type]}  str [description]
     * @return {Boolean}     [description]
     */
    isCENP: function(str) {
        return /^[\，\。\！\？\：\,\.\!\?\:\·\¥\%\u4E00-\u9FA5A-Za-z0-9_]+$/gi.test(str);
    },
    /**
     * [isCEN  是否为中文数字英文]
     * @param  {[type]}  str [description]
     * @return {Boolean}     [description]
     */
    isCEN: function(str) {
        return /^[\u4E00-\u9FA5A-Za-z0-9_]+$/gi.test(str);
    },

    /**
     * [isCEN  是否为中文英文]
     * @param  {[type]}  str [description]
     * @return {Boolean}     [description]
     */
    isCE: function(str) {
        return /^[\u4E00-\u9FA5A-Za-z_]+$/gi.test(str);
    },
    //
    /**
     * [isIdCard 身份证验证]
     * @param {[type]} gets [description]
     * @return {Boolean}     [description]
     */
    isIdCard: function(gets) {
        var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]; // 加权因子;
        var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; // 身份证验证位值，10代表X;
        if (gets.length == 15) {
            return isValidityBrithBy15IdCard(gets);
        } else if (gets.length == 18) {
            var a_idCard = gets.split(""); // 得到身份证数组
            if (isValidityBrithBy18IdCard(gets) && isTrueValidateCodeBy18IdCard(a_idCard)) {
                return true;
            }
            return false;
        }
        return false;

        function isTrueValidateCodeBy18IdCard(a_idCard) {
            var sum = 0; // 声明加权求和变量
            if (a_idCard[17].toLowerCase() == 'x') {
                a_idCard[17] = 10; // 将最后位为x的验证码替换为10方便后续操作
            }
            for (var i = 0; i < 17; i++) {
                sum += Wi[i] * a_idCard[i]; // 加权求和
            }
            valCodePosition = sum % 11; // 得到验证码所位置
            if (a_idCard[17] == ValideCode[valCodePosition]) {
                return true;
            }
            return false;
        }

        function isValidityBrithBy18IdCard(idCard18) {
            var year = idCard18.substring(6, 10);
            var month = idCard18.substring(10, 12);
            var day = idCard18.substring(12, 14);
            var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
            // 这里用getFullYear()获取年份，避免千年虫问题
            if (temp_date.getFullYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
                return false;
            }
            return true;
        }

        function isValidityBrithBy15IdCard(idCard15) {
            var year = idCard15.substring(6, 8);
            var month = idCard15.substring(8, 10);
            var day = idCard15.substring(10, 12);
            var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
            // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
            if (temp_date.getYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
                return false;
            }
            return true;
        }
    },
    /**
     * [isMobile  手机验证]
     * @param  {[type]} gets [description]
     * @return {[type]}      [description]
     */
    isMobile: function(gets) {
        return /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$|17[0-9]{9}$/.test(gets);
    },
    /**
     * [isTel 验证座机]
     * @param  {[type]}  tel [description]
     * @return {Boolean}     [description]
     */
    isTel: function(tel) { //# 是否为 电话
        return /^\d{3,4}-\d{7,8}(-\d{1,6})?$/.text(tel);
    },
    /**
     * [isPrice校验价格和金额的方法]
     * @param  {[type]}  price [description]
     * @return {Boolean}       [description]
     */
    isPrice: function(price) {
        if (price == "0" || price == "0." || price == "0.0" || price == "0.00") {
            price = "0";
            return true;
        } else {
            var index = price.indexOf("0");
            var length = price.length;
            if (index == 0 && length > 1) { /*0开头的数字串*/
                var reg = /^[0]{1}[.]{1}[0-9]{1,2}$/;
                if (!reg.test(price)) {
                    return false;
                } else {
                    return true;
                }
            } else { /*非0开头的数字*/
                var reg = /^[1-9]{1}[0-9]{0,10}[.]{0,1}[0-9]{0,2}$/;
                if (!reg.test(price)) {
                    return false;
                } else {
                    return true;
                }
            }
            return false;
        }
    },
    /**
     * [isPlateNumber 车牌号验证]
     * @param  {[type]} gets [description]
     * @return {[Boolean]}      [description]
     */
    isPlateNumber: function(gets) {
        var re = /^[\u4e00-\u9fa5]{1}[a-zA-Z]{1}[a-zA-Z_0-9]{5}$/; //车牌号
        if (gets.search(re) == -1) {
            return false;
        } else {
            return true;
        }
    },
    /**
     * [isName 姓名验证]
     * @param  {[type]} gets [description]
     * @return {[Boolean]}      [description]
     */
    isName: function(gets) {
        return /[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*/.test(gets);
    },
    /**
     * [contrastDate 时间对比]
     * @param  {["YYYY--MM-DD"]} a [第一个日期]
     * @param  {["YYYY--MM-DD"]} b [第二个日期]
     * @param  {[int]} number [间隔日期天]
     * @return {[Boolean]}   [如果第一个大于第二 false  反之 true]
     */
    contrastDate: function(a, b, number) {
        var num = number ? number : 0;
        var arr = a.split("-");
        var startTime = new Date(arr[0], arr[1] - 1, arr[2]);
        var startTimes = startTime.getTime();
        var arrs = b.split("-");
        var endTime = new Date(arrs[0], arrs[1] - 1, arrs[2]);
        var endTimes = endTime.getTime();
        if (num != 0) {
            var datenum = num * 24 * 60 * 60 * 1000;
            if (startTimes + datenum >= endTimes) {
                return true;
            } else {
                return false;
            }
        } else {
            if (startTimes <= endTimes) {
                return true;
            } else {
                return false;
            }
        }
    }
};


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
    clearNoPrice: function(obj, type) {
        obj.value = obj.value.replace(/^[0][0-9]/g, "") //清楚以0开始的非小数的字符
        obj.value = obj.value.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
        obj.value = obj.value.replace(/^\./g, ""); //验证第一个字符是数字而不是
        obj.value = obj.value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
        obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        if (type == 1) {
            obj.value = obj.value.replace(/^(\d+)\.(\d).*$/, '$1.$2'); //保留一位小数
        } else if (type == 2) {
            obj.value = obj.value.replace(/^(\d+)\.(\d\d).*$/, '$1.$2'); //保留两位小数
        } else if (type == 3) {
            obj.value = obj.value.replace(/^(\d+)\.(\d\d\d).*$/, '$1.$2'); //保留三位小数
        } else if (type == 6) {
            obj.value = obj.value.replace(/^(\d+)\.(\d{6}).*$/, '$1.$2'); //保留六位小数
        }

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
     * [clearNoChinese 只能输入英文和数字]
     * @param  {[Object]} obj [输入对象]
     * @return {[type]}     [description]
     */
    clearNoNumlet: function(obj) {
        obj.value = obj.value.replace(/[^a-zA-Z\d]/ig, '')
    },
    /**
     * [clearNoInt 只能输入字母和汉字]
     */
    clearNoLetterChinese(obj) {
        obj.value = obj.value.replace(/[^\a-\z\A-\Z\u4E00-\u9FA5]/g, '')
    },
    /**
     * [clearNoInt 只能输入字母,汉字和数字]
     */
    clearNoLetterChineseNumber(obj) {
        obj.value = obj.value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '')
    },
    /**
     * [clearDiscount 只能输入0.01~10.00]
     */
    clearDiscount(obj) {
        //折扣：只能输入0.01~10.00
        obj.value = obj.value.replace(/^[0][0-9]/g, "") //清楚以0开始的非小数的字符
        obj.value = obj.value.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
        obj.value = obj.value.replace(/^\./g, ""); //验证第一个字符是数字而不是
        obj.value = obj.value.replace(/^(\d\d)(\d+).*$/, '$1');
        obj.value = obj.value.replace(/\.{1,}/g, "."); //只保留第一个. 清除多余的
        obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        obj.value = obj.value.replace(/^(\d{1,2})\.(\d\d).*$/, '$1.$2');
        if (parseFloat(obj.value) > 10 && obj.value.indexOf(".") == -1) {
            obj.value = obj.value.substring(0, 1);
        } else if (parseFloat(obj.value) > 10 && obj.value.indexOf(".") != -1) {
            obj.value = obj.value.substring(0, 3);
        }
    },
    /**
     * [inputnumber 只能输入整数6位小数两位]
     */
    inputnumber: function(obj) {
        obj.value = obj.value.replace(/^[0][0-9]/g, "") //清楚以0开始的非小数的字符
        obj.value = obj.value.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
        obj.value = obj.value.replace(/^\./g, ""); //验证第一个字符是数字而不是
        obj.value = obj.value.replace(/^(\d\d\d\d\d\d)(\d+).*$/, '$1');
        obj.value = obj.value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
        obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        obj.value = obj.value.replace(/^(\d{1,6})\.(\d\d).*$/, '$1.$2');
    },
}


/**
 * [browser 浏览器检测]
 * @type {Object}
 */
var Browser = {
    versions: function() {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        return { //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
};
// if (Browser.versions.ios || Browser.versions.iPhone || Browser.versions.iPad) { //
//        $("html").addClass('ios')
// }
/**
 * [version 浏览器检测]
 * @type {Object}
 */
function version() {
    var inBrowser = typeof window !== 'undefined',
        UA = inBrowser && window.navigator.userAgent.toLowerCase(),
        isAndroid = UA && UA.indexOf('android') > 0, //是否是安卓
        isIOS = UA && /iphone|ipad|ipod|ios/.test(UA), //是否是ios
        isWechat = /micromessenger/i.test(UA), //是否是微信
        isApp = window.wvObject ? true : false; //是否是app
    return {
        android: isAndroid,
        ios　: isIOS,
        wechat: isWechat
    }
}


/**
 * [FormatDate 日期格式化]
 * @type {Object}
 */
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
    },
    /*
     *   功能:DateAdd功能.
     *   参数:interval,字符串表达式，表示要添加的时间间隔.
     *   参数:number,数值表达式，表示要添加的时间间隔的个数.
     *   参数:date,时间对象.
     *   返回:新的时间对象.
     *   var now = new Date();
     *   var newDate = DateAdd( "d", 5, now);
     *---------------  DateAdd(interval,number,date)   -----------------
     */
    dateAdd: function(interval, number, date) {
        switch (interval) {
            case "y":
                {
                    date.setFullYear(date.getFullYear() + number);
                    return date;
                    break;
                }
            case "q":
                {
                    date.setMonth(date.getMonth() + number * 3);
                    return date;
                    break;
                }
            case "M":
                {
                    date.setMonth(date.getMonth() + number);
                    return date;
                    break;
                }
            case "w":
                {
                    date.setDate(date.getDate() + number * 7);
                    return date;
                    break;
                }
            case "d":
                {
                    date.setDate(date.getDate() + number);
                    return date;
                    break;
                }
            case "h":
                {
                    date.setHours(date.getHours() + number);
                    return date;
                    break;
                }
            case "m":
                {
                    date.setMinutes(date.getMinutes() + number);
                    return date;
                    break;
                }
            case "s":
                {
                    date.setSeconds(date.getSeconds() + number);
                    return date;
                    break;
                }
            default:
                {
                    date.setDate(date.getDate() + number);
                    return date;
                    break;
                }
        }
    },
    /**
     * [日期 提前/延后 n天/月/年]
     * @param  {[type]} num  [推后或者提前的时间，不含单位]
     * @param  {[type]} date [起保时间]
     * @param  {[type]} kind [1：天 2：月 3：年]
     * @return {[type]}      [标准日期格式]
     */
    nextTime: function(num, date, kind) {
        if (kind == 1) { //天
            var time = date.getTime() + num * 24 * 60 * 60 * 1000;
            return new Date(time);
        } else if (kind == 2) { //周
            var time = date.getTime() + num * 7 * 24 * 60 * 60 * 1000;
            return new Date(time);
        } else {
            var y = parseInt(date.getFullYear());
            var m = parseInt(date.getMonth() + 1, 10);
            var d = date.getDate();
            if (kind == 3) { //月
                m = m + parseInt(num);
                if (m > 12) {
                    m -= 12;
                    y++;
                } else if (m < 0) { //4 年
                    m += 12;
                    y--;
                }
            } else { //年
                y = y + parseInt(num);
            }
            return new Date(y + "/" + m + "/" + d); //safari不支持横杆格式如2012-12-12
        }
    },
    /**
     * [toTime 接口所需要时间戳]
     * @return {[string]} [YYYYMMDDHHmmSS 返回年月日时分秒格式的时间戳]
     */
    toTime: function() {
        var date = new Date();
        var year = date.getFullYear();
        var month = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : ("0" + (date.getMonth() + 1).toString());
        var day = date.getDate() > 9 ? date.getDate() : ("0" + date.getDate().toString());
        var hour = date.getHours() > 9 ? date.getHours() : ("0" + date.getHours().toString());
        var minute = date.getMinutes() > 9 ? date.getMinutes() : ("0" + date.getMinutes().toString());
        var second = date.getSeconds() > 9 ? date.getSeconds() : ("0" + date.getSeconds().toString());
        var time = year.toString() + '' + month.toString() + '' + day.toString() + '' + hour.toString() + '' + minute.toString() + '' + second.toString();
        return time;
    }
};