import { writable } from 'svelte/store';

// Define the type for the theme
export type Theme = 'light' | 'dark';

// Check localStorage if available
const initialTheme: Theme = typeof localStorage !== 'undefined'
  ? (localStorage.getItem('theme') as Theme) || 'dark'
  : 'dark';

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
