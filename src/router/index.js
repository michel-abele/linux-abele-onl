import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import { supportedLanguages } from '../utils/supportedLanguages';

// Generierte Routen mit Layouts vorbereiten (wenn du Layouts verwendest)
const routes = setupLayouts(generatedRoutes);

// Ergänze deine spezifischen Routen
const specificRoutes = [
  {
    path: '/en',
    component: () => import('../pages/de/index.vue'),
  },
  {
    path: '/de',
    component: () => import('../pages/de/index.vue'),
  },
  // Füge hier weitere sprachspezifische Routen hinzu
];

// Kombiniere generierte Routen mit spezifischen Routen
const combinedRoutes = [...routes, ...specificRoutes];

// Erstelle den Router mit den kombinierten Routen
const router = createRouter({
  history: createWebHistory(),
  routes: combinedRoutes,
});

// Setze die Navigation Guard
router.beforeEach((to, from, next) => {
  // Überprüfe, ob die Route eine Umleitung benötigt
  if (to.path === '/') {
    const userPreferredLang = navigator.language.split('-')[0].toLowerCase();
    // Prüfe, ob die bevorzugte Sprache unterstützt wird
    if (supportedLanguages.includes(userPreferredLang)) {
      next(`/${userPreferredLang}`);
    } else {
      // Standardmäßig auf Englisch umleiten, wenn keine unterstützte Sprache gefunden wurde
      next('/en');
    }
  } else {
    // Keine Umleitung benötigt, fahre mit der ursprünglichen Route fort
    next();
  }
});

export default router;
