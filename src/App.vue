<template>
	<Navigation></Navigation>
	<Maps></Maps>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Maps from "./components/Maps";

export default {
	name: "App",
	components: {
		Navigation,
		Maps,
	},
};
</script>

<style>
#buffalo_belt_line {
	margin-top: 4%;
	display: flex;
	width: 100%;
}

#buffalo_belt_line_map {
	width: 90%;
	display: flex;
	align-self: center;
}

.icon {
	justify-content: end;
	width: 32px;
	height: 32px;
}

.map {
	align-items: center;
	height: 600px;
	width: 100%;
}

#maps {
	margin-top: 1%;
	width: 100%;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
}

#maps_sidebar {
	display: flex;
	float: right;
	align-items: center;
	text-align: right;
	padding: 0.5em;
	padding-right: 2.5em;
	font-family: "Nunito", sans-serif;
	font-weight: 200;
}

.maps__title {
	font-family: "Nunito", sans-serif;
	text-align: center;
	font-size: xx-large;
}

#page {
	position: relative;
	height: 98vh;
	margin-left: 300px;
	overflow-y: scroll;
}

#urbanplanning__sidebar {
	display: flex;
	float: right;
	align-items: center;
	text-align: right;
	padding: 0.5em;
	padding-right: 2.5em;
	font-family: "Nunito", sans-serif;
	font-weight: 200;
}
</style>
