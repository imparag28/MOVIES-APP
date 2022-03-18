import "/home/parag/Desktop/Movies APP/movieapp/src/components/Header/header.css"
export const Header = () =>{
    return(
        <div>
            <span onClick={
                ()=>window.scroll(0,0)
            } className='header'>Entertainment Hub</span>
        </div>
    )
}