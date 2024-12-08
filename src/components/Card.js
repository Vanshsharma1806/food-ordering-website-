import { CDN_URL } from "../utils/constants";

const Card = (props)=>{
    const {resdata} = props ;
    const{name , avgRating ,cuisines ,costForTwo ,cloudinaryImageId} = resdata?.info;
    const {deliveryTime} = resdata.info?.sla;
    return (
        <div className="res-card bg-slate-200 w-[170px] h-[410px] m-1 p-4 hover:shadow-lg rounded hover:border hover:border-slate-600 ">
            <img className="res-logo h-[150px] w-[150px] rounded" src={ CDN_URL + cloudinaryImageId}></img>
            <h3 className="res-name font-semibold">{name}</h3>
            <h4 className="ratings">⭐{avgRating} stars</h4>
            <h4 >{cuisines.join(" ,")}</h4>
            <h4>{deliveryTime}</h4>
            <h4 className="font-semibold">{costForTwo}</h4>
        </div>
    );
}

export default Card;