<template>
  <div id="app">
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeBtn: 1,
      items: [
        {
          id: 2,
          url: "Works",
          name: "works",
          iconName: "mdi-hammer",
        },
        {
          id: 3,
          url: "Skills",
          name: "skills",
          iconName: "mdi-school",
        },
        {
          id: 4,
          url: "Contact",
          name: "contact",
          iconName: "mdi-email",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
