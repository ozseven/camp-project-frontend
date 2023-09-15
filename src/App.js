import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navi from "./layouts/Navi";
import Sidebar from "./layouts/Sidebar";
import Person from "./layouts/Person";
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <div className="App">
      <div class="container ">
        <div class="m-2"><Navi /></div>
        
        <div class="row">
          <div class="col-md-3"><Sidebar ></Sidebar></div>
          <div class="col-md-9"><Person ></Person></div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
