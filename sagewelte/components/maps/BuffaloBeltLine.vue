<template>
	<div>
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
				style="font-family: 'Nanum Gothic', sans-serif; margin-left: 20px; margin-right: 30px; width: 30%; text-align: justify;"
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
		<br />
		<br />
		<div style="display: flex;">
			<div id="busRoutesToggle">
				<div style="display: flex; flex-direction: column;">
					<div id="addBusLayers">
						Add Bus Layers
					</div>
					<div id="removeBusLayers">
						Remove Bus Layers
					</div>
				</div>
				<div style="margin-left: 5%; margin-top: 1.5%;">
					<div>
						<input
							type="checkbox"
							name="busRoute3"
							style="margin-right: 10px;"
							id="busRoute3"
						/>
						<label style="font-family: 'Nunito', sans-serif;" for="busRoute3"
							>Route 3</label
						>
					</div>
					<div>
						<input
							type="checkbox"
							name="busRoute5"
							style="margin-right: 10px;"
							id="busRoute5"
						/>
						<label style="font-family: 'Nunito', sans-serif;" for="busRoute5"
							>Route 5</label
						>
					</div>
					<div>
						<input
							type="checkbox"
							name="busRoute6"
							style="margin-right: 10px;"
							id="busRoute6"
						/>
						<label style="font-family: 'Nunito', sans-serif;" for="busRoute6"
							>Route 6</label
						>
					</div>
					<div>
						<input
							type="checkbox"
							name="busRoute8"
							style="margin-right: 10px;"
							id="busRoute8"
						/>
						<label style="font-family: 'Nunito', sans-serif;" for="busRoute8"
							>Route 8</label
						>
					</div>
					<div>
						<input
							type="checkbox"
							name="busRoute12"
							style="margin-right: 10px;"
							id="busRoute12"
						/>
						<label style="font-family: 'Nunito', sans-serif;" for="busRoute12"
							>Route 12</label
						>
					</div>
					<div>
						<input
							type="checkbox"
							name="busRoute14"
							style="margin-right: 10px;"
							id="busRoute14"
						/>
						<label style="font-family: 'Nunito', sans-serif;" for="busRoute14"
							>Route 14</label
						>
					</div>
					<div>
						<input
							type="checkbox"
							name="busRoute16"
							style="margin-right: 10px;"
							id="busRoute16"
						/>
						<label style="font-family: 'Nunito', sans-serif;" for="busRoute16"
							>Route 16</label
						>
					</div>
				</div>
				<div style="margin-left: 5%; margin-top: 1.5%">
					<div>
						<input
							type="checkbox"
							name="busRoute20"
							style="margin-right: 10px;"
							id="busRoute20"
						/>
						<label style="font-family: 'Nunito', sans-serif;" for="busRoute20"
							>Route 20</label
						>
					</div>
					<div>
						<input
							type="checkbox"
							name="busRoute22"
							style="margin-right: 10px;"
							id="busRoute22"
						/>
						<label style="font-family: 'Nunito', sans-serif;" for="busRoute22"
							>Route 22</label
						>
					</div>
					<div>
						<input
							type="checkbox"
							name="busRoute23"
							style="margin-right: 10px;"
							id="busRoute23"
						/>
						<label style="font-family: 'Nunito', sans-serif;" for="busRoute23"
							>Route 23</label
						>
					</div>
					<div>
						<input
							type="checkbox"
							name="busRoute24"
							style="margin-right: 10px;"
							id="busRoute24"
						/>
						<label style="font-family: 'Nunito', sans-serif;" for="busRoute24"
							>Route 24</label
						>
					</div>
					<div>
						<input
							type="checkbox"
							name="busRoute25"
							style="margin-right: 10px;"
							id="busRoute25"
						/>
						<label style="font-family: 'Nunito', sans-serif;" for="busRoute25"
							>Route 25</label
						>
					</div>
					<div>
						<input
							type="checkbox"
							name="busRoute26"
							style="margin-right: 10px;"
							id="busRoute26"
						/>
						<label style="font-family: 'Nunito', sans-serif;" for="busRoute26"
							>Route 26</label
						>
					</div>
					<div>
						<input
							type="checkbox"
							name="busRoute40"
							style="margin-right: 10px;"
							id="busRoute40"
						/>
						<label style="font-family: 'Nunito', sans-serif;" for="busRoute40"
							>Route 40</label
						>
					</div>
				</div>
				<div style="margin-left: 5%; margin-top: 1.5%">
					<div>
						<input
							type="checkbox"
							name="busRoute42"
							style="margin-right: 10px;"
							id="busRoute42"
						/>
						<label style="font-family: 'Nunito', sans-serif;" for="busRoute42"
							>Route 42</label
						>
					</div>
					<div>
						<input
							type="checkbox"
							name="busRoute70"
							style="margin-right: 10px;"
							id="busRoute70"
						/>
						<label style="font-family: 'Nunito', sans-serif;" for="busRoute70"
							>Route 70</label
						>
					</div>
					<div>
						<input
							type="checkbox"
							name="busRoute72"
							style="margin-right: 10px;"
							id="busRoute72"
						/>
						<label style="font-family: 'Nunito', sans-serif;" for="busRoute72"
							>Route 72</label
						>
					</div>
					<div>
						<input
							type="checkbox"
							name="busRoute74"
							style="margin-right: 10px;"
							id="busRoute74"
						/>
						<label style="font-family: 'Nunito', sans-serif;" for="busRoute74"
							>Route 74</label
						>
					</div>
					<div>
						<input
							type="checkbox"
							name="busRoute76"
							style="margin-right: 10px; "
							id="busRoute76"
						/>
						<label style="font-family: 'Nunito', sans-serif;" for="busRoute76"
							>Route 76</label
						>
					</div>
				</div>
			</div>
			<div id="railLayerToggle">
				<h1 style="font-size: 16px;">Belt Line</h1>
				<div>
					<div id="addRailStations">Add Rail Stations</div>
					<div id="removeRailStations">Remove Rail Stations</div>
				</div>
				<div>
					<div id="addRailLine">Add Rail Line</div>
					<div id="removeRailLine">Remove Rail Line</div>
				</div>
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

		var busRoute24 = new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url:
					"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/24.geojson",
			}),
			style: new Style({
				stroke: new Stroke({
					color: "#AD0E4C",
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
				font: "14px Tahoma, sans-serif",
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

		var buffaloBeltLine = new Map({
			layers: [osm, railStations],
			target: "map-buffalobeltline",
			view: new View({
				center: [-8779270.429979, 5298636.074706],
				zoom: 12.5,
			}),
		});

		document.getElementById("addBusLayers").onclick = function addBusLayers() {
			buffaloBeltLine.addLayer(busRoute3);
			buffaloBeltLine.addLayer(busRoute5);
			buffaloBeltLine.addLayer(busRoute6);
			buffaloBeltLine.addLayer(busRoute8);
			buffaloBeltLine.addLayer(busRoute12);
			buffaloBeltLine.addLayer(busRoute14);
			buffaloBeltLine.addLayer(busRoute16);
			buffaloBeltLine.addLayer(busRoute20);
			buffaloBeltLine.addLayer(busRoute22);
			buffaloBeltLine.addLayer(busRoute23);
			buffaloBeltLine.addLayer(busRoute24);
			buffaloBeltLine.addLayer(busRoute25);
			buffaloBeltLine.addLayer(busRoute40);
			buffaloBeltLine.addLayer(busRoute42);
			buffaloBeltLine.addLayer(busRoute70);
			buffaloBeltLine.addLayer(busRoute72);
			buffaloBeltLine.addLayer(busRoute74);
			buffaloBeltLine.addLayer(busRoute76);

			document.getElementById("busRoute3").checked = true;
			document.getElementById("busRoute5").checked = true;
			document.getElementById("busRoute6").checked = true;
			document.getElementById("busRoute8").checked = true;
			document.getElementById("busRoute12").checked = true;
			document.getElementById("busRoute14").checked = true;
			document.getElementById("busRoute16").checked = true;
			document.getElementById("busRoute20").checked = true;
			document.getElementById("busRoute22").checked = true;
			document.getElementById("busRoute23").checked = true;
			document.getElementById("busRoute24").checked = true;
			document.getElementById("busRoute25").checked = true;
			document.getElementById("busRoute26").checked = true;
			document.getElementById("busRoute40").checked = true;
			document.getElementById("busRoute42").checked = true;
			document.getElementById("busRoute70").checked = true;
			document.getElementById("busRoute72").checked = true;
			document.getElementById("busRoute74").checked = true;
			document.getElementById("busRoute76").checked = true;
		};

		document.getElementById(
			"removeBusLayers"
		).onclick = function removeBusLayers() {
			buffaloBeltLine.removeLayer(busRoute3);
			buffaloBeltLine.removeLayer(busRoute5);
			buffaloBeltLine.removeLayer(busRoute6);
			buffaloBeltLine.removeLayer(busRoute8);
			buffaloBeltLine.removeLayer(busRoute12);
			buffaloBeltLine.removeLayer(busRoute14);
			buffaloBeltLine.removeLayer(busRoute16);
			buffaloBeltLine.removeLayer(busRoute20);
			buffaloBeltLine.removeLayer(busRoute22);
			buffaloBeltLine.removeLayer(busRoute23);
			buffaloBeltLine.removeLayer(busRoute24);
			buffaloBeltLine.removeLayer(busRoute25);
			buffaloBeltLine.removeLayer(busRoute40);
			buffaloBeltLine.removeLayer(busRoute42);
			buffaloBeltLine.removeLayer(busRoute70);
			buffaloBeltLine.removeLayer(busRoute72);
			buffaloBeltLine.removeLayer(busRoute74);
			buffaloBeltLine.removeLayer(busRoute76);

			document.getElementById("busRoute3").checked = false;
			document.getElementById("busRoute5").checked = false;
			document.getElementById("busRoute6").checked = false;
			document.getElementById("busRoute8").checked = false;
			document.getElementById("busRoute12").checked = false;
			document.getElementById("busRoute14").checked = false;
			document.getElementById("busRoute16").checked = false;
			document.getElementById("busRoute20").checked = false;
			document.getElementById("busRoute22").checked = false;
			document.getElementById("busRoute23").checked = false;
			document.getElementById("busRoute24").checked = false;
			document.getElementById("busRoute25").checked = false;
			document.getElementById("busRoute26").checked = false;
			document.getElementById("busRoute40").checked = false;
			document.getElementById("busRoute42").checked = false;
			document.getElementById("busRoute70").checked = false;
			document.getElementById("busRoute72").checked = false;
			document.getElementById("busRoute74").checked = false;
			document.getElementById("busRoute76").checked = false;
		};

		document.getElementById("busRoute3").onclick = function busRoute3Toggle() {
			if (document.getElementById("busRoute3").checked === true) {
				busRoute3.setVisible(true);
			} else {
				busRoute3.setVisible(false);
			}
		};

		document.getElementById("busRoute5").onclick = function busRoute5Toggle() {
			if (document.getElementById("busRoute5").checked === true) {
				busRoute5.setVisible(true);
			} else {
				busRoute5.setVisible(false);
			}
		};

		document.getElementById("busRoute6").onclick = function busRoute6Toggle() {
			if (document.getElementById("busRoute6").checked === true) {
				busRoute6.setVisible(true);
			} else {
				busRoute6.setVisible(false);
			}
		};

		document.getElementById("busRoute8").onclick = function busRoute8Toggle() {
			if (document.getElementById("busRoute8").checked === true) {
				busRoute8.setVisible(true);
			} else {
				busRoute8.setVisible(false);
			}
		};

		document.getElementById(
			"busRoute12"
		).onclick = function busRoute12Toggle() {
			if (document.getElementById("busRoute12").checked === true) {
				busRoute12.setVisible(true);
			} else {
				busRoute12.setVisible(false);
			}
		};

		document.getElementById(
			"busRoute14"
		).onclick = function busRoute14Toggle() {
			if (document.getElementById("busRoute14").checked === true) {
				busRoute14.setVisible(true);
			} else {
				busRoute14.setVisible(false);
			}
		};

		document.getElementById(
			"busRoute16"
		).onclick = function busRoute16Toggle() {
			if (document.getElementById("busRoute16").checked === true) {
				busRoute16.setVisible(true);
			} else {
				busRoute16.setVisible(false);
			}
		};

		document.getElementById(
			"busRoute20"
		).onclick = function busRoute20Toggle() {
			if (document.getElementById("busRoute20").checked === true) {
				busRoute20.setVisible(true);
			} else {
				busRoute20.setVisible(false);
			}
		};

		document.getElementById(
			"busRoute22"
		).onclick = function busRoute22Toggle() {
			if (document.getElementById("busRoute22").checked === true) {
				busRoute22.setVisible(true);
			} else {
				busRoute22.setVisible(false);
			}
		};

		document.getElementById(
			"busRoute23"
		).onclick = function busRoute23Toggle() {
			if (document.getElementById("busRoute23").checked === true) {
				busRoute23.setVisible(true);
			} else {
				busRoute23.setVisible(false);
			}
		};

		document.getElementById(
			"busRoute24"
		).onclick = function busRoute24Toggle() {
			if (document.getElementById("busRoute24").checked === true) {
				busRoute24.setVisible(true);
			} else {
				busRoute24.setVisible(false);
			}
		};

		document.getElementById(
			"busRoute25"
		).onclick = function busRoute25Toggle() {
			if (document.getElementById("busRoute25").checked === true) {
				busRoute25.setVisible(true);
			} else {
				busRoute25.setVisible(false);
			}
		};

		document.getElementById(
			"busRoute26"
		).onclick = function busRoute26Toggle() {
			if (document.getElementById("busRoute26").checked === true) {
				busRoute26.setVisible(true);
			} else {
				busRoute26.setVisible(false);
			}
		};

		document.getElementById(
			"busRoute40"
		).onclick = function busRoute40Toggle() {
			if (document.getElementById("busRoute40").checked === true) {
				busRoute40.setVisible(true);
			} else {
				busRoute40.setVisible(false);
			}
		};

		document.getElementById(
			"busRoute42"
		).onclick = function busRoute42Toggle() {
			if (document.getElementById("busRoute42").checked === true) {
				busRoute42.setVisible(true);
			} else {
				busRoute42.setVisible(false);
			}
		};

		document.getElementById(
			"busRoute70"
		).onclick = function busRoute70Toggle() {
			if (document.getElementById("busRoute70").checked === true) {
				busRoute70.setVisible(true);
			} else {
				busRoute70.setVisible(false);
			}
		};

		document.getElementById(
			"busRoute72"
		).onclick = function busRoute72Toggle() {
			if (document.getElementById("busRoute72").checked === true) {
				busRoute72.setVisible(true);
			} else {
				busRoute72.setVisible(false);
			}
		};

		document.getElementById(
			"busRoute74"
		).onclick = function busRoute74Toggle() {
			if (document.getElementById("busRoute74").checked === true) {
				busRoute74.setVisible(true);
			} else {
				busRoute74.setVisible(false);
			}
		};

		document.getElementById(
			"busRoute76"
		).onclick = function busRoute76Toggle() {
			if (document.getElementById("busRoute76").checked === true) {
				busRoute76.setVisible(true);
			} else {
				busRoute76.setVisible(false);
			}
		};

		document.getElementById(
			"addRailStations"
		).onclick = function addRailStations() {
			buffaloBeltLine.addLayer(railStations);
		};

		document.getElementById(
			"removeRailStations"
		).onclick = function removeRailStations() {
			buffaloBeltLine.removeLayer(railStations);
		};
	},
};
</script>

<style scoped>
#addBusLayers {
	cursor: default;
	border-radius: 15px;
	margin-bottom: 3%;
	width: 10em;
	height: 3em;
	justify-content: center;
	display: flex;
	align-items: center;
	background-color: #f6f6f6;
	transition: background-color 0.5s;
	font-family: "Nunito", sans-serif;
}

#addBusLayers:hover {
	background-color: #d8d8d8;
}

