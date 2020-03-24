import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {t('title')}
        </p>
        <button onClick={() => changeLanguage('en')}>en</button>
        <button onClick={() => changeLanguage('ua')}>ua</button>
      </header>
    </div>
  );
}

export default App;
