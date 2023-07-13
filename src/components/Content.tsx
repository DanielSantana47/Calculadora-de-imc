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
            <h1 className="text-5xl text-zinc-600 font-bold mb-10">Calcule o seu IMC.</h1>
            <p className="text-lg text-zinc-400 mb-16">IMC é a sigla para índice da massa corpórea, parâmetro adotado pela Organização Mundial da Saúde para calcular o peso ideal de cada pessoa</p>
            <input
            type="number"
            className="outline-none bg-none border-b p-3 border-zinc-300 w-full mb-8 text-zinc-500 hover:border-blue-400 hover:placeholder:text-blue-400 hover:text-blue-400 focus:border-blue-400 transition-all"
            placeholder="Digite sua altura. Ex: 1.5 (em métros)"
            onChange={e=>setHeightInput(e.target.value)}
            value={heightInput}
            />
            <input 
            type="number"
            className="spin outline-none bg-none border-b p-3 border-zinc-300 w-full mb-8 text-zinc-500 hover:border-blue-400 hover:text-blue-400 hover:placeholder:text-blue-400 focus:border-blue-400 transition-all" 
            placeholder="Digite o seu peso. Ex: 47.7 (em kg)"
            onChange={e=>setWeightInput(e.target.value)}
            value={weightInput}
            />
            <button onClick={   handleCalcButton} className="w-full py-3 text-white bg-blue-400 rounded-lg mt-10 hover:bg-blue-500 transition-all">Calcular</button>
        </div>
    )
}