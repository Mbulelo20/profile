import React from 'react'

const Skills = () => {
    return (
        <div className="demo-grid-ruler">
            <div class="container">
                <h4 style={{fontFamily: 'cursive', fontWeight:'bold', color:'black'}}><center>...But what I do have are a very particular set of skills.</center></h4>
                <div class="bar back advanced" data-skill="Python"></div>
                <div class="bar front expert" data-skill="CSS"></div>
                <div class="bar front expert" data-skill="HTML5"></div>
                <div class="bar front advanced" data-skill="JavaScript"></div>
                <div class="bar back learning" data-skill="C#"></div>
            </div>
        </div>
    )
}

export default Skills;