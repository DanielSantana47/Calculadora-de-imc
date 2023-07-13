import { useContext, useState } from "react"
import { Box } from "./box"
import { ImcContext } from "@/context/imcContext"

export const Levels = ()=> {
    const imcCtx = useContext(ImcContext)

    return(
            <div className="flex flex-1 justify-center">
                {imcCtx?.imc === 0 &&
                <div className="grid grid-cols-2 gap-6 w-full h-full">
                    <Box url="assets/down.png" color="bg-gray-500" mainLabel="Magreza" label="0 e 18,5"/>
                    <Box url="assets/up.png" color="bg-green-400" mainLabel="Normal" label="18,5 e 24,9"/>
                    <Box url="assets/down.png" color="bg-yellow-500" mainLabel="Sobrepeso" label="24,9 e 30"/>
                    <Box url="assets/down.png" color="bg-red-500" mainLabel="Obesidade" label="30 e 99"/>
                </div>
                }
                {imcCtx?.imc !== undefined && imcCtx?.imc !== 0 && imcCtx?.imc > 0 && imcCtx?.imc <= 18.5 &&
                    <Box url="assets/down.png" color="bg-gray-500" mainLabel="Magreza" label="0 e 18,5"/>
                }
                {imcCtx?.imc !== undefined && imcCtx?.imc !== 0 && imcCtx?.imc > 18.5 && imcCtx?.imc <= 24.9 &&
                    <Box url="assets/up.png" color="bg-green-400" mainLabel="Normal" label="18,5 e 24,9"/>
                }
                {imcCtx?.imc !== undefined && imcCtx?.imc !== 0 && imcCtx?.imc > 24.9 && imcCtx?.imc <= 30 &&
                    <Box url="assets/down.png" color="bg-yellow-500" mainLabel="Sobrepeso" label="24,9 e 30"/>
                }
                {imcCtx?.imc !== undefined && imcCtx?.imc !== 0 && imcCtx?.imc > 30 && imcCtx?.imc <= 99 &&
                    <Box url="assets/down.png" color="bg-red-500" mainLabel="Obesidade" label="30 e 99"/>
                }
                {imcCtx?.imc !== undefined && imcCtx?.imc !== 0 && imcCtx?.imc > 99 &&
                    <Box url="assets/laught-face.png" color="bg-purple-800" mainLabel="Você é um brincante mesmo!" label="o das baleias"/>
                }
            </div>
        
            )
}