<template>
  <div id="home">
    <b-container fluid class="vh-100 no-padding bg-full">
      <b-row class="no-margin">
        <b-col cols="12" class="no-padding">
          <b-carousel
            id="carousel1"
            style="text-shadow: 1px 1px 2px #333;"
            indicators
            :interval="3000"
            img-width="100%"
            v-model="slide"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide :img-src="require('../../assets/img/img-car.jpg')">
              <div class="content-slide right">
                <h1 class="color-1">ArtCar</h1>
                <p class="text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus sit amet magna id efficitur. Sed elit metus, sodales nec sem sit amet, vulputate maximus metus. Pellentesque nec neque massa. Donec odio ligula, dignissim a arcu eget, aliquam suscipit neque. Nam blandit ligula ac hendrerit laoreet. Etiam aliquam est a ornare mollis. Maecenas auctor quam mi. Vivamus at euismod tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilim
                </p>
              </div>
            </b-carousel-slide>
            <b-carousel-slide :img-src="require('../../assets/img/automobile-cars-headlights-120049.jpg')">
              <h1>Vender carros é nossa arte</h1>
            </b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="vh-100"></b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

