import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
export class Aboutme extends Component {
    render() {
        return (
            <div className="container">
                <br/><br/>
                <div className="row">
                    <div className="col-md-6" data-aos="fade-right">
                    <div>
                    <h2 className="section-heading text-uppercase" style={{color: '#4FBFA8', marginBottom:'2rem', textAlign: 'bottom'}}>About me</h2>
                </div>
                        Hi, my name is Mbulelo Pani. I'm a web developer from Cape Town.
                        I enjoy working on projects that challenge my critical thinking and require a little bit of imagination,
                        from authentication and databases, to forms and animations.
                        <br/>
                        <br/>
                        I was first interested in programming during college, where I was studying Logical Systems.
                        I then pursued this interest when I took a brief programming course, and during that time
                        I also volunteered at a career expo NGO where I was an assistant, introducing basic programming to high school pupils.
                        <br/>
                        <br/>
                        I started a fullstack web development course at Lifechoices, graduating the same year, 2020. I gained experience in studying and
                        working within alone, but I also gained experience with working as a team.
                        <br/>
                        <br/>
                        <Button type="submit" class="btn btn-outline-primary" download style={{borderRadius: '0rem', backgroundColor: 'grey'}}>
                            <i class="fas fa-file" aria-hidden="true"></i>
                            View CV</Button>

                    </div>
                    <div className="col-md-6" data-aos="fade-left">
                        <center>
                            <img src="https://cdn.pixabay.com/photo/2021/02/27/16/25/woman-6055084_960_720.jpg" alt="img" style={{width: '100%', margin: '0.3rem'}}/>
                        </center>
                    </div>
                </div>
                <hr/>
            </div>
            
        )
    }
}

export default Aboutme;
