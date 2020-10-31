var apps = [
  {
    name: "Urban Planning",
    component: {
      template: `
      <div class="urbanPlanning">
        <div class="intro__urbanPlanning">
            Starting my journey in the field of Urban Planning, I switched my major in 2018 from Civil Engineering to pursue a Bachelor of Arts in Environmental Design
            at the University at Buffalo. Knowing my imagination was bound by calculations, the aspect of design and engagement attracted me to this profession. Understanding
            what it means to design the urban landscape by the means of public involement, adaptation, government action and implementation has given me insight to
            what it means to be an effective Urban Planner. As this is my drive to strive for excellence, I plan to further continue my education with my intention to enroll
            at Hunter College in New York City to pursue a Master's degree in Urban Planning with Transportation Planning as my concentration.
        </div>
        <div class="portfolio">
          <div class="folio" v-for="folio in folio">
            <div class="folio__titlebar">
              <div class="folio__title">
                {{folio.name}}
              </div>
              <div class="folio__navigation">
                <a href=""><img src="./static/icons/pdf.png"></a>
                  &nbsp &nbsp
                <a href=""><img src="./static/icons/external.png"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      `,
      data() {
        return {
          folio: [
            {
              name: "Buffalo: The Belt Line",
            },
            {
              name: "Hamlin Park Mini Master Plan",
            },
          ],
        };
      },
      methods: {},
      computed: {},
    },
  },
  {
    name: "Sketch Up",
    component: {
      template: `
        <div class="sketchUp">
          <div style="display: flex; flex-direction: column; width: 100%; margin-right: 40px; ">
            <div class="project__sketchUp" v-for="project in projects">
              <div class="project__sketchUp--title">
                <a href="./sketchup/house-1/index.html">{{project.name}}</a>
              </div>
              <div class="project__sketchUp--description">
                {{project.description}}
              </div>
              <div class="project__sketchUp--showcase">
                <div>
                  <img :src="project.photos[0].url" class="project__sketchUp--photo">
                </div>
                <div>
                  <img :src="project.photos[1].url" class="project__sketchUp--photo">
                </div>
              </div>
            </div>
          </div>
          <div class="intro__sketchUp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium sapien sit amet ligula pretium, non 
            vehicula ligula posuere. Maecenas cursus euismod leo. Donec faucibus eget nulla vel efficitur. Vivamus a sapien 
            nec est eleifend sodales. Pellentesque vitae purus eu nulla tincidunt tincidunt. Proin egestas interdum ligula 
            elementum porttitor. Phasellus dui quam, pharetra a lacinia non, venenatis vel nisi.

            Mauris accumsan ex eu ultricies interdum. Aenean et odio nec libero iaculis consequat id eget dui. Vestibulum ac 
            tincidunt magna. Ut sed malesuada ante, et consectetur risus. Sed at lacinia urna. Maecenas at ipsum turpis. 
            Vestibulum nec mi at leo accumsan convallis. Nullam eu auctor eros. Fusce volutpat ullamcorper dui lobortis rutrum. 
            Fusce eu ultricies dolor. In ullamcorper neque sodales purus vulputate mattis. In ac iaculis nisi. Cras ac sodales 
            nibh, eget tristique lorem. Morbi blandit sodales tortor, in elementum ligula sodales in. Etiam egestas volutpat 
            erat, non feugiat diam aliquet in.
          </div>
        </div>
      `,
      data() {
        return {
          projects: [
            {
            name: "House #1",
            description: "My first attempt at creating a house in SketchUp. ",
            photos: [
              {
                photo_id: "house_1:1",
                photo_description: "North northeast facing elevation",
                url: "./sketchup/photos/house_1/10.png",
              },
              {
                photo_id: "house_1:10",
                photo_description: "Southeast angled bird's-eye view section cut",
                url: "./sketchup/photos/house_1/1.png",
              },
              ],
            },
            {
              name: "Bar #1",
              description: "My first attempt at an urban-setting bar.",
              photos: [
                {
                  photo_id: "bar_1:2",
                  photo_description: "",
                  url: "./sketchup/photos/bar_1/2.png",
                },
                {
                  photo_id: "bar_1:4",
                  photo_description: "",
                  url: "./sketchup/photos/bar_1/4.png"
                },
              ],
            },
          ]
        }
      },
      methods: {},
      computed: {},
    },
  },
  {
    name: "Software Development",
    component: {
      template: ``,
      data() {
        return {};
      },
      methods: {},
      computed: {},
    },
  },
];

var home = new Vue({
  el: "#home",
  data: {
    currentApp: apps[0],
    apps: apps,
  },
  methods: {},
});
