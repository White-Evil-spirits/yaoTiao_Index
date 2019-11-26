new Vue({
	el: "#app",
	mixins: [Mixins],
	data: {
		qita: 1,
		danxuan: "",
		names: "",
		qitas: "",
		utilcontent: '',
		lianxiren: "",
		lianxidianhua: "",
		gongsiaddr: "",
		gongyingpinpai: "",
		chanpinleixing: "",
		beizhu: "",
		zuoji: /^([0-9]{3,4}-)?[0-9]{7,8}$/
	},
	methods: {
		inputDis(num) {
			if (num == 1) {
				this.$refs.nonetext.removeAttribute('disabled') //删除
				console.log(num)
				this.qita = 2
				return
			}
			if (num == 2) {
				this.$refs.nonetext.setAttribute('disabled', 'disabled')
				this.qita = 1
			}
		},
		setPhp() {
			console.log(this.myreg)
			console.log(this.lianxidianhua)
			var self = this
			//验证用户
			if (this.names == "") {
				this.utilcontent = '姓名不能为空'
				this.openwin = true
				return
			}

			/* 验证单选 */
			if (this.danxuan == "") {
				this.utilcontent = '未选择商家类型'
				this.openwin = true
				return
			}
			if (this.danxuan == 6) {
				if (this.qitas == "") {
					this.utilcontent = '其它不能为空'
					this.openwin = true
					return
				}
			}
			if (this.lianxiren == "") {
				this.utilcontent = '联系人不能为空'
				this.openwin = true
				return
			}
			if (this.lianxidianhua == "") {
				this.utilcontent = '联系电话不能为空'
				this.openwin = true
				return
			}
			if (this.myreg.test(this.lianxidianhua) || this.zuoji.test(this.lianxidianhua)) {

			} else {
				this.utilcontent = '联系电话格式不正确'
				this.openwin = true
				return
			}
			if (this.gongsiaddr == "") {
				this.utilcontent = '公司地址不能为空'
				this.openwin = true
				return
			}
			if (this.gongyingpinpai == "") {
				this.utilcontent = '供应品牌不能为空'
				this.openwin = true
				return
			}
			if (this.chanpinleixing == "") {
				this.utilcontent = '产品类型不能为空'
				this.openwin = true
				return
			}
			var item = {
				factory_name: this.names,
				phone: this.lianxidianhua,
				factory_type: this.danxuan,
				type_else: this.qitas,
				name: this.lianxiren,
				address: this.gongsiaddr,
				supply_brand: this.gongyingpinpai,
				product_type: this.chanpinleixing,
				remark: this.beizhu

			};
			var item2 = JSON.stringify(item)
			this.ajax({
				type: 'post',
				url: this.requestBs + '/appinlet/contactus/suppliercooperation',
				data: {
					data: item2
				},
				dataType: "json",
				success: function(res) {
					console.log(res);
					if (res.status == 1) {
						self.utilcontent = '提交成功';
						self.openwin = true
					}
				}
			})
		},
		//弹窗隐藏
		noneOpen() {
			this.openwin = false
		}
	}
})
