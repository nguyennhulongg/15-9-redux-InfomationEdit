import Header from "./Components/Header/Header";
import './App.css'
import { useState } from "react";
import EditPage from "./Components/Edit/EditPage";

function App() {
  const [isEdit, setEdit] = useState(false);
  return (
    <div className="App">
      {isEdit ? (<EditPage setEdit= {setEdit}/>) : <Header setEdit={setEdit}/>}
    </div>
  );
}

export default App;
