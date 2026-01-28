import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Document from "../Documents/Document";
import { getDocuments } from "../../utils/util";

const DocumentWrapper = () => {
  const [search, setSearch] = useState("");
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const docs = getDocuments();
    setDocuments(docs);
  }, [documents]);

  const filteredDocuments = search
    ? documents.filter((doc) =>
        doc.name.toLowerCase().includes(search.toLowerCase()),
      )
    : documents;

  return (
    <div>
      <Header setSearch={setSearch} />
      <Document documents={filteredDocuments} />
    </div>
  );
};

export default DocumentWrapper;
