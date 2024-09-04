import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineMenuOpen } from "react-icons/md";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from "react";

const fetchUsers = async () => {
  const { data } = await axios.get('https://freetestapi.com/api/v1/students');
  return data;
};

function generateRandomGradient() {
  const colors = [];
  for (let i = 0; i < 2; i++) {
    colors.push(`rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.1)`);
  }
  return colors.join(", ");
}

function Demo2() {

  const { data: users, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return <div className="text-center">Loading users...</div>;
  }

  if (isError) {
    return <div className="text-center text-red-500">Error: { error.message }</div>;
  }

  return (
    <>
      <div className="inter-font bg-red-500/10">
        <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
          <div className="container">
            <div className="navbar-start">
              <div className="drawer">
                <input id="my-drawer-main" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                  {/* Page content here */ }
                  <label htmlFor="my-drawer-main" className="btn  drawer-button"><HiOutlineMenuAlt2 size={ '1.8em' } /></label>
                </div>
                <div className="drawer-side">
                  <label htmlFor="my-drawer-main" aria-label="close sidebar" className="drawer-overlay"></label>
                  <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */ }
                    <li><a>Dashboard</a></li>
                    <li>
                      <details open>
                        <summary>Courses</summary>
                        <ul>
                          <li><a>Mathematics</a></li>
                          <li><a>Science</a></li>
                        </ul>
                      </details>
                    </li>
                    <li><a>Dashboard</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="navbar-center">
              <a className="btn btn-ghost text-xl bg-base-100 hover:bg-base-200">Student App</a>
            </div>
            <div className="navbar-end">
            </div>
          </div>
        </div>
        <div className="bg-base-100">
          <div className="container">
            <div className="btn btn-ghost hover:bg-transparent hover:scale-105 ">About</div> |
            <div className="btn btn-ghost hover:bg-transparent hover:scale-105">Our Mission</div> |
            <div className="btn btn-ghost hover:bg-transparent hover:scale-105">Contact Us</div>
          </div>
        </div>
        <div className="overflow-hidden grid xs:grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5 container p-4 gap-4 break-all ">
          { users.map(user => (
            <GridItem key={ user.id } user={ user } />
          )) }
        </div>
      </div >
    </>
  );
}

export default Demo2;

const ProfileImage = ({ seedVal, size = 24 }) => {
  return (
    <>
      <div className="">
        <div className={ `size-20 rounded-lg object-cover ` }>
          <div className="w-full h-full rounded-xl " style={ {
            backgroundImage: `url('https://api.dicebear.com/9.x/open-peeps/svg?seed=${seedVal}&size=${size * 4}&backgroundColor=b6e3f4,c0aede,d1d4f9&face=smileBig,smile,smileLOL,eatingHappy')`,
            backgroundPosition: "center",
          } }></div>
        </div>
      </div>
    </>
  )
}
const GridItem = ({ user }) => {
  return (
    <>
      <div
        className="flex  w-full rounded-lg p-3  gap-3 justify-between cursor-pointer shadown   transition-all hover:shadow-lg" onClick={ () => document.getElementById(user.id).showModal() }
        style={ { background: `linear-gradient(to right, ${generateRandomGradient()})` } }
      >
        <div className="flex gap-3">
          <ProfileImage seedVal={ user.name } />
          <div className="details">
            <p className="text-lg/tight font-medium text-gray-900">{ user.name }</p>
            <p className="mt-0.5 text-gray-700">GPA: { user.gpa }</p>
          </div>
        </div>
      </div>
      <dialog id={ user.id } className="modal ">
        <div className="modal-box bg-gray-100 " >
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
          </form>
          <div className="">
            <div className="flex gap-3">
              <div className="flex flex-col gap-2">
                <ProfileImage seedVal={ user.name } />
                <button className="btn btn-sm">Edit</button>
                <button className="btn btn-sm">Flag</button>
                <button className="btn btn-sm">Delete</button>
              </div>
              <div className="details font-semibold">
                <p className=""><span className="text-gray-800 font-normal">Name: </span> { user.name }</p>
                <p className=""><span className="text-gray-800 font-normal">GPA:</span> { user.gpa }</p>

                <p className="">
                  <span className="text-gray-800 font-normal">Email: </span><a href={ `mailto:${user.email}` }> { user.email }</a>
                </p>
                <p className="mt-1"><span className="text-gray-800 font-normal">Studies:</span> { user.courses.map((course, index) => {
                  return <div key={ index } className="inline-flex text-gray-400 font-normal break-normal bg-gray-800 rounded-full px-2 py-1 m-1 whitespace-nowrap"> { course } </div>
                }) }</p>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog >
    </>
  )
}