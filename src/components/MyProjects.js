import React, { Fragment } from 'react'

const MyProjects = () => {
    return (
        <Fragment>
            <div className="skills-bar">
                <h4>HTML</h4>
                <div class="container">
                    <div class="skills html">95%</div>
                </div>

                <h5>JavaScript</h5>
                <div class="container">
                    <div class="skills js">80%</div>
                </div>

                <h5>CSS</h5>
                <div class="container">
                    <div class="skills css">90%</div>
                </div>
            </div>
        </Fragment>
    )
}

export default MyProjects;