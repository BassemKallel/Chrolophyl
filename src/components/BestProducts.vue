<template>
    <GridProduits :nombreProduits="3" :msg="'Best products'"></GridProduits>
</template>


<script>
    import GridProduits from "@/components/GridProduits.vue";

    export default {
        name: "HomeView",
        components: {
            GridProduits,
        },
    };
</script>