import { createContext, useEffect, useState } from "react";
import {baseUrl} from '../baseUrl';
import axios from "axios";
export const AppContext=createContext();

export default function AppContextProvider({children}){
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState();

    const url=baseUrl;
    async function fetchBlogPosts(ele){
        setLoading(true);
        let page=ele?ele:1;
        try {
            const response=await axios(`${url}?&page=${page}`);
            const data=response.data;
            setPage(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);
        } catch (error) {   
            console.log(error.message);
            
        }
        setLoading(false);
    }



    useEffect(()=>{
        fetchBlogPosts();
    },[])

    const values={
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts
    };

    return(
    <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>)
}
