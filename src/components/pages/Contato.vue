<template>
    <div id="contato">
        <b-container fluid class="vh-40 bg-full"
            :style="{ 'background-image': 'url(' + require('../../assets/img/automobile-cars-headlights-120049.jpg') + ')' }"
        >
        </b-container>
        <b-container>
            <b-row>
                <b-col cols=12>
                    <h2 class="color-2 mt-5 mb-4">
                        Entre em Contato
                    </h2>
                </b-col>
                <div class="w-100 mt-5"></div>
                <b-col md="3" class="p-5">
                    <p class="color-2 text-justify">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="30px" height="30px" viewBox="0 0 430.114 430.114" style="enable-background:new 0 0 430.114 430.114;"
                            xml:space="preserve">
                        <g>
                            <path id="Facebook_Places" d="M356.208,107.051c-1.531-5.738-4.64-11.852-6.94-17.205C321.746,23.704,261.611,0,213.055,0
                                C148.054,0,76.463,43.586,66.905,133.427v18.355c0,0.766,0.264,7.647,0.639,11.089c5.358,42.816,39.143,88.32,64.375,131.136
                                c27.146,45.873,55.314,90.999,83.221,136.106c17.208-29.436,34.354-59.259,51.17-87.933c4.583-8.415,9.903-16.825,14.491-24.857
                                c3.058-5.348,8.9-10.696,11.569-15.672c27.145-49.699,70.838-99.782,70.838-149.104v-20.262
                                C363.209,126.938,356.581,108.204,356.208,107.051z M214.245,199.193c-19.107,0-40.021-9.554-50.344-35.939
                                c-1.538-4.2-1.414-12.617-1.414-13.388v-11.852c0-33.636,28.56-48.932,53.406-48.932c30.588,0,54.245,24.472,54.245,55.06
                                C270.138,174.729,244.833,199.193,214.245,199.193z"/>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        </svg>
                        Nosso jurídico recebe comunicações pelo fax 3797-1001 e no endereço daqui Rua Brigadeiro Faria Lima, 3900 - Itaim Bibi São Paulo, 04538-132.
                    </p>
                    <p class="color-2 text-justify mt-4">
                        <svg width="30" version="1.1" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 64 64">
                            <g>
                                <g fill="#1D1D1B">
                                <path d="M32,0C14.355,0,0,14.355,0,32s14.355,32,32,32s32-14.355,32-32S49.645,0,32,0z M32,60    C16.561,60,4,47.439,4,32S16.561,4,32,4s28,12.561,28,28S47.439,60,32,60z"/>
                                <circle cx="20.518" cy="21.361" r="4.338"/>
                                <circle cx="43.48" cy="21.361" r="4.338"/>
                                <path d="m52.541,36.568c-1.053-0.316-2.172,0.287-2.488,1.344-0.035,0.119-3.739,11.947-18.053,11.947-14.219,0-17.904-11.467-18.055-11.955-0.32-1.055-1.441-1.65-2.486-1.336-1.059,0.317-1.66,1.432-1.344,2.489 0.045,0.148 4.627,14.802 21.885,14.802s21.84-14.654 21.885-14.803c0.316-1.056-0.285-2.171-1.344-2.488z"/>
                                </g>
                            </g>
                        </svg>
                        Mande sua dúvida ou sugestão, vamos ficar felizes em esclarecer qualquer coisa!
                    </p>
                </b-col>
                <b-col md="9">
                    <b-row>
                        <b-col sm="11" class="form">
                            <b-form-group
                                label="Endereço de e-mail"
                                label-for="email"
                                description="A partir deste e-mail que iremos entrar em contato."
                            >
                                <b-form-input id="email"
                                    type="email"
                                    required
                                    placeholder="Escreva seu e-mail"
                                    v-model="form.email"
                                >
                                </b-form-input>
                            </b-form-group>
                            <b-form-group
                                label="Assunto do contato"
                                label-for="assunto"
                            >
                                <b-form-input id="assunto"
                                    type="email"
                                    required
                                    placeholder="Conte o motivo do seu contato"
                                    v-model="form"
                                >
                                </b-form-input>
                            </b-form-group>
                            <b-form-group
                                label="Mensagem"
                                label-for="mensagem"
                            >
                                <b-form-textarea id="mensagem"
                                    placeholder="Escreva sua mensagem"
                                    :rows="6"
                                    v-model="form.msg"
                                >
                                </b-form-textarea>
                            </b-form-group>
                            <b-button class="mt-3" size="lg" @click="sendForm()">Enviar</b-button>
                        </b-col>
                    </b-row>
                </b-col>
                <div class="w-100 mt-5"></div>
            </b-row>
        </b-container>
    </div>
</template>


<script>
export default {

    data() {
        return {
            form: new Object,
        }
    },

    methods: {
        sendForm() {
            console.log(this.form);
        }
    }
}
</script>

