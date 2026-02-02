'use client'

import { useTheme } from './ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 text-sm border border-current rounded hover:opacity-70 transition-opacity"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '☀️ light' : '🌙 dark'}
    </button>
  )
}
