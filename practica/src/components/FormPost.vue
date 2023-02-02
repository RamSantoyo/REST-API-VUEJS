<script setup>
import { ref } from 'vue'
import { UsegetData } from '@/composables/getData.js'

const { postData } = UsegetData();

const title = ref('')
const comments = ref('')
const due_date = ref('')
const is_completed = ref('')

const agregar = () => {
    if(!title.value || !comments.value || !due_date.value || !is_completed.value){
        alert('Todos los campos son obligatorios')
        return
    }
    postData('https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks', {
        token: 'Text',
        title: title.value,
        is_completed: is_completed.value,      
        due_date: due_date.value,
        comments: comments.value,
        description: 'Text',
        tags: 'Text'      
    })
}

</script>

<template>
<div class="cnt-form">
    <h1>Agregar Tarea</h1>
    <form @submit.prevent="agregar">
        <input type="text" v-model="title" placeholder="Titulo">
        <div class="seleccion"> 
            <label>Completado</label>       
            <input type="radio" v-model="is_completed" value="1">
            <label>Pendiente</label>
            <input type="radio" v-model="is_completed" value="0">
        </div>
        <input type="date" v-model="due_date" placeholder="Fecha">        
        <textarea v-model="comments" placeholder="Comentarios"></textarea>
        <button type="submit" class="btn-form">Enviar</button>
    </form>
</div>
</template>

<style>

.cnt-form{
    background-color: white;
    margin: 5% 35%;
    border-radius: 10px;
}

.cnt-form h1{
    text-align: center;
    padding: 1rem;
    color: #000;
}

.btn-form{
    width: 100%;
    padding: 1rem;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}



</style>