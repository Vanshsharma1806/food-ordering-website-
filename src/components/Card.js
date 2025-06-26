import { CDN_URL } from "../utils/constants";

const Card = (props)=>{
    const {resdata} = props ;
    const{name , avgRating ,cuisines ,areaName ,imageId, avgDeliveryTime, discountHeader, discountSubHeader} = resdata;
    
    return (
        <div className="res-card bg-white transition-transform  ease-in-out hover:scale-95 w-[200px] h-[410px] m-1 p-4 shadow-xl rounded ">   
            <div className="relative">
                <img className="res-logo h-[180px] w-[180px] rounded" src={ CDN_URL + imageId}></img>
                {discountHeader != "" || discountSubHeader != "" ? (
                    <div className="absolute bottom-0 rounded-lg left-0 right-0 bg-black bg-opacity-15 font-semibold text-white text-center py-2">
                        <h3>{discountHeader} {discountSubHeader}</h3>
                    </div>
                ) : null}
            </div>
            <h3 className="res-name font-semibold">{name}</h3>
            <h4 className="ratings font-semibold"> ⭐{avgRating} {avgDeliveryTime}</h4>
            <h4 className="text-gray-500">{cuisines.join(", ")}</h4>
            <h4 className="">{areaName}</h4>
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