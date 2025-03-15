import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import DevelopmentView from '@/views/DevelopmentView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/projects', component: ProjectsView },
  { path: '/development', component: DevelopmentView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
