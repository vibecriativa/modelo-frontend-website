import { useState } from "react"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
    const [showMenuMobile, setshowMenuMobile] = useState(false)
    return (
        <nav className="py-3 border-b border-slate-200 bg-white sticky top-0">
            <div className="container flex justify-between items-center">
                <a href="/"><img src="/logo.svg" /></a>
                <ul className={`-translate-y-full lg:translate-y-0 ${showMenuMobile && "translate-y-0"} top-0 lg:static lg:p-0 lg:flex-row flex flex-col fixed left-0 bg-white w-full lg:w-auto py-20 -z-[1] px-8 lg:gap-0 gap-10`}>
                    <li><a href="/" className="text-sm lg:px-4 py-2 w-full lg:w-auto block">Início</a></li>
                    <li><a href="/sobre" className="text-sm lg:px-4 py-2 w-full lg:w-auto block">Sobre nós</a></li>
                    <li><a href="/blog" className="text-sm lg:px-4 py-2 w-full lg:w-auto block">Blog</a></li>
                    <li><a href="/contato" className="text-sm lg:px-4 py-2 w-full lg:w-auto block">Entrar em contato</a></li>
                </ul>
                <Button variant="ghost" size="sm" className="md:hidden" aria-label={!showMenuMobile ? "Abrir menu": "Fechar menu"} 
                onClick={()=> setshowMenuMobile(!showMenuMobile)}>
                    <span className="text-sm mr-2">Menu</span> {!showMenuMobile ? (<Menu/>): <X />}</Button>
            </div>
        </nav>
    )
}