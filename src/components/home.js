import React, {Fragment} from 'react'
import {Grid} from 'react-mdl'

const Home = () => {
    return (
        <Fragment>
            <container>
            <Grid className="demo-grid-ruler" style={{  
                    
                    marginTop: '14em',
                    width: '60%',
                    height:'40%',
                    color: 'grey',  
                }} >
                <div>
                    <div style={{marginBottom: '-1em', color: 'white'}}>
                        <h1 style={{fontFamily: 'Trebuchet MS', fontWeight: 'bolder', textAlign:'center'}}>Hello, I'm Mbulelo Pani</h1>
                    </div>
                    <div style={{fontFamily: 'Trebuchet MS', marginBottom: '0em', color:'white', textAlign:'center'}}>
                        <h4 style={{fontFamily: 'Trebuchet MS'}}> HTML/CSS | Python | JavaScript | Bootstrap | React | MongoDb | NodeJS | ExpressJS </h4>
                    </div>

                    <div style={{textAlign:'center'}}>
                        <h5 className='color1' style={{color:'white', lineHeight: '110%', fontFamily: 'Time New Roman'}}> 
                        I am a junior web developer living in Cape Town. I am passionate about building websites that are smart, neat
                        and interactive. Take a while and see more about what I do.
                        </h5>
                        <h5 className='color2' style={{color: 'black', lineHeight: '110%', fontFamily: 'Time New Roman'}}> 
                        I am a junior web developer living in Cape Town. I am passionate about building websites that are smart, neat
                        and interactive. Take a while and see more about what I do.
                        </h5>
                    </div>
                    <div>
                    <center><img src="https://lh3.googleusercontent.com/xlXBD2NiBAeyiMNjhNQGGF6yVXWz46fIHDnHNJfTwQoyZ6eSa5K2HtytDaXIMrSPezc6O8qxfy_eo7b8AF-v4Ko9XM1cJUJvyMiKJEqjity2itzB_r9LOb-YhCe1NX4j2alC5lj0k4Tg_IFv1S28OK0oJ2GwPYTuX9OLE0e02T07B88FuDg8ZluyRCDkFfAwGfonmQ5mTWnP425MZNx5EOegEa3wy4mfXjyM8b3lV7IoGuKPTm_UUAy4jgCXoFVeb8qK3sKrQXjk85NYjyw3pS554lpTpAgvmIflzHJVEpJLMxfOJuVotZYExUv6ym_4uYkbEqTFX6Qtl1yTwXBzrheGhyqYYIljUPMNXPf4VN4ejXzU6ExXxqB62pnAx16Csv6TSeGlhmAEBv3dVjUb5did4UTEMj8zcgd60G4PgUTTUKuF_XE6ZOMYbfLQxtNBrj3QK_0n90QVkrK09fs0y7Zv7O4lYWxt2UAKFBjmZUFDWKzApHmGV8wKBMo7VwnDLhD6SjfrFnqqC-DFwNRlOU5AMBWZpk9jVPmCxpIl3RX_N6e0_R-nKf6-cVgzeKMry5Ood3Nx9ECetpd5OTYKdjE-kiouBrNl2HWTBBiczXb08192G01GGfnpyd0kOTbYCtHlGoXVdnZJ_qjLzrzMnf_k1gAFcWMd-GjMEjcC5uKj9hvYEeWSZOYhTQ-zVw=w525-h700-no?authuser=0" 
                        alt='profile avatar'
                        style={{width:'450px', height:'450px', borderRadius:'60%', marginTop:'16em'}}/>
                        </center>
                    </div>
                    
                </div>
                
            </Grid> 
            </container>
            
    </Fragment>
    )
}

export default Home;