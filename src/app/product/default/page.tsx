"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { ProductType } from "@/type/ProductType";
import productData from "@/data/Product.json";
import TopNavOne from "@/components/Home/TopNavOne";
import ShopMainMenu from "@/components/Shop/ShopMainMenu";
import Default from "@/components/Product/Default";

const ProductDefault = () => {
  const searchParams = useSearchParams();
  let productId = searchParams.get("id");

  if (productId === null) {
    productId = "1";
  }

  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      />
      <div id="header" className="relative w-full">
        <ShopMainMenu />
      </div>
      <Default data={productData} productId={productId} />
    </>
  );
};

export default ProductDefault;
