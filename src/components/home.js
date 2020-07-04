import React from 'react'
import {Grid, Cell} from 'react-mdl'

const Home = () => {
    return (
        <div style={{width: '100', margin: 'auto'}}>
            <Grid classname="homepage">
                <Cell>
                    <img src="https://pbs.twimg.com/profile_images/1053055123193122816/IUwo6l_Q_400x400.jpg"
                    className="my-image"
                    alt="pic"
                    />
                    <div className="info">
                        <p><center>I'm an aspiring web developer</center></p>
                        <p><center>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor
                             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</center></p>
                    </div>
                </Cell>
                
            </Grid>
        </div>
    )
}

export default Home; 