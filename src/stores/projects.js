import { defineStore } from "pinia";

export const ProjectsStore = defineStore("projects", () => {
  const projects = [
    {
      name: "CV",
      description: "Un CV fait en HTML, Css.",
      longDescription:
        "Projet réalisé lors de ma formation au CEF. Nous devions utilisé Html et Css et reproduire la maquette d'un CV.",
      creationDate: "10 Juin 2023",
      imagePath: "/img/icon.png",
      githubRepository: "",
    },
    {
      name: "Espace Commentaire Dynamique",
      description:
        "Un espace commentaire dynamique fait avec Html, Css, Javascript.",
      longDescription:
        "Projet réalisé lors de ma formation au CEF. Il avait pour but de nous initié à javascript.",
      creationDate: "10 Juin 2023",
      imagePath: "/img/icon.png",
      githubRepository: "",
    },
    {
      name: "Cahier des Charges",
      description: "Mon tout premier cahier des charges.",
      longDescription:
        "Mon tout premier cahier des charges qui est comme tout premier projet, assez médiocre ! Réalisé sur le site Canva.",
      creationDate: "10 Juin 2023",
      imagePath: "/img/icon.png",
      githubRepository: "",
    },
  ];

  return { projects };
});
