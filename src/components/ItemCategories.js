import MenuItems from "./MenuItems";

const ItemCategories = ({category, index, showItem, showIndex, setShowIndex})=> {
    const {title} = category;
    const itemCards = category.items;
    const handelClick = () => {
        if(showIndex === index){
            setShowIndex(null);
        }else{
            setShowIndex(index);
        }
    }

    return (
        <div className=" cursor-pointer" onClick={handelClick}  >
            <div className="flex justify-between p-2 bg-white mt-2 shadow-lg rounded cursor-pointer ">
                <h1 className="font-bold cursor-pointer">{title}({itemCards.length})</h1>
                <label className="cursor-pointer">🔽</label>
            </div>
            {showItem && itemCards.map((item) => (
                <MenuItems key={item.id} item={item} />
            ))
            }
        </div>
    );
}
export default ItemCategories;