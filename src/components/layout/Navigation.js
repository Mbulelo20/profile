import React from 'react'

export default function Navigation() {
    return (
        <Navigation bg="light" expand="lg">
  <Navigation.Brand href="#home">React-Bootstrap</Navigation.Brand>
  <Navigation.Toggle aria-controls="basic-Navigation-nav" />
  <Navigation.Collapse id="basic-Navigation-nav">
    <Navigation className="mr-auto">
      <Navigation.Link href="#home">Home</Navigation.Link>
      <Navigation.Link href="#link">Link</Navigation.Link>
      
    </Navigation>
    
  </Navigation.Collapse>
</Navigation>
    )
}
