import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from "./Spinner";




const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
    

function Random() {

    console.log(API_KEY);


    const [loading,setLoading]=useState(false)

    const [gif, setGif] = useState("");

    useEffect( () =>{
        fetchData();

    },[])


    function clickHandler() {
        fetchData()

    }

    async function fetchData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data}=await axios.get(url);
        const imgSource =data.data.images.downsized_large.url;
        setGif(imgSource);
        setLoading(false);


    }



    return (
        <div className=" w-1/2 h-[450px] bg-green-500 flex flex-col items-center gap-y-5 ">
            <h1 className="text-2xl underline  font-bold uppercase ">Random  Gif</h1>

            {
                loading ? (<Spinner/>):(<img src={gif} alt="" width="450" />)

            }
            
            <button onClick={clickHandler} className="bg-white w-10/12 opacity-55"> Generate </button>


        </div>
    )



}

export default Random;
