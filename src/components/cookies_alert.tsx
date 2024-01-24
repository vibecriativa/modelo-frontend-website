import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import GoogleTagManager from "@/components/google_tag_manager";

export function CookiesAlert() {

    const [cookies, setCookies] = useState<string | null>("")

    function acceptCookies() {
        localStorage.setItem("cookies", JSON.stringify(true))
        setCookies("true")
    }

    function rejectCookies() {
        localStorage.setItem("cookies", JSON.stringify(false))
        setCookies("false")
    }

    useEffect(() => {
        const response = window.localStorage.getItem("cookies")
        if (response !== null) {
            setCookies(String(response))
        } else {
            setCookies(null)
        }
    }, [])

    if (cookies === 'true') {
        return (
            <GoogleTagManager measurementId="GTM-" />
        )
    }

    if (cookies === 'false') {
        return <></>
    }

    if (cookies == null) {
        return (
            <div className="w-[98%] left-1/2 transform -translate-x-1/2 py-6 px-6 md:w-[432px] fixed right-3 bottom-12 md:translate-x-0 md:left-auto md:bottom-2 bg-white shadow-2xl rounded-lg z-50">
                <strong className="text-sm font-medium text-slate-900 mb-4 block">🍪 Podemos usar Cookies?</strong>
                <p className="text-xs leading-relaxed font-normal text-slate-600 mb-6">Queremos sua permissão para utilizar alguns dados para fins de marketing, você pode ler sobre quais dados usamos na nossa <a href="/politica_de_privacidade" className="font-medium underline text-slate-900">Política De Privacidade</a></p>
                <div className="flex gap-4">
                    <Button className="px-[0.875rem_!important] h-9 text-xs" onClick={acceptCookies}>Aceitar o uso</Button>
                    <Button variant="ghost" onClick={rejectCookies} className="px-[0.875rem_!important] h-9 text-xs" >Rejeitar</Button>
                </div>
            </div>
        )
    }

    return <></>
}