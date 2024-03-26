import { Outlet } from 'react-router-dom'


const Dashboardlayoyt = () => {
  return (
  <div>
    (isAdmin ? ( : (
      <div className='h-screen flex items-center justify-center'>
    <Link
    to="/"
    className="btu btu-sx btu-error sm:btu-sm md:btu-md lg:btu-lg"
    >
      You are not an admin! Back to Home
    </Link>
  </div> 
    )))
  </div>
  );
};

export default Dashboardlayoyt