import React, { useRef } from 'react'
const Header = () => {
  const searchEle = useRef(null)
  const menu = useRef(null)
  const links = useRef(null)
  // remove class active from menu if screen width <= 991px
  if (window.screen.width <= 991) {
    menu.current.classList.remove('active')
  }
  console.log(window.screen.width);
  const handelClickShowMenu = (ev) => {
    const menuDisplay = menu.current.classList.contains('active')
    menu.current.classList.toggle('active')
    ev.target.classList.toggle('fa-bars')
    ev.target.classList.toggle('fa-xmark')
    if (menuDisplay) {
      searchEle.current.style.display = 'none'
      links.current.style.display = 'none'
    } else {
      searchEle.current.style.cssText = `
        display: flex;
      `
      links.current.style.cssText = `
        display: flex;
      `;
    }
  }

  return (
    <header>
      <div className='container'>
        <div className='header-parent'>
          <div className='logo'>
            <h1>AXflash</h1>
          </div>
          <div ref={menu} className='menu'>
            <button className='show-menu' onClick={handelClickShowMenu} ><i className="fa-solid fa-bars"></i></button>
            <div ref={searchEle} className='search'>
              <input type='text' placeholder='Enter a product name' />
              <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <ul ref={links} >
              <li><a>Home</a></li>
              <li><a>Shop</a></li>
              <li><a>Collection</a></li>
              <li><a>Page</a></li>
              <li><a>Blog</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header