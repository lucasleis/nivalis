import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// 1. Disable transitions during first load
document.documentElement.classList.add('notransition');

// 2. Load theme from localStorage (default: light)
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// 3. Re-enable transitions shortly after paint
setTimeout(() => {
  document.documentElement.classList.remove('notransition');
}, 50);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
