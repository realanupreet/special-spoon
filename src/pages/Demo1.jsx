import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineMenuOpen } from "react-icons/md";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from "react";

const fetchUsers = async () => {
  const { data } = await axios.get('https://freetestapi.com/api/v1/students');
  return data;
};

function Demo1() {

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
      <div className="default-font">
        <div className="navbar bg-base-200 ">
          <div className="container">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={ 0 } role="button" className="btn btn-ghost btn-circle">
                  <HiOutlineMenuAlt2 size={ '1.8em' } />
                </div>
                <ul className="menu bg-base-200 dropdown-content rounded-box w-56">
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
                  <li><a>Report</a></li>
                </ul>
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
        <div className="overflow-hidden grid xs:grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5 container p-4 gap-4 break-all ">
          { users.map(user => (
            <GridItem key={ user.id } user={ user } />
          )) }
        </div>
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
const GridItem = ({ user }) => {
  return (
    <>
      <div className="flex bg-gray-300  w-full rounded-lg p-3  gap-3 justify-between cursor-pointer shadown   transition-all hover:shadow-lg" onClick={ () => document.getElementById(user.id).showModal() }>
        <div className="flex gap-3">
          <ProfileImage seedVal={ user.name } />
          <div className="details">
            <p className="font-semibold">{ user.name }</p>
            <p className="text-gray-800">GPA: { user.gpa }</p>
          </div>
        </div>
        <div className="dropdown " onClick={ (event) => event.stopPropagation() }>
          <div tabIndex={ 0 } role="button" className="btn btn-sm z-[-1000]"><MdOutlineMenuOpen size={ '1.3em' } /></div>
          <ul tabIndex={ 0 } className="dropdown-content menu bg-base-100 rounded-box z-[1000] w-52 p-2 shadow ">
            <li><a>Edit</a></li>
            <li><a>Flag</a></li>
            <li className="z-[1000]"><a>Delete</a></li>
          </ul>
        </div>
      </div>
      <dialog id={ user.id } className="modal ">
        <div className="modal-box bg-gray-300 ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */ }
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
          </form>
          <div className="">
            <div className="flex gap-3">
              <ProfileImage seedVal={ user.name } />
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