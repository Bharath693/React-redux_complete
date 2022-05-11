import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Routesfolder from "./Routesfolder";
import Header from "./Components/Header/header";
import NoteState from "./pages/NoteState";
import Sample from "./pages/sample";
import Login from "./pages/Login";

function App() {
  let date = new Date();
  console.log((date.getUTCDay() +6 ) % 7)
  console.log()
    return (
      <div className="App-Maincontainer">
        <Login />
       {/* <NoteState>
        <Header />
        <Routesfolder />
        <Sample />
        </NoteState> */}
      </div>
    );
  }
  
  export default App;