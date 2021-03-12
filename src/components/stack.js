import React, { Component } from 'react'

export class Stack extends Component {
    render() {
        return (
            <div className="container">
                            <br/>

                <div className="text-center">
                    <h2 className="section-heading text-uppercase" style={{fontSize: '55px'}}>Stack</h2>
                </div>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-3 stack">
                    <div className="text-center" style={{color:'grey'}}>
                        <h2 className="section-heading text-uppercase">Javascript</h2>
                    </div>
                        <i className="fab fa-js " aria-hidden="true" style={{fontSize: '190px',textAlign: 'center', color: '#1583c9', textAlign: 'center', backgroundColor: 'white', width: '100%',height:'100%'}}/>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">Python</h2>
                        </div>
                        <i className="fab fa-python " aria-hidden="true" style={{fontSize: '190px', color: '#1583c9', textAlign: 'center', backgroundColor: 'white', width: '100%'}}/>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">Html5</h2>
                        </div>
                        <i className="fab fa-html5 " aria-hidden="true" style={{fontSize: '190px', color: '#1583c9', textAlign: 'center', backgroundColor: '#white', width: '100%'}}/>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">Css3</h2>
                        </div>
                        <i className="fab fa-css3 " aria-hidden="true" style={{fontSize: '190px', color: '#1583c9', textAlign: 'center', backgroundColor: 'white', width: '100%', height: '100%'}}/>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-3 stack">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">REAct js</h2>
                        </div>
                        <i className="fab fa-react " aria-hidden="true" style={{fontSize: '190px',textAlign: 'center', color: '#1583c9', textAlign: 'center', backgroundColor: 'white', width: '100%',height:'100%'}}/>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">Vue js</h2>
                        </div>
                        <i className="fab fa-vuejs " aria-hidden="true" style={{fontSize: '190px', color: '#1583c9', textAlign: 'center', backgroundColor: 'white', width: '100%'}}/>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">Node js</h2>
                        </div>
                        <i className="fab fa-node-js " aria-hidden="true" style={{fontSize: '190px', color: '#1583c9', textAlign: 'center', backgroundColor: '#white', width: '100%'}}/>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">MongoDb</h2>
                        </div>
                        <i className="fas fa-database " aria-hidden="true" style={{fontSize: '190px', color: '#1583c9', textAlign: 'center', backgroundColor: 'white', width: '100%', height: '100%'}}/>
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
        )
    }
}

export default Stack;
