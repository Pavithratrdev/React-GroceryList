import React from 'react'

const Footer = ({length}) => {
    return (
    <footer>
        <p>
           {length} List {length > 1 ? "Items" : "Item"}
        </p>
    </footer>
  )
}

export default Footer