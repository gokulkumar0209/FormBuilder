import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import NewForm from "./NewForm";

function DashBoard() {
  const [createView, setCreateView] = useState(false);
  const [forms, setForms] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "allForms"));
        const formsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setForms(formsList);
		console.log(formsList)
      } catch (error) {
        alert("Error fetching forms: " + error.message);
      }
    };

    fetchForms();
  }, [db]);

  return (
    <div className="bg-slate-500 p-4">
      <div className="bg-red-500 w-full h-auto p-4">
        <button className="bg-blue-100 p-2" onClick={() => setCreateView(true)}>
          Add
        </button>
        <div className="mt-4">
          {forms.map((form) => (
            <div key={form.id} className="p-2 border-b border-gray-300">
              {form.title}
            </div>
          ))}
        </div>
      </div>
      {createView && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-slate-500 bg-opacity-50"
        >
          <NewForm setCreateView={setCreateView} />
        </div>
      )}
    </div>
  );
}

export default DashBoard;
