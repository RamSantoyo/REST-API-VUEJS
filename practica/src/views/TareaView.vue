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
                <tr v-for=" tarea in tareas" :key="tarea.id">
                    <td>{{tarea.id}}</td>
                    <td>{{tarea.title}}</td>                
                    <td>{{tarea.is_completed ? 'Completado' : 'Pendiente'}}</td>
                    <td>{{tarea.due_date}}</td>
                    <td class="botones">
                        <button class="btn alert" @click="state.cambiarEstado">Editar</button>
                        <button class="btn danger" @click="eliminar">Eliminar</button>
                    </td>    
                </tr>
            </tbody>
        </table>        
    </div>
    <div v-if="state.estado === true">
            <FormTarea :tareas="tareas" />
    </div>
    
</template>

<style>

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
    }
    
    .return{
        background-color: #2ecc71;
        color: #fff;
        padding: .3rem;
        width: 10%;
        margin: 1rem;
    }
</style>