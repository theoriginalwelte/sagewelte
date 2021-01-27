<template>
	<div id="maps">
		<BuffaloBeltLine></BuffaloBeltLine>
	</div>
</template>

<script>
import BuffaloBeltLine from "./maps/BuffaloBeltLine.vue";

export default {
	data() {
		return {};
	},
	name: "Maps",
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
