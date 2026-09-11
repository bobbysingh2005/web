<template>
  <div class="page-not-found" aria-labelledby="notfound-title">
    <div class="container text-center">
      <h1 id="notfound-title">Page Not Found</h1>
      <p>
        Sorry, the page you are looking for does not exist or has moved.
      </p>
      <router-link class="btn btn-primary btn-lg" to="/">Back to Home</router-link>
    </div>
  </div>
</template>

<style scoped>
.page-not-found {
  padding: 6rem 0;
  max-width: 32rem;
  margin: 0 auto;
}

h1 {
  font-size: 2rem;
  color: var(--navy);
  margin-bottom: 1rem;
}

p {
  color: var(--text-soft);
  margin-bottom: 2rem;
  font-size: 1.12rem;
}
</style>