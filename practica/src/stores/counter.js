import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('estado', () => {

  const estado = ref(false)
  const visible = ref(false)

  function cambiarEstado() {
    estado.value = !estado.value
  }

  function mostrar() {
    visible.value = !visible.value
  }

  return { estado, cambiarEstado, mostrar, visible }
})
