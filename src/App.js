import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/people/" element={<Main/>}/>
        <Route exact path="/people/:id/edit" element={<Update/>} />
        <Route exact path="/people/:id" element={<Detail/>}/>
        </Routes>
        
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
