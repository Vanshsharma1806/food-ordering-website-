import { CDN_URL } from "../utils/constants";

const Card = (props)=>{
    const {resdata} = props ;
    const{name , avgRating ,cuisines ,costForTwo ,cloudinaryImageId} = resdata?.info;
    const {deliveryTime} = resdata.info?.sla;
    const {header, subHeader} = resdata?.info?.aggregatedDiscountInfoV3 || {};
    return (
        <div className="res-card bg-gray-200  hover:bg-gray-300 w-[200px] h-[410px] m-1 p-4 shadow-xl rounded ">   
            <div className="relative">
                <img className="res-logo h-[180px] w-[180px] rounded" src={ CDN_URL + cloudinaryImageId}></img>
                {header || subHeader ? (
                    <div className="absolute bottom-0 rounded-lg left-0 right-0 bg-black bg-opacity-15 font-semibold text-white text-center py-2">
                        <h3>{header} {subHeader}</h3>
                    </div>
                ) : null}
            </div>
            <h3 className="res-name font-semibold">{name}</h3>
            <h4 className="ratings">{avgRating}⭐ stars</h4>
            <h4 >{cuisines.join(" ,")}</h4>
            <h4>{deliveryTime}</h4>
            <h4 className="font-semibold">{costForTwo}</h4>
        </div>
    );
}

export const CardWithOneBenifits = (Card) => {
    return (props) =>{
        return(
            <div className="relative">
                <label className="bg-green-500 rounded p-1 absolute top-0 left-0 z-10 text-white ">pure veg</label>
                <Card {...props} />
            </div>
        )
    }
}

export default Card;