import { useState } from "react"
import './App.css';
import Header from './components/Header';
import TeamScreen from "./screens/TeamScreen";
import DexScreen from "./screens/DexScreen";


function App() {
  const [teamPage, setTeamPage] = useState(false)

  const changePage = (value) => {
    if(teamPage === value) return
    setTeamPage(value)
  }
  console.log("CURRENT STATE", teamPage)
  return (
    <div className="App">
     <Header />
     <div className="row-container">
      <button onClick={() => changePage(true)}>Team</button>
      <button onClick={() => changePage(false)}>Dex</button>
     </div>
     {teamPage ? <TeamScreen /> : <DexScreen/>}
    </div>
  );
}

export default App;
