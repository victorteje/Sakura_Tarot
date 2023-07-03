<script setup>
import { ref } from "vue";
import ConnectApi from "../services/ConnectApi.js"

const response = ref();

response.value=ConnectApi(6);
(response.value).then(x=>response.value=x)


</script>

<template>
    <div>        
        <p>{{ response.spanishName }}</p>
 
 </div>
</template>

<style scoped>

</style>