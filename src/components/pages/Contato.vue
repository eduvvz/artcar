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
                <b-col md="8" offset-md="1">
                    <b-row>
                        <b-col sm="11" class="form">
                            <div class="w-100">
                                <p class="color-3">Qual o motivo do seu contato?</p>
                                <div class="btn-toggle">
                                    <div id="tirarDuvidasBtn" class="active" @click="handlerFormRender(1)">Tirar duvidas</div>
                                    <div id="tirarAdiantarBtn" @click="handlerFormRender(2)">Adiantar Compra</div>
                                </div>
                            </div>
                            <div v-if="simpleForm">
                                <b-form-group
                                    label="Endereço de e-mail"
                                    label-for="email"
                                    description="A partir deste e-mail que iremos entrar em contato."
                                    class="mt-3"
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
                                        type="text"
                                        required
                                        placeholder="Conte o motivo do seu contato"
                                        v-model="form.assunto"
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
                            </div>
                            <div v-if="!simpleForm">
                                <b-form-group
                                    label="Nome"
                                    label-for="nome"
                                    class="mt-3"
                                >
                                    <b-form-input id="nome"
                                        type="text"
                                        required
                                        placeholder="Nome"
                                        v-model="form.nome"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Data Nasc"
                                    label-for="dataNasc"
                                >
                                    <b-form-input id="dataNasc"
                                        type="date"
                                        required
                                        placeholder="Data de Nascimento"
                                        v-model="form.dataNasc"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="CPF"
                                    label-for="cpf"
                                >
                                    <b-form-input id="cpf"
                                        type="text"
                                        required
                                        placeholder="CPF"
                                        v-model="form.cpf"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Pai"
                                    label-for="nomePai"
                                >
                                    <b-form-input id="nomePai"
                                        type="text"
                                        required
                                        placeholder="Nome do pai"
                                        v-model="form.nomePai"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Mãe"
                                    label-for="nomeMae"
                                >
                                    <b-form-input id="nomeMae"
                                        type="text"
                                        required
                                        placeholder="Nome da mãe"
                                        v-model="form.nomeMae"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Endereço"
                                    label-for="endereco"
                                >
                                    <b-form-input id="endereco"
                                        type="text"
                                        required
                                        placeholder="endereco"
                                        v-model="form.endereco"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Cidade"
                                    label-for="cidade"
                                >
                                    <b-form-input id="cidade"
                                        type="text"
                                        required
                                        placeholder="Cidade"
                                        v-model="form.cidade"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Telefone Residencial"
                                    label-for="telRef"
                                >
                                    <b-form-input id="telRef"
                                        type="text"
                                        required
                                        placeholder="Telefone Residencial"
                                        v-model="form.telRes"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Telefone Celular"
                                    label-for="telCel"
                                >
                                    <b-form-input id="telCel"
                                        type="text"
                                        required
                                        placeholder="Telefone Celular"
                                        v-model="form.telCel"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Estado Civil"
                                    label-for="estCivil"
                                >
                                    <b-form-input id="estCivil"
                                        type="text"
                                        required
                                        placeholder="Etado Civil"
                                        v-model="form.estadoCivil"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Habilitado?"
                                    label-for="habilitado"
                                >
                                    <b-form-input id="habilitado"
                                        type="text"
                                        required
                                        placeholder="É habilitado atualmente?"
                                        v-model="form.habilitado"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Natural"
                                    label-for="natural"
                                >
                                    <b-form-input id="natural"
                                        type="text"
                                        required
                                        placeholder="Natural"
                                        v-model="form.natural"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="RG"
                                    label-for="rg"
                                >
                                    <b-form-input id="rg"
                                        type="text"
                                        required
                                        placeholder="RG"
                                        v-model="form.rg"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Emissão"
                                    label-for="emissao"
                                >
                                    <b-form-input id="emissao"
                                        type="text"
                                        required
                                        placeholder="Emissão"
                                        v-model="form.emissao"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="CEP"
                                    label-for="cep"
                                >
                                    <b-form-input id="cep"
                                        type="text"
                                        required
                                        placeholder="CEP"
                                        v-model="form.cep"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Tempo Res."
                                    label-for="tempoRes"
                                >
                                    <b-form-input id="tempoRes"
                                        type="text"
                                        required
                                        placeholder="Tempo Residencial"
                                        v-model="form.tempoRes"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Em Nome De"
                                    label-for="emNome"
                                >
                                    <b-form-input id="emNome"
                                        type="text"
                                        required
                                        placeholder="Em Nome De"
                                        v-model="form.emNome"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="E-mail"
                                    label-for="email"
                                >
                                    <b-form-input id="email"
                                        type="text"
                                        required
                                        placeholder="E-mail"
                                        v-model="form.email"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="CJJ Posui Restrição?"
                                    label-for="cjjRestricao"
                                >
                                    <b-form-input id="cjjRestricao"
                                        type="text"
                                        required
                                        placeholder="CJJ"
                                        v-model="form.cjjRestricao"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Renda"
                                    label-for="renda"
                                >
                                    <b-form-input id="renda"
                                        type="text"
                                        required
                                        placeholder="Renda"
                                        v-model="form.renda"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Empresa"
                                    label-for="empresa"
                                >
                                    <b-form-input id="empresa"
                                        type="text"
                                        required
                                        placeholder="Empresa"
                                        v-model="form.empresa"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Cargo"
                                    label-for="cargo"
                                >
                                    <b-form-input id="cargo"
                                        type="text"
                                        required
                                        placeholder="Cargo"
                                        v-model="form.cargo"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Se proprietario CNPJ"
                                    label-for="cnpj"
                                >
                                    <b-form-input id="cnpj"
                                        type="text"
                                        required
                                        placeholder="CNPJ"
                                        v-model="form.cnpj"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Local da empresa"
                                    label-for="localTrab"
                                >
                                    <b-form-input id="localTrab"
                                        type="text"
                                        required
                                        placeholder="Endereço"
                                        v-model="form.enderecoEmpresa"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Cidade da Empresa"
                                    label-for="cidEmpresa"
                                >
                                    <b-form-input id="cidEmpresa"
                                        type="text"
                                        required
                                        placeholder="Cidade"
                                        v-model="form.cidEmpresa"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Outras Rendas"
                                    label-for="outrasRendas"
                                >
                                    <b-form-input id="outrasRendas"
                                        type="text"
                                        required
                                        placeholder="Outras Rendas"
                                        v-model="form.outrasRendas"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Telefone Empresa"
                                    label-for="telEmpresa"
                                >
                                    <b-form-input id="telEmpresa"
                                        type="text"
                                        required
                                        placeholder="Telefone"
                                        v-model="form.telEmpresa"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Admissão"
                                    label-for="admissao"
                                >
                                    <b-form-input id="admissao"
                                        type="text"
                                        required
                                        placeholder="Admissão"
                                        v-model="form.admissao"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Contador"
                                    label-for="contador"
                                >
                                    <b-form-input id="contador"
                                        type="text"
                                        required
                                        placeholder="Contador"
                                        v-model="form.contador"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="CEP Empresa"
                                    label-for="cep"
                                >
                                    <b-form-input id="cepEmpresa"
                                        type="text"
                                        required
                                        placeholder="CEP"
                                        v-model="form.cepEmpresa"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <p class="color-3 mt-5">
                                    Refencia Pessoais
                                </p>
                                <hr>
                                <b-form-group
                                    label="Nome"
                                    label-for="refNome"
                                >
                                    <b-form-input id="refNome"
                                        type="text"
                                        required
                                        placeholder="Nome"
                                        v-model="form.refNome"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Grau de parentesco"
                                    label-for="grauParentesco"
                                >
                                    <b-form-input id="grauParentesco"
                                        type="text"
                                        required
                                        placeholder="Grau"
                                        v-model="form.refGrauParentesco"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Telefone"
                                    label-for="refTelefone"
                                >
                                    <b-form-input id="refTelefone"
                                        type="text"
                                        required
                                        placeholder="Telefone"
                                        v-model="form.refTelefone"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <p class="color-3 mt-5">
                                    Referencias Bancarias
                                </p>
                                <hr>
                                <b-form-group
                                    label="Banco"
                                    label-for="banco"
                                >
                                    <b-form-input id="banco"
                                        type="text"
                                        required
                                        placeholder="Informe o número do banco"
                                        v-model="form.banco"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Agencia"
                                    label-for="agencia"
                                >
                                    <b-form-input id="agencia"
                                        type="text"
                                        required
                                        placeholder="Ag"
                                        v-model="form.agencia"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Conta Corrente"
                                    label-for="conta"
                                >
                                    <b-form-input id="conta"
                                        type="text"
                                        required
                                        placeholder="C/C"
                                        v-model="form.conta"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <p class="color-3 mt-5">
                                    Veiculo
                                </p>
                                <hr>
                                <b-form-group
                                    label="Veiculo"
                                    label-for="veiculo"
                                >
                                    <b-form-input id="veiculo"
                                        type="text"
                                        required
                                        placeholder="Veiculo"
                                        v-model="form.veiculo"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Valor da Venda"
                                    label-for="valorVenda"
                                >
                                    <b-form-input id="valorVenda"
                                        type="text"
                                        required
                                        placeholder="Informe o valor"
                                        v-model="form.valorVenda"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Valor do Financiamento"
                                    label-for="valorFinanciado"
                                >
                                    <b-form-input id="valorFinanciado"
                                        type="text"
                                        required
                                        placeholder="Informe o valor"
                                        v-model="form.valorFinanciado"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Ano Fab/Modelo"
                                    label-for="anoFabMod"
                                >
                                    <b-form-input id="anoFabMod"
                                        type="text"
                                        required
                                        placeholder="Ano Fab/Modelo"
                                        v-model="form.anoFabMod"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Entrada"
                                    label-for="entrada"
                                >
                                    <b-form-input id="entrada"
                                        type="text"
                                        required
                                        placeholder="Informe o valor"
                                        v-model="form.entrada"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Parcelas"
                                    label-for="parcelas"
                                >
                                    <b-form-input id="parcelas"
                                        type="text"
                                        required
                                        placeholder="Informe a quantidade de parcelas e valor delas"
                                        v-model="form.parcelas"
                                    >
                                    </b-form-input>
                                </b-form-group>
                            </div>
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
            simpleForm: true,
            form: {
                msg: '',
                assunto: '',
                email: '',
                nome: '',
                dataNasc: '',
                cpf: '',
                nomePai: '',
                nomeMae: '',
                endereco: '',
                cidade: '',
                telRes: '',
                telCel: '',
                estadoCivil: '',
                localTrab: '',
                habilitado: '',
                natural: '',
                rg: '',
                emissao: '',
                cep: '',
                tempoRes: '',
                emNome: '',
                cjjRestricao: '',
                renda: '',
                empresa: '',
                cargo: '',
                cnpj: '',
                enderecoEmpresa: '',
                cidEmpresa: '',
                outrasRendas: '',
                telEmpresa: '',
                admissao: '',
                contadador: '',
                cep: '',
                refNome: '',
                refGrauParentesco: '',
                refTelefone: '',
                banco: '',
                agencia: '',
                conta: '',
                veiculo: '',
                valorVenda: '',
                valorFinanciado: '',
                anoFabMod: '',
                entrada: '',
                parcelas: ''
            },
        }
    },

    created(){
        window.scrollTo(0, 0);
    },

    methods: {
        sendForm() {
            console.log(this.form);
        },
        handlerFormRender(decider){
            if (decider < 2) {
                this.simpleForm = true
                document.getElementById('tirarDuvidasBtn').classList.add('active');
                document.getElementById('tirarAdiantarBtn').classList.remove('active');
            } else {
                this.simpleForm = false
                document.getElementById('tirarAdiantarBtn').classList.add('active');
                document.getElementById('tirarDuvidasBtn').classList.remove('active');
            }
        }
    }
}
</script>

