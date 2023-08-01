'use client'

import HomePage from "@/components/Home/HomePage";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <HomePage />
    </RecoilRoot>
  )
}