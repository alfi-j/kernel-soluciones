---
enable: true
badge: "contacto"
title: "¿Tienes un problema? <br /> Hablemos hoy."
description: "Cuéntenos qué falla: computadora lenta, sin internet, virus o un sistema por crear. Respondemos por WhatsApp, llamada o correo."
image: "/images/contact-home.jpg"
imageAlt: "Contacto"
characterImage: "/images/character-3d.png"
characterImageAlt: "Personaje 3D"
form:
  emailSubject: "Nuevo contacto desde Kernel Soluciones"
  submitButton:
    enable: true
    label: "Enviar mensaje"
  inputs:
    - label: "Nombre completo"
      placeholder: "Nombre completo *"
      name: "Nombre completo"
      required: true
      halfWidth: true
      defaultValue: ""
    - label: "Correo electrónico"
      placeholder: "Correo electrónico *"
      name: "Correo"
      required: true
      type: "email"
      halfWidth: true
      defaultValue: ""
    - label: "Teléfono / WhatsApp"
      placeholder: "Ej. +593 999 780 192"
      name: "Telefono"
      required: false
      type: "text"
      halfWidth: true
      defaultValue: ""
    - label: "Empresa o negocio"
      placeholder: "Empresa o negocio"
      name: "Empresa"
      required: false
      type: "text"
      halfWidth: true
      defaultValue: ""
    - label: "Servicio"
      placeholder: "Servicio *"
      name: "Servicio"
      required: true
      halfWidth: true
      dropdown:
        type: "select"
        items:
          - label: "Soporte técnico"
            value: "Soporte técnico"
            selected: false
          - label: "Seguridad informática"
            value: "Seguridad informática"
            selected: false
          - label: "Redes y conectividad"
            value: "Redes y conectividad"
            selected: false
          - label: "Respaldo y recuperación"
            value: "Respaldo y recuperación"
            selected: false
          - label: "Software a medida"
            value: "Software a medida"
            selected: false
          - label: "Capacitación: ofimática y nube"
            value: "Capacitación: ofimática y nube"
            selected: false
          - label: "Capacitación: IA y productividad"
            value: "Capacitación: IA y productividad"
            selected: false
          - label: "Capacitación: ciberseguridad"
            value: "Capacitación: ciberseguridad"
            selected: false
          - label: "Otro"
            value: "Otro"
            selected: false
    - label: "Mensaje"
      tag: "textarea"
      placeholder: "Describe tu problema *"
      name: "Mensaje"
      required: true
      halfWidth: false
      rows: "4"
      defaultValue: ""
    - label: "Acepto ser contactado por WhatsApp o correo"
      name: "Privacidad aceptada"
      value: "Aceptado"
      checked: false
      required: true
      type: "checkbox"
      halfWidth: false
      defaultValue: ""
    - note: success
      parentClass: "hidden text-sm message success"
      content: "¡Mensaje recibido! Responderemos lo antes posible."
    - note: deprecated
      parentClass: "hidden text-sm message error"
      content: "Algo salió mal. Inténtalo de nuevo o escribe a ajestrellar@outlook.com."
---
