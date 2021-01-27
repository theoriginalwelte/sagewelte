<template>
	<div>
		<h1>Buffalo Belt Line • Reformed</h1>
		<vl-map
			:load-tiles-while-animating="true"
			:load-tiles-while-interacting="true"
			style="height: 575px;"
			data-projection="EPSG:3857"
		>
			<vl-view
				:zoom.sync="zoom"
				:center.sync="center"
				:rotation.sync="rotation"
			></vl-view>

			<vl-layer-tile>
				<vl-source-osm></vl-source-osm>
			</vl-layer-tile>

			<vl-layer-vector>
				<vl-source-vector :url="url" :projection="projection">
					<vl-style-box>
						<vl-style-circle :radius="5">
							<vl-style-fill color="#FFFFFF"></vl-style-fill>
							<vl-stile-stroke color="#000000"></vl-stile-stroke>
						</vl-style-circle>
					</vl-style-box>
				</vl-source-vector>
			</vl-layer-vector>
		</vl-map>
	</div>
</template>

<script>
export default {
	data() {
		return {
			projection: "EPSG:4326",
			url: "../src/maps/buffalo-belt-line/rail.geojson",
			zoom: 13,
			center: [-8779318.203122, 5298450.17],
			rotation: 0,
		};
	},
};
</script>

<style scoped>
h1 {
	font-family: "Nunito", sans-serif;
	font-weight: 200;
}
</style>
