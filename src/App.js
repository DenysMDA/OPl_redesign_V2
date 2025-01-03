import './App.scss';
import Header from './modules/Header/Header.jsx';
import Content from "./modules/Content/Content";
import React, {useEffect, useState} from "react";

function App() {
    const [theme, setTheme] = useState('lightV2');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'lightV2' ? 'dark' : 'lightV2';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

  return (
      <div className="App">
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Content/>
      </div>
  );
}

export default App;
