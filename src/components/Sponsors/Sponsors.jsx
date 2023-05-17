import './sponsors.scss';
import * as React from 'react';
import '../../globals.scss';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function Sponsors(props) {
    const SponsorsList =
        [
            {title:'sd308',image:'imgs/jacker.png'},
            {title:'Cat',image:'imgs/morestuff.png'},
            {title:'Molex',image:'imgs/morestuff.png'},
            {title:'TE Connect',image:'imgs/morestuff.png'},
            {title:'Cat',image:'imgs/morestuff.png'},
            {title:'Cat',image:'imgs/morestuff.png'},
        ];

    const Sponsors = SponsorsList.map((SponsorsList) =>
        <div>
            <img src={SponsorsList.image} alt="photo" width="500px" height="500px"/>
        </div>
    );

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <section className="Sponsors">
                <div className="content">
                    <div className="left">
                        <div className="wrapper">
                            <h1>Thanks to our <span className="frc2338-title">Sponsors</span></h1>
                        </div>
                    </div>
                </div>
                <div className="border"></div>

                <div className="content2">
                    {/*{Sponsors}*/}
                    {/*<div className="row">*/}
                    {/*    <div className="col">*/}
                    {/*        <img src="imgs/jacker.png" alt="photo"/>*/}
                    {/*    </div>*/}
                    {/*    <div className="col">*/}
                    {/*        <img src="imgs/jacker.png" alt="photo"/>*/}
                    {/*    </div>*/}
                    {/*    <br/>*/}
                    {/*    <div className="col">*/}
                    {/*        <img src="imgs/jacker.png" alt="photo"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <Box sx={{ width: '100%' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <Item class="div2">
                                    <img src="imgs/SD308_Logo_650x110_2.png" alt="photo" width="100%" height="100%"/>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item class="div2 cat">
                                    <img src="imgs/Caterpillar_logo.png" alt="photo" width="100%" height="100%"/>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item class="div2">
                                    <img src="imgs/molex-logo.png" alt="photo" width="100%" height="100%"/>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item class="div2">
                                    <img src="imgs/Raytheon_Technologies_logo.png" alt="photo" width="100%" height="100%"/>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item class="div2">
                                    <img src="imgs/bayer-fund.png" alt="photo" width="100%" height="100%"/>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item class="div2">
                                    <img src="imgs/TE_Connectivity_logo.png" alt="photo" width="100%" height="100%"/>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item class="div2">
                                    <img src="imgs/ineos styrolution.png" alt="photo" width="100%" height="100%"/>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </section>
        </>
    );
}
//TODO: Add sponsors

export default Sponsors;