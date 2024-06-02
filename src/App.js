import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import IndexRoute from './routes/IndexRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <IndexRoute />
      </BrowserRouter>
    </div>
  );
}
export default App;
