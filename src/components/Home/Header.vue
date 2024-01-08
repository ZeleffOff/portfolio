<script setup></script>

<template>
  <div class="header">
    <!-- <div class="background"></div> -->

    <div class="container">
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
  </div>
</template>

<style scoped>
.header {
  overflow: hidden;
  position: relative;
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.background {
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background: center/cover url(/img/bg.jpg) no-repeat;
  filter: blur(5px);
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 2;
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
