<script setup>
defineProps({
  name: String,
  description: String,
  longDescription: String,
  creationDate: String,
  imagePath: String,
  coverImagePath: String,
  githubRepository: String,
});

import { ref } from "vue";

const modalOpen = ref(false);

function openModal() {
  modalOpen.value = true;
}
function closeModal() {
  modalOpen.value = false;
}
</script>

<template>
  <div @click="openModal" class="project">
    <div class="project_image">
      <img :src="imagePath" alt="" />
    </div>

    <div class="project_details">
      <h2 class="project_details__name">{{ name }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>

  <div v-if="modalOpen" class="overlay" @click="closeModal"></div>
  <div v-if="modalOpen" class="modal">
    <div class="modal-top">
      <img class="modal-top__image" :src="imagePath" alt="Image project" />

      <div class="modal-top__details">
        <h3 class="modal-top__title">{{ name }}</h3>
        <p class="modal-top__date">
          Réalisé le <span class="date">{{ creationDate }}</span>
        </p>
      </div>
    </div>

    <div class="modal-body">
      <div>
        <p class="description">
          {{ description }}
        </p>
      </div>

      <ul class="langages">
        <li class="langage">Html</li>
        <li class="langage">Css</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* Style pour le fond d'obscurcissement */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

/* Style pour le modal */
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #121c42;
  z-index: 2;
  min-width: 650px;
  min-height: 500px;
  border-radius: 8px;
}

.modal-top {
  display: flex;
  align-items: center;
  gap: 20px;
}

.modal-top__details {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
}

.modal-top__title {
  font-size: 1.5rem;
  font-weight: bold;
}

.modal-top__image {
  width: 120px;
  object-fit: cover;
}

.modal-body {
  padding-top: 10px;
  min-height: 40vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.description {
  font-size: 1.1rem;
  margin-top: 20px;
}

.langages {
  padding: 0;
  list-style: none;

  display: flex;
  gap: 10px;
}

.langage {
  font-size: 0.8rem;
  background-color: #4848cb;
  padding: 2px 10px;
  border-radius: 5px;
}

.modal .date {
  font-weight: bold;
}

.project {
  overflow: hidden;
  border-top: 2px #000833 solid;
  border-bottom: 2px #000833 solid;
  border-radius: 15px;
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
