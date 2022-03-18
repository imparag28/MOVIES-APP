import "./SingleContent.css"
//import ContentModal from "../ContentModal/ContentModal";
import { Badge } from "@material-ui/core";
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
        <Badge
        badgeContent={vote}
        color={vote > 6 ? "primary" : "secondary"}
      />
      <img className="poster" src={poster?`${img_300}/${poster}`:unavailable} alt={title} />
      <b className="title">{title}</b>
      <span  className="subTitle">{media_type ==="tv" ? "Tv series" : "Movie"}
      <span className="subTitle">{date}</span>
      </span>
    </div>
)
}