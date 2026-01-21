import React, { useState } from "react";
import "./document.css";

const getStatusClasses = (status) => {
  switch (status.toLowerCase()) {
    case "pending":
      return "bg-gray-300 px-3 py-1 rounded-full text-sm font-semibold";
    case "completed":
      return "bg-green-400 px-3 py-1 rounded-full text-sm font-semibold";
    case "needs signing":
      return "bg-neptune-500 text-white px-3 py-1 rounded-full text-sm font-semibold";
  }
};

const getbuttonStatus = (status) => {
  switch (status.toLowerCase()) {
    case "pending":
      return "Preview";
    case "completed":
      return "Download PDF";
    case "needs signing":
      return "Sign Now";
  }
};

const Document = ({ documents, setDocuments }) => {
  const [isEditEnabled, setIsEditEnabled] = useState(false);

  const [editedData, setEditedData] = useState({
    id: null,
    name: "",
    status: "",
  });

  const handleDelete = (id) => {
    const totalDocuments = JSON.parse(localStorage.getItem("documents"));
    const updatedDocuments = totalDocuments.filter((doc) => doc.id !== id);
    localStorage.setItem("documents", JSON.stringify(updatedDocuments));
    setDocuments(updatedDocuments);
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
    setDocuments(updatedDocuments);
    setIsEditEnabled(false);
  };

  return (
    <>
      {isEditEnabled && (
        <div className="mb-8 flex gap-6 items-center">
          <input
            className="border px-2 py-2 w-1/2 rounded outline-none"
            type="text"
            value={editedData.name}
            onChange={(e) =>
              setEditedData({ ...editedData, name: e.target.value })
            }
          />

          <select
            name="status"
            id="status"
            className="border px-2 py-2 rounded outline-none"
            value={editedData.status}
            onChange={(e) =>
              setEditedData({ ...editedData, status: e.target.value })
            }
          >
            <option className={getStatusClasses("Pending")} value="Pending">
              Pending
            </option>
            <option className={getStatusClasses("Completed")} value="Completed">
              Completed
            </option>
            <option
              className={getStatusClasses("Needs Signing")}
              value="Needs Signing"
            >
              Needs Signing
            </option>
          </select>
          <button
            disabled={!editedData.name.trim() || !editedData.status.trim()}
            onClick={handleSaveButton}
            className={`w-[140px] h-[40px] text-white font-semibold text-sm rounded-md shadow transition
                                                                                                                  ${
                                                                                                                    !editedData.name.trim() ||
                                                                                                                    !editedData.status.trim()
                                                                                                                      ? "bg-gray-400 cursor-not-allowed opacity-60"
                                                                                                                      : "bg-green-400 hover:bg-green-500"
                                                                                                                  }`}
          >
            Save
          </button>
          <button
            onClick={handleCancelButton}
            className="w-[140px] h-[40px] bg-red-400 text-white font-semibold text-sm rounded-md shadow hover:bg-red-500"
          >
            {" "}
            Cancel
          </button>
        </div>
      )}

      <div className="table-wrapper ">
        <table className="document-table outline-none table-fixed w-full border-collapse">
          <thead className="text-center bg-gray-200 border-b">
            <tr>
              <th className="text-center w-full px-4">
                <input type="checkbox" />
              </th>
              <th className="w-1/3">Document Name</th>
              <th className="px-8">Status</th>
              <th className="w-28 ">Last Modified</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="document-body">
            {documents.map((doc) => {
              return (
                <tr key={doc.id}>
                  <td className=" px-4 py-2 text-center">
                    <input type="checkbox" />
                  </td>

                  <td className=" px-4 py-2 w-full  text-wrap ">{doc.name}</td>

                  <td className=" px-4 py-2 cursor-pointer">
                    <span className={getStatusClasses(doc.status)}>
                      {doc.status}
                    </span>
                  </td>
                  <td className=" px-4 py-1">{doc.lastModified}</td>

                  <td className="px-3 py-2">
                    <button className="w-[140px] h-[40px] px-4 py-2 bg-gray-200 text-white-600 font-semibold text-sm rounded-md shadow hover:bg-gray-300">
                      {getbuttonStatus(doc.status)}
                    </button>
                  </td>

                  <td className="px-4 py-2 flex gap-5">
                    <button
                      onClick={() => handleEditButton(doc)}
                      className="w-[90px] h-[40px] bg-blue-400 text-white font-semibold text-sm rounded-md shadow hover:bg-blue-500"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(doc.id)}
                      className="w-[90px] h-[40px] bg-red-400 text-white font-semibold text-sm rounded-md shadow hover:bg-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Document;
