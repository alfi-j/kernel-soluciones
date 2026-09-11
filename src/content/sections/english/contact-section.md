---
enable: true
badge: "contact"
title: "Have a problem? <br /> Let's talk today."
description: "Tell us what is failing: slow computer, no internet, virus, or a system to build. We answer by WhatsApp, call, or email."
image: "/images/contact-home.jpg"
imageAlt: "Contact"
characterImage: "/images/character-3d.png"
characterImageAlt: "3D character"
form:
  emailSubject: "New contact from Kernel Soluciones"
  submitButton:
    enable: true
    label: "Send message"
  inputs:
    - label: "Full name"
      placeholder: "Full name *"
      name: "Full name"
      required: true
      halfWidth: true
      defaultValue: ""
    - label: "Email"
      placeholder: "Email *"
      name: "Email"
      required: true
      type: "email"
      halfWidth: true
      defaultValue: ""
    - label: "Phone / WhatsApp"
      placeholder: "E.g. +593 999 780 192"
      name: "Phone"
      required: false
      type: "text"
      halfWidth: true
      defaultValue: ""
    - label: "Company"
      placeholder: "Company or business"
      name: "Company"
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
          - label: "Technical support"
            value: "Technical support"
            selected: false
          - label: "IT security"
            value: "IT security"
            selected: false
          - label: "Networks and connectivity"
            value: "Networks and connectivity"
            selected: false
          - label: "Backup and recovery"
            value: "Backup and recovery"
            selected: false
          - label: "Custom software"
            value: "Custom software"
            selected: false
          - label: "Training: office and cloud"
            value: "Training: office and cloud"
            selected: false
          - label: "Training: AI and productivity"
            value: "Training: AI and productivity"
            selected: false
          - label: "Training: cybersecurity"
            value: "Training: cybersecurity"
            selected: false
          - label: "Other"
            value: "Other"
            selected: false
    - label: "Message"
      tag: "textarea"
      placeholder: "Describe your problem *"
      name: "Message"
      required: true
      halfWidth: false
      rows: "4"
      defaultValue: ""
    - label: "I agree to be contacted by WhatsApp or email"
      name: "Privacy accepted"
      value: "Accepted"
      checked: false
      required: true
      type: "checkbox"
      halfWidth: false
      defaultValue: ""
    - note: success
      parentClass: "hidden text-sm message success"
      content: "Message received! We will get back to you as soon as possible."
    - note: deprecated
      parentClass: "hidden text-sm message error"
      content: "Something went wrong. Try again or write to ajestrellar@outlook.com."
---
