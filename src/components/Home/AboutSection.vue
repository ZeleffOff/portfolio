<template>
  <div class="about-section">
    <div class="container">
      <h2 class="title">About Me</h2>

      <div class="flex-container">
        <div class="about-section__picture">
          <img src="/img/raphael.png" alt="Raphaël Picture" />
        </div>

        <div class="about-section__description">
          <p class="hi"><b>Salut</b></p>
          <p>
            Je m’appelle <b>Raphaël</b>, j’utilise <b>Zeleff</b> en guise de
            pseudonyme en ligne.
            <br />
            Je suis développeur web junior français, actuellement en formation
            au
            <b
              ><a href="https://centre-europeen-formation.fr"
                >Centre Européen de Formation</a
              ></b
            >.
            <br />
            Mon objectif est de devenir
            <b>développeur Back-End professionnel</b>, et de gagner ma vie dans
            ce domaine !
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a,
b {
  font-weight: bold;
}
.hi {
  font-size: 1.3rem;
}

.about-section {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

.about-section .container {
  display: flex;
  flex-direction: column;
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
  width: 5%;
  height: 3px;
  border-radius: 10px;
  background-color: #fff;
}

.about-section .flex-container {
  display: flex;
  align-items: center;
  gap: 35px;
}

.about-section__picture {
  width: 250px;

  & img {
    border-radius: 50%;
    width: 100%;
    object-fit: cover;
    border: 3px #fff solid;
  }
}
.about-section__description {
  font-size: 1.1rem;
  max-width: 800px;
}
</style>
