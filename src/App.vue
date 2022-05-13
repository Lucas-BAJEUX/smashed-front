<template>
  <div id="app">
    <caroussel
        @next="next"
        @prev="prev"
    >
      <caroussel-slide v-for="(slide,index) in slides" 
        :key="slide" 
        :index="index"
        :visibleSlide="visibleSlide"
        :direction="direction"
        > 
        <img :src="slide" 
        />
      </caroussel-slide>
    </caroussel>
    <router-view />
    <navigation-bar />
  </div>
</template>

<script>
import Caroussel from './components/CarousselAccueil.vue';
import CarousselSlide from './components/CarousselSlide.vue';
import NavigationBar from "./components/NavigationBar.vue";


export default {
  data() {
    return {
      slides: [
        {
          lien:'https://www.lequipe.fr/Tennis/Actualites/Rafael-nadal-elimine-par-denis-shapovalov-en-huitiemes-de-finale-a-rome/1332721',
          img:'https://www.lequipe.fr/_medias/img-photo-jpg/rafael-nadal-inquiete-a-dix-jours-de-roland-garros-p-lahalle-l-equipe/1500000001641490/0:0,1998:1332-828-552-75/bdd4a.jpg'

        }
        // 'https://www.lequipe.fr/_medias/img-photo-jpg/rafael-nadal-inquiete-a-dix-jours-de-roland-garros-p-lahalle-l-equipe/1500000001641490/0:0,1998:1332-828-552-75/bdd4a.jpg',
        // 'https://picsum.photos/id/236/600/350',
        // 'https://picsum.photos/id/235/600/350',
        // 'https://picsum.photos/id/234/600/350',
        // 'https://picsum.photos/id/233/600/350',
        // 'https://picsum.photos/id/232/600/350'
      ],
      visibleSlide : 0,
      direction: 'left',
    }
  },
  computed: {
    slidesLen() {
      return this.slides.length;
    }
  },
  methods: {
      next() {
          if(this.visibleSlide >= this.slidesLen - 1) {
              this.visibleSlide = 0;
          }else{
            this.visibleSlide++;
          }
          this.direction = "left"
      },
      prev() {
          if(this.visibleSlide <= 0) {
              this.visibleSlide = this.slidesLen - 1;
          }else{
            this.visibleSlide--;
          }
          this.direction="right"
      }
  },
  name: "App",
  components: {
    NavigationBar,
    Caroussel,
    CarousselSlide,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
}

.navigation {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
