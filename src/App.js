import './App.scss';
import Header from './modules/Header/Header.jsx';
import Content from "./modules/Content/Content";
import React, {useEffect, useState} from "react";



function App() {
    const [theme, setTheme] = useState('light');


    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

  return (
      <div className="App">
          {/*<button onClick={toggleTheme}>*/}
          {/*    Switch to {theme === 'light' ? 'dark' : 'light'} theme*/}
          {/*</button>*/}
          <button onClick={toggleTheme}></button>
          <Header/>
          <Content/>
      </div>
  );
}

export default App;
