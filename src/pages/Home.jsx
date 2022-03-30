import React from 'react'
import Mbulelo from '../images/mbulelobg2.png'

const Home = () => {
  return (
    <div className="container">
                <div className="row">
                    <div className="col-md-6">
                            <img src={Mbulelo} alt="img" style={{width: '650px', margin: '0.3rem'}}/>
                    </div>
                    <br/>
                    <div className="col-md-6" style={{marginTop:'2em'}}>
                        <hr className="line" style={{border: '2px solid', borderRadius: '5px', width: '24%'}}/>
                        <div className="heading">
                            <p>
                                <h4>Junior Web Developer</h4>
                            </p>
                        </div>
                        <div className="tags" style={{ backgroundColor:'#E7E9EB', borderRadius:'10px'}}>Javascript</div>
                        <div className="heading">
                            <p>
                                <h1>Mbulelo Pani</h1>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Home