import "./SingleContent.css"
import { img_300, unavailable } from "../../config/config";

export const  SignleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote
})=>{
 return(
    <div className="media">
      <img className="poster" src={poster?`${img_300}/${poster}`:unavailable} alt={title} />
      <b className="title">{title}</b>
      <span  className="subTitle">{media_type ==="tv" ? "Tv series" : "Movie"}
      <span className="subTitle">{date}</span>
      </span>
    </div>
)
}