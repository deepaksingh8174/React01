import { useState } from "react";
import { deleteDocument, editDocument } from "../utils/util";

export default function useDocument (refetchDocs) {
    const [isEditEnabled, setIsEditEnabled] = useState(false);
    const [editedData, setEditedData] = useState({
                                                    id: null,
                                                    name: "",
                                                    status: "",
                                                });

  const handleDelete = (id) => {
    deleteDocument(id);
    refetchDocs()
  };

  const handleCancelButton = () => {
    setIsEditEnabled(!isEditEnabled);
  };

  const handleEditButton = (doc) => {
    setIsEditEnabled(true);
    setEditedData({
      id: doc.id,
      name: doc.name,
      status: doc.status,
    });
  };

  const handleSaveButton = () => {
    editDocument(editedData);
    setIsEditEnabled(false);
    refetchDocs()
  };

  return {
    handleDelete,
    handleCancelButton,
    handleEditButton,
    handleSaveButton,
    isEditEnabled,
    editedData,
    setEditedData
  }
}