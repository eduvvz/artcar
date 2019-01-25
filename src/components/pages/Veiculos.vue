<template>
    <div id="veiculos">
        <b-container fluid class="vh-40 bg-full"
            :style="{ 'background-image': 'url(' + require('../../assets/img/img-car.jpg') + ')' }"
        >
        </b-container>
        <b-container fluid class="bg-color-3">
            <b-row>
                <b-col offset="1" cols="10">
                    <h2 class="color-1 mt-5">
                    Nossos carros
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
                        <card title="Ford Focus" price="15.000" img="https://img.olx.com.br/images/40/405805105055507.jpg" />
                        <card title="Lambo" price="40.000" img="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/05/Huracan_Performante_orange_097-626x383.jpg?crop=1xw:1xh;center,center" />
                        <card title="Range Hover" price="100.000" img="https://images.immedia.com.br//16/16460_2_EL.jpg?c=201807161556" />
                        <card title="Nissan 2008" price="20.000" img="https://vetor.movida.com.br/movida/imagens/cars/t4_grupo_BS.jpg" />
                        <card title="Ford Focus" price="15.000" img="https://img.olx.com.br/images/40/405805105055507.jpg" />
                        <card title="Lambo" price="40.000" img="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/05/Huracan_Performante_orange_097-626x383.jpg?crop=1xw:1xh;center,center" />
                        <card title="Range Hover" price="100.000" img="https://images.immedia.com.br//16/16460_2_EL.jpg?c=201807161556" />
                        <card title="Nissan 2008" price="20.000" img="https://vetor.movida.com.br/movida/imagens/cars/t4_grupo_BS.jpg" />
                        <card title="Ford Focus" price="15.000" img="https://img.olx.com.br/images/40/405805105055507.jpg" />
                        <card title="Lambo" price="40.000" img="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/05/Huracan_Performante_orange_097-626x383.jpg?crop=1xw:1xh;center,center" />
                        <card title="Range Hover" price="100.000" img="https://images.immedia.com.br//16/16460_2_EL.jpg?c=201807161556" />
                        <card title="Nissan 2008" price="20.000" img="https://vetor.movida.com.br/movida/imagens/cars/t4_grupo_BS.jpg" />
                        <card title="Ford Focus" price="15.000" img="https://img.olx.com.br/images/40/405805105055507.jpg" />
                        <card title="Lambo" price="40.000" img="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/05/Huracan_Performante_orange_097-626x383.jpg?crop=1xw:1xh;center,center" />
                        <card title="Range Hover" price="100.000" img="https://images.immedia.com.br//16/16460_2_EL.jpg?c=201807161556" />
                        <card title="Nissan 2008" price="20.000" img="https://vetor.movida.com.br/movida/imagens/cars/t4_grupo_BS.jpg" />
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

