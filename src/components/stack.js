import React, { useEffect, Fragment } from 'react'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Aos from 'aos';

const Stack = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
        return (
            <Fragment>
            <div className="container mystack">
            <br/>
                <div className="container">
                    <h3 className="section-heading text-uppercase text-center" style={{fontSize: '55px', color: '#4FBFA8'}}>Stack <i class="fas fa-tools"></i></h3>
                </div>
                <br/>
                <div className="row container" >
                    <div className="col-md-3 stack ">
                        <div className="text-center " style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">Javascript</h2>
                        </div>
                        <i className="fab fa-js " aria-hidden="true" style={{fontSize: '190px',textAlign: 'center', color: '#1583c9', backgroundColor: 'white', width: '100%',}}/>
                        <hr/>
                    </div>
                    <div className="col-md-3 ">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">Python</h2>
                        </div>
                        <i className="fab fa-python " aria-hidden="true" style={{fontSize: '190px', color: '#1583c9', textAlign: 'center', backgroundColor: 'white', width: '100%'}}/>
                        <hr style={{color: 'green'}}/>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">Html5</h2>
                        </div>
                        <i className="fab fa-html5 " aria-hidden="true" style={{fontSize: '190px', color: '#1583c9', textAlign: 'center', backgroundColor: '#white', width: '100%'}}/>
                        <hr/>
                    </div>
                    <div className="col-md-3 ">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">Css3</h2>
                        </div>
                        <i className="fab fa-css3 " aria-hidden="true" style={{fontSize: '190px', color: '#1583c9', textAlign: 'center', backgroundColor: 'white', width: '100%'}}/>
                        <hr/>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-3 stack">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">REAct js</h2>
                        </div>
                        <i className="fab fa-react " aria-hidden="true" style={{fontSize: '190px',textAlign: 'center', color: '#1583c9',  backgroundColor: 'white', width: '100%',}}/>
                        <hr/>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">Vue js</h2>
                        </div>
                        <i className="fab fa-vuejs " aria-hidden="true" style={{fontSize: '190px', color: '#1583c9', textAlign: 'center', backgroundColor: 'white', width: '100%'}}/>
                        <hr/>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">Node js</h2>
                        </div>
                        <i className="fab fa-node-js " aria-hidden="true" style={{fontSize: '190px', color: '#1583c9', textAlign: 'center', backgroundColor: '#white', width: '100%'}}/>
                        <hr/>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">MongoDb</h2>
                        </div>
                        <i className="fas fa-database " aria-hidden="true" style={{fontSize: '190px', color: '#1583c9', textAlign: 'center', backgroundColor: 'white', width: '100%'}}/>
                        <hr/>

                    </div>
                </div>
            <div className="row">
                <div className="col-md-3">
                    
                </div>
                <div className="col-md-3">
                    
                </div>
                <div className="col-md-3">
                    
                </div>
            </div>
            </div>
            </Fragment>
        )
    }


export default Stack;
