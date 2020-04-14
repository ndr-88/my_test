<template>
  <div id="app">
    <aside>
      <p><i class="fas fa-long-arrow-alt-left"></i>Explore all zakeke features</p>

      <section class="stepsContainer">
        <h3>Let's get your set up!</h3>
        <ul>
          <li class="completed"><i class="fas fa-check-circle"></i>Connect your store</li>
          <li class="completed"><i class="fas fa-check-circle"></i>Confirm your account</li>
          <li><i class="far fa-circle"></i>Create a customizable product</li>
          <li><i class="far fa-circle"></i>Create a test order</li>
        </ul>
      </section>
    </aside>
    <section class="shoppingContainer">
      <header>
        <nav class="navZakeke">
          <ul>
            <li class="inactive">Get started</li>
            <li class="active">Add product</li>
            <li class="inactive">Connect Catalog</li>
            <li class="inactive">Print Area</li>
            <li class="inactive">Variations</li>
            <li class="inactive">Printing</li>
            <li class="inactive">Pricing</li>
            <li class="inactive">Preview</li>
            <li class="inactive">Done!</li>
          </ul>
        </nav>
      </header>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},

  }
</script>