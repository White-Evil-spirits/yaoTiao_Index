Vue.component('lunBo', {
	props: {
		imgSrc: {
			type: String,
			default: 'images/55@2x.png',
		},
		utilContent: {
			type: String,
			default: '要挑欢迎您的加入！ 若您有意向，请按照指引完整填写 供应商基本信息并提交， 预计在7个工作日内给与回复。'
		}
	},
	template: `
		
		<div class="limt_contentss">
			<img :src="imgSrc">
			<div class="limt_contents_buttoms">
				<p>
					{{utilContent}}
				</p>
			</div>
		</div>
		
	`
})
new Vue({
	el: "#app",
	mixins: [Mixins],
	data: {
		div1: false,
		div2: false,
		div3: false,
		div4: false
	},
	created() {

	},
	mounted() {
		this.swiper()
	},
	methods: {
		swiper() {
			var swiper = new Swiper('#swiper1', {
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
				},
				slidesPerView: 3,
				slidesPerGroup: 1,
				// spaceBetween: 30,
				observer: true,
				observeParents: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				}
			});
		},
		goXwen(){
			console.log(1)
			location.href = "yaotiaoJournalism.html"
		}
	}
})


