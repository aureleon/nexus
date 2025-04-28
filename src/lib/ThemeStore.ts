import { writable } from 'svelte/store';

// Define the type for the theme
export type Theme = 'light' | 'dark';

// Check localStorage if available, otherwise use system preference
function getInitialTheme(): Theme {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored === 'light' || stored === 'dark') return stored;
  }
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'dark';
}

const initialTheme: Theme = getInitialTheme();

export const theme = writable<Theme>(initialTheme);

theme.subscribe((value: Theme) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', value);
    localStorage.setItem('theme', value);
  }
});

export function toggleTheme(): void {
  console.log('Toggling theme');
  theme.update((current: Theme) => (current === 'light' ? 'dark' : 'light'));
}
