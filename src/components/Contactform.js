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
            <div className="container">
            <div className="container" >
                    <h1 style={{fontFamily: 'Trebuchet MS', textAlign: 'center', color:'grey', }}>Contact me</h1>
                </div>
                <form className="contact-form" onSubmit={sendEmail}>
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
            </div>
        </Fragment>
    )
}

export default Contactform
