import React from 'react'

const Skills = () => {
    return (
        <div className="demo-grid-ruler">
            <div class="container" style={{backgroundColor:'lightblue'}}>
                <h4 style={{fontFamily: 'cursive', fontWeight:'bold', color:'black'}}><center>"...what I do have are a very particular set of skills."</center></h4>
                <div className="bar front expert" data-skill="CSS"></div>
                <div className="bar front expert" data-skill="HTML5"></div>
                <div className="bar front js" data-skill="JavaScript"></div>
                <div className="bar back advanced" data-skill="Python"></div>
                <div className="bar back learning" data-skill="C#" ></div>
            </div>
        </div>
    )
}

export default Skills;