<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";

const name = ref("");
const lastname = ref("");
const email = ref("");
const message = ref("");

function sendMessage() {
  const templateParams = {
    to_email: "raphaelamoro330@gmail.com",
    from_name: name.value,
    from_lastname: lastname.value,
    from_email: email.value,
    message: message.value,
  };

  emailjs
    .send(
      "service_nj1qqmi",
      "template_cw0if04",
      templateParams,
      "mTeB6SKFtLz-ZlXtC"
    )
    .then((response) => {
      console.log("E-mail envoyé avec succès:", response);

      name.value = "";
      lastname.value = "";
      email.value = "";
      message.value = "";
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoi de l'email:", error);
    });
}
</script>

<template>
  <div class="contact-section">
    <div class="container">
      <h2>Contact</h2>

      <div class="grid">
        <div class="wrapper">
          <div class="name-wrapper">
            <input v-model="name" class="name" placeholder="Nom" required />
            <input
              v-model="lastname"
              class="lastname"
              placeholder="Prénom"
              required
            />
          </div>
          <input v-model="email" class="email" placeholder="Email" required />
          <textarea
            v-model="message"
            class="message"
            placeholder="Message"
            required
          ></textarea>

          <button @click="handleClick" type="submit">Envoyer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-section {
  min-height: 50vh;
}
.container {
  max-width: 800px;
  margin: 0 auto;
}

.title {
  position: relative;
  font-size: 1.7rem;
  font-weight: bold;
  margin-bottom: 30px;
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

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.wrapper {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.name-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.name,
.lastname {
  width: 100%;
}

input,
textarea {
  color: #000;
  font-weight: bold;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
