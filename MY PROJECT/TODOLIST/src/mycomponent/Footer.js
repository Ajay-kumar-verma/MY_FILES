import React from 'react'


export const Footer = () => {

let footerstyle={
    position: "fixed",
    bottom: "0",
    width: "100%",
    border:"2px solid red"
}

    return (
        <footer className="bg-dark  text-light"  
       style={footerstyle}  >
           <p    className="text-center py-1"> Copyright &copy; https://www.todos.com </p>
        </footer>
    )
}
