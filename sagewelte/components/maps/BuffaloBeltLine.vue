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

		var busRoute6 = new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url:
					"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/6.geojson",
			}),
			style: new Style({
				stroke: new Stroke({
					color: "#A7844B",
					width: 3,
				}),
			}),
		});

		var busRoute8 = new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url:
					"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/8.geojson",
			}),
			style: new Style({
				stroke: new Stroke({
					color: "#4B91A7",
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

		var busRoute14 = new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url:
					"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/14.geojson",
			}),
			style: new Style({
				stroke: new Stroke({
					color: "#7E317E",
					width: 3,
				}),
			}),
		});

		var busRoute16 = new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url:
					"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/16.geojson",
			}),
			style: new Style({
				stroke: new Stroke({
					color: "#E853A0",
					width: 3,
				}),
			}),
		});

		var busRoute20 = new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url:
					"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/20.geojson",
			}),
			style: new Style({
				stroke: new Stroke({
					color: "#7BB701",
					width: 3,
				}),
			}),
		});

		var busRoute22 = new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url:
					"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/22.geojson",
			}),
			style: new Style({
				stroke: new Stroke({
					color: "#A54ED0",
					width: 3,
				}),
			}),
		});
		var busRoute23 = new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url:
					"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/23.geojson",
			}),
			style: new Style({
				stroke: new Stroke({
					color: "#054126",
					width: 3,
				}),
			}),
		});

		var busRoute25 = new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url:
					"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/25.geojson",
			}),
			style: new Style({
				stroke: new Stroke({
					color: "#8F03E4",
					width: 3,
				}),
			}),
		});

		var busRoute26 = new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url:
					"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/26.geojson",
			}),
			style: new Style({
				stroke: new Stroke({
					color: "#A57E01",
					width: 3,
				}),
			}),
		});

		var busRoute40 = new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url:
					"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/40.geojson",
			}),
			style: new Style({
				stroke: new Stroke({
					color: "#B7E371",
					width: 3,
				}),
			}),
		});

		var busRoute42 = new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url:
					"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/42.geojson",
			}),
			style: new Style({
				stroke: new Stroke({
					color: "#C80D5F",
					width: 3,
				}),
			}),
		});

		var busRoute70 = new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url:
					"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/70.geojson",
			}),
			style: new Style({
				stroke: new Stroke({
					color: "#4D12A0",
					width: 3,
				}),
			}),
		});

		var busRoute72 = new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url:
					"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/72.geojson",
			}),
			style: new Style({
				stroke: new Stroke({
					color: "#5E01A7",
					width: 3,
				}),
			}),
		});

		var busRoute74 = new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url:
					"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/74.geojson",
			}),
			style: new Style({
				stroke: new Stroke({
					color: "#451326",
					width: 3,
				}),
			}),
		});

		var busRoute76 = new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url:
					"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/76.geojson",
			}),
			style: new Style({
				stroke: new Stroke({
					color: "#7DE4F6",
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
				font: "11 px Tahoma, sans-serif",
				text: "",
				offsetX: 20,
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
			layers: [
				osm,
				railStations,
				busRoute3,
				busRoute5,
				busRoute6,
				busRoute8,
				busRoute12,
				busRoute14,
				busRoute16,
				busRoute20,
				busRoute22,
				busRoute23,
				busRoute25,
				busRoute26,
				busRoute40,
				busRoute42,
				busRoute70,
				busRoute72,
				busRoute74,
				busRoute76,
			],
			target: "map-buffalobeltline",
			view: new View({
				center: [-8779270.429979, 5298636.074706],
				zoom: 12.5,
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
