import { ImcContext } from "@/context/imcContext"
import { useContext, useState } from "react"


export const Content = ()=> {
    const imcCtx = useContext(ImcContext)

    const [heightInput, setHeightInput] = useState<string>('')
    const [weightInput, setWeightInput] = useState<string>('')

    const handleCalcButton = ()=> {
        if (weightInput !== '' && heightInput !== ''){
            imcCtx?.setImc(parseFloat(weightInput) / (parseFloat(heightInput) * parseFloat(heightInput)))
            console.log(imcCtx?.imc)
        }
    }
    return(
        <div className={`flex-1 ${imcCtx?.imc !== 0 ? 'bg-white/20': ''}`}>
            <h1 className=" text-3xl text-zinc-600 font-bold mb-6 sm:mb-10 sm:text-5xl">Calcule o seu IMC.</h1>
            <p className="text-sm text-zinc-400 mb-6 sm:mb-16 sm:text-lg">IMC é a sigla para índice da massa corpórea, parâmetro adotado pela Organização Mundial da Saúde para calcular o peso ideal de cada pessoa</p>
            <input
            type="number"
            className="outline-none text-sm sm:text-lg bg-none border-b p-3 border-zinc-300 w-full mb-4 sm:mb-8 text-zinc-500 hover:border-blue-400 hover:placeholder:text-blue-400 hover:text-blue-400 focus:border-blue-400 disabled:bg-white disabled:opacity-50 disabled:border-zinc-300 disabled:text-zinc-500 transition-all"
            placeholder="Digite sua altura. Ex: 1.5 (em metros)"
            onChange={e=>setHeightInput(e.target.value)}
            value={heightInput}
            disabled={imcCtx?.imc !== 0 && imcCtx?.imc !== null? true : false}
            />
            <input 
            type="number"
            className="spin outline-none text-sm sm:text-lg bg-none border-b p-3 border-zinc-300 w-full mb-4 sm:mb-8 text-zinc-500 hover:border-blue-400 hover:text-blue-400 hover:placeholder:text-blue-400 focus:border-blue-400 disabled:bg-white disabled:opacity-50 disabled:border-zinc-300 disabled:text-zinc-500 transition-all" 
            placeholder="Digite o seu peso. Ex: 47.7 (em kg)"
            onChange={e=>setWeightInput(e.target.value)}
            value={weightInput}
            disabled={imcCtx?.imc !== 0 && imcCtx?.imc !== null? true : false}
            />
            <button onClick={handleCalcButton} disabled={imcCtx?.imc !== 0 && imcCtx?.imc !== null? true : false} className="w-full py-3 text-white bg-blue-400 rounded-lg mt-4 sm:mt-10 hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-400 transition-all">Calcular</button>
        </div>
    )
}