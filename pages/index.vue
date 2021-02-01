<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-ssr
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Initial page',
    meta: [
      {hid: 'description', name: 'description', content: 'This is the description for this page'}
    ]
  }
}
</script>
