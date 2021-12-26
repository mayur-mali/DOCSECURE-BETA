import React from "react";
import { GoHome } from "react-icons/go";
import { GoDashboard } from "react-icons/go";
import { BiWalletAlt } from "react-icons/bi";
import ReactTooltip from "react-tooltip";

import { GiProgression } from "react-icons/gi";
import { IoAnalytics } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function Adminsidebar(props) {
  const [profilemenu, setProfileMenu] = React.useState(false);
  return (
    <div className="z-50">
      <div
        className={
          " capitalize sidebar-wrapper h-full bg-white border-r-2 shadow-md" +
          (props.sidebar
            ? " md:w-20 md:block hidden"
            : "  w-64 animate__fadeInLeft")
        }
      >
        <div
          className={
            "fixed h-full sidebar-wrapper " +
            (props.sidebar ? " md:w-20" : "  w-64 ")
          }
        >
          <div className="flex justify-center items-center h-16">
            {!props.sidebar && (
              <div className="flex-shrink-0">
                <h2 className="lg:block hidden text-3xl text-black w-auto">
                  ProTuple
                </h2>
              </div>
            )}
            {props.sidebar && (
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            )}
          </div>
          <div className="h-full ">
            <div
              className={
                "px-3 py-3 flex  items-center  bg-opacity-25" +
                (props.sidebar ? " justify-center" : " justify-start")
              }
            >
              {!props.sidebar && (
                <h3 className="font-bold animate__fadeIn text-black">
                  Dashboard
                </h3>
              )}
              {props.sidebar && (
                <GoDashboard className="text-2xl font-semibold text-white" />
              )}
            </div>
            <div className="px-2 pt-2 space-y-4">
              <Link
                className={
                  "bg-white hover:bg-gray-200 hover:text-black text-gray-500 group flex items-center px-2  text-sm font-medium rounded-md" +
                  (props.sidebar ? " flex-col py-3" : " flex-row py-2")
                }
                onClick={(e) => {
                  e.preventDefault();
                  props.setOpenTab(1);
                }}
                data-toggle="tab"
                to="#link1"
                role="tablist"
                data-tip-disable={props.sidebar ? "false" : "true"}
                data-tip="home"
              >
                <GoHome
                  className={"text-2xl " + (props.sidebar ? " mr-0" : " mr-2")}
                />
                <span
                  className={
                    props.sidebar ? "  hidden" : " block animate__fadeIn"
                  }
                >
                  home
                </span>
              </Link>
              <ReactTooltip />
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  props.setOpenTab(2);
                }}
                data-toggle="tab"
                to="#link2"
                role="tablist"
                data-tip-disable={props.sidebar ? "false" : "true"}
                data-tip="anaylitics"
                className={
                  "bg-white hover:bg-gray-200 hover:text-black text-gray-500 group flex items-center px-2  text-sm font-medium rounded-md" +
                  (props.sidebar ? " flex-col py-3" : " flex-row py-2")
                }
              >
                <IoAnalytics
                  className={"text-2xl " + (props.sidebar ? " mr-0" : " mr-2")}
                />
                <span
                  className={
                    props.sidebar ? "  hidden" : " block animate__fadeIn"
                  }
                >
                  anaylitics
                </span>
              </Link>
              <ReactTooltip />
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  props.setOpenTab(3);
                }}
                data-toggle="tab"
                to="#link3"
                data-tip-disable={props.sidebar ? "false" : "true"}
                data-tip="salse"
                role="tablist"
                className={
                  "bg-white hover:bg-gray-200 hover:text-black text-gray-500 group flex items-center px-2  text-sm font-medium rounded-md" +
                  (props.sidebar ? " flex-col py-3" : " flex-row py-2")
                }
              >
                <GiProgression
                  className={"text-2xl " + (props.sidebar ? " mr-0" : " mr-2")}
                />
                <span
                  className={
                    props.sidebar ? "  hidden" : " block animate__fadeIn"
                  }
                >
                  salse
                </span>
              </Link>
              <ReactTooltip />
            </div>
            <div
              className={
                "py-3 px-2 absolute lg:hidden flex bottom-0 w-full" +
                (props.sidebar ? " justify-center" : " justify-between")
              }
            >
              <div className="flex items-center space-x-2">
                <button
                  className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none"
                  id="user-menu"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={() => setProfileMenu(!profilemenu)}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    alt=""
                  />
                </button>

                <span
                  className={
                    "font-bold text-md" + (props.sidebar ? " hidden" : " block")
                  }
                >
                  Mayur Mali
                </span>
              </div>
              {profilemenu && (
                <div className="origin-top-right bottom-20 absolute left-5 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    Your Profile
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    Settings
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    Sign out
                  </Link>
                </div>
              )}
              <div
                className={
                  "flex items-center p-2 bg-blue-600 space-x-2 rounded-xl" +
                  (props.sidebar ? " hidden" : " block")
                }
              >
                <BiWalletAlt className="text-white text-xl" />
                <span className="text-md text-white">1000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
