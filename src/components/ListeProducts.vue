<template>
    <GridProduits :categories="categories"></GridProduits>
    
</template>


<script>
    import GridProduits from "@/components/GridProduits.vue";

    export default {
        name: "HomeView",
        components: {
            GridProduits,
        },
        props: {
            nombreProduits: Number,
            categories: String,
            },
        data() {
            return {};
    }
    }
</script>