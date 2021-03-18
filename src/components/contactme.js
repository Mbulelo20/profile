import React, { Component } from 'react'
import emailjs from 'emailjs-com'

import InfoCarousel from './carousel'

export class Contactme extends Component {
    render() {
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
            <div className="container">
                <br/>
                    <div className="text-center">
                        <h2 className="section-heading">Get in touch <InfoCarousel/></h2>
                        <div style={{margin: '45%',marginTop: '4em', width: '100%'}}>
                    <InfoCarousel/>
                    
                </div>
                    </div>
                <br/>
                
                <div className="container-fluid">
                
                    <form className="contact-form" onSubmit={sendEmail} style={{width:'100%'}}>
                        <div className=" row pt-5">
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
                                    <input type="textarea" id="" className="form-control" required placeholder="Leave a message" name="message" style={{width:'100%', height:'60%', paddingBottom:'5em'}}/>
                            </div>
                                <div className="col-8 form-group mx-auto" style={{marginTop:'-5em'}}>
                                    <input className="btn btn-primary" type="submit" value="Send"/>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contactme;
