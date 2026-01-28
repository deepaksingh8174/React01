import { useEffect, useMemo, useState } from "react";
import Header from "../Header/Header";
import Document from "../Documents/Document";
import { getDocuments } from "../../utils/util";

const DocumentWrapper = () => {
  const [search, setSearch] = useState("");
  const [documents, setDocuments] = useState([]);

    const refetchDocs = ()=>{
     const docs = getDocuments();
     setDocuments(docs);
  }


    useEffect(() => {
          refetchDocs()
  }, []);



  const filteredDocuments = useMemo((() => {
   return search
    ? documents.filter((doc) =>
        doc.name.toLowerCase().includes(search.toLowerCase()),
      )
    : documents;

  }), [search, documents])
  
  

  return (
    <div>
      <Header setSearch={setSearch} refetchDocs = {refetchDocs} />
      <Document documents={filteredDocuments} refetchDocs = {refetchDocs} />
    </div>
  );
};

export default DocumentWrapper;
