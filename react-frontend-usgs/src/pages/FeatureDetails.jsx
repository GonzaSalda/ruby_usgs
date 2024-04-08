import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CommentForm from "../components/CommentForm";

const Feature = () => {
  const { id } = useParams();
  const [feature, setFeature] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const GetFeatureById = async () => {
      const response = await fetch(`http://localhost:3000/api/features/${id}`);
      const data = await response.json();
      setFeature(data);
    };
    GetFeatureById();
  }, [id]);

  useEffect(() => {
    const GetFeatureComments = async () => {
      const response = await fetch(
        `http://localhost:3000/api/features/${id}/comments`
      );
      const data = await response.json();
      setComments(data);
    };
    GetFeatureComments();
  }, [id]);

  return (
    <>


<div className="h-auto my-9  w-full items-center flex justify-center">
        <div className="max-w-[350px] w-full p-6 border  border-gray-200 rounded-lg shadow bg-gray-700  text-white text-sm flex flex-col gap-y-6">
          {feature && (
            <>
              <h2 className="text-center font-bold text-lg">{feature.place}</h2>
              <p>Magnitud: <span className="text-gray-400">{feature.magnitude}{feature.mag_type}</span></p>
              <p>Longitud: <span className="text-gray-400">{feature.longitude}</span></p>
              <p>Latitud: <span className="text-gray-400">{feature.latitude}</span></p>
              <Link to={`${feature.url}`} target="_blank">
              
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Más información
              </button>
              </Link>
            </>
          )}

          <CommentForm id={id} />

          
         
          {comments && comments.length > 0 && (
            <h1 className="font-semibold lg:text-xl md:text-sm">Lista de comentarios</h1>
            )}
             <ul>
            {comments?.map((comment) => (
              <li className="list-decimal" key={comment.id}>
                <p>{comment.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>


     
    </>
  );
};

export default Feature;
