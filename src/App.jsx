import { Header, Sidebar, Document } from "./component"
import './App.css'
import { useState } from "react";


 const intialDocuments = [
  { name: 'Title of Document Goes Here', status: 'Needs Signing', lastModified: '2023-10-01' },
  { name: 'Title of Document Goes Here', status: 'Pending', lastModified: '2023-10-02' },
  { name: 'Title of Document Goes Here', status: 'Completed', lastModified: '2023-10-03' },
  { name: 'Title of Document Goes Here', status: 'Needs Signing', lastModified: '2023-10-01' },
  { name: 'Title of Document Goes Here', status: 'Pending', lastModified: '2023-10-02' },
  { name: 'Title of Document Goes Here', status: 'Completed', lastModified: '2023-10-03' },
  { name: 'Title of Document Goes Here', status: 'Needs Signing', lastModified: '2023-10-01' },
  { name: 'Title of Document Goes Here', status: 'Pending', lastModified: '2023-10-02' },
  { name: 'Title of Document Goes Here', status: 'Completed', lastModified: '2023-10-03' },
  { name: 'Title of Document Goes Here', status: 'Needs Signing', lastModified: '2023-10-01' },
  { name: 'Title of Document Goes Here', status: 'Pending', lastModified: '2023-10-02' },
  { name: 'Title of Document Goes Here', status: 'Completed', lastModified: '2023-10-03' },
  { name: 'Title of Document Goes Here', status: 'Needs Signing', lastModified: '2023-10-01' },
  { name: 'Testing89', status: 'Pending', lastModified: '2023-10-02' },
  { name: 'Testing67', status: 'Completed', lastModified: '2023-10-03' },
  { name: 'Testing1234', status: 'Needs Signing', lastModified: '2023-10-01' },
  { name: 'Testing45', status: 'Pending', lastModified: '2023-10-02' },
  { name: 'testing123', status: 'Completed', lastModified: '2023-10-03' },
  { name: 'Testing', status: 'Needs Signing', lastModified: '2023-10-01' },
  { name: 'test', status: 'Pending', lastModified: '2023-10-02' },
  { name: 'Title of Document Goes Name', status: 'Completed', lastModified: '2023-10-03' },
];




function App() {

  console.log("documents:", );

  const [search, setSearch] = useState("");
  const [documents, setDocuments] = useState([...intialDocuments]);

  return (
    <>
    <div className="main-app">
      <Sidebar />
      <div>
      <Header setSearch={setSearch} />
      <Document search={search} documents={documents} setDocuments={setDocuments} />
       </div>
    </div>
    </>
  )
}

export default App
