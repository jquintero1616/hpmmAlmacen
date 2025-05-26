import React from "react";
import HpmmLogo from "../../assets/HpmmLogin.png";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import {
  TicketIcon,
  UserGroupIcon,
  Square2StackIcon,
  RectangleGroupIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronDownIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

export function Sidebar() {
  const [open, setOpen] = React.useState(0);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const LIST_ITEM_STYLES =
    "flex items-center gap-3 px-3 py-3 rounded-md cursor-pointer hover:bg-gray-100 transition text-gray-700";

  return (
    <div className="h-[calc(100vh-2rem)] w-full max-w-[20rem] mx-auto p-4 shadow-md bg-white flex flex-col">
      <div className="mb-3 flex flex-col items-center justify-center gap-2 p-4">
        <img
          src={HpmmLogo}
          alt="brand"
          className="h-20 w-27 object-contain"
        />
        <span className="text-lg font-bold text-purple-700"></span>
      </div>
      <hr className="my-1 border-gray-300" />
      <ul className="flex-1">
        {/* User Accordion */}
        <li
          className={`${LIST_ITEM_STYLES} font-semibold`}
          onClick={() => handleOpen(1)}
        >
          <img
            src="https://www.material-tailwind.com/img/avatar1.jpg"
            alt="avatar"
            className="h-5 w-5 rounded-full"
          />
          Brooklyn Alice
          <ChevronDownIcon
            className={`h-4 w-4 ml-auto text-gray-500 transition-transform ${
              open === 1 ? "rotate-180" : ""
            }`}
          />
        </li>
        {open === 1 && (
          <ul className="ml-12">
            <li className={LIST_ITEM_STYLES}>My Profile</li>
            <li className={LIST_ITEM_STYLES}>Settings</li>
          </ul>
        )}
        <hr className="my-2 border-gray-00" />
        {/* Dashboard Accordion */}
        <li
          className={LIST_ITEM_STYLES}
          onClick={() => handleOpen(2)}
        >
          <RectangleGroupIcon className="h-5 w-5 text-purple-700" />
          Kardex
          <ChevronDownIcon
            className={`h-4 w-4 ml-auto text-gray-500 transition-transform ${
              open === 2 ? "rotate-180" : ""
            }`}
          />
        </li>
        {open === 2 && (
          <ul className="ml-10">
            <li className={LIST_ITEM_STYLES}>
              <Square2StackIcon className="h-5 w-5 text-purple-700" />
              Fusiones
            </li>
          </ul>
        )}
        <li className={LIST_ITEM_STYLES}>
          <Square2StackIcon className="h-5 w-5 text-purple-700" />
          Almacen
        </li>
        <li className={LIST_ITEM_STYLES}>
          <TicketIcon className="h-5 w-5 text-purple-700" />
          Pactos
        </li>
        <li className={LIST_ITEM_STYLES}>
          <UserGroupIcon className="h-5 w-5 text-purple-700" />
          Proveedores
        </li>
        <li className={LIST_ITEM_STYLES}>
          <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-purple-700" />
          Reportes
        </li>
        <li className={LIST_ITEM_STYLES} onClick={handleLogout}>
          <ArrowLeftStartOnRectangleIcon className="h-5 w-5 text-purple-700" />
          Cerrar sesión
        </li>
      </ul>
      <div className="mt-4">
        <span className="mt-5 font-medium text-gray-500 flex justify-center text-sm">
          v1.0.0
        </span>
      </div>
    </div>
  );
}