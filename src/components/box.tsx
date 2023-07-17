import { ImcContext } from "@/context/imcContext"
import { useContext } from "react"


type Props = {
    url: string,
    color: string,
    mainLabel: string,
    label: string
}

export const Box = ({url, color, mainLabel, label}: Props)=> {
    const imcCtx = useContext(ImcContext)

    return(
        <>
        {imcCtx?.imc === 0 &&
        <div className={` flex flex-col items-center justify-center rounded-xl px-2 md:px-0 ${color}`}>
            <div className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-black/20 my-4`}><img src={url} className="w-7 md:w-9"/></div>
            <h2 className="text-white font-bold text-xl md:text-2xl mb-4">{mainLabel}</h2>
            <p className="text-white text-xs text-center md:text-sm mb-4">IMC está entre {label}</p>
        </div>
        }
        {imcCtx?.imc !== 0 && imcCtx?.imc !== null &&
            <div className={`flex-1 flex relative flex-col items-center justify-center rounded-xl mt-3 py-10 lg:py-0 ${color}`}>
                <div className={`w-24 h-24 flex items-center justify-center rounded-full bg-black/20 my-4`}><img src={url} className="w-14"/></div>
                <h2 className="text-white font-bold text-2xl lg:text-4xl mb-4">{mainLabel}</h2>
                <p className="text-white mb-8 text-sm lg:text-xl">Seu IMC é de <strong>{imcCtx?.imc.toFixed(2)} kg/m²</strong></p>
                <p className="text-white text-xs lg:text-lg">IMC está entre {label}</p>
                <div onClick={()=>imcCtx?.setImc(0)} className="lg:h-16 lg:w-16 h-12 w-12 rounded-full bg-blue-400 absolute top-0 -mt-6 lg:left-0 lg:top-1/2 lg:-ml-8 flex items-center justify-center hover:bg-blue-500 transition-all cursor-pointer"><img  src="assets/leftarrow.png" className="lg:w-7 w-4" alt="" /></div>
            </div>
        }
        </>
    
    )
}