<template>
	<div>
		<h1>Buffalo Belt Line • Reformed</h1>
		<div id="map-buffalobeltline" style="height: 590px"></div>
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
			layers: [osm, railStations],
			target: "map-buffalobeltline",
			view: new View({
				center: [-8779270.429979, 5298636.074706],
				zoom: 13,
			}),
		});
	},
};
</script>

<style scoped>
h1 {
	font-family: "Nunito", sans-serif;
	font-weight: 200;
}
</style>
