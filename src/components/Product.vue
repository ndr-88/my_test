<template>
    <div class="productDetaisContainer">
        <div><strong>Shopping completed!! Thank you</strong></div>
        <p>Product id: {{idVal}}</p>
        <p>Title: {{title}}</p>
        <router-link :to="{name:'home'}">
            <button type="button">Home</button>
        </router-link>
    </div>
</template>
<script>
    export default {
        name: 'Product',
        data() {
            return {
                idVal: this.$route.params.id,
                title: this.$route.params.title
            }
        }
    }
</script>