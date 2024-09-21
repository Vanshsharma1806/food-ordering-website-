import { CDN_URL } from "../utils/constants";

const Card = (props)=>{
    const {resdata} = props ;
    const{name , avgRating ,cuisines ,costForTwo ,cloudinaryImageId} = resdata?.info;
    const {deliveryTime} = resdata.info?.sla;
    return (
        <div className="res-card">
            <img className="res-logo" src={ CDN_URL + cloudinaryImageId}></img>
            <h3 className="name">{name}</h3>
            <h4 className="ratings">{avgRating} stars</h4>
            <h4 >{cuisines.join(" ,")}</h4>
            <h4>{deliveryTime}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
}

export default Card;