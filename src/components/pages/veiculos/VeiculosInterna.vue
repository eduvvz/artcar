<template>
    <div id="interna">
        <b-container fluid class="vh-40 bg-full"
            :style="{ 'background-image': 'url(' + require('../../../assets/img/automobile-cars-headlights-120049.jpg') + ')' }"
        >
        </b-container>
        <b-container>
            <b-row>
                <b-col cols=12>
                    <h2 class="color-2 mt-5 mb-4">
                        {{ veiculo.marca+' '+veiculo.modelo+' '+veiculo.anoModelo }}
                    </h2>
                    <p class="color-3">
                        {{ veiculo.descricao }}
                    </p>
                    <b-row class="mb-5">
                        <b-col sm="12" md="3">
                            <p><b>Combustivel:</b> {{ veiculo.combustivel }}</p>
                            <p><b>Cor:</b> {{ veiculo.cor }}</p>
                        </b-col>
                        <b-col sm="12" md="3">
                            <p><b>Portas:</b> {{ veiculo.portas }}</p>
                            <p><b>Cambio:</b> {{ veiculo.cambio }}</p>
                        </b-col>
                        <b-col sm="12" md="3">
                            <p><b>Quilometragem:</b> {{ veiculo.quilometragem }}</p>
                            <p><b>Versão:</b> {{ veiculo.versao }}</p>
                        </b-col>
                        <b-col sm="12" md="3">
                            <p><b>Ano de Fabricação:</b> {{ veiculo.anoFabricacao }}</p>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            veiculo: {}
        }
    },

    created() {
        this.$http.get('https://artcarmultimarcas.herokuapp.com/veiculo/'+this.$route.params.id)
        .then(res => res.json())
        .then(function (veiculo){
            this.veiculo = veiculo[0];
        }, err => console.log(err));
    }
}
</script>

