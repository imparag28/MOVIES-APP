import SelectInput from "@material-ui/core/Select/SelectInput"

export const useGenres = (selectedGenres)=>{
        if(selectedGenres.length < 1) return ""

        const GenreIds = selectedGenres.map((g) =>g.id)
        return GenreIds.reduce((acc,curr) => acc + "," +curr)
}
