import React, { useState } from "react";
import deleteIcon from '../../assets/delete.png';
import './document.css';





const Document = ({search, documents, setDocuments}) => {


const [editingIndexes, setEditingIndexes] = useState([]);
const [tempNames, setTempNames] = useState({});

  const handleEdit = (index, name) => {
    setEditingIndexes([...editingIndexes, index]);
    setTempNames({ ...tempNames, [index]: name });
  };

  const handleSave = (index) => {
    const updatedDocs = [...documents];
    updatedDocs[index].name = tempNames[index];
    setDocuments(updatedDocs);

    setEditingIndexes(editingIndexes.filter((i) => i !== index));
    const { [index]: removed, ...rest } = tempNames;
    setTempNames(rest);
  };

  const handleChange = (index, value) => {
    setTempNames({ ...tempNames, [index]: value });
  };

 const handleDelete = (index) => {
    setDocuments(documents.filter((_, i) => i !== index));
  };


  let filteredDocuments = documents;
  if (search) {
      filteredDocuments = documents.filter(doc =>
        doc.name.toLowerCase().includes(search.toLowerCase())
    );
  }


 

  return (
    <>
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
                   {filteredDocuments.map((doc, index) => {
            const isEditing = editingIndexes.includes(index);
            return (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="border px-4 py-2 text-center">
                  <input type="checkbox" />
                </td>

                <td className="border px-4 py-2">
                  {isEditing ? (
                    <input
                      type="text"
                      value={tempNames[index]}
                      onChange={(e) => handleChange(index, e.target.value)}
                      className="border px-2 py-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  ) : (
                    doc.name
                  )}
                </td>

                <td className="border px-4 py-2">{doc.status}</td>
                <td className="border px-4 py-2">{doc.lastModified}</td>

                <td className="border px-4 py-2 flex gap-10">
                  {isEditing ? (
                    <button
                      onClick={() => handleSave(index)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(index, doc.name)}
                      className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
                    >
                      Edit
                    </button>
                  )}
                  
                  {!isEditing && (
                    <button
                      onClick={() => handleDelete(index)}
                      className="p-1 rounded hover:bg-red-100"
                      title="Delete"
                    >
                      <img src={deleteIcon} alt="Delete" className="h-5 w-5" />
                    </button>
                  )}
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