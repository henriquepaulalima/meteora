'use client'

import HomeBanner from "@/components/Home/HomeBanner/HomeBanner";
import HomeCategories from "@/components/Home/HomeCategories/HomeCategories";
import HomeProducts from "@/components/Home/HomeProducts/HomeProducts";

export default function Home() {
  return (
    <section>
      <HomeBanner />
      <HomeCategories />
      <HomeProducts />
    </section>
  )
}