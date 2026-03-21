import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDay = theme === 'day';

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-pressed={isDay}
      aria-label="Toggle day / night theme"
      onClick={toggle}
    >
      {isDay ? 'Night Mode' : 'Day Mode'}
    </button>
  );
}
