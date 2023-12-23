<script setup>
import AboutSection from "../components/Home/AboutSection.vue";
import Header from "../components/Home/Header.vue";
import Project from "../components/Home/Project.vue";

const projects = [
  {
    name: "CV",
    description: "Un CV fait en HTML, Css.",
    imagePath: "/img/cv_icon.png",
  },
  {
    name: "Espace Commentaire Dynamique",
    description:
      "Un espace commentaire dynamique fait avec Html, Css, Javascript.",
    imagePath: "/img/space_comment.png",
  },
  {
    name: "Cahier des Charges",
    description: "Mon tout premier cahier des charges.",
    imagePath: "/img/space_comment.png",
  },
];
</script>

<template>
  <main>
    <Header />
    <AboutSection />

    <div class="projects">
      <div class="container">
        <h2 class="title">Mes Projets</h2>

        <div class="flex-container">
          <Project
            v-for="(project, index) in projects"
            :key="index"
            :name="project.name"
            :description="project.description"
            :image-path="project.imagePath"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.projects {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.projects .container {
  position: absolute;
  left: 20%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.projects .flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.title {
  position: relative;
  font-size: 1.7rem;
  font-weight: bold;
}
.title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 3%;
  height: 3px;
  border-radius: 10px;
  background-color: #fff;
}
</style>
