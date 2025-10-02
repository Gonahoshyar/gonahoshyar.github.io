<template>
  <div>
    <div class="cards">
      <div
        v-for="project in projects"
        :key="project.id"
        class="card"
        @click="goToProject(project.id)"
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
        { id: 1, title: "Portfolio Website", description: "Built with VuePress" },
        { id: 2, title: "Online Learning", description: "Courses platform" },
      ],
    };
  },
  methods: {
    goToProject(id) {
      this.$router.push(`/projects/project${id}.html`);
    },
  },
};
</script>