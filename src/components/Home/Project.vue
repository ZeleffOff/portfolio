<script setup>
defineProps({
  imagePath: String,
  name: String,
  description: String,
});
</script>

<template>
  <div class="project">
    <div class="project_image">
      <img :src="imagePath" alt="" />
    </div>

    <div class="project_details">
      <h2 class="project_details__name">{{ name }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.project {
  cursor: pointer;
  height: 130px;
  width: 600px;
  display: flex;
  align-items: center;
  background-color: #162253;
  gap: 20px;

  transition: all 0.3s ease;

  &:hover {
    box-shadow: 5px 5px 15px #00000099;
  }
}
.project_details__name {
  font-size: 1.1rem;
  font-weight: bold;
}

.project_image,
.project_image img {
  height: 100%;
}
</style>
