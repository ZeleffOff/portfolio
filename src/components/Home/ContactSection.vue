<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";

// Champs du formulaire
const name = ref("");
const lastName = ref("");
const objectMessage = ref("");
const email = ref("");
const message = ref("");

// Etat du bouton submit
const disabledButton = ref(true);

/**
 * Affiche ou cache le message d'erreur du formulaire.
 * @param {string} content - Message d'erreur à afficher.
 * @param {boolean} state - true: Affiche le message. | false: Cache le message.
 */
function viewErrorMessage(content, state) {
  if (state && !content) throw Error("Message error content cannot be empty !");

  // Message element
  const errorMessage = document.querySelector("#error-msg");
  errorMessage.textContent = content;

  // Affiche ou non le message en fonction de la variable states
  state
    ? (errorMessage.style.display = "block")
    : (errorMessage.style.display = "none");
}

/**
 * Vérifie les champs du formulaire
 */
function checkCredentials() {
  const button = document.querySelector("#submit-btn");

  // Messages d'erreur
  let content = "";

  // Vérification du champ manquant
  if (!name.value) content += "Vous devez indiquez votre nom !";
  else if (!lastName.value) content += "Vous devez indiquez votre prénom !";
  else if (!email.value) content += "Vous devez indiquez votre email !";
  else if (!objectMessage.value)
    content += "Vous devez indiquez l'objet du message !";
  else if (!message.value) content += "Vous devez indiquez votre message !";
  // -----

  if (
    name.value &&
    lastName.value &&
    objectMessage.value &&
    email.value &&
    message.value
  ) {
    // Cache le message d'erreur
    viewErrorMessage(content, false);

    // Active le bouton submit
    button.classList.remove("disabled");
    disabledButton.value = false;
  } else if (content) {
    // Désactive le bouton
    button.classList.add("disabled");
    disabledButton.value = true;

    // Affiche le message d'erreur
    viewErrorMessage(content, true);
  }
}

/**
 * Envoi du mail
 */
function sendMail() {
  const templateParams = {
    to_email: import.meta.VITE_APP_CONTACT_EMAIL,
    object: objectMessage.value,
    from_name: name.value,
    from_lastname: lastName.value,
    from_email: email.value,
    message: message.value,
  };

  // Envoi du mail
  emailjs
    .send(
      import.meta.env.VITE_APP_CONTACT_SERVICE_ID,
      import.meta.env.VITE_APP_CONTACT_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_APP_CONTACT_USER_ID
    )
    .then((response) => {
      console.log("E-mail envoyé avec succès:", response);

      // Vide les champs du formulaire
      name.value = "";
      lastName.value = "";
      email.value = "";
      objectMessage.value = "";
      message.value = "";
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoi de l'email:", error);
    });
}
</script>

<template>
  <div id="contact-section" class="contact-section">
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
              v-model="lastName"
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
          <input
            v-model="objectMessage"
            class="object"
            placeholder="Objet"
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
            @click="sendMail()"
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
