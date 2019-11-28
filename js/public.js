/* toubu全局组件 */
Vue.component('topBar', {
	created() {
		console.log(this.bigbackColor);
	},
	props: {
		textColor: {
			type: String,
			default: 'white'
		},
		bigImg: {
			type: String,
			default: 'images/topbar_left.png'
		},
		aboutYt: {
			type: Boolean,
			default: false
		},
		downLink: {
			type: Boolean,
			default: false
		},
		bigbackColor: {
			type: String,
			default: ''
		}
	},
	methods: {
		goindex() {
			location.href = "index.html"
		}
	},
	//
	template: `
	<div id="gundongtiaoColor" :style="{backgroundColor:bigbackColor}">
		<div class="topBars">
			<img :src="bigImg" class="leftImg" @click="goindex()">
			<div class="rightText">
				<div>
					<a :style="{color:textColor+'!important'}" href="index.html" style="margin-left: 0;">首页</a>
				</div>
				<div @mouseenter="$emit('on-links1')" @mouseleave="$emit('out-links1')" >
					<a :style="{color:textColor+'!important'}" href="aboutYaotiao.html">关于要挑</a>
					<transition name="goon">
						<span id="aDownLink" v-if="aboutYt">
							<a href="companyProfile.html"><span>企业介绍</span></a>
							<a href="social.html"><span>社会责任</span></a>
						</span>
					</transition>
				</div>
				<div>
					<a :style="{color:textColor+'!important'}" href="yaotiaoJournalism.html">新闻动态</a>
				</div>
				<div>
					<a :style="{color:textColor+'!important'}" href="Vip.html">会员权益</a>
				</div>
				<div @mouseenter="$emit('on-links2')" @mouseleave="$emit('out-links2')" >
					<a :style="{color:textColor+'!important'}" href="agent.html" >招商合作</a>
					<transition name="goon">
						<span id="aDownLink" v-if="downLink">
							<a href="agent.html"><span>代理商合作</span></a>
							<a href="supplier.html"><span>供应商合作</span></a>
						</span>
					</transition>
				</div>
				<div>
					<a :style="{color:textColor+'!important'}" href="linkWe.html">联系我们</a>
				</div>
				<div>
					<a :style="{color:textColor+'!important'}" href="downApp.html">下载app</a>
				</div>
			</div>
		</div>
		</div>
	`
})

/* 底部 */
Vue.component('buttomBar', {
	template: `<div class="buttomBar">
				<div class="buttomBar1">
					<div>
						<a href="">
							<div>
								<img src="images/you.png">
								<span>甄选优品</span>
							</div>
						</a>
						<a href="">
							<div>
								<img src="images/gou.png">
								<span>产品为王</span>
							</div>
						</a>
						<a href="">
							<div>
								<img src="images/jiang.png">
								<span>严格筛选</span>
							</div>
						</a>
						<a href="">
							<div>
								<img src="images/shang.png">
								<span>流量无上限</span>
							</div>
						</a>
						<a href="">
							<div>
								<img src="images/dui.png">
								<span>无忧服务</span>
							</div>
						</a>
						<a href="">
							<div>
								<img src="images/che.png">
								<span>全国配送</span>
							</div>
						</a>
						<a href="">
							<div>
								<img src="images/dun.png">
								<span>质量保证</span>
							</div>
						</a>
						<a href="">
							<div>
								<img src="images/vip.png">
								<span>会员专属</span>
							</div>
						</a>
					</div>
				</div>
				<div class="buttomBar2">
					<div class="buttomBar2_content">
						<div class="buttomBar2_content_left" style="flex-direction: row;">
							<div class="shouye">
								<a href="index.html">首页</a>
							</div>
							<div class="page-link">
								<div class="page-link-title">
									<a href="yaotiaoJournalism.html">新闻动态</a>
									<a href="linkWe.html">联系我们</a>
								</div>
								<div class="page-link-title">
									<a href="agent.html">招商合作</a>
									<a href="downApp.html">下载APP</a>
								</div>
							</div>
						</div>
						<div class="buttomBar2_content_left" style="margin-left: 3rem;flex-direction: column;">
							<div class="shouye">
								<a href="">联系方式</a>
							</div>
							<div class="page-link-phone">
								<p style="margin-top: 0.12rem;">电话:400-626-0009</p>
								<p style="margin-top: 0.32rem;">地址:山东省淄博经济开发区张江淄博科技产业园2号楼801室</p>
							</div>
						</div>
						<div class="buttomBar2_content_left" style="margin-left: 1.68rem;">
							<div class="page-ercode">
								<div class="ercode-yaotiao">
									<span>扫一扫</span>
									<img src="images/fuwuao.png">
									<span>关注要挑服务号</span>
								</div>
								<div class="ercode-yaotiao">
									<span>扫一扫</span>
									<img src="images/gongzhonghao.png">
									<span>关注要挑订阅号</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="buttomBar3">
					<div class="buttomBar-friendship">
						<span style="font-weight:500;">友情链接:</span>
						<a href="">友情链接</a>
						<a href="">友情链接</a>
						<a href="">友情链接</a>
						<a href="">友情链接</a>
						<a href="">友情链接</a>
					</div>
					<p style="margin-top: 0.15rem;">Copyright @ 2011-2017 xx xx xx All Rights Reserved. 琼ICP备15003371号-12 版权所有</p>
				</div>
			</div>`
})

