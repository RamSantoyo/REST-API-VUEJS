<script setup>
import { ref } from 'vue'
import { UsegetData } from '@/composables/getData.js'
import { useRoute,  useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();

defineProps(['tareas'])

const { putData } = UsegetData();

const title = ref('')
const is_completed = ref('')
const due_date = ref('')
const comments = ref('')

const editar = () => {
    putData('https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/' + route.params.id, {
    title: title.value,
    is_completed: is_completed.value,
    due_date: due_date.value,
    comments: comments.value,
    description: '',
    tags: ''       
    }).then(() => {
        router.push('/tareas')
    });
}
</script>

<template>
    <div class="form-tarea">
    <h1>Editar Tarea</h1>
        <form v-for="tarea in tareas" :key="tarea.id" @submit.prevent="editar">
            <input type="text" v-model="title" placeholder="Titulo">
            <div class="seleccion"> 
                <label>Completado</label>       
                <input type="radio" v-model="is_completed" value="1">
                <label>Pendiente</label>
                <input type="radio" v-model="is_completed" value="0">
            </div>
            <input type="date" v-model="due_date" placeholder="Fecha">
            <textarea v-model="comments" placeholder="Comentarios"></textarea>
            <button type="submit" class="btn">Editar</button>
        </form>
    </div>         
</template>

<style>

.form-tarea{
    background-color: white;
    margin: 5% 35%;
    border-radius: 10px;
}

.form-tarea h1{
    text-align: center;
    padding: 1rem;
    color: #000;
}

/* query mobile */

@media screen and (max-width: 768px){
    .form-tarea{
        margin: 5% 10%;
    }
}

</style>