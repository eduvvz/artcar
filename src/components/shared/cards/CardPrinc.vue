<template>
    <b-col cols="12" sm="6" md="4" lg="3" class="mt-5 d-flex align-content-center justify-content-center">
        <div class="card-prin">
            <div class="bg-full" 
                :style="{'background-image': 'url(' + img + ')'}">
            </div>
            <h5 class="color-1">{{ title }}</h5>
            <h6 class="color-1">R$ {{ price }}</h6>
        </div>
    </b-col>
</template>

<script>
export default {
    
    props: {
        img: {
            required: true,
            type: String
        },
        title: {
            required: true,
            type: String
        },
        price: {
            required: true,
            type: String
        }
    }

}
</script>
