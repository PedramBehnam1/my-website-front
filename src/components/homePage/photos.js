import React, { useState, useEffect } from "react";
import Header from "../../layout/Header";
import { Grid } from "@mui/material";


const Photos = ()=>{
    
    return(
        // <div>
        //     <Grid 
        //         display="flex"
        //         flexDirection="column"
        //         // height="80vh"
        //     >
        //         <Header />
        //         <Grid sx={{height:"100%"}}
        //             display="flex"
        //             justifyContent='center'
        //             alignItems="center"
        //         >
        //             ssss
        //         </Grid>

        //     </Grid>
        // </div>
        <Grid container xs={12} display='flex' flexDirection='column'>
            
            <Header />
            <Grid 
                display="flex"
                justifyContent='center'
                alignItems="center"
                mt="60px"
                height="90vh"
            >
                Working on...
            </Grid>
        </Grid>
    )
}

export default Photos;