<script setup>
    import { RouterLink } from 'vue-router'
    import { UsegetData } from '@/composables/getData.js'
    import Formulario from '../components/FormPost.vue'
    import { useCounterStore } from '@/stores/counter.js'

    const state = useCounterStore()
    const { tareas, getData } = UsegetData();

    getData('https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks');

</script>

<template>
    <div class="contenedor">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Estatus</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>                    
                    <tr v-for="tarea in tareas" :key="tarea.id">
                        <td>{{tarea.id}}</td>
                        <td>{{tarea.title}}</td>                
                        <td>{{ tarea.is_completed ? 'Completado' : 'Pendiente' }}</td>
                        <td>{{tarea.due_date}}</td>
                        <td>
                            <router-link :to="`/tarea/${tarea.id}`" class="viw">Ver</router-link>
                        </td>    
                    </tr>
                </tbody>
            </table>
        <button @click="state.mostrar" class="btn add">Agregar Tarea</button>               
    </div>
    <div v-if="state.visible === true">
        <Formulario />
    </div>   

</template>

<style> 
 .add{
    margin-top: 20px;
    background-color: #2ecc71;
    width: 20%;
 }

/*query mobile*/

@media screen and (max-width: 768px){
    .add{
        width: 80%;
    }
}

</style>