import React, { useState, useRef } from "react";
import deleteIcon from '../../assets/delete.png';
import './document.css';


  const getStatusClasses = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-gray-300 px-3 py-1 rounded-full text-sm font-semibold";
      case "completed":
        return "bg-green-400 px-3 py-1 rounded-full text-sm font-semibold";
        case "needs signing":
        return "bg-neptune-500 text-white px-3 py-1 rounded-full text-sm font-semibold";
    }
  }


const Document = ({ documents, setDocuments }) => {

  const [isEditEnabled, setIsEditEnabled] = useState(false);

  const [editedData, setEditedData] = useState({
    id: null,
    name: '',
    status: ''
  });

  

 const handleDelete = (id) => {
     const totalDocuments = JSON.parse(localStorage.getItem('documents'));
    const updatedDocuments = totalDocuments.filter((doc) => doc.id !== id);
    localStorage.setItem('documents', JSON.stringify(updatedDocuments));
    setDocuments(updatedDocuments);
  };


  const handleCancelButton = () => {
    setIsEditEnabled(!isEditEnabled);
  }

  const handleEditButton = (doc) => {
    setIsEditEnabled(true);
    setEditedData({
      id: doc.id,
      name: doc.name,
      status: doc.status
    });
    
  }

  const handleSaveButton = () => {
    const totalDocuments = JSON.parse(localStorage.getItem('documents'));
    const updatedDocuments = totalDocuments.map((doc) => {
      if (doc.id === editedData.id) {
        return {
          ...doc,
          name: editedData.name,
          status: editedData.status
        };
      }
      return doc;
    });
    localStorage.setItem('documents', JSON.stringify(updatedDocuments));
    setDocuments(updatedDocuments);
    setIsEditEnabled(false);
  }










 

  return (
    <>

     {isEditEnabled && (
        <div className="mb-8 flex gap-6 items-center">
          <input className="border px-2 py-2 w-1/2 rounded outline-none"
            type="text"
            value={editedData.name}
            onChange={(e) => setEditedData({...editedData, name: e.target.value})}
          />

          <select name="status" id="status" className="border px-2 py-2 rounded outline-none"
            value={editedData.status}
            onChange={(e) => setEditedData({...editedData, status: e.target.value})}
          >
            <option className={getStatusClasses("Pending")} value="Pending">Pending</option>
            <option className={getStatusClasses("Completed")} value="Completed">Completed</option>
            <option className={getStatusClasses("Needs Signing")} value="Needs Signing">Needs Signing</option>
          </select>
          <button onClick={handleSaveButton} className='w-[140px] h-[40px] bg-blue-400 text-white-300 font-medium text-sm rounded-md shadow hover:bg-blue-500' >Save</button>
          <button onClick = {handleCancelButton} className="w-[140px] h-[40px] bg-red-400 text-white-300 font-medium text-sm rounded-md shadow hover:bg-red-500"> Cancel</button>
        </div>
      )}



    <div className="table-wrapper">
            <table className='document-table'>
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>Document Name</th>
                        <th>Status</th>
                        <th>Last Modified</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='document-body'>
                   {documents.map((doc) => {
            return (
              <tr key={doc.id} className="border-b hover:bg-gray-50">
                <td className="border px-4 py-2 text-center">
                  <input type="checkbox" />
                </td>

                <td className="border px-4 py-2">
                  {doc.name}
                </td>

                <td className="border px-4 py-2 cursor-pointer">
                  <span className={getStatusClasses(doc.status)}>
                    {doc.status}
                  </span>
                </td>
                <td className="border px-4 py-2">{doc.lastModified}</td>

                <td className="px-4 py-2 flex gap-10">
                  <button onClick={() => handleEditButton(doc) } className="w-[90px] h-[40px] bg-blue-400 text-white-300 font-medium text-sm rounded-md shadow hover:bg-blue-500">
                      Edit
                  </button>

                    <button onClick={() => handleDelete(doc.id)}  className="p-1 rounded hover:bg-red-100" >
                      <img src={deleteIcon} alt="Delete" className="h-5 w-5" />
                    </button>
                </td>
              </tr>
            );
          })}
        </tbody>
            </table> 
        </div>  
    </>
  )
}

export default Document