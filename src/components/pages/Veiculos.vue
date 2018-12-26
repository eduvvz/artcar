<template>
    <div id="veiculos">
        <b-container fluid class="vh-40 bg-full"
            :style="{ 'background-image': 'url(' + require('../../assets/img/img-car.jpg') + ')' }"
        >
        </b-container>
        <b-container>
            <b-row>
                <b-col cols=12>
                    <h2 class="color-2 mt-5 mb-4">
                        Nossos Carros
                    </h2>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import card from '../../components/shared/cards/CardPrinc.vue'

export default {

  components: {
    card
  },  
}
</script>

