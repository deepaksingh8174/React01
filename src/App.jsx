import { Header, Sidebar, Document } from "./component"
import './App.css'
import { useState } from "react";





function App() {

  const [search, setSearch] = useState("");

  return (
    <>
    <div className="main-app">
      <Sidebar />
      <div>
      <Header setSearch={setSearch} />
      <Document search={search} />
       </div>
    </div>
    </>
  )
}

export default App
