import React from 'react';
import './document.css';

const documents = [
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



const Document = ({search}) => {

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
                    {filteredDocuments.map((doc, index) => (
                        <tr key={index}><td><input type="checkbox" /></td>
                        <td>{doc.name}</td><td>{doc.status}</td><td>{doc.lastModified}</td>
                         <td>
                             <button className='document-button'>{doc.status === 'Needs Signing' ? 'Sign Now' : doc.status === 'Pending' ? 'Preview' : 'Download PDF'}</button>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    </>
  )
}

export default Document