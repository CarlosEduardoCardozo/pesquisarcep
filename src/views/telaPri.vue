<script>
import axios from "axios";
export default {
  data() {
    return {
      cep: "",
      endereco: {},
    };
  },
  methods: {
    async buscar() {
      const url = `http://viacep.com.br/ws/${this.cep}/json/`;
      const res = await axios.get(url);
      this.endereco = res.data;
    },
  },
};
</script>
<template>
  <header>
    <div class="cep">
      <form @submit.prevent="buscar" class="end">
        <label> DIGITE O CEP: </label>
        <input v-model="cep" class="input" type="text" />
        <button type="submit">Pesquisar</button>
      </form>
      <label for="rua" class="forget">Rua</label>
      <input type="text" v-model="endereco.logradouro" />
      <label for="num" class="forget">Numero</label>
      <input type="text" v-model="endereco.numero" />
      <label for="bairro" class="forget">Bairro</label>
      <input type="text" v-model="endereco.bairro" />
    </div>
  </header>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: rgb(202, 202, 202);
}
.forget {
  justify-content: left;
}
label {
  justify-content: center;
  margin: 15px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #fff;
  display: flex;
}
.cep {
  background-color: rgb(52, 56, 56);
  box-shadow: 0 0 24px 0 rgb(52, 56, 56);
  padding: 24px;
  border-radius: 24px;
}
.cep input {
  border-radius: 15px;
  outline: none;
  border: none;
  background-color: rgb(211, 211, 212);
  padding: 5px;
  margin: 10px 10px 10px 10px;
}
.cep button {
  border-radius: 15px;
  padding: 8px;
  outline: none;
  border: none;
  background-color: rgb(0, 0, 0);
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
}
</style>
