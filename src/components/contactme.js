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
            <div className="container"data-aos="zoom-in">
                <br/>
                
                <div className="container-fluid">
                    {/* <div className="text-center justify-content-md-center">
                        <InfoCarousel/>
                   </div> */}
                   <div className="row text-center ">
                        <div className="col-md-6">
                            <h1 style={{marginRight: '-10em'}}>Get In Touch</h1>
                        </div>
                        <div className="col-md-6" style={{marginLeft: '-7em'}}>
                            <InfoCarousel />
                        </div>
                   </div>
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

                            <div className="col-8 form-group mx-auto" style={{width: '50px', height: '150px'}}>
                                    <textarea type="textarea" id="" className="form-control" required placeholder="Leave a message" name="message" style={{width:'100%',overflow:'auto', height:'60%', paddingBottom:'1em'}}/>
                            </div>
                            <div className="col-8 form-group mx-auto" style={{marginTop:'-4em'}}>
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
