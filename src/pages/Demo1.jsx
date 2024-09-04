import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineMenuOpen } from "react-icons/md";
function Demo1() {

  return (
    <>
      <div className="navbar bg-base-200 ">
        <div className="container">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={ 0 } role="button" className="btn btn-ghost btn-circle">
                <HiOutlineMenuAlt2 size={ '1.8em' } />
              </div>
              {/* <ul
              tabIndex={ 0 }
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
            </ul> */}
              {/* my stuff */ }
              <ul className="menu bg-base-200 dropdown-content rounded-box w-56">
                <li><a>Item 1</a></li>
                <li>
                  <details open>
                    <summary>Parent</summary>
                    <ul>
                      <li><a>Submenu 1</a></li>
                      <li><a>Submenu 2</a></li>
                    </ul>
                  </details>
                </li>
                <li><a>Item 3</a></li>
              </ul>
              {/* end stuff */ }
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl">Student App</a>
          </div>
          <div className="navbar-end">
          </div>
        </div>
      </div>
      <div className="bg-base-300">
        <div className="container">
          <div className="btn btn-ghost hover:bg-transparent hover:scale-105 ">About</div> |
          <div className="btn btn-ghost hover:bg-transparent hover:scale-105">Our Mission</div> |
          <div className="btn btn-ghost hover:bg-transparent hover:scale-105">Contact Us</div>
        </div>
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 container p-4 gap-4 break-all ">
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </div>
    </>
  );
}

export default Demo1;

const ProfileImage = ({ seedVal, size = 28 }) => {
  return (
    <div className="">
      <div className={ `bg-clip-border w-20 h-20 rounded-xl bg-gray-400` }>
        <div className="w-full h-full rounded-xl " style={ {
          backgroundImage: `url('https://api.dicebear.com/9.x/lorelei/svg?seed=${seedVal}&size=${size * 4}')`,
          backgroundPosition: "center",
        } }></div>
      </div>
    </div>
  )
}
const GridItem = () => {
  return (
    <>
      <div className="flex bg-gray-300 sm:w-fit md:w-full rounded-lg p-3  gap-3 justify-between">
        <ProfileImage seedVal="adsn" />
        <div className="details">
          <p className="font-semibold">Name</p>
          <p className="text-gray-800">GPA: 4.5</p>
        </div>
        <details className="dropdown">
          <summary className="btn  btn-sm "><MdOutlineMenuOpen size={ '1.3em' } /></summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>Edit</a></li>
            <li><a>Flag</a></li>
            <li><a>Delete</a></li>
          </ul>
        </details>
      </div>
    </>
  )
}