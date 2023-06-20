import React, { useState, useEffect } from "react";
import LogoWhite from "../asset/images/Headerlogo.png";
import { useNavigate } from "react-router-dom";

import {
    Grid,
    AppBar,
    Card,
    CardMedia,
    Fade,
    Hidden,
    Typography,
    ListItemButton
} from "@mui/material";

const Header= ()=>{
    const [backdropFilter, setBackdropFilter] = useState("blur(64px)");
    const [showMenu, setShowMenu] = useState(true);
    const [isClicked, setIsClicked] = useState("");

    let navigate = useNavigate();
    
    const listenScrollEvent = () => {
        // if (window.scrollY > 400) {
        //   if (window.location.pathname == "/") {
        //     setBackgroundColor("rgba(0,0,0,0.71)");
        //   } else {
        //     setBackgroundColor("rgba(0,0,0,0.71)");
        //   }
        //   setBackdropFilter("blur(64px)");
        // } else {
        //   setBackgroundColor("rgba(0,0,0,0.71)");
        //   setBackdropFilter("blur(64px)");
        // }
        if (window.scrollY > 0) {
          setShowMenu(false);
        } else {
          if (window.location.pathname == "/") {
            setShowMenu(true);
          } else {
            setShowMenu(false);
          }
        }
      };
        
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    }, []);

    return(
        <Grid xs={12} display='flex' container item>
            <Grid xs={12} display='flex' item>
                <AppBar
                    onMouseEnter={() => setShowMenu(true)}
                    onMouseLeave={() => {
                        setShowMenu(false);
                        // setShowSubMenu("");
                    }}
                    
                    color="inherit"
                    style={{
                        backgroundColor:"rgba(0,0,0,0.71)",
                        color: "white",
                        // height: showMenu?"108px":"58px",
                    }}
                    
                >
                    <Grid xs={12}
                        item
                        container
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        height="58px"
                        sx={{ backdropFilter: `${backdropFilter}` }}
                        padding="8px 0"
                    >
                        <Grid
                            item
                            xs={12}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Card
                            elevation={0}
                            sx={{ background: "rgba(0,0,0,0)"}}
                            height="58px"
                            >
                                <CardMedia
                                    sx={{ width: "150px", height:"40px",color: "white", cursor: "pointer" }}
                                    component="img"
                                    image={LogoWhite}
                                    // onClick={() => history.push("/")}
                                ></CardMedia>
                            </Card>

                        </Grid>

                    </Grid>

                    <Hidden mdDown>
                        <Fade in={showMenu} hidden={!showMenu}>
                            <Grid
                                item
                                xs={12}
                                height="50px"
                                display='flex'
                                justifyContent='center'
                                alignItems='center'
                                sx={{ backgroundColor: "rgba(255, 255, 255, 255)" }}
                                
                            >
                                <Grid
                                    item
                                    xs={12}
                                    display='flex'
                                    justifyContent='center'
                                    alignItems='center'
                                    style={{
                                      width: "100%",
                                      backdropFilter: "blur(64px)",
                                    }}
                                    sx={{ backgroundColor: "rgba(158, 158, 158, 0.5)" }}
                                    color={window.scrollY < 400 ? "white" : "G1.main"}
                                    height="50px"
                                >
                                    <Grid 
                                        item
                                        xs={4}
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='space-between'
                                        padding="0 5%"
                                    >
                                        <ListItemButton onMouseEnter={()=>{setIsClicked("Home")}}
                                            onMouseLeave={() => setIsClicked("")}
                                            sx={{cursor:"pointer"}}
                                            style={{
                                              display: "inherit",
                                              backgroundColor: "transparent",
                                            }}
                                            
                                            onClick={() => {
                                                navigate( "/");
                                            }}
                                        >
                                            <Typography
                                            color={isClicked=="Home"?"white":"black"}>
                                                Home
                                            </Typography>
                                        </ListItemButton>

                                        <ListItemButton onMouseEnter={()=>{setIsClicked("Photos")}}
                                            onMouseLeave={() => setIsClicked("")}
                                            sx={{cursor:"pointer"}}
                                            style={{
                                              display: "inherit",
                                              backgroundColor: "transparent",
                                            }}
                                            
                                            onClick={() => {
                                                navigate( "/photos");
                                            }}
                                        >
                                            <Typography color={isClicked=="Photos"?"white":"black"}>
                                                Photos
                                            </Typography>
                                        </ListItemButton>

                                        <ListItemButton onMouseEnter={()=>{setIsClicked("News")}}
                                            onMouseLeave={() => setIsClicked("")}
                                            sx={{cursor:"pointer"}}
                                            style={{
                                              display: "inherit",
                                              backgroundColor: "transparent",
                                            }}
                                            onClick={() => {
                                                navigate( "/news");
                                            }}
                                        >
                                            <Typography
                                            color={isClicked=="News"?"white":"black"}>
                                                News
                                            </Typography>
                                        </ListItemButton>
                                    </Grid>    
                                </Grid>
                                
                            </Grid>
                        </Fade>

                    </Hidden>
                </AppBar>
            </Grid>
        </Grid>
    )

}
export default Header;