<template>
    <div>
      <heart-svg
        class="absolute top-3 right-3 cursor-pointer"
        :class="{
          'hover:brightness-[0.9]': !clicked,
          'brightness-[0.8] scale-95': clicked,  // Darkens and shrinks on click for pressed effect
          'outline-none focus:ring-0': true,    // No focus ring or outline
        }"
        @click="toggleClick"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </div>
  </template>
  
  <script>
  import HeartSvg from '@/assets/svgs/general/heart.svg';
  
  export default {
    components: {
      HeartSvg
    },
    data() {
      return {
        clicked: false, 
      };
    },
    methods: {
      toggleClick() {
        this.clicked = !this.clicked; 
      },
      handleFocus(event) {
        // Apply focus styles (but no ring)
        event.target.classList.add('focus:ring-0');
      },
      handleBlur(event) {
        // Remove any focus styles when focus is lost
        event.target.classList.remove('focus:ring-0');
      }
    }
  };
  </script>
  
  <style scoped>
  heart-svg {
    transition: filter 0.3s ease, transform 0.2s ease;
  }
  
  /* Define hover effect */
  heart-svg:hover {
    filter: brightness(0.9); /* Darken when hovered */
  }
  
  /* Define active or clicked state */
  heart-svg:active {
    filter: brightness(0.8); /* Darker when clicked */
    transform: scale(0.95); /* Shrinks to simulate pressing */
  }
  </style>
  