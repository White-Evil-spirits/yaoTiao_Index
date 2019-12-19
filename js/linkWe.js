new Vue({
	el: "#app",
	mixins: [Mixins],
	data: {

	},
	created() {

	},
	mounted() {
		var self = this;
		setTimeout(function() {
			self.newBaiDuMap()
		}, 500);
	},
	methods: {
		newBaiDuMap() {
			//延时加载
			setTimeout(function() {
				var map = new BMap.Map("baiMap");
				var point = new BMap.Point(117.931942, 36.841564);
				map.centerAndZoom(point, 17);

				map.enableScrollWheelZoom(true);
				var marker = new BMap.Marker(point); // 创建标注
				map.addOverlay(marker); // 将标注添加到地图中
				marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
			}, 1000 * 0.5);
		},
		//腾讯转百度经纬度转化
		// qqMapTransBMap(lng, lat) {
		//       let x_pi = 3.14159265358979324 * 3000.0 / 180.0;
		//       let x = lng;
		//       let y = lat;
		//       let z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
		//       let theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
		//       let lngs = z * Math.cos(theta) + 0.0065;
		//       let lats = z * Math.sin(theta) + 0.006;

		//       return 
		// }
	}
})
