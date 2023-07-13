import { ReactNode, createContext, useState } from "react";

type ContextProps = {
    imc: number
    setImc: (n: number)=> void
}

export const ImcContext = createContext<ContextProps | null >(null)

export const ImcProvider = ({children}: {children: ReactNode})=> {
    const [imc, setImc] = useState<number>(0)
    return(
        <ImcContext.Provider value={{imc, setImc}}>
            {children}
        </ImcContext.Provider>
    )
}