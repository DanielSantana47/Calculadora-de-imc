"use client"

import { Content } from "@/components/Content"
import { Levels } from "@/components/levels"
import { Powered } from "@/components/powered"
import { ImcProvider } from "@/context/imcContext"

const Page = ()=> {
  return(
    <div className="text-black">
      <div className="container mx-auto py-6 lg:py-20 px-4">
        <ImcProvider>
          <Powered/>
          <div className="flex justify-center gap-5 md:gap-10 flex-col lg:flex-row">
            <Content/>
            <Levels/>
          </div>
        </ImcProvider>
      </div>
    </div>
  )
}

export default Page 