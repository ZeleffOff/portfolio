<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";

const name = ref("");
const lastname = ref("");
const email = ref("");
const message = ref("");
const disabledButton = ref(true);

function viewErrorMessage(content, state) {
  if (state && !content) throw Error("Message error content cannot be empty !");

  const errorMessage = document.querySelector("#error-msg");

  errorMessage.textContent = content;

  state
    ? (errorMessage.style.display = "block")
    : (errorMessage.style.display = "none");
}
function checkCredentials() {
  const button = document.querySelector("#submit-btn");

  // Messages d'erreur
  let content = "";

  if (!name.value) content += "Vous devez indiquez votre nom !";
  else if (!lastname.value) content += "Vous devez indiquez votre prénom !";
  else if (!email.value) content += "Vous devez indiquez votre email !";
  else if (!message.value) content += "Vous devez indiquez votre message !";
  // -----

  if (name.value && lastname.value && email.value && message.value) {
    viewErrorMessage(content, false);

    button.classList.remove("disabled");
    disabledButton.value = false;
  } else if (content) {
    button.classList.add("disabled");
    disabledButton.value = true;

    viewErrorMessage(content, true);
  }
}

function sendMessage() {
  const templateParams = {
    to_email: process.env.VUE_APP_CONTACT_EMAIL,
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
      <h2 class="title">Contact</h2>

      <div class="grid">
        <div class="wrapper">
          <div class="name-wrapper">
            <input
              v-model="name"
              class="name"
              placeholder="Nom"
              @input="checkCredentials"
              required
            />
            <input
              v-model="lastname"
              class="lastname"
              placeholder="Prénom"
              @input="checkCredentials"
              required
            />
          </div>
          <input
            v-model="email"
            class="email"
            placeholder="Email"
            @input="checkCredentials"
            required
          />
          <textarea
            v-model="message"
            class="message"
            placeholder="Message"
            @input="checkCredentials"
            required
          ></textarea>

          <p id="error-msg" style="display: none">aze</p>

          <button
            @click="sendMessage()"
            type="submit"
            :disabled="disabledButton"
            id="submit-btn"
            class="disabled"
          >
            Envoyer
          </button>
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

#submit-btn.disabled {
  cursor: default;
  opacity: 0.8;
}

#error-msg {
  font-size: 1rem;
  text-align: center;
  color: rgb(242, 82, 82);
}
</style>
