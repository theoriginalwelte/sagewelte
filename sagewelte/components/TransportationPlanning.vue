<template>
	<div id="maps" style="overflow-y: scroll; height: 99%; position: absolute;">
		<div v-on:mouseenter="active = !active" v-on:mouseleave="active = !active">
			<img
				src="../src/imgs/map.png"
				style="width: 3%; height: 3%; vertical-align: -50%; margin-right: 2%;"
			/>
			<div
				v-for="map in maps"
				:key="map[1]"
				v-show="active"
				v-on:click="currentMap = map[0]"
				style="cursor: pointer; display: inline-flex; justify-content: center; margin-left: 2%; font-family: 'Roboto', sans-serif"
			>
				{{ map[1] }}
			</div>
		</div>
		<component :is="currentMap"></component>
	</div>
</template>

<script>
import BuffaloBeltLine from "./maps/BuffaloBeltLine.vue";

export default {
	name: "TransportationPlanning",
	data() {
		return {
			maps: [[BuffaloBeltLine, "Buffalo Belt Line"]],
			currentMap: BuffaloBeltLine,
			active: false,
		};
	},
	computed: {
		activeMap: function() {
			return this.currentMap;
		},
	},
	components: {
		BuffaloBeltLine,
	},
};
</script>

<style scoped>
#maps {
	margin-left: 21%;
	width: 78%;
}
</style>
