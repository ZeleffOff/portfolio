<script setup>
import AboutSection from "../components/Home/AboutSection.vue";
import ContactSection from "../components/Home/ContactSection.vue";
import Header from "../components/Home/Header.vue";
import Project from "../components/Home/Project.vue";

const projects = [
  {
    name: "CV",
    description: "Un CV fait en HTML, Css.",
    creationDate: "10 Juin 2023",
    imagePath: "/img/space_comment.png",
    coverImagePath: "",
    githubRepository: "",
  },
  {
    name: "Espace Commentaire Dynamique",
    description:
      "Un espace commentaire dynamique fait avec Html, Css, Javascript.",
    creationDate: "10 Juin 2023",
    imagePath: "/img/space_comment.png",
    coverImagePath: "",
    githubRepository: "",
  },
  {
    name: "Cahier des Charges",
    description: "Mon tout premier cahier des charges.",
    creationDate: "10 Juin 2023",
    imagePath: "/img/space_comment.png",
    coverImagePath: "",
    githubRepository: "",
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

        <div class="list">
          <div v-for="(project, index) in projects" class="project">
            <Project
              :key="index"
              :name="project.name"
              :description="project.description"
              :cover-image-path="project.coverImagePath"
              :creation-date="project.creationDate"
              :image-path="project.imagePath"
            />
          </div>
        </div>
      </div>
    </div>

    <ContactSection />
  </main>
</template>

<style scoped>
.projects {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.list .project:nth-child(2) {
  margin-left: 180px;
}

.title {
  position: relative;
  font-size: 1.7rem;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
