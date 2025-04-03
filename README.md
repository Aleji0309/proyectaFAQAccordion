------
# Frontend Mentor - FAQ Accordion solution

This is a solution to the [FAQ Accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Toggle the visibility of answers to questions  
- See hover and focus states for all interactive elements


### Links

- Solution URL: [https://github.com/Aleji0309/proyectaFAQAccordion](https://github.com/Aleji0309/proyectaFAQAccordion)
- Live Site URL: [https://proyectafaqaccordion.netlify.app/](https://proyectafaqaccordion.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup  
- CSS custom properties  
- Flexbox  
- JavaScript  
- Mobile-first workflow  

### What I learned

Este proyecto me ayudó a practicar el manejo del DOM con JavaScript para mostrar y ocultar contenido dinámicamente. También reforcé el uso de transiciones suaves y estructuras semánticas en HTML.

```js
faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
```

### Continued development

Quiero seguir profundizando en animaciones con CSS y mejorar la accesibilidad del componente, incluyendo navegación por teclado y uso de `aria-*` attributes.

### Useful resources

- [MDN Web Docs - aria-expanded](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) – Me ayudó a comprender cómo mejorar la accesibilidad del acordeón.  
- [CSS Tricks - Transition Tips](https://css-tricks.com/almanac/properties/t/transition/) – Útil para aplicar transiciones suaves al abrir/cerrar el contenido.

## Author

- Frontend Mentor - [@Aleji0309](https://www.frontendmentor.io/profile/Aleji0309)  
- GitHub - [@Aleji0309](https://github.com/Aleji0309)

## Acknowledgments

Gracias a la comunidad de Frontend Mentor por las ideas compartidas y el feedback en proyectos similares. También me inspiré en soluciones de otros usuarios para mejorar el diseño responsivo.

---

