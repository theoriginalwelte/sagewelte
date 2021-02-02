(function(e) {
	function t(t) {
		for (
			var a, o, u = t[0], s = t[1], c = t[2], f = 0, p = [];
			f < u.length;
			f++
		)
			(o = u[f]),
				Object.prototype.hasOwnProperty.call(i, o) && i[o] && p.push(i[o][0]),
				(i[o] = 0);
		for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
		l && l(t);
		while (p.length) p.shift()();
		return r.push.apply(r, c || []), n();
	}
	function n() {
		for (var e, t = 0; t < r.length; t++) {
			for (var n = r[t], a = !0, u = 1; u < n.length; u++) {
				var s = n[u];
				0 !== i[s] && (a = !1);
			}
			a && (r.splice(t--, 1), (e = o((o.s = n[0]))));
		}
		return e;
	}
	var a = {},
		i = { app: 0 },
		r = [];
	function o(t) {
		if (a[t]) return a[t].exports;
		var n = (a[t] = { i: t, l: !1, exports: {} });
		return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
	}
	(o.m = e),
		(o.c = a),
		(o.d = function(e, t, n) {
			o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
		}),
		(o.r = function(e) {
			"undefined" !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(o.t = function(e, t) {
			if ((1 & t && (e = o(e)), 8 & t)) return e;
			if (4 & t && "object" === typeof e && e && e.__esModule) return e;
			var n = Object.create(null);
			if (
				(o.r(n),
				Object.defineProperty(n, "default", { enumerable: !0, value: e }),
				2 & t && "string" != typeof e)
			)
				for (var a in e)
					o.d(
						n,
						a,
						function(t) {
							return e[t];
						}.bind(null, a)
					);
			return n;
		}),
		(o.n = function(e) {
			var t =
				e && e.__esModule
					? function() {
							return e["default"];
					  }
					: function() {
							return e;
					  };
			return o.d(t, "a", t), t;
		}),
		(o.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(o.p = "/");
	var u = (window["webpackJsonp"] = window["webpackJsonp"] || []),
		s = u.push.bind(u);
	(u.push = t), (u = u.slice());
	for (var c = 0; c < u.length; c++) t(u[c]);
	var l = s;
	r.push([0, "chunk-vendors"]), n();
})({
	0: function(e, t, n) {
		e.exports = n("56d7");
	},
	"0297": function(e, t, n) {},
	"034f": function(e, t, n) {
		"use strict";
		n("85ec");
	},
	"27bf": function(e, t, n) {},
	"2fc6": function(e, t, n) {
		"use strict";
		n("0297");
	},
	"56d7": function(e, t, n) {
		"use strict";
		n.r(t);
		n("e260"), n("e6cf"), n("cca6"), n("a79d");
		var a = n("2b0e"),
			i = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n(
					"div",
					[
						n("div", { attrs: { id: "sidebar" } }, [
							n(
								"div",
								{ attrs: { id: "sidebar__stampLogo" } },
								[
									e._m(0),
									e._l(e.pages, function(t) {
										return n(
											"div",
											{
												key: t,
												class: ["page", { active: e.currentPage === t[0] }],
												on: {
													click: function(n) {
														e.currentPage = t[0];
													},
												},
											},
											[e._v(" " + e._s(t[1]) + " ")]
										);
									}),
								],
								2
							),
						]),
						n(e.activePage, { tag: "component" }),
					],
					1
				);
			},
			r = [
				function() {
					var e = this,
						t = e.$createElement,
						a = e._self._c || t;
					return a("a", { attrs: { href: "./index.html" } }, [
						a("img", {
							staticStyle: {
								width: "100%",
								height: "100%",
								"padding-top": "20px",
								"padding-bottom": "20px",
							},
							attrs: { src: n("a98f") },
						}),
					]);
				},
			],
			o = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a(
					"div",
					{ attrs: { id: "maps" } },
					[
						a(
							"div",
							{
								on: {
									mouseenter: function(t) {
										e.active = !e.active;
									},
									mouseleave: function(t) {
										e.active = !e.active;
									},
								},
							},
							[
								a("img", {
									staticStyle: {
										width: "4%",
										height: "4%",
										"vertical-align": "middle",
										"margin-right": "2%",
									},
									attrs: { src: n("b474") },
								}),
								e._l(e.maps, function(t) {
									return a(
										"div",
										{
											directives: [
												{
													name: "show",
													rawName: "v-show",
													value: e.active,
													expression: "active",
												},
											],
											key: t[1],
											staticStyle: {
												display: "inline-flex",
												"justify-content": "center",
												"margin-left": "4%",
												"font-family": "'Roboto', sans-serif",
											},
											on: {
												click: function(n) {
													e.currentMap = t[0];
												},
											},
										},
										[e._v(" " + e._s(t[1]) + " ")]
									);
								}),
							],
							2
						),
						a(e.currentMap, { tag: "component" }),
					],
					1
				);
			},
			u = [],
			s = function() {
				var e = this,
					t = e.$createElement;
				e._self._c;
				return e._m(0);
			},
			c = [
				function() {
					var e = this,
						t = e.$createElement,
						n = e._self._c || t;
					return n("div", { staticStyle: { "overflow-y": "scroll" } }, [
						n("div", [
							n(
								"h1",
								{
									staticStyle: {
										"margin-right": "30px",
										"margin-bottom": "20px",
									},
								},
								[e._v(" Buffalo Belt Line ")]
							),
							n("hr"),
							n("br"),
						]),
						n("div", { staticStyle: { display: "inline-flex" } }, [
							n("div", {
								staticStyle: { height: "450px", width: "70%" },
								attrs: { id: "map-buffalobeltline" },
							}),
							n(
								"div",
								{
									staticStyle: {
										"font-family": "'Nanum Gothic', sans-serif",
										"margin-left": "30px",
										"margin-right": "30px",
										width: "30%",
										"text-align": "justify",
									},
								},
								[
									e._v(
										" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloribus numquam amet perferendis iusto ipsam repudiandae aspernatur provident repellendus maxime quis modi necessitatibus, facere illo inventore nisi omnis, tempora fugit dolorem voluptate? Voluptatibus facilis mollitia modi magnam dolor voluptatem quos! Reprehenderit cum velit harum beatae aliquid veritatis, quibusdam dolore nisi corrupti iusto eos, labore delectus voluptas excepturi obcaecati, minus pariatur sit porro? Harum tenetur dicta fugit? Laborum consectetur est sapiente, in, architecto voluptates modi harum mollitia magnam ab voluptas dignissimos eos impedit minus sint et maiores similique accusamus. Magni ea architecto non laudantium laboriosam fugiat aperiam at reiciendis et ratione sint quae error, ipsa repudiandae, neque ducimus nesciunt beatae sit voluptate eius rerum placeat voluptatum natus illo. Ipsa sequi eligendi, recusandae atque sint enim "
									),
								]
							),
						]),
					]);
				},
			],
			l = n("5eee"),
			f = n("a2c7"),
			p = n("480c"),
			m = n("3e6b"),
			d = n("5831"),
			g = n("a2e1"),
			w = n("d0e9"),
			b = n("ce2c"),
			h = n("83a6"),
			v = n("8682"),
			A = n("6c77"),
			y = n("8295"),
			B = {
				data: function() {
					return {};
				},
				mounted: function() {
					var e = new p["a"]({ source: new w["a"]() }),
						t = new m["a"]({
							source: new d["a"]({
								format: new g["a"](),
								url:
									"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/3.geojson",
							}),
							style: new A["b"]({
								stroke: new v["a"]({ color: "#3291C7", width: 3 }),
							}),
						}),
						n = new m["a"]({
							source: new d["a"]({
								format: new g["a"](),
								url:
									"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/5.geojson",
							}),
							style: new A["b"]({
								stroke: new v["a"]({ color: "#2FA165", width: 3 }),
							}),
						}),
						a = new m["a"]({
							source: new d["a"]({
								format: new g["a"](),
								url:
									"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/bus-routes/12.geojson",
							}),
							style: new A["b"]({
								stroke: new v["a"]({ color: "#000000", width: 3 }),
							}),
						}),
						i = new A["b"]({
							image: new b["a"]({
								fill: new h["a"]({ color: "#FFFFFF" }),
								stroke: new v["a"]({ color: "#000000", width: 2 }),
								radius: 5,
							}),
							text: new y["a"]({
								font: "12px Tahoma, sans-serif",
								text: "",
								offsetX: 30,
							}),
						}),
						r = new m["a"]({
							source: new d["a"]({
								url:
									"https://raw.githubusercontent.com/theoriginalwelte/sagewelte/origin/sagewelte/src/maps/buffalo-belt-line/rail.geojson",
								format: new g["a"](),
							}),
							style: function(e) {
								return i.getText().setText(e.get("Name")), i;
							},
						});
					new l["a"]({
						layers: [e, r, t, n, a],
						target: "map-buffalobeltline",
						view: new f["a"]({
							center: [-8779270.429979, 5298636.074706],
							zoom: 12,
						}),
					});
				},
			},
			P = B,
			x = (n("77cd"), n("2877")),
			k = Object(x["a"])(P, s, c, !1, null, "3410ac9a", null),
			L = k.exports,
			O = {
				data: function() {
					return {
						maps: [[L, "Buffalo Belt Line"]],
						currentMap: L,
						active: !1,
					};
				},
				name: "Maps",
				computed: {
					activeMap: function() {
						return this.currentMap;
					},
				},
				components: { BuffaloBeltLine: L },
			},
			j = O,
			E = (n("2fc6"), Object(x["a"])(j, o, u, !1, null, "c3a5cb8a", null)),
			H = E.exports,
			S = function() {
				var e = this,
					t = e.$createElement;
				e._self._c;
				return e._m(0);
			},
			M = [
				function() {
					var e = this,
						t = e.$createElement,
						n = e._self._c || t;
					return n("div", { attrs: { id: "urbanPlanning" } }, [
						n("div", { attrs: { id: "hamlinPark" } }),
					]);
				},
			],
			Q = {},
			X = Q,
			N = (n("b28a"), Object(x["a"])(X, S, M, !1, null, "4f038bfa", null)),
			Z = N.exports,
			U = {
				name: "App",
				data: function() {
					return {
						pages: [
							[Z, "Urban Planning"],
							[H, "Maps"],
						],
						currentPage: Z,
						pageNames: ["Maps", "Urban Planning"],
					};
				},
				computed: {
					activePage: function() {
						return this.currentPage;
					},
				},
			},
			R = U,
			F = (n("034f"), Object(x["a"])(R, i, r, !1, null, null, null)),
			_ = F.exports;
		new a["a"]({
			render: function(e) {
				return e(_);
			},
		}).$mount("#app");
	},
	"77cd": function(e, t, n) {
		"use strict";
		n("27bf");
	},
	"85ec": function(e, t, n) {},
	a98f: function(e, t, n) {
		e.exports = n.p + "img/stamp.38d12613.png";
	},
	b28a: function(e, t, n) {
		"use strict";
		n("bc65");
	},
	b474: function(e, t) {
		e.exports =
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAU8SURBVHic7ZpbaB5FFMd/SewnEtQa7UMSwQuIaCpFUeqlohgErSm2QfOoVfQl1FZfbKovXkpbhfZBBC0+mAcvbz6oD4r0ArXU1gbEVknRWqtJEYotmMZLkX4+zJnO7GZmd/b7dr9L3D8Ms/ufc2bPOd/Mmfl2FkqUKFGiRIlmogKMAB8Ak8AZKZPCjYjMvMQwcBSoppQfgVVNsrEQdAKvYxw8BKwDBoBuKQPCHbLkXhPdtod2/h9glGSnuoA1IquD0NYYxjh/n8WvAHZhcsBOYMhqH8QEYWVDLC0AFcycH7X4Tfjn/0ZL7hnhfgAWNMDe3DGCmfNdwq3AjIjngT4p6zG/uB4JXcBh4R5pmNU54kOU8Wstbpdw6x3yY9K2w+KeE+69gmwsFEdQxt9ocTPC9Trke6XtD4tbLNxkHgY1eknpk/oXR1uHg9P2VS3uuNT9eRjU6ADo552zuK+lfswhr7mDFld1yLUN9ApgT4EhTBIcQ42SfmADJgk+ZMkPYFaCtsP7KOPXxPiN+JfBV2Oya2njJKiXwW+ZO/2GUNl+RsoOor88oqOXwUeLMNC1G7snx/4XoJJYfCMUilHR/Rm4IED+XpQ/s7h3lxEk7cZeqMFYH1ZKn2dQ8zkUA6JTBR4OkH+RsN0lkL4bOwfcn8HYNLwrz/sO9c8vDd0iWxXdNAyhbA7ZXQJhu7FPAh4cCtuh8QD5cbIFbDfZdpdBu7Eiy+oEZ56oo9/Q3eV5BR+KDsBfwBLHcwdQCazWftP8yRyArOgQPXvnF+/Llw9c8z6u67OrZQJwg+j9KvedzA1IN2ZtH7f4ceEOYwKTewBC1tJa0AHcBbwp9x9LfbXUpy3ZC4Gzcv04KoHpa1BZu4KaCoUhjxHQAdwObMVsdvTQvkJknhbuC0vvHeFOSq03YTa33WNHS0yBhcDLRJ2uyv1LwCUidylwjLlZ/5RwizH5QM/7m+T6d48dTQ/AIuB7ok5vRY0E+/99L7BPZL4hOvXsAHSL3D65bvkAvCX8BGrO207rKfEGZimbAq6N9bFd2o6i3hj3SBkGfpK2tz12ND0A08Jfb3G3MTcPVIFPgSsdfSwEDsRk7bIfNX1cdjQ9AHE+/ofqOLANuDmhb1BZ/llUIGalHECdDNnngi0fAD3UtwF34H7PVw9aPgBp/dSL3ANQz0vRu6WetrgTUi+ro9+mPC80Yq6yyZLbnCKbR8nyvGB/awnAlBhjJ6mKGDXt0amn1PK83APQLmhIDpgXyBoA1zD70mrf65FxyVZQHzucSNHRZRrYQnQKLEf91Q4d+qmOpbW7ymygXPwZWwLl42Wz1YfL+YblgEXC6YPOi+X+z8A+dOK6M+G5NpZhRkKSXUm8t72WANwq3ITcX0M0IGl91DJcQ/toSBK8SurfpL5M6lN19Nlw1BOAW6TeL/V1UvtGQEsiHoBB4HPUq6iTcj3o0dUnRXulXir1hEO2KExJ7Ut+wf6EZmCNHuBf1MtM/cZWL4G+w8cicsCDqBFXy2riTIJJZ2m2wjq5/0jue0TuLHB5oPF5BCBNLtSf80TSWZpW6ER9nVEFHhBOH1t/lsH4RgQgxJ+IQp9DoS+msEquj2FyyFfCPZnB+DwC4NsJZvEHMIejLgVQW9g9wEWY73yekralcn8a8wo8xPg8ApDk/B5PH/3SHjkc3SnkWIoBr4jcQcyvv1u4+Lc8acYXuRFKwgbRiRyPu77UimMJ8DfqXE9vX5eL3gzm9MeHZgcg6cszIPlLrflWvKPV/lKr2UbmXXxfnpUoUaJEif8t/gPqrexMR2k2jAAAAABJRU5ErkJggg==";
	},
	bc65: function(e, t, n) {},
});
//# sourceMappingURL=app.7c573688.js.map
