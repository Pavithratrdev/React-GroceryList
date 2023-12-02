import React from 'react'

const Header = (props) => {

  return (
    <header>
        <h1>{props.title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title : "Groceries"
}

export default Header