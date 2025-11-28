import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Disable transitions ONLY during first paint
document.documentElement.classList.add('notransition');

// (ANTES de leer el tema)
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// (Importante) Esperar un frame y volver a habilitar transiciones
requestAnimationFrame(() => {
  document.documentElement.classList.remove('notransition');
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
