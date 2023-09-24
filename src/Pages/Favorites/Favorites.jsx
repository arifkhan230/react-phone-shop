import { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {

    const [favorite,setFavorite] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false)

    useEffect(()=>{
        const favoriteItem = JSON.parse(localStorage.getItem('favorites'))
        if(favoriteItem){
            setFavorite(favoriteItem)
        }
        else{
            setNoFound('No data found')
        }

    },[])

    const handleRemove = () => {
        localStorage.clear()
        setFavorite([])
        setNoFound('No data found')
    }


    return (
        <div>
            {
                noFound? <p className=" text-4xl font-bold h-[80vh] flex justify-center items-center ">{noFound}</p> 
                : 
                <div>
                    {
                        favorite.length > 0 && <button onClick={handleRemove} className="p-3 bg-pink-300 rounded font-medium mx-auto block">Delete All</button>
                    }
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
                        {
                            isShow ? favorite.map(phone => <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>) 
                            :
                            favorite.slice(0,4).map(phone => <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>)
                        }
                    </div>
                    {
                        favorite.length > 4 && <button onClick={()=> setIsShow(!isShow)}  className="p-3 bg-pink-300 rounded font-medium mx-auto block">{isShow? 'See More': 'See less'}</button>
                    }
                </div>
            }
        </div>
    );
};

export default Favorites;