import React, {Fragment} from 'react'
import emailjs from 'emailjs-com'
import {Grid, Cell} from 'react-mdl'


const Contactform = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_yipvd2q', 'template_f90yrci', e.target, 'user_gliSFWQT1Y7S20Cz3Dug6')
          .then((result) => {
              console.log(result.text);
              alert('Thanks for your message')
          }, (error) => {
              console.log(error.text);
              
          });
          e.target.reset();
      }
    
    return (
        <Fragment>
            <div style={{marginBottom:'14em' }}>
                <div className="container"  >
                    <h1 style={{fontFamily: 'Trebuchet MS', textAlign: 'center', color:'black'}}>Leave a message</h1>
                </div>
                <Grid>
                    <Cell col={8}>
                        <form className="contact-form" onSubmit={sendEmail} style={{width:'100%'}}>
                            <div className=" row pt-5 mx-auto">
                                <div className="col-8 form-group mx-auto">
                                        <input type="text" className="form-control" placeholder="Name" name="name" style={{width:'100%'}}/>
                                </div>

                                <div className="col-8 form-group mx-auto">
                                        <input type="text" className="form-control" required placeholder="Email address" name="email" style={{width:'100%'}}/>
                                </div>

                                <div className="col-8 form-group mx-auto">
                                        <input type="text" className="form-control" placeholder="subject" name="subject" style={{width:'100%'}}/>
                                </div>

                                <div className="col-8 form-group mx-auto" style={{width: '50px', height: '190px'}}>
                                        <input type="textarea" id="" className="form-control" required placeholder="Leave a message" name="message" style={{width:'100%', height:'60%', paddingTop:'-95em'}}/>
                                </div>
                                    <div className="col-8 form-group mx-auto" style={{marginTop:'-5em'}}>
                                        <input className="btn btn-primary" type="submit" value="Send"/>
                                    </div>
                            </div>
                        </form>
                        
                    </Cell>
                    <Cell col={4}>
                        <div  style={{backgroundColor: "white", marginTop:'2em'}}>
                            
                            <div class="email">
                                <i class="fa fa-envelope-square" aria-hidden="true"></i>
                                <text style={{color: "black", fontSize: "16px", fontWeight: "bold",}}>
                                    mbulelopani09@gmail.com
                                </text>
                            </div>
                            <div class="contact">
                                <i class="fa fa-phone-square" aria-hidden="true"></i>
                                <text style={{color: "black", fontSize: "16px", fontWeight: "bold",}}>
                                    (+27)73 7036 422
                                </text>
                            </div>
                            <div>
                                <h4 className="email" style={{textAlign: 'left'}}>Links</h4>
                                <a href="https://www.github.com/Mbulelo20" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-github-square zoom" aria-hidden="true" style={{color: "black", fontSize: "3.5em", marginLeft: '0em'}}></i>
                                </a>

                                <a href="https://www.linkedin.com/in/mbulelo-pani-638b4b196" rel="noopener noreferrer" target="_blank">
                                        <i class="fa fa-linkedin-square zoom" aria-hidden="true" style={{color: "blue",paddingLeft:'1em', fontSize: "3.5em", marginLeft: '0em'}}></i>
                                </a>
                                <a href="https://www.freecodecamp.org/mbulelo97" rel="noopener noreferrer" target="_blank">
                                        <i class="fa fa-free-code-camp zoom" aria-hidden="true" style={{color: "darkGreen",paddingLeft:'1em', fontSize: "3.5em", marginLeft: '0em'}}></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
                <Grid>
                    <Cell>
                        
                    </Cell>
                </Grid>
               
            </div>
        </Fragment>
    )
}

export default Contactform
