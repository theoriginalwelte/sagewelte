<template>
	<div id="sidebar">
		<div id="sidebar__stampLogo">
			<a href="./index.html"
				><img
					style="
								width: 175px;
								height: 175px;
								padding-top: 20px;
								padding-bottom: 20px;
							"
					src="../src/imgs/stamp.png"
			/></a>
		</div>
		<div class="sidebar_pageSelection"></div>
	</div>
</template>

<script>
import BuffaloBeltLine from "./maps/BuffaloBeltLine.vue";

var pages = {
	BuffaloBeltLine: {
		component: BuffaloBeltLine,
	},
};

export default {
	name: "Navigation",
	data() {
		return {
			pages: pages,
		};
	},
};
</script>

<style scoped>
#sidebar {
	top: 0;
	left: 0;
	position: absolute;
	width: 20%;
	height: 100%;
	background-color: #f6f6f6;
}

#sidebar__stampLogo {
	position: relative;
	margin-left: auto;
	margin-right: auto;
	padding-bottom: 20px;
	width: 60%;
}
</style>
