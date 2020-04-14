<template>
  <section id="mainSection">

    <main class="mainContainer">
      <article>
        <h1>Add a product into app</h1>
        <p>Choose where you'd like to get it from</p>
      </article>
      <div class="ctaContainer">

        <Modal v-if="showModal" v-on:close="showModal = false"></Modal>

        <div class="shopContainer">
          <div class="imageContainer" v-on:click="showModal = true">
            <img src="../assets/image_2.svg" alt="" height="200">
          </div>
          <p>Your store</p>
        </div>

        <div class="shopContainer">
          <div class="imageContainer">
            <img src="../assets/image_1.svg" alt="" height="200">
          </div>
          <p>Print-on-demand service</p>
        </div>

      </div>

    </main>
  </section>
</template>

<script>
  import Modal from './Modal.vue';
  export default {
    name: 'Home',
    components: {
      Modal
    },
    data() {
      return {
        showModal: false,
      }
    },
    css: {
      loaderOptions: {
        sass: {
          data: `@import ../styles/global.scss`
        }
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>