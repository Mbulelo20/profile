import React from 'react'
import { Grid, Cell } from 'react-mdl'

const Contactform = () => {
    return (
        <Grid className="demo-grid-ruler">
            <Cell col={12} style={{marginTop:'10em'}}>
                <form action="https://formspree.io/xpzybknn" class="was-validated" method="POST" style={{marginLeft:'30em'}}>
                    <Grid className="demo-grid-ruler">
                        <Cell col={5} style={{width:'100%'}}>
                            <input type="text" name="name" placeholder="Name/Company"  style={{width:'50%'}}/>
                        </Cell>
                        <Cell col={5} style={{width:'100%'}}>
                            <input type="email" name="_replyto" placeholder="Your Email" required style={{width:'50%'}}/>
                        </Cell>
                    </Grid>
                    <Grid>
                        <Cell col={8} style={{width:'100%'}}>
                            <input name="message" placeholder="Leave a message..." required style={{width:'50%', height:'300%'}}></input>
                        </Cell>
                    </Grid>
                    <Grid style={{marginTop:'2em', }}>
                        <Cell style={{margin:'0em'}}>
                    `       <input  type="submit" value="Send"/>
                        </Cell>
                    </Grid>
                </form>
            </Cell>
        </Grid>
        
    )
}

export default Contactform
