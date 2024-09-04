"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Header() {
  const { user, error, isLoading } = useUser();
  const pathName = usePathname();
  useEffect(() => {
    console.log(user);
  }, []);
  const navbarCollapse = useRef();
  const openHeaderMenu = () => {
    navbarCollapse.current.classList.toggle("hidden");
    navbarCollapse.current.classList.toggle("flex");
  };
  return (
    <div className="header-2">
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <a href="#" className="font-bold text-xl text-indigo-600">
              Mindmap Flow
            </a>
            <button
              className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              onClick={openHeaderMenu}
            >
              <i className="fas fa-bars" />
            </button>
          </div>
          <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            ref={navbarCollapse}
          >
            <Link
              href="/"
              className={
                pathName === "/"
                  ? `p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600`
                  : `p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300`
              }
            >
              Trang chủ
            </Link>
            <Link
              href="/about"
              className={
                pathName === "/about"
                  ? `p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600`
                  : `p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300`
              }
            >
              Giới thiệu
            </Link>
            <a
              href="feature"
              className={
                pathName === "/feature"
                  ? `p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600`
                  : `p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300`
              }
            >
              Tính năng
            </a>
            <a
              href="/price"
              className={
                pathName === "/price"
                  ? `p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600`
                  : `p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300`
              }
            >
              Bảng giá
            </a>
            <a
              href="/contact"
              className={
                pathName === "/contact"
                  ? `p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600`
                  : `p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300`
              }
            >
              Liên hệ
            </a>
            {user === "undefined" ? (
              <div>
                <a
                  href="/api/auth/login"
                  className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
                >
                  Đăng nhập
                </a>
                <a
                  href="api/auth/login"
                  className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                >
                  Đăng ký
                </a>
              </div>
            ) : (
              <div className="flex algin">
                <p className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">
                  xin chào, {user?.name}
                </p>
                <a
                  href="/api/auth/logout"
                  className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
