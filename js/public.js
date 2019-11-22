/* toubu全局组件 */
Vue.component('topBar', {
	created() {
		console.log(this.textColor);
	},
	props: {
		textColor: {
			type: String,
			default: 'white'
		},
		bigImg: {
			type: String,
			default: 'images/topbar_left.png'
		}
	},
	template: `<div class="topBars">
		<img :src="bigImg" class="leftImg" >
		<div class="rightText">
		<a :style="{color:textColor+'!important'}" href="index.html" style="margin-left: 0;">首页</a>
		<a :style="{color:textColor+'!important'}" href="aboutYaotiao.html">关于要挑</a>
		<a :style="{color:textColor+'!important'}" href="yaotiaoJournalism.html">新闻动态</a>
		<a :style="{color:textColor+'!important'}" href="">会员权益</a>
		<a :style="{color:textColor+'!important'}" href="">招商合作</a>
		<a :style="{color:textColor+'!important'}" href="">联系我们</a>
		<a :style="{color:textColor+'!important'}" href="">下载app</a>
		</div>
		</div>`
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
								<a href="">首页</a>
							</div>
							<div class="page-link">
								<div class="page-link-title">
									<a href="">新闻动态</a>
									<a href="">新闻动态</a>
								</div>
								<div class="page-link-title">
									<a href="">新闻动态</a>
									<a href="">新闻动态</a>
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
	props: {
		imgSrc: {
			type: String,
			default: 'images/aboutYaotiao/banner.png'
		},
		bannerHeight: {
			type: String,
			default: '8.2'
		}
	},
	template: `<div class="banner1" :style="{backgroundImage: 'url('+ imgSrc +')',height:bannerHeight+'rem'}">
				<top-bar></top-bar>
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
					<img :src="imgSrc" >
					<div class="limt_contents_buttom">
						<p>
							{{utilContent}}
						</p>
					</div>
				</div>`
});


new Vue({
	el: "#app",
	data: {
		name: "",
		phone: "",
		remarks: ""
	},
	methods: {
		/* 正则验证 */
		setForms() {
			let that = this;
			var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if (that.name == "" || that.name == null) {
				alert("用户名不能为空")
				return
			}
			if (that.phone == "" || that.phone == null) {
				alert("手机号不能为空")
				return
			}
			if (myreg.test(that.phone)) {
				
			} else {
				alert("手机号格式错误")
			}
		}
	}
})
