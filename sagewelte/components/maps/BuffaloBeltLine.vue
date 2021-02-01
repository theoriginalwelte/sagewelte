<template>
	<div style="overflow-y: scroll">
		<div>
			<h1 style="margin-right: 30px; margin-bottom: 20px;">
				Buffalo Belt Line
			</h1>

			<hr />
			<br />
		</div>
		<div style="display: inline-flex;">
			<div id="map-buffalobeltline" style="height: 450px; width: 70%;"></div>
			<div
				style="font-family: 'Nanum Gothic', sans-serif; margin-left: 30px; margin-right: 30px; width: 30%; text-align: justify;"
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloribus
				numquam amet perferendis iusto ipsam repudiandae aspernatur provident
				repellendus maxime quis modi necessitatibus, facere illo inventore nisi
				omnis, tempora fugit dolorem voluptate? Voluptatibus facilis mollitia
				modi magnam dolor voluptatem quos! Reprehenderit cum velit harum beatae
				aliquid veritatis, quibusdam dolore nisi corrupti iusto eos, labore
				delectus voluptas excepturi obcaecati, minus pariatur sit porro? Harum
				tenetur dicta fugit? Laborum consectetur est sapiente, in, architecto
				voluptates modi harum mollitia magnam ab voluptas dignissimos eos
				impedit minus sint et maiores similique accusamus. Magni ea architecto
				non laudantium laboriosam fugiat aperiam at reiciendis et ratione sint
				quae error, ipsa repudiandae, neque ducimus nesciunt beatae sit
				voluptate eius rerum placeat voluptatum natus illo. Ipsa sequi eligendi,
				recusandae atque sint enim
			</div>
		</div>
	</div>
</template>

<script>
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import OSM from "ol/source/OSM";
import Circle from "ol/style/Circle";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style";
import Text from "ol/style/Text";

export default {
	data() {
		return {};
	},
	mounted() {
		var osm = new TileLayer({
			source: new OSM(),
		});

		var busRoute3 = new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url:
					"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/3.geojson",
			}),
			style: new Style({
				stroke: new Stroke({
					color: "#3291C7",
					width: 3,
				}),
			}),
		});

		var busRoute5 = new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url:
					"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/5.geojson",
			}),
			style: new Style({
				stroke: new Stroke({
					color: "#2FA165",
					width: 3,
				}),
			}),
		});

		var busRoute12 = new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url:
					"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/12.geojson",
			}),
			style: new Style({
				stroke: new Stroke({
					color: "#000000",
					width: 3,
				}),
			}),
		});

		var railStyle = new Style({
			image: new Circle({
				fill: new Fill({
					color: "#FFFFFF",
				}),
				stroke: new Stroke({
					color: "#000000",
					width: 2,
				}),
				radius: 5,
			}),
			text: new Text({
				font: "12px Tahoma, sans-serif",
				text: "",
				offsetX: 30,
			}),
		});

		var railStations = new VectorLayer({
			source: new VectorSource({
				url:
					"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/rail.geojson",
				format: new GeoJSON(),
			}),
			style: function(feature) {
				railStyle.getText().setText(feature.get("Name"));
				return railStyle;
			},
		});

		new Map({
			layers: [osm, railStations, busRoute3, busRoute5, busRoute12],
			target: "map-buffalobeltline",
			view: new View({
				center: [-8779270.429979, 5298636.074706],
				zoom: 12,
			}),
		});
	},
};
</script>

<style scoped>
h1 {
	font-family: "Nunito", sans-serif;
	text-align: right;
}
</style>
