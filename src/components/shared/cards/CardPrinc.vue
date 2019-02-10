<template>
    <b-col cols="12" sm="6" md="4" lg="3" class="mt-5 d-flex align-content-center justify-content-center">
        <div class="card-prin">
            <div class="bg-full" 
                :style="{'background-image': 'url( data:image/png;base64,' + veiculo.base64 + ')'}">
            </div>
            <div class="body">
                <h5 class="color-1">{{ veiculo.modelo }}</h5>
                <hr>
                <div class="w-100 d-flex align-content-center justify-content-center">
                    <div class="price">
                        <p class="color-2">{{ veiculo.anoModelo }}</p>
                    </div>
                </div>
                
            </div>
        </div>
    </b-col>
</template>

<script>
export default {
    
    props: {
        veiculo: {
            required: true,
            type: Object
        },
    }

}
</script>
