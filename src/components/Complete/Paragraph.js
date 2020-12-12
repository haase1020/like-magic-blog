import React from "react"


const Paragraph = ({children}) => {
  return (
    <p
      style={{
          fontSize: "1.5rem",
        margin: "1.5rem 0",
       
        color: "var(--clr-grey-5)",
      }}
    >
      {children}
    </p>
  )
}

export default Paragraph 
