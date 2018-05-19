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
    }
};

/*
列表多选分页数据显示功能
*/
var moreseleList  = {
 	init : function(itemId,datagridList,datas){
 		//保存数据记录的对象
 		this.listData = datas;
		//列表的id
		this.listid = $(datagridList);
		//每条数据的id
		this.itemId = itemId;
 	},
 	itemCheck : function(rowData,type){
 		/*
 		判断是单个勾选或者全选操作
 		*/
 		var _self = this;
 		if(rowData.length){
 			$.each(rowData,function(i,item){
				_self.itemOpearte(item,type);
			})
 		}else{
 			_self.itemOpearte(rowData,type);
 		}
 	},
 	itemOpearte: function(item,type){
 		/*
 		  勾选或者去掉勾选的相应操作
 		*/
 		var _self = this,itemId = item[this.itemId];
 		if(type == 'add'){
 			if(!this.listData[itemId]){
 				this.listData[itemId] = item;
 			}
 		}else if(type == 'dele'){
 			if(this.listData[itemId]){
 				delete this.listData[itemId];
 			}
 		}
		console.log(this.listData)
 	},
 	showData : function(templateId,elementId){
 		//显示所有的数据
 		var datas = {},dataArray = [];
 		for(var i in this.listData){
 			dataArray.push(this.listData[i]);
 		}
 		datas["items"] = dataArray;
		var htm = template(templateId,datas);
		$("#"+elementId).html(htm);	
 	},
    initCheckData : function(data){
    	/*
 		  加载一页数据后勾选已选记录
 		*/
 		var savedata = this.listData,_self = this;
 		this.pagedata = data.rows;
    	$.each(data.rows,function(i,v){
			var isflag = false;
   			$.each(savedata, function(key, item){
				if(key == v[_self.itemId]){
					isflag = true;
					return;
				}
			});
			if(isflag){
				_self.listid.datagrid('checkRow', i);
			}               
   		})
    }
}
