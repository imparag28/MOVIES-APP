import {useState,useEffect } from "react"
import axios from "axios"
import {SignleContent} from "../../SingleContent/SingleContent"
import "./Trending.css"
import { CustomPagination } from "../../Pagination/CustomPagination"
export const Trending =()=>{
const [content, setcontent] = useState([]);
const [page, setpage] = useState(1);
    const fetchTrending = async ()=>{
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        );
        setcontent(data.results)
      

    }

    useEffect(() => {
      fetchTrending()
    }, [page]);
    return (
        <div>
            <span className="pageTitle">Trending</span>
             <div className="trending">
                {
                    content && content.map((c)=>
                     <SignleContent key={c.id} id={c.id}
                     poster={c.poster_path}
                     title={c.title || c.name}
                     date={c.release_date || c.first_air_data}
                     media_type={c.media_type}
                     vote={c.vote_average}

                     />
                       
                    )
                }
             </div>
             <CustomPagination setpage={setpage}  />
        </div>
    )
}