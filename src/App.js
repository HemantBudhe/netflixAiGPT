import './App.css';
import Body from "./components/Body";
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (
    <div className='overflow-hidden'>
    <Provider store={appStore}>
     <Body />
    </Provider>
    </div>
  );
}

export default App;
