import React, { Component } from 'react'

export class Aboutme extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About me</h2>
                    <h3 className="section-subheading text-muted" style={{fontSize:'18px', marginBottom: '4rem'}}>Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    <div className="col-md-7">
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
                        <button type="submit" class="btn btn-outline-primary" download>
                            <i class="fas fa-file" aria-hidden="true"></i>
                            View CV</button>

                    </div>
                    <div className="col-md-5">
                        <img src="https://cdn.pixabay.com/photo/2021/02/27/16/25/woman-6055084_960_720.jpg" alt="img" style={{width: '65%'}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutme;
