import Card from "./Card";
import  React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_API } from "../utils/constants";
import { Link } from "react-router-dom";


const Body = ()=>{

    const [resData , setResData] = useState([]);
    const [filteredList , setFilteredList] = useState(resData);
    const [isFiltered ,  setIsFiltered] = useState(false);
    const [searchValue , setSearchValue] = useState("");


    useEffect(()=>{
       fetchData();
    }, [])


    fetchData = async ()=>{
        const data = await fetch(RES_API);
        const json = await data.json();
        setResData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(filteredList)
    }
    
    const filter = ()=>{
        if(!isFiltered){
            setFilteredList(resData.filter((el) => el.info.avgRating>4.3))
            setIsFiltered(true);
        }else{
            setFilteredList(resData)
            setIsFiltered(false);
        }
    }
    console.log(filteredList)
    if(filteredList.length === 0){
        return (
            <div>
                <div className="buttons">
                    <button className="filter-btn" onClick={filter} >
                        {!isFiltered ? "filter" : "see all" }
                    </button>

                    <div className="search">
                        <input className="input" type="text" value={searchValue}  onChange={(e)=>{
                            setSearchValue(e.target.value);
                        }}></input>
                        <button className="search-btn"  onClick={()=>{
                            const filteredRes = resData.filter((res)=> 
                                res.info.name.toLowerCase().includes(searchValue.toLowerCase())
                            )
                            setFilteredList(filteredRes)
                        }} >search</button>
                    </div>
                </div>
                <div>
                    <Shimmer/>
                </div>
            </div>

        );
    }

    
    return (
        <div className="Body" >
            <div className="buttons">
                <button className="filter-btn" onClick={filter} >
                    {!isFiltered ? "filter" : "see all" }
                </button>

                <div className="search">
                    <input className="input" type="text" value={searchValue}  onChange={(e)=>{
                        setSearchValue(e.target.value);
                    }}></input>
                    <button className="search-btn"  onClick={()=>{
                        const filteredRes = resData.filter((res)=> 
                            res.info.name.toLowerCase().includes(searchValue.toLowerCase())
                        )
                        setFilteredList(filteredRes)
                    }} >search</button>
                </div>
            </div>
            <div className="res-container">
                {
                    filteredList?.map((res) => <Link className="click-res" to={"/restaurant/" + res?.info?.id}><Card key ={res?.info?.id} resdata = {res} /></Link>)
                }
            </div>
        </div>
        
    );
};

export default Body;