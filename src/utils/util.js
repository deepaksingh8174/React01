function insertDocument(docName) {
  const existingDocuments = JSON.parse(localStorage.getItem('documents')) || [];
  const newDocument = {
    id: Math.floor(Math.random() * 100),
    name: docName,
    status: 'Pending',
    lastModified: new Date()
      .toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
      .replace(',', '')
      .toLowerCase(),
  };
  const updatedDocuments = [...existingDocuments, newDocument];
  localStorage.setItem('documents', JSON.stringify(updatedDocuments));

  return
}


function deleteDocument(docId) {
  const existingDocuments = JSON.parse(localStorage.getItem('documents')) || [];
  const updatedDocuments = existingDocuments.filter((doc) => doc.id !== docId);
  localStorage.setItem('documents', JSON.stringify(updatedDocuments));

  return updatedDocuments;
}

function getDocuments() {
  const existingDocuments = JSON.parse(localStorage.getItem('documents')) || [];
  return existingDocuments;
}


const editDocument = (editedData) => {
    const totalDocuments = JSON.parse(localStorage.getItem("documents"));
    const updatedDocuments = totalDocuments.map((doc) => {
      if (doc.id === editedData.id) {
        return {
          ...doc,
          name: editedData.name,
          status: editedData.status,
          lastModified: new Date()
            .toLocaleDateString("en-IN", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })
            .replace(",", "")
            .toLowerCase(),
        };
      }
      return doc;
    });
    localStorage.setItem("documents", JSON.stringify(updatedDocuments));
  };



export { insertDocument, deleteDocument, getDocuments, editDocument };