import Carousel from 'react-multi-carousel';
import { Box, styled } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';



const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}

const responsive1 = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: .25
    }
}

const BannerImage = styled("img")({
    margin: "auto",
    height: "12.5rem",
    // height: "200px",
    width: "9.375rem",
    // width: "150px",
});
const ButtonWrapper = styled(Box)`
`;

const ViewAllButton = styled(Button)`

`;

const breakingBox = styled(Box)`
  
`;

const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
const renderer = ({ hours, minutes, seconds, completed }) => {
    return <span>{hours}:{minutes}:{seconds}</span>;
};

const Slide = function ({ products, title, timer, advertisement }) {
    return (
        <>
            <hr />
            {advertisement === false ?
                <Box>
                    <Box style={{ display: "flex", backgroundColor: "white", margin: "0" }}>
                        <h2 style={{ fontWeight: "bold", padding: "0 5vw 5vh 5vw", margin: "0" }}>
                            {title}
                        </h2>
                        <Box style={{}}>
                            {timer &&
                                <Box>
                                    <img src={timerURL} alt='HurryUp!!' style={{ margin: ".5vh .5vw 0 0", width: "2.5vh" }} />

                                    <typography style={{ color: "#7f7f7f" }}>
                                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                                        &nbsp; Left
                                    </typography>
                                </Box>
                            }
                        </Box>
                        <ButtonWrapper style={{ marginLeft: "auto" }}>
                            <ViewAllButton variant="contained">View All</ViewAllButton>
                        </ButtonWrapper>
                    </Box>
                    <Box style={{ backgroundColor: "white", margin: "0" }} >
                        <Carousel
                            responsive={responsive}
                            swipeable={false}
                            draggable={false}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            keyBoardControl={true}
                            centerMode={true}
                        >
                            {
                                products.map(function (Data) {
                                    return (
                                        <Link to={`/product/${Data.id}`} style={{ textDecoration: "none" }}>
                                            <Box style={{ textAlign: "center", padding: "2vh 2vw 2vh 2vw" }}>
                                                <BannerImage src={Data.url} alt="crousalData" />
                                                <Box style={{ fontWeight: "bold", color: "#212121" }}>{Data.title.shortTitle}</Box>
                                                <Box style={{ color: "green" }}>{Data.discount}</Box>
                                                <Box style={{ color: "#7f7f7f" }}>{Data.tagline}</Box>
                                            </Box>
                                        </Link>
                                    )
                                })
                            }
                        </Carousel>
                    </Box>
                </Box>
                :
                <Grid container>
                    <Box style={{ display: "flex", backgroundColor: "white", margin: "0" }}>
                        <Box width={"50vw"} textAlign={"left"}>
                            <h2 style={{ fontWeight: "bold", padding: "0 5vw 5vh 5vw", margin: "0" }}>
                                {title}
                            </h2>
                        </Box>
                        <Box width={"47vw"} style={{ display: "flex" , flexDirection:"row-reverse" }} textAlign={"right"}> 
                            <ButtonWrapper style={{}}>
                                <ViewAllButton variant="contained">View All</ViewAllButton>
                            </ButtonWrapper>
                            <Box style={{ marginRight: "2vw" }}>
                                {timer &&
                                    <Box>
                                        <img src={timerURL} alt='HurryUp!!' style={{ margin: ".5vh .5vw 0 0", width: "2.5vh" }} />

                                        <typography style={{ color: "#7f7f7f" }}>
                                            <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                                            &nbsp; Left
                                        </typography>
                                    </Box>
                                }
                            </Box>

                        </Box>
                    </Box>
                    <Grid item lg={9} md={8} sm={7} xs={6}>

                        <Box style={{ backgroundColor: "white", margin: "0" }} >
                            <Carousel
                                responsive={responsive1}
                                swipeable={false}
                                draggable={false}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={3000}
                                keyBoardControl={true}
                                centerMode={true}
                            >
                                {
                                    products.map(function (Data) {
                                        return (
                                            <Link to={`/product/${Data.id}`} style={{ textDecoration: "none" }}>
                                                <Box style={{ textAlign: "center", margin: "2vh 2vw 2vh 2vw" }}>
                                                    <BannerImage src={Data.url} alt="crousalData" />
                                                    <Box style={{ fontWeight: "bold", color: "#212121" }}>{Data.title.shortTitle}</Box>
                                                    <Box style={{ color: "green" }}>{Data.discount}</Box>
                                                    <Box style={{ color: "#7f7f7f" }}>{Data.tagline}</Box>
                                                </Box>
                                            </Link>
                                        )
                                    })
                                }
                            </Carousel>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} sm={5} xs={6}>
                        <Box style={{ marginLeft: "1vw" }}>
                            <img src={adURL} alt="advertrisement!!" style={{ height: "20rem", width: "100%" }} />
                        </Box>
                    </Grid>

                </Grid>

            }
        </>
    );
}

export default Slide;