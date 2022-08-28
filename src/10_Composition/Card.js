// import React from 'react'

// function Card({ heading, footer,children}) {
//   return (
//     <div className='card'>
//       <div className="card-header">{heading}</div>
//       <div className="card-body">{children}</div>
//       <div className="card-footer">{footer}</div>
//     </div>
//   )
// }

// export default Card


import React from 'react'

function Card({ heading, footer, className, headerClassName, bodyClassName, footerClassName,children}) {
  return (
    <div className={`card ${className}`}>
      <div className={`card-header ${headerClassName}`}>{heading}</div>
      <div className={`card-header ${bodyClassName}`}>{children}</div>
      <div className={`card-header ${footerClassName}`}>{footer}</div>
    </div>
  )
}
Card.defaultProps = {
  className: "",
  headerClassName: "",
  bodyClassName: "",
  footerClassName: "",
}
export default Card