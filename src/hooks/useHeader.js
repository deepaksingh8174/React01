import { insertDocument } from "../utils/util";
import { useState } from "react";

export default function useHeader(setSearch, refetchDocs) {
    const [AddButtonStatus, setAddButtonStatus] = useState(false);
      const [documentName, setDocumentName] = useState('');
    
      const handleDocument = (e) => {
        setDocumentName(e.target.value);
      };
    
      const handleAddButton = () => {
        setAddButtonStatus(!AddButtonStatus);
      };
    
      const handleSaveButton = () => {
        insertDocument(documentName);
        setAddButtonStatus(!AddButtonStatus);
        setDocumentName('');
        refetchDocs()
      };
    
      const handleSearch = (e) => {
        setSearch(e.target.value);
      };


      return {
        handleDocument,
        handleAddButton,
        handleSaveButton,
        handleSearch,
        AddButtonStatus,
        documentName,
      }
}