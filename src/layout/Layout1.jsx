import React from 'react'

function Layout1({children}) {
  return (
    <div>
<nav>Nav</nav>
<main>{children}</main>
<footer>Footer</footer>
    </div>
  )
}

export default Layout1