#addRailLine {
	cursor: default;
	border-radius: 15px;
	margin-bottom: 2%;
	width: 12em;
	height: 2em;
	justify-content: center;
	display: flex;
	align-items: center;
	background-color: #f6f6f6;
	transition: background-color 0.5s;
	font-family: "Nunito", sans-serif;
}

#addRailLine:hover {
	background-color: #d8d8d8;
}

#addRailStations {
	cursor: default;
	border-radius: 15px;
	margin-bottom: 2%;
	width: 12em;
	height: 2em;
	justify-content: center;
	display: flex;
	align-items: center;
	background-color: #f6f6f6;
	transition: background-color 0.5s;
	font-family: "Nunito", sans-serif;
}

#addRailStations:hover {
	background-color: #d8d8d8;
}

#busRoutesToggle {
	display: flex;
	flex-wrap: column;
	align-items: center;
	justify-content: center;
	padding: 7px;
	height: 12em;
	width: 66%;
	border-radius: 15px;
	border-style: solid;
	border-color: #eaeaea;
	border-width: 1px;
}

h1 {
	font-family: "Nunito", sans-serif;
	text-align: right;
}

#railLayerToggle {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	margin-left: 1.25%;
	margin-right: 2%;
	height: 13em;
	width: 29%;
	border-radius: 15px;
	border-style: solid;
	border-color: #eaeaea;
	border-width: 1px;
}

#removeBusLayers {
	cursor: default;
	border-radius: 15px;
	margin-top: 3%;
	width: 10em;
	height: 3em;
	justify-content: center;
	display: flex;
	align-items: center;
	background-color: #f6f6f6;
	transition: background-color 0.5s;
	font-family: "Nunito", sans-serif;
}

#removeBusLayers:hover {
	background-color: #d8d8d8;
}

#removeRailLine {
	cursor: default;
	border-radius: 15px;
	margin-bottom: 1%;
	width: 12em;
	height: 2em;
	justify-content: center;
	display: flex;
	align-items: center;
	background-color: #f6f6f6;
	transition: background-color 0.5s;
	font-family: "Nunito", sans-serif;
}

#removeRailLine:hover {
	background-color: #d8d8d8;
}

#removeRailStations {
	cursor: default;
	border-radius: 15px;
	width: 12em;
	height: 2em;
	justify-content: center;
	display: flex;
	align-items: center;
	background-color: #f6f6f6;
	transition: background-color 0.5s;
	font-family: "Nunito", sans-serif;
}

#removeRailStations:hover {
	background-color: #d8d8d8;
}
</style>
