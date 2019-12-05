new Vue({
	el: "#app",
	mixins: [Mixins],
	data: {
		yinpinzhiwei: "",
		mingzi: "",
		sex: "",
		chusheng: "",
		jiguan: "",
		dianhua: "",
		youxiang: "",
		xuexiao: "",
		zhuanye: "",
		tongxundizhi: "",
		jiangxiang: "",
		jingli: ""
	},
	methods: {
		//验证表单和
		setPersonInfo() {
			var that = this
			if (this.yinpinzhiwei == "") {
				that.utilcontent = '职位不能为空';
				that.openwin = true
				return
			}
			if (this.mingzi == "") {
				that.utilcontent = '姓名不能为空';
				that.openwin = true
				return
			}
			if (this.sex == "") {
				that.utilcontent = '未选择性别';
				that.openwin = true
				return
			}
			if (this.chusheng == "") {
				that.utilcontent = '出生日期不能为空';
				that.openwin = true
				return
			}
			if (this.jiguan == "") {
				that.utilcontent = '籍贯不能为空';
				that.openwin = true
				return
			}
			if (this.dianhua == "") {
				that.utilcontent = '手机号不能为空';
				that.openwin = true
				return
			}
			if (this.myreg.test(this.dianhua)) {
				
			} else {
				that.utilcontent = '手机号格式不正确';
				that.openwin = true
				return
			}
			if (this.youxiang == "") {
				that.utilcontent = '邮箱不能为空';
				that.openwin = true
				return
			}
			if (that.isyouxiang.test(that.youxiang)) {
			
			} else {
				that.utilcontent = '邮箱格式不正确';
				that.openwin = true
				return
			}
			if (this.xuexiao == "") {
				that.utilcontent = '学校不能为空';
				that.openwin = true
				return
			}
			if (this.zhuanye == "") {
				that.utilcontent = '专业不能为空';
				that.openwin = true
				return
			}
			if (this.jingli == "") {
				that.utilcontent = '经历不能为空';
				that.openwin = true
				return
			}
		}
	}
})
