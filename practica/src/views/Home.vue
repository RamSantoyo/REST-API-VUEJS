<script setup>


</script>

<template>
    <div class="portada">
        <h1>Consumo de API REST</h1>
        <img src="../assets/logo.png" alt="">
    </div>    
</template>

<style scoped>
    .portada{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 30rem;        
    }

    .portada h1{
        font-size: 3rem;
        color: #fff;
    }
    img{
        width: 20%;
    }

    /*query para dispositivos moviles*/
    @media screen and (max-width: 768px){
        .portada{
            height: 20rem;
        }
        .portada h1{
            font-size: 2rem;
        }
        img{
            width: 40%;
        }
    }
</style>