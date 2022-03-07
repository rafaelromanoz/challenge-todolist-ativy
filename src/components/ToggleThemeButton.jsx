import React, { useContext } from 'react';
import ToDosContext from '../context/ToDosContext';

export default function ToggleThemeButton() {
  const { setIsLightOrDarkMode, isLightOrDarkMode } = useContext(ToDosContext);
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px' }}>
      <button
        type="button"
        onClick={() => setIsLightOrDarkMode((prevState) => !prevState)}
      >
        {isLightOrDarkMode ? 'Dark mode' : 'Light mode'}
      </button>
    </div>
  );
}
