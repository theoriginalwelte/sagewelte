<template>
	<div>
		<div id="sidebar">
			<div id="sidebar__stampLogo">
				<a href="./index.html"
					><img
						style="
								width: 100%;
								height: 100%;
								padding-top: 20px;
								padding-bottom: 20px;
							"
						src="../src/imgs/stamp.png"
				/></a>
				<div
					v-for="page in pages"
					:key="page[1]"
					:class="['page', { active: currentPage === page[0] }]"
					v-on:click="currentPage = page[0]"
				>
					{{ page[1] }}
				</div>
			</div>
		</div>
		<component :is="activePage"></component>
	</div>
</template>

<script>
import Transit from "/components/Transit.vue";
import UrbanPlanning from "/components/UrbanPlanning.vue";

export default {
	name: "App",
	data() {
		return {
			pages: [
				[UrbanPlanning, "Urban Planning"],
				[Transit, "Transit"],
			],
			currentPage: UrbanPlanning,
		};
	},
	computed: {
		activePage: function() {
			return this.currentPage;
		},
	},
};
</script>

<style>
.page {
	cursor: default;
	margin: 2px;
	text-align: right;
	padding: 10px;
	font-family: "Nunito", sans-serif;
	font-weight: 200;
	transition: background-color 0.5s;
	transition: color 0.5s;
	transition: font-size 0.5s;
	border-radius: 10px;
}

.page:hover {
	transition: background-color 0.5s;

	transition: font-size 0.5s;
	background-color: #e0e0e0;
}

.page.active {
	background-color: #c0c0c0;
	color: white;
	font-size: 20px;
}

#sidebar {
	top: 0;
	left: 0;
	position: absolute;
	width: 20%;
	height: 100%;
	background-color: #f6f6f6;
}

#sidebar__stampLogo {
	position: absolute;
	left: 20%;
	padding-bottom: 20px;
	width: 60%;
}
</style>
