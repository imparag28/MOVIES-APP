import { Pagination } from "@material-ui/lab"
import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";

const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });
export const CustomPagination =({ setpage,numOfPage = 10 })=>{
    //console.log(setpage,numOfPage)
    const handlePageChange =(page)=>{
        setpage(page)
        window.scroll(0,0)
    }
   return(
       <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}>
          <ThemeProvider theme={darkTheme}>
          <Pagination
           count={numOfPage} 
            onChange={(e) => handlePageChange(e.target.textContext)}
            color="primary"
           />
          </ThemeProvider>
           
       </div>
   )
}