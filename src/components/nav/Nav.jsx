import { NavLink } from "react-router-dom";
// import { search } from "../header/Header";
import { useContext, useState } from "react";
// import Home from "../../pages/home/Home";
// import { search } from "../header/Header";
import { SearchData } from "../../context/SearchContext";

// const searchData = (val) => {
//   // searchFilter(val);
//   Home(val);
// };

const Nav = () => {
  // const [search, setSearch] = useState("");

  // searchData = search;
  const { setSearch } = useContext(SearchData);

  return (
    <>
      <div className="flex-1">
        <NavLink to="/">
          <figure className="w-48">
            <img src="../public/logo-black-trans.png" alt="" />
          </figure>
        </NavLink>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            onInput={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
