<script setup>
    import { useRoute, useRouter} from 'vue-router'
    import { UsegetData } from '@/composables/getData.js'
    import { useCounterStore } from '@/stores/counter.js'
    import FormTarea from '../components/FormTarea.vue'

    const route = useRoute();
    const router = useRouter();

    const { getData, tareas, deleteData } = UsegetData();
    const state = useCounterStore()

    const regresar = () => {        
        router.push('/tareas')
    }

    getData('https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/' + route.params.id);


    const eliminar = () => {
        if(!confirm('¿Estas seguro de eliminar esta tarea?')){
            return
        }
        deleteData('https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/' + route.params.id)
    }
   

</script>

<template>
    <button @click="regresar" class="btn return">Regresar</button>   
    <div class="card">
        <div v-for="tarea in tareas" :key="tarea.id">
            <h2>Titulo: {{tarea.title}}</h2>            
            <p>Fecha: {{tarea.due_date}}</p>
            <p>Estatus: {{tarea.is_completed ? 'Completado' : 'Pendiente'}}</p>
            <p>Descripcion: {{tarea.comments}}</p>
            <div class="botones">
                <button class="btn alert" @click="state.cambiarEstado">Editar</button>
                <button class="btn danger" @click="eliminar">Eliminar</button>
            </div>
        </div>                 
    </div>
    <div v-if="state.estado === true">
            <FormTarea :tareas="tareas" />
    </div>
    
</template>

<style>
    .card{
        width: 50%;
        margin: 1rem auto;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: white;
        color: black;
        text-align: center;
    }

    .alert{
        background-color: #f0ad4e;
        color: #fff;
        padding: .3rem;
    }

    .danger{
        background-color: #d9534f;
        color: #fff;
        padding: .3rem;       
    }

    .botones{
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        align-content: center;
        padding: 1rem 6rem;
    }
    
    .return{
        background-color: #2ecc71;
        color: #fff;
        padding: .3rem;
        width: 10%;
        margin: 1rem;
    }


    /*query mobile*/

    @media screen and (max-width: 768px){
        .card{
            width: 80%;
        }

        .return{
            width: 30%;
        }

        .botones{
            padding: 1rem 2rem;
        }
    }
</style>