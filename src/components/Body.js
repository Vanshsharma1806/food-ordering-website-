import Card from "./Card";
import resdata from "../utils/mockData";
import  React, { useState } from "react";




const Body = ()=>{
    const [filteredList , setFilteredList] = useState(resdata);
    const [isFiltered ,  setIsFiltered] = useState(false);

    const filter = ()=>{
        if(!isFiltered){
            filteredData = filteredList.filter((el) => el.info.avgRating>4)
            setFilteredList(filteredData)
            setIsFiltered(true);
        }else{
            setFilteredList(resdata);
            setIsFiltered(false);
        }
    }

    
    return (
        <div className="Body" >
            <button className="filter-btn" onClick={filter} >
                {!isFiltered ? "filter" : "see all" }
                </button>
            <div className="res-container">
                {
                    filteredList.map((res) => <Card key ={res.info.id} resdata = {res} />)
                }
            </div>
        </div>
        
    );
};

export default Body;