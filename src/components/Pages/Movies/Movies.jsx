import { useState, useEffect } from "react"
import axios from "axios"
import { SignleContent } from "../../SingleContent/SingleContent"
import { CustomPagination } from "../../Pagination/CustomPagination"
import Genres from "../../Genres/Genres"

export function Movies() {

    const [page, setpage] = useState(1);
    const [content, setcontent] = useState([]);
    const [numOFpages, setnumOFpages] = useState(0);
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    //const genreforURL = useGenre(selectedGenres);

    const fetchMoives = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
        console.log(data.results, data.total_pages)
        setcontent(data.results)
        setnumOFpages(data.total_pages)
    }




    useEffect(() => {
        fetchMoives()
    }, [page]);
    return (
        <div>
            <span className="pageTitle">Movies</span>
            <Genres
                type="movie"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setpage}
            />
            <div className="trending">
                {
                    content && content.map((c) =>
                        <SignleContent key={c.id} id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.release_date || c.first_air_data}
                            media_type="movie"
                            vote={c.vote_average}

                        />

                    )
                }
            </div>
            <CustomPagination setpage={setpage} numOfPage={numOFpages} />
        </div>
    )
}