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
        <div className={` flex flex-col items-center justify-center rounded-xl ${color}`}>
        <div className={`w-20 h-20 flex items-center justify-center rounded-full bg-black/20 my-4`}><img src={url} className="w-9"/></div>
        <h2 className="text-white font-bold text-2xl mb-4">{mainLabel}</h2>
        <p className="text-white text-sm">IMC está entre {label}</p>
        </div>
        }
        {imcCtx?.imc !== 0 && imcCtx?.imc !== null &&
            <div className={`w-full h-full flex relative flex-col items-center justify-center rounded-xl ${color}`}>
                <div className={`w-24 h-24 flex items-center justify-center rounded-full bg-black/20 my-4`}><img src={url} className="w-14"/></div>
                <h2 className="text-white font-bold text-2xl mb-4">{mainLabel}</h2>
                <p className="text-white text-sm">IMC está entre {label}</p>
                <div onClick={()=>imcCtx?.setImc(0)} className="h-20 w-20 rounded-full bg-blue-400 absolute left-0 -ml-10 flex items-center justify-center hover:bg-blue-500 transition-all cursor-pointer"><img  src="assets/leftarrow.png" className="w-8" alt="" /></div>
            </div>
        }
        </>
    
    )
}