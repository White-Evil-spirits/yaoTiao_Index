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
		jingli: "",
		resnum_urls: ""
	},
	methods: {

		//ajax上传文件
		upfiles() {
			var self = this;
			console.log(this.loadings)
			this.loadings_mounted()
			this.loadings = true
			var formdata = new FormData();
			console.log("文件上传")
			// console.log(document.getElementById('files_upfile').files[0])
			var crowd_file = document.getElementById('files_upfile').files[0];
			formdata.append("crowd_file", crowd_file);
			formdata.append("type", 24);
			formdata.append("filenum", 1);
			this.ajax({
				type: 'post',
				url: this.requestBs + '/appinlet/webUploadWord',
				data: formdata,
				dataType: "json",
				processData: false, // 使数据不做处理
				contentType: false, // 不要设置Content-Type请求头
				//上传文件无需缓存
				cache: false,
				success: function(res) {
					console.log(res.url);
					self.resnum_urls = res.url
					console.log(this.resnum_urls)
					if (res.status == 1) {
						self.loadings = false
						self.utilcontent = '简历上传成功';
						self.openwin = true
						
					} else {
						self.utilcontent = '简历上传失败';
						self.openwin = true
					}
				}
			})
		},
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

			var item = {
				position: this.yinpinzhiwei,
				name: this.mingzi,
				sex: this.sex,
				birthday: this.chusheng,
				native_place: this.jiguan,
				phone: this.dianhua,
				email: this.youxiang,
				school: this.xuexiao,
				major: this.zhuanye,
				address: this.tongxundizhi,
				prize_winning: this.jiangxiang,
				work_experience: this.jingli,
				resume_url: this.resnum_urls
			};

			var item2 = JSON.stringify(item)
			console.log(item2)
			this.ajax({
				type: 'post',
				url: this.requestBs + '/appinlet/recruit/recruit/',
				data: {
					data: item2
				},
				dataType: "json",
				success: function(res) {
					console.log(res);
					if (res.status == 1) {
						/* 没想到吧 这里是that */
						that.utilcontent = '提交成功';
						that.openwin = true
						that.yinpinzhiwei = ""
						that.mingzi = ""
						that.sex = ""
						that.chusheng = ""
						that.jiguan = ""
						that.dianhua = ""
						that.youxiang = ""
						that.xuexiao = ""
						that.zhuanye = ""
						that.tongxundizhi = ""
						that.jiangxiang = ""
						that.jingli = ""
						that.resnum_url = ""
					} else {
						that.utilcontent = '提交失败';
						that.openwin = true
					}
				}
			})
		}

	}
})
