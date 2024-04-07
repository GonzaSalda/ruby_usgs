import { Route, Routes } from "react-router-dom";
import Feature from "../pages/FeatureDetails";
import CommentForm from "../components/CommentForm";
import Home from "../pages/Home";



const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="feature/:id" element={<Feature />} />
      <Route path="feature/comment" element={<CommentForm/>} />
    </Routes>
  );
};

export default AppRouter;