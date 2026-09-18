import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from "./Spinner";




const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
    

function Tag() {

    console.log(API_KEY);

    const [tag,setTag]=useState();

    const [loading,setLoading]=useState(false)

    const [gif, setGif] = useState("");

    useEffect( () =>{
        fetchData();

    },[])


    function clickHandler() {
        fetchData();


    }

    function changeHandler(event) {
        setTag(event.target.value)

        console.log(tag);

    }


    async function fetchData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const {data}=await axios.get(url);
        const imgSource =data.data.images.downsized_large.url;
        setGif(imgSource);
        setLoading(false);


    }



    return (
        <div className=" w-1/2 h-[450px] bg-blue-500 flex flex-col items-center gap-y-5 ">
            <h1 className="text-2xl underline  font-bold uppercase ">Random {tag} Gif</h1>

            {
                loading ? (<Spinner/>):(<img src={gif} alt="" width="450" />)

            }

            <input type="text"  className="bg-white w-10/12 opacity-100" value={tag} onChange={changeHandler} />
            
            <button onClick={clickHandler} className="bg-white w-10/12 opacity-55"> Generate </button>


        </div>
    )



}

export default Tag;

