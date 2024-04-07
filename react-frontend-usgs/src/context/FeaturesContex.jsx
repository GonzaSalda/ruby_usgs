import React, { createContext, useContext, useEffect, useState } from 'react'
export const FeaturesContex = createContext()

const FeaturesProvider= ({children}) => {
    const [features, setFeatures] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [body, setBody] = useState("");

  const GetAllFeatures = async (page) => {
    const baseURL = "http://127.0.0.1:3000/api/features";
      const res = await fetch(`${baseURL}?page=${page}&per_page=10`);
      const data = await res.json();
      setFeatures(data.data);
      setTotalPages(data.pagination.total);
  };

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://127.0.0.1:3000/api/features/${id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ comment: { body } }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to create comment");
      }
      setBody("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    GetAllFeatures(currentPage);
  }, [currentPage]);

  
    return (
        <FeaturesContex.Provider value={{features,setFeatures, handleNextPage, handlePrevPage,currentPage,totalPages, handleSubmit,body,setBody}}>
          {children}
        </FeaturesContex.Provider>
      )
}

export default FeaturesProvider
export const useFeaturesContex = () => useContext(FeaturesContex)