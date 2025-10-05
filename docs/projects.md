---
title: My Projects
---

<template>
  <div>
    <h1>My Projects</h1>
    <div class="cards">
      <div
        v-for="project in projects"
        :key="project.id"
        class="card"
        @click="goToProject(project.link)"
      >
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Portfolio Website",
          description: "Built with VuePress",
          link: "/projects/project1.html", 
        },
        {
          id: 2,
          title: "Online Learning Platform",
          description: "Courses platform",
          link: "/projects/project2.html",
        },
      ],
    };
  },
  methods: {
    goToProject(link) {
      this.$router.push(link);
    },
  },
};
</script>

<style>
.cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.2s;
  background-color: #fff;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0,0,0,0.2);
}
</style>
