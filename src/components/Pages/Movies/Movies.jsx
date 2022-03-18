import { useState,useEffect } from "react";
import axios from "axios";
export  function Movies() {

    const [page, setpage] = useState(1);
    const fetchMoives = async ()=>{
        const { data} =  await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
        console.log( data )
    }
    

    useEffect(() => {
       fetchMoives()
    }, []);
    return (
        <div>
            <span className="pageTitle">Movies</span>
        </div>
    )
}