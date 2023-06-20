import React, { useState, useEffect } from "react";
import Header from "../../layout/Header";
import { Grid } from "@mui/material";


const News = ()=>{
    
    return(
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

export default News;