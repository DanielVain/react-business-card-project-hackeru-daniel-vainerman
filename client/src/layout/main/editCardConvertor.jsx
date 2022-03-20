import EditCard from "./editCard";
import { useParams } from "react-router-dom";

const EditCardConvertor = () => {
  const { id } = useParams();
  return <EditCard id={id} />;
};

export default EditCardConvertor;
