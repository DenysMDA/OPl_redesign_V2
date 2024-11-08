import logo from './logo.svg';
import './App.scss';
import Header from './modules/Header/Header.jsx';
import Content from './modules/Content/Content.jsx';
import ContentV2 from './modules/Content/ContentV2.jsx';



function App() {
  return (
    <div className="App">
      <Header/>
      <ContentV2/>
    </div>
  );
}

export default App;
