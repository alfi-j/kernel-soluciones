---
enable: true
badge: "contact"
title: "Un problème ? <br /> Parlons-en aujourd'hui."
description: "Dites-nous ce qui ne va pas : ordinateur lent, pas d'internet, virus ou système à créer. Nous répondons par WhatsApp, téléphone ou e-mail."
image: "/images/contact-home.jpg"
imageAlt: "Contact"
characterImage: "/images/character-3d.png"
characterImageAlt: "Personnage 3D"
form:
  emailSubject: "Nouveau contact depuis Kernel Soluciones"
  submitButton:
    enable: true
    label: "Envoyer le message"
  inputs:
    - label: "Nom complet"
      placeholder: "Nom complet *"
      name: "Nom complet"
      required: true
      halfWidth: true
      defaultValue: ""
    - label: "E-mail"
      placeholder: "E-mail *"
      name: "E-mail"
      required: true
      type: "email"
      halfWidth: true
      defaultValue: ""
    - label: "Téléphone / WhatsApp"
      placeholder: "Ex. +593 999 780 192"
      name: "Téléphone"
      required: false
      type: "text"
      halfWidth: true
      defaultValue: ""
    - label: "Entreprise"
      placeholder: "Entreprise ou commerce"
      name: "Entreprise"
      required: false
      type: "text"
      halfWidth: true
      defaultValue: ""
    - label: "Service"
      placeholder: "Service *"
      name: "Service"
      required: true
      halfWidth: true
      dropdown:
        type: "select"
        items:
          - label: "Support technique"
            value: "Support technique"
            selected: false
          - label: "Sécurité informatique"
            value: "Sécurité informatique"
            selected: false
          - label: "Réseaux et connectivité"
            value: "Réseaux et connectivité"
            selected: false
          - label: "Sauvegarde et récupération"
            value: "Sauvegarde et récupération"
            selected: false
          - label: "Logiciels sur mesure"
            value: "Logiciels sur mesure"
            selected: false
          - label: "Formation : bureautique et cloud"
            value: "Formation : bureautique et cloud"
            selected: false
          - label: "Formation : IA et productivité"
            value: "Formation : IA et productivité"
            selected: false
          - label: "Formation : cybersécurité"
            value: "Formation : cybersécurité"
            selected: false
          - label: "Autre"
            value: "Autre"
            selected: false
    - label: "Message"
      tag: "textarea"
      placeholder: "Décrivez votre problème *"
      name: "Message"
      required: true
      halfWidth: false
      rows: "4"
      defaultValue: ""
    - label: "J'accepte d'être contacté par WhatsApp ou e-mail"
      name: "Confidentialité acceptée"
      value: "Accepté"
      checked: false
      required: true
      type: "checkbox"
      halfWidth: false
      defaultValue: ""
    - note: success
      parentClass: "hidden text-sm message success"
      content: "Message reçu ! Nous répondrons dès que possible."
    - note: deprecated
      parentClass: "hidden text-sm message error"
      content: "Un problème est survenu. Réessayez ou écrivez à ajestrellar@outlook.com."
---
