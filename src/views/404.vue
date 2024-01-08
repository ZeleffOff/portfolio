<template>
  <div class="not-found">
    <div class="container">
      <h1 class="error-code">404</h1>
      <p class="error-message">Page introuvable.</p>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  text-align: center;
}

.error-code {
  font-size: 3rem;
}
.error-message {
  font-size: 1.5rem;
}
</style>
