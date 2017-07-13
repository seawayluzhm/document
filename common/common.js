/**
 * 
 * @authors luzhm (luzhm@seaway.net.cn)
 * @date    2017-07-13 09:00:00
 * @version v1.0.0
 * @description  公共方法
 * @update [user] [date] [instruction]
 */
/**
 * [Input 输入替换]
 * [valid 验证类]
 * [省市区联动效果]
 * [文字滚动效果]
 */
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
 * [valid 验证类]
 * @type {Object}
 */
Valid = {
    /**
     * [isNum 是否位数字]
     * @param  {[string]}  num [description]
     * @return {Boolean}     [description]
     */
    isNum(num) { //# 是否为数
        return !isNaN(num);
    },
    /**
     * [isEmail description]
     * @param  {[type]}  mail [description]
     * @return {Boolean}      [description]
     */
    isEmail(mail) { //# 是否为 邮箱
        return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(mail);
    },
    /**
     * [isChinese 是否全为汉字]
     * @param  {[type]}  str [description]
     * @return {Boolean}     [description]
     */
    isChinese(str) { //# 是否全为 汉字
        return /^([\u4E00-\u9FA5]|[\uFE30-\uFFA0])+$/gi.test(str);
    },
    /**
     * [isChinese 是否为中文名称]
     * @param  {[type]}  str [description]
     * @return {Boolean}     [description]
     */
    isChineseName(str) {
        return /^([\u4E00-\u9FA5]|[\uFE30-\uFFA0]{2,5})+([·|•]([\u4E00-\u9FA5]|[\uFE30-\uFFA0]){2,5})*$/gi.test(str);
    },
    /**
     * [isCEN  是否为中文数字英文符号]
     * @param  {[type]}  str [description]
     * @return {Boolean}     [description]
     */
    isCENP(str) {
        return /^[\，\。\！\？\：\,\.\!\?\:\·\¥\%\u4E00-\u9FA5A-Za-z0-9_]+$/gi.test(str);
    },
    /**
     * [isCEN  是否为中文数字英文]
     * @param  {[type]}  str [description]
     * @return {Boolean}     [description]
     */
    isCEN(str) {
        return /^[\u4E00-\u9FA5A-Za-z0-9_]+$/gi.test(str);
    },

    /**
     * [isCEN  是否为中文英文]
     * @param  {[type]}  str [description]
     * @return {Boolean}     [description]
     */
    isCE(str) {
        return /^[\u4E00-\u9FA5A-Za-z_]+$/gi.test(str);
    },
    /**
     * [isIdCard 身份证验证]
     * @param {[type]} gets [description]
     * @return {Boolean}     [description]
     */
    isIdCard(gets) {
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
            var valCodePosition = sum % 11; // 得到验证码所位置
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
    isMobile(gets) {
        return /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$|17[0-9]{9}$/.test(gets);
    },
    /**
     * [isTel 验证座机]
     * @param  {[type]}  tel [description]
     * @return {Boolean}     [description]
     */
    isTel(tel) { //# 是否为 电话
        return /^(?:0[0-9]{2,3}[-\\s]{1}|\\(0[0-9]{2,4}\\))[0-9]{6,8}$|^[1-9]{1}[0-9]{5,7}$|^[1-9]{1}[0-9]{10}$/.test(tel);
    },
    /**
     * [isPlateNumber 车牌号验证]
     * @param  {[type]} gets [description]
     * @return {[Boolean]}      [description]
     */
    isPlateNumber(gets) {
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
    isName(gets) {
        return /[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*/.test(gets);
    },
    /**
     * [isName 特殊字符验证]
     * @param  {[type]} gets [description]
     * @return {[Boolean]}      [description]
     */
    isSpecialCharacter(gets) {
        return /^([`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、])+$/.test(gets);
    },
    /**
     * [siteUrl 网址验证]
     * @param  {[type]} gets [description]
     * @return {[Boolean]}      [description]
     */
    siteUrl(gets) {
        var strRegex = "^((https|http|ftp|rtsp|mms)?://)" + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" // ftp的user@
            + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
            + "|" // 允许IP和DOMAIN（域名）
            + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
            + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
            + "[a-z]{2,6})" // first level domain- .com or .museum
            + "(:[0-9]{1,4})?" // 端口- :80
            + "((/?)|" // a slash isn't required if there is no file name
            + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
        var re = new RegExp(strRegex);
        return re.test(gets);
    },
    /**
     * [passCheck 密码验证]
     * @param  {[type]} gets [description]
     * @return {[Boolean]}      [description]
     */
    passCheck(gets) {
        var number = 0,
            letter = 0,
            other = 0,
            regs = /^([a-zA-Z0-9!\$&'\(\)\*\+,.;:}{\/\=-@#~]){8,20}$/;
        for (var i = gets.length - 1; i >= 0; i--) {
            var charater = gets.charCodeAt(i);
            if (charater >= 48 && charater <= 57) {
                //统计数字
                number++;
            } else if ((charater >= 65 && charater <= 90) || (charater >= 97 && charater <= 122)) {
                //统计字母
                letter++;
            } else {
                other++;
            }
        }
        console.log(11)
        if (number >= 1 && letter >= 1 && regs.test(gets)) {
            //密码格式为8-20位数字和字母组合
            return true;
        }
        return false;
        //return /^\d[a-zA-Z][!\$&'\(\)\*\+,.;:}{\/\=-@#~]$/; 
    },
    /**
     * [contrastDate 时间对比]
     * @param  {["YYYY--MM-DD"]} a [第一个日期]
     * @param  {["YYYY--MM-DD"]} b [第二个日期]
     * @param  {[int]} number [间隔日期天]
     * @return {[Boolean]}   [如果第一个大于第二 false  反之 true]
     */
    contrastDate(a, b, number) {
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
 * [省市区联动] 
 */
;
(function() {
    $.fn.extend({
        LinkageMenu: function(options) {
            var defaults = {
                aSelector: ["#agentAreaProvince", "#agentAreaCity",
                    "#agentAreaCounty"
                ], // 选择器ID数组[]
                aSelectored: ["000000"], // ["顶级父ID","一级ID","二级ID"] 选中
                aSelectCode: "#setAreaCode", // 传递后台的code
                aInitval: [], // 默认值text
                sFristID: "000000", // 一级数据查询标识
                dataList: [], // 缓存数据
                sUrl: "", // 获取数据缓存,
                editorparam: "",
                callback: function() {} // 回调事件
            };
            var opts = $.extend(defaults, options);
            var dataList = opts.dataList;
            var selector = opts.aSelector;
            var aSelectored = opts.aSelectored;
            var aInitval = opts.aInitval;
            var aSelectCode = opts.aSelectCode; // 传递后台的code
            if (dataList.length == 0) {
                $.ajax({
                    type: 'POST',
                    url: opts.sUrl,
                    dataType: 'json',
                    async: false,
                    success: function(data) {
                        dataList = data;
                    },
                    error: function() {
                        alert(11)
                    }
                });

            };
            /* 数据初始化 */
            for (var i = 0; i < selector.length; i++) {
                var selectorText = aInitval[i] ? aInitval[i] : "请选择";
                var selectorHtml = '<option value="">' + selectorText + '</option>';
                dataList[aSelectored[i]] && $.each(dataList[aSelectored[i]], function(sindex,
                    data) {
                    var selected = aSelectored[i + 1] == data.areaId ? "selected" : "";
                    selectorHtml += '<option data-code="' + data.areaCode + '" value="' + data.areaId + '" ' + selected + '>' + data.areaName + '</option>';
                });
                $(selector[i]).html(selectorHtml);
                if ($(selector[i])[0]) {
                    var dataCode = Linkage.getDataCode($(selector[i])[0], i);
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
                        var nextText = aInitval[j + 1] ? aInitval[j + 1] : "请选择";
                        var html = '<option value="">' + nextText + '</option>';

                        if (dataList[value]) {
                            $.each(dataList[value], function(sindex, data) {
                                html += '<option data-code="' + data.areaCode + '" value="' + data.areaId + '">' + data.areaName + '</option>';
                            });
                            $(selector[index + 1]).html(html);
                            // $(selector[index]).next().val(value);
                        } else {
                            for (var k = index; k < selector.length; k++) {
                                var minnNextText = aInitval[k + 1] ? aInitval[k + 1] : "请选择";
                                $(selector[k + 1]).html('<option value="">' + selectorText + '</option>');

                            }
                        }

                        if ($(selector[index])[0]) {
                            var dataCode = Linkage.getDataCode($(selector[index])[0],
                                index);
                            $(aSelectCode).val(dataCode);
                        }
                    });
                }

            }
            //select默认选中数据
            if (opts.editorparam) {
                Linkage.oneshow(opts.editorparam[0], opts.editorparam[1], opts.editorparam[2], selector);

            } else {

                return;
            }


        }

    });
})(jQuery);
/**
 * [Linkage 省市区联动效果]
 * @param  {[object]} option 对象参数
 *  新增初始化    Linkage.init(1,"data.json")      
 *  编辑初始化   Linkage.init(1,"data.json",[10,101,1010])
 *  数据结构
{
    "000000" : [
        {
            "areaId" : "10",
            "areaCode":"10-1",
            "areaName" : "江西"
        }
    ],
    "10" : [
        {
            "areaId" : "101",
            "areaCode":"101-1",
            "areaName" : "抚州"
        }
    ],
    "101" : [
        {
            "areaId" : "1010",
            "areaCode":"1010-1",
            "areaName" : "河蒲"
        }
    ]
}
 */
var Linkage = {
    init: function(i, url, options) {

        $("body").LinkageMenu({
            aSelector: ["#agentAreaProvince" + i, "#agentAreaCity" + i,
                "#agentAreaCounty" + i
            ], // 选择器ID数组[]
            sUrl: url,
            aSelectCode: '#setAreaCode' + i,
            editorparam: options
        });

    },
    oneshow: function(param1, param2, param3, aSelector) {
        var province = $(aSelector[0]).find("option");
        var _self = this;

        $.each(province, function(i, v) {
            if (v.value == param1) {
                $(this).attr("selected", "selected");
                $(this).trigger("change");
                _self.twoshow(param2, param3, aSelector);
            }
        })
    },
    twoshow: function(param2, param3, aSelector) {

        var province = $(aSelector[1]).find("option");
        var _self = this;

        $.each(province, function(i, v) {
            if (v.value == param2) {
                $(this).attr("selected", "selected");
                $(this).trigger("change");
                _self.threeshow(param3, aSelector);
            }
        })

    },
    threeshow: function(param3, aSelector) {

        var province = $(aSelector[2]).find("option");

        $.each(province, function(i, v) {
            if (v.value == param3) {
                $(this).attr("selected", "selected");
                $("#countyName").val(v.value);
                //$(this).trigger("change");
                //threeshow(param3);
            }
        })

    },
    getDataCode: function(o, i) {
        var dataCode = o.selectedOptions ? $(o.selectedOptions).attr("data-code") : o.options(o.selectedIndex).getAttribute("data-code");
        if (dataCode && dataCode != "null") {
            dataCode = dataCode;
        } else {
            dataCode = "";
        }
        return dataCode;
    },
    /**
     * [childSelect 下拉框加载数据]
     * @param  {[object]} option 对象参数
     *  childSelect({
                url: 'list.json',//请求地址
                target: "#provice",//加载数据id
                data: {//请求参数
                    name: '122'
                },
                text: "请选择省 ",//加载数据提示
                id: 'Id',//id字段
                type: "selected",//类型change点击触发selected默认触发加载数据
                value: 'Id',//value字段
                name: 'DisName',//name字段
                selectId:'2'//选中的id
            });
     */
    childSelect: function(option) {
        var isAsync = option.type == "change" ? true : false;
        $.ajax({
            url: option.url,
            dataType: 'json',
            type: 'post',
            data: option.data,
            async: isAsync,
            success: function(data) {
                var htm = '<option value="">' + option.text + '</option>';
                $.each(data.entity, function(idx, item) {
                    var selected = '',
                        value = '';
                    if (option.type == "selected" && option.selectId == item[option.id]) {
                        selected = 'selected';
                    }
                    htm += '<option value="' + item[option.value] + '" ' + selected + '>' + item[option.name] + '</option>';
                });
                $(option.target).html(htm);
                if (option.clearLeve3) {
                    $(option.clearLeve3).html('<option value="">' + option.LeveTip + '</option>');
                }

            },
            error: function() {
                $(option.target).html('<option value="">' + option.text + '</option>');
            }
        });
    }
}
/**
 * [文字滚动效果] 
 * @param  {[object]} option 对象参数
 *  childSelect({
THML代码示例
<ul id="scroll-list" style="height: 40px;overflow: hidden;">
    <li>水电费水电费水电费水电费水电费是的</li>
    <li>水电费水电费水电费水电费水电费是11</li>
    <li>水电费水电费水电费水电费水电费22</li>
    <li>水电费水电费水电费水电费水电3333的</li>
</ul>
调用 $("body").iScroll();
*/
;(function($) {
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