import React from "react";
import Link from "next/link";

const SideMenu = () => {
  return (
    <div className="relative h-full border  border-yellow mt-10 rounded-xl">
      <div className="menu-department-btn relative flex items-center sm:gap-24 gap-4 h-full w-fit">
        {/* You can add other content here if needed */}
      </div>
      <div className="sub-menu-department style-marketplace px-[26px] py-[5px] bg-black rounded-xl border border-line">
        <Link
          href="/shop"
          className="item py-3 whitespace-nowrap border-b border-line w-full flex items-center justify-between"
        >
          <span className="flex items-center gap-2">
            <span className="name">Photography</span>
          </span>
        </Link>
        <Link
          href="/shop"
          className="item py-3 whitespace-nowrap border-b border-line w-full flex items-center justify-between"
        >
          <span className="flex items-center gap-2">
            <span className="name">Videography</span>
          </span>
        </Link>
        <Link
          href="/shop"
          className="item py-3 whitespace-nowrap border-b border-line w-full flex items-center justify-between"
        >
          <span className="flex items-center gap-2">
            <span className="name">Drones</span>
          </span>
        </Link>
        <Link
          href="/shop/breadcrumb-img"
          className="item py-3 whitespace-nowrap border-b border-line w-full flex items-center justify-between"
        >
          <span className="flex items-center gap-2">
            <span className="name">Audio</span>
          </span>
        </Link>
        <Link
          href="/shop/breadcrumb-img"
          className="item py-3 whitespace-nowrap border-b border-line w-full flex items-center justify-between"
        >
          <span className="flex items-center gap-2">
            <span className="name">Bags & Cases</span>
          </span>
        </Link>
        <Link
          href="/shop/breadcrumb-img"
          className="item py-3 whitespace-nowrap border-b border-line w-full flex items-center justify-between"
        >
          <span className="flex items-center gap-2">
            <span className="name">Tripods</span>
          </span>
        </Link>
        <Link
          href="/shop"
          className="item py-3 whitespace-nowrap border-b border-line w-full flex items-center justify-between"
        >
          <span className="flex items-center gap-2">
            <span className="name">Lights</span>
          </span>
        </Link>
        <Link
          href="/shop/breadcrumb-img"
          className="item py-3 whitespace-nowrap border-b border-line w-full flex items-center justify-between"
        >
          <span className="flex items-center gap-2">
            <span className="name">Computers</span>
          </span>
        </Link>
        <Link
          href="/shop/breadcrumb-img"
          className="item py-3 whitespace-nowrap w-full flex items-center justify-between"
        >
          <span className="flex items-center gap-2">
            <span className="name">Headphones</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
