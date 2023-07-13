"use client"

import { Content } from "@/components/Content"
import { Levels } from "@/components/levels"
import { Powered } from "@/components/powered"
import { ImcProvider } from "@/context/imcContext"

const Page = ()=> {
  return(
    <div className="text-black">
      <div className="container mx-auto py-20">
        <ImcProvider>
          <Powered/>
          <div className="flex justify-center gap-10">
            <Content/>
            <Levels/>
          </div>
        </ImcProvider>
      </div>
    </div>
  )
}

export default Page 