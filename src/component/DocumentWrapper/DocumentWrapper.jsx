import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Document from "../Documents/Document";

const DocumentWrapper = () => {
  const [search, setSearch] = useState("");
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const localstorageData = localStorage.getItem("documents");

    if (localstorageData) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDocuments(JSON.parse(localstorageData));
    }
  }, []);

  const filteredDocuments = search
    ? documents.filter((doc) =>
        doc.name.toLowerCase().includes(search.toLowerCase()),
      )
    : documents;

  return (
    <div>
      <Header setSearch={setSearch} setDocuments={setDocuments} />
      <Document documents={filteredDocuments} setDocuments={setDocuments} />
    </div>
  );
};

export default DocumentWrapper;
