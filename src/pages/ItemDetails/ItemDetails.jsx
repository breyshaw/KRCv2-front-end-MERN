import { useLocation } from "react-router-dom";
import ReviewForm from "../../components/ReviewForm/ReviewForm";

const ItemDetails = () => {
  const location = useLocation()

  return ( 
    <>
    <h1>{location.state.title}</h1>
    <img src={location.state.imageUrl} alt={location.state.imageUrl}></img>
    <h2>Info:</h2>
    <p>{location.state.info}</p>
    <h2>Price:</h2>
    <p>{location.state.price}</p>
    <ReviewForm />
    </>
  );
}

export default ItemDetails;