//banner1
/* toubu全局组件 */
Vue.component('bannerOne', {
	created() {
		console.log(this.bigbackColor);
	},
	props: {
		imgSrc: {
			type: String,
			default: 'images/aboutYaotiao/banner.png'
		},
		bigImg: {
			type: String,
			default: 'images/topbar_left.png'
		},
		bannerHeight: {
			type: String,
			default: '8.2'
		},
		aboutYt: {
			type: Boolean,
			default: false
		},
		downLink: {
			type: Boolean,
			default: false
		},
		textColor: {
			type: String,
			default: 'white'
		},
		bigbackColors: {
			type: String,
			default: ''
		}
	},
	methods: {

	},
	template: `<div class="banner1" :style="{backgroundImage: 'url('+ imgSrc +')',height:bannerHeight+'rem'}">
				<top-bar 
				:bigback-color="bigbackColors"
				:big-img="bigImg"
				:text-color="textColor"
				:about-yt="aboutYt" 
				@on-links1="$emit('on-links12')"
				@out-links1="$emit('out-links12')"
				:down-link="downLink"
				@on-links2="$emit('on-links22')" 
				@out-links2="$emit('out-links22')"
				>
				</top-bar>
			</div>`
});


/* 分页组件 */
Vue.component('limtUtil', {
	props: {
		utilContent: {
			type: String,
			default: '要挑欢迎您的加入！ 若您有意向，请按照指引完整填写 供应商基本信息并提交， 预计在7个工作日内给与回复。'
		},
		imgSrc: {
			type: String,
			default: 'images/yaotiaoJournalism/55@2x.png'
		}
	},
	template: ` <div class="limt_contents">
					<img :src="imgSrc">
					<div class="limt_contents_buttom">
						<p>
							{{utilContent}}
						</p>
					</div>
				</div>`
});


/* 弹窗 */
Vue.component('openWindow', {
	props: {
		utilContent: {
			type: String,
			default: '格式不正确或有未填项'
		}
	},
	methods: {},
	template: ` 
	<div class="open" >
		<div class="">
			提示
			<img src="images/xxs.png" @click="$emit('closetips')">
		</div>
		<div>
			{{utilContent}}
			<span class="open_span" @click="$emit('closetips')">
				确定
			</span>
		</div>
	</div>
	`
});

var Mixins = {
	// el: "#app",
	data: {
		name: "",
		phone: "",
		remarks: "",
		//隐藏弹窗
		openwin: false,
		requestBs: "",
		isOut: 0,
		utilcontent: '',
		//下拉框
		downLink: false,
		aboutYt: false,
		colors: "",
		//电话正则
		myreg: /^[1][3,4,5,7,8][0-9]{9}$/
	},
	created() {
		this.isOuts()
	},
	mounted() {
		var that = this
		window.onscroll = function() {
			if (document.documentElement.scrollTop > 5) {
				that.colors = '#a31f26'
			}
			if (document.documentElement.scrollTop <= 5) {
				that.colors = ''
			}
		}
	},
	methods: {
		/* 测试 */
		isOuts() {
			//----------------------内网转外网
			this.isOut = 0;
			if (this.isOut == 0) {
				this.requestBs = "http://192.168.6.231:8088"
			}
			if (this.isOut == 1) {
				this.requestBs = "https://api.yaotiao.net"
			}
		},
		/* 正则验证 */
		setForms(num) {
			var self = this
			console.log(this.name, this.phone)
			// var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
			if (self.name == "") {
				self.utilcontent = '姓名不能为空';
				self.openwin = true
				return
			}
			if (self.phone == "") {
				self.utilcontent = '电话不能为空';
				self.openwin = true
				return
			}

			if (self.myreg.test(self.phone)) {

			} else {
				self.utilcontent = '手机号格式不正确';
				self.openwin = true
				return
			}

			// 192.168.6.231:8088
			// console.log(this.requestBs + "-----------------------------");
			var item = {
				name: this.name,
				phone: this.phone,
				type: num,
				remark: this.remarks
			};
			var item2 = JSON.stringify(item)
			console.log(item2);
			this.ajax({
				type: 'post',
				url: this.requestBs + '/appinlet/contactus/contactus',
				data: {
					data: item2
				},
				dataType: "json",
				success: function(res) {
					console.log(res);
					if (res.status == 1) {
						self.utilcontent = '提交成功';
						self.openwin = true
						self.name = ""
						self.phone = ""
						self.remarks = ""
					}
				}
			})
		},
		//弹窗隐藏
		noneOpen() {
			this.openwin = false
		},
		//原生aj
		ajax(options) {
			options = options || {};
			options.type = (options.type || "GET").toUpperCase();
			options.dataType = options.dataType || "json";
			var params = this.formatParams(options.data);
			//创建xhr对象 - 非IE6
			if (window.XMLHttpRequest) {
				var xhr = new XMLHttpRequest();
			} else { //IE6及其以下版本浏览器
				var xhr = new ActiveXObject('Microsoft.XMLHTTP');
			}
			xhr.timeout = 3000;
			xhr.ontimeout = function(event) {
				alert('请求超时！');
			}

			//GET POST 两种请求方式
			if (options.type == "GET") {
				xhr.open("GET", options.url + "?" + params, true);
				xhr.send(null);
			} else if (options.type == "POST") {
				xhr.open("POST", options.url, true);
				//设置表单提交时的内容类型
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xhr.send(params);
			}
			//接收
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					var status = xhr.status;
					if (status >= 200 && status < 300) {
						options.success && options.success(JSON.parse(xhr.responseText));
					} else {
						options.fail && options.fail(status);
					}
				}
			}
		},
		//格式化参数
		formatParams(data) {
			var arr = [];
			for (var name in data) {
				arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
			}
			arr.push(("v=" + Math.random()).replace(".", ""));
			return arr.join("&");
		},
		//关于 -弹窗出现关闭
		onLinksAbout() {
			this.aboutYt = true
		},
		outLinksAbout() {
			this.aboutYt = false
		},
		onLinksHzuo() {
			this.downLink = true
		},
		outLinksHzuo() {
			this.downLink = false
		}
	}
}
