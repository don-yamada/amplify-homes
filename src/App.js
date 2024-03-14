import './App.css';
import { StandardCardCollection, NavBarHeader, MarketingFooter } from './ui-components';

function App() {
  return (
    <div className="App">
      <NavBarHeader />
      <StandardCardCollection />
      <MarketingFooter />
    </div>
  );
}

export default App;