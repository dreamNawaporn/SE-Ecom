import 

const Navbar = () => {

  const navItem = (
      <>
          <li><a>Home </a></li>
          <li tabIndex={0}>
              <details>
                  <summary>Category</summary>
                  <ul className="p-2">
                      <li><a>All</a></li>
                      <li><a>Clothing</a></li>
                      <li><a>Accessories</a></li>
                      <li><a>Gadgets</a></li>
                      <li><a>Swag</a></li>
                  </ul>
              </details>
          </li>

          <li tabIndex={0}>
              <details>
                  <summary>Service</summary>
                  <ul className="p-2">
                      <li><a>Order Online</a></li>
                      <li><a>Order Tracking</a></li>

                  </ul>
              </details>
          </li>
          <li><a>Promotion</a></li>
      </>
  )
  return (
      <header className='max-w-screen-2x1 container mx-auto fixed top-0 left-0 right-0 translate-all duration-300 ease-in-out'>
          <div className='navbar xl:px-24'>
              <div className="navbar bg-base-100">
                  <div className="navbar-start">
                      <div className="dropdown">
                          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                          </div>
                          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                              {navItem}
                          </ul>
                      </div>
                      <a className="btn btn-ghost text-xl">
                          <img src="/logo.png" alt="" className='h-12 pr-1 mx-auto' />
                          <span className='text-red'>Test </span> SE Souvenir Shop
                      </a>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                      <ul className="menu menu-horizontal px-1">
                          {navItem}
                      </ul>
                  </div>
                  <div className="navbar-end">
                      <button className="btn btn-ghost btn-circle lg:flex mr-3 items-center justify-center hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                      </button>
                      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hidden sm:flex">
                          <div className="indicator">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                              <span className="badge badge-sm indicator-item">8</span>
                          </div>
                      </div>
                      <a className="btn bg-red rounded-full text-white flex items-center gap-2 ">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                          </svg>

                          Contact</a>
                  </div>
              </div>
          </div>
      </header>
  )
}

export default Navbar