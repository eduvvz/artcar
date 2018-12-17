<template>
  <div id="home">
    <b-container fluid class="vh-90 no-padding bg-full">
      <b-row class="no-margin">
        <b-col cols="12" class="no-padding">
          <b-carousel
            id="carousel"
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
          <div id="header-mb" class="bg-full vh-100 init-pad"
            :style="{ 'background-image': 'url(' + require('../../assets/img/img-car.jpg') + ')' }">
            <b-row>
              <b-col offset="1" cols="10">
                <h1 class="color-1 mt-5">ArtCar</h1>
              </b-col>
              <b-col offset="1" cols="10">
                <p class="text-left color-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus sit amet magna id efficitur. Sed elit metus, sodales nec sem sit amet, vulputate maximus metus. Pellentesque nec neque massa. Donec odio ligula, dignissim a arcu eget, aliquam suscipit neque. Nam blandit ligula ac hendrerit laoreet. Etiam aliquam est a ornare mollis. Maecenas auctor quam mi. Vivamus at euismod tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilim
                </p>
              </b-col>
              </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="vh-80 bg-color-3 pb-4">
      <b-row>
        <b-col offset="1" cols="10">
            <h2 class="color-1 mt-5">
              Podem chamar sua atenção!
            </h2>
        </b-col>
        <b-col cols="12">
          <b-row>
            <card title="Ford Focus" price="15.000" img="https://img.olx.com.br/images/40/405805105055507.jpg" />
            <card title="Lambo" price="40.000" img="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/05/Huracan_Performante_orange_097-626x383.jpg?crop=1xw:1xh;center,center" />
            <card title="Range Hover" price="100.000" img="https://images.immedia.com.br//16/16460_2_EL.jpg?c=201807161556" />
            <card title="Nissan 2008" price="20.000" img="https://vetor.movida.com.br/movida/imagens/cars/t4_grupo_BS.jpg" />
            <card title="Ford Focus" price="15.000" img="https://img.olx.com.br/images/40/405805105055507.jpg" />
            <card title="Lambo" price="40.000" img="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/05/Huracan_Performante_orange_097-626x383.jpg?crop=1xw:1xh;center,center" />
            <card title="Range Hover" price="100.000" img="https://images.immedia.com.br//16/16460_2_EL.jpg?c=201807161556" />
            <card title="Nissan 2008" price="20.000" img="https://vetor.movida.com.br/movida/imagens/cars/t4_grupo_BS.jpg" />
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col offset="1" cols="10">
          <h2 class="color-2 mt-5 mb-4">
            Sobre a gente
          </h2>
        </b-col>
        <b-col sm="4">
          <p class="color-2">
            It is a long established fact that a re distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </b-col>
        <b-col sm="4">
          <p class="color-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </b-col>
        <b-col sm="4">
          <p class="color-2">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to
          </p>
        </b-col>
      </b-row>
      <br>
    </b-container>
  </div>
</template>

<script>
import card from '../../components/shared/cards/CardPrinc.vue'

export default {

  components: {
    card
  },

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

