<script setup></script>

<template>
  <div class="header">
    <div class="header_content">
      <h1 class="header_content__name">
        <span class="colored">Raphael</span> Amoro
      </h1>
      <p class="header_content__job">Développeur Web Junior</p>
    </div>

    <div class="header_buttons">
      <button>Mes projets</button>
    </div>
  </div>
</template>

<style scoped>
.header {
  min-height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;
}

.header_content {
  text-align: center;
  line-height: 1.2;
}
.header_content__name {
  font-family: Dirtchunk;
  letter-spacing: 4px;
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: bold;
}
.header_content__job {
  font-size: 1.5rem;
  font-weight: bold;
}

.header_buttons button {
  color: #fff;
  font-size: 1.1rem;
  background: linear-gradient(to right bottom, #000833, #121c42);
  border: none;
  border-radius: 5px;
  padding: 12px 35px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to right bottom, #121c42, #000833);
  }
}

.colored {
  color: #000833;
  font-weight: bold;
}
</style>
