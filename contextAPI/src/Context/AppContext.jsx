import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


export const AppContext =createContext();

function AppContextProvider({children}) {
    const[loading,setLoading]=useState(false);
    const[posts,setPosts]=useState([]);
    const[page,setPage]=useState(1);
    const[totalPages,setTotalPages]=useState(null);



    async function fetchBlogPages(page=1) {
        setLoading(true)
        let url =`${baseUrl}?page=${page}`;

        try{
            const result =await fetch(url);
            const data =await result.json();
            console.log(data);
            setPage(data.page)
            setPosts(data.posts);
            setTotalPages(data.totalPages);


        }

        catch(error) {
            console.log("Error in Fecthing Data ")
            setPage(1);
            setPosts([]);
            setTotalPages(null);


        }

        setLoading(false);


    }

    function handlePageChange(){
        setPage(page);
        fetchBlogPages(page);

    } 



const value ={
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPages,
    handlePageChange,

    



};
 return  <AppContext.Provider value={value}>{children}
 </AppContext.Provider>
  
  

}

export default AppContextProvider;