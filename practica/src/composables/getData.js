import { ref } from 'vue'
import axios from 'axios'

export const UsegetData = () => {
    
    const tareas = ref([])
    
    const autorizacion = "Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd";


    const getData = async (url) => {
        try{
        const response = await axios.get(url, {
            headers: {
                'Authorization': autorizacion
            }
        })
        tareas.value = response.data
        console.log(response)
        } catch (error) {
        console.log(error)
        }
    }

    const postData = async (url, data) => {
        try{
        const response = await axios.post(url, data, {
            headers: {
                'Authorization': autorizacion,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        console.log(response)
        alert("Tarea creada")
        } catch (error) {
        console.log(error)
        }
    }

    const putData = async (url, data) => {
        try{
        const response = await axios.put(url, data, {
            headers: {
                'Authorization': autorizacion,
                'Content-Type': 'application/x-www-form-urlencoded'
              }            
        })
        console.log(response)
        alert("Tarea actualizada")        
        } catch (error) {
        console.log(error)
        }
    }

    const deleteData = async (url) => {
        try{
        const response = await axios.delete(url, {
            headers: {
                'Authorization': autorizacion
            }
        })
        console.log(response)
        alert("Tarea eliminada")
        } catch (error) {
        console.log(error)
        }
    }  

    return { UsegetData, getData, tareas, postData, putData, deleteData }

}