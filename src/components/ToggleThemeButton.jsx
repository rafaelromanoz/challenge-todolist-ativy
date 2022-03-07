import React, { useContext } from 'react';
import iconMoon from '../images/icons8-moon-64.png';
import iconSun from '../images/icons8-sun-50.png';
import ToDosContext from '../context/ToDosContext';

export default function ToggleThemeButton() {
  const { setIsLightOrDarkMode, isLightOrDarkMode } = useContext(ToDosContext);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '200px',
        padding: '20px',
      }}
    >
      <img
        aria-hidden="true"
        style={{ width: '50px' }}
        onClick={() => setIsLightOrDarkMode((prevState) => !prevState)}
        alt="icon"
        src={isLightOrDarkMode ? iconSun : iconMoon}
      />
    </div>
  );
}
