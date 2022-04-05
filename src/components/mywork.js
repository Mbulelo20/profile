import React, { Component, Fragment } from 'react'
// import {Button} from 'react-bootstrap';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Film from '../images/film.png'
import Gitgetter from '../images/gitapp.png'
import Gallery from '../images/gallery.jpg'

export class Mywork extends Component {
    componentDidMount = () => {
        Aos.init({duration: 1000});
      }
    render() {
        return (
            <Fragment>
                <div className="container">
                    <br/>
                    <div className="text-center">
                        <h1 className="masthead-heading" style={{color:'#777', fontFamil: 'Roboto'}}>My Work</h1>
                    </div>
                    <br/>
                    <br/>
                    <div className="row" data-aos="zoom-in">
                        <div className="col-md-4">
                            <div className="containerI" style={{width: "85%", color: 'white', minHeight:'250px'}}>
                                <div>
                                <img src={Film} alt="Avatar" className="image" style={{minHeight: '250px'}}/>
                                </div>
                                
                                <div className="overlay">
                                    <div className="container text-center">
                                        <br/><br/>
                                            <h3>Movies Gallery</h3>
                                            <h6>Quickly find the latest info, release dates and more on trending movies by easily searching.</h6>
                                            <br/>
                                            <div>
                                                <btn style={{margin: '2px'}}>
                                                    <a href="https://github.com/Mbulelo20/Movie-Gallery.git" rel="noopener noreferrer" target="_blank" className="btn"  style={{backgroundColor: '#4FBFA8', borderRadius: '0rem',borderColor: '#4FBFA8', color: 'white'}}>GitHub link</a>                        
                                                </btn>
                                                <btn  style={{margin: '2px'}} >
                                                    <a href="https://moviesgalleri.netlify.app/" rel="noopener noreferrer" target="_blank" className="btn"  style={{backgroundColor: '#4FBFA8', borderRadius: '0rem',borderColor: '#4FBFA8', color: 'white'}}>Website</a>                        
                                                </btn>
                                            </div>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="containerI" style={{width: "85%", color: 'white', minHeight:'250px'}}>
                                <div>
                                    <img src={Gallery} alt="Avatar" className="image" style={{minHeight: '250px'}}/>
                                </div>
                                <div className="overlay">
                                    <div className="container text-center">
                                        <br/><br/>
                                        <h3>Photo Gallery</h3>
                                        <h5>Register and login and <br/>save your favorite <br/>photos</h5>
                                        <br/>
                                        <div>
                                            <btn style={{margin: '2px'}}>
                                                <a href="https://github.com/Mbulelo20/memorysKeeper.git" rel="noopener noreferrer" target="_blank" className="btn"  style={{backgroundColor: '#4FBFA8', borderRadius: '0rem',borderColor: '#4FBFA8', color: 'white'}}>GitHub link</a>                        
                                            </btn>
                                            <btn  style={{margin: '2px'}} >
                                                <a href="https://mbulelophotos.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="btn"  style={{backgroundColor: '#4FBFA8', borderRadius: '0rem',borderColor: '#4FBFA8', color: 'white'}}>Website</a>                        
                                            </btn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="containerI" style={{width: "85%", color: 'white', minHeight:'250px'}}>
                                <div>
                                    <img src={Gitgetter} alt="Avatar" className="image" style={{minHeight: '275px'}}/>
                                </div>
                                <div className="overlay">
                                    <div className="container text-center">
                                        <br/><br/>
                                        <h3>GitGetter</h3>
                                        <h5>Search for other github users</h5>
                                        <br/>
                                        <div>
                                            <btn style={{margin: '2px'}}>
                                            <a href="https://github.com/Mbulelo20/profile.git" rel="noopener noreferrer" target="_blank" className="btn" style={{backgroundColor: '#4FBFA8', borderRadius: '0rem',borderColor: '#4FBFA8', color: 'white'}}>GitHub link</a>                        
                                            </btn>
                                            <btn  style={{margin: '2px'}} >
                                            <a href="https://gitgetter.netlify.app/" rel="noopener noreferrer" target="_blank" className="btn"  style={{backgroundColor: '#4FBFA8', borderRadius: '0rem',borderColor: '#4FBFA8', color: 'white'}}>Website</a>                        
                                            </btn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    <br/>
                   
                </div>
                
                
            </Fragment>
            
        )
    }
}

export default Mywork
