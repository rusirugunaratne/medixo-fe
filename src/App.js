import { Router } from "./routes/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router></Router>
    </div>
  );
}

export default App;
