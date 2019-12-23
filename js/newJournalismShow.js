new Vue({
	el: "#app",
	mixins: [Mixins],
	data: {

	},
	methods: {
		newIndex() {
			console.log(1111)
		}
	},
	components: {
		'renJixue': {
			props: {
				dateTimes: {
					type: String,
					default: "29"
				},
				imgAddr: {
					type: String,
					default: "images/hs.png"
				},
				dateSs: {
					type: String,
					default: "29"
				}
			},
			template: `
		<div class="right_main">
			<img :src="imgAddr" >
			<div class="right_main_content">
				<div>{{dateTimes}}</div>
				<div>
					{{dateSs}}
				</div>
			</div>
		</div>
	`
		}
	}
})
// Vue.component('renJixue', {
// 	props: {
// 		dateTime: {
// 			type: String,
// 			default: "29"
// 		},
// 		imgAddr: {
// 			type: String,
// 			default: "images/hs.png"
// 		}
// 	},
// 	template: `
// 		<div class="right_main">
// 			<img :src="imgAddr" >
// 			<div class="right_main_content">
// 				<div>{{dateTime}}</div>
// 				<div>
// 					2019.06.05
// 				</div>
// 			</div>
// 		</div>
// 	`
// })
