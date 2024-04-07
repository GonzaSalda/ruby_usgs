import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      <div>
        {feature && (
          <>
            <h2>{feature.title}</h2>
            <p>Lugar: {feature.place}</p>
          </>
        )}

        <CommentForm  id={id} />

        <ul>
          {comments?.map((comment) => (
            <li key={comment.id}>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Feature;
