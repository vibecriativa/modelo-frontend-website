import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog"
import { useEffect, useState } from "react"

export function RemoveCookies() {

    const { toast } = useToast()

    const [showModal, setShowModal] = useState(false)
    const [showButton, setShowButton] = useState(false)

    function rejectCookies() {

        window.localStorage.removeItem("cookies")

        toast({
            title: "Cookies removidos",
            description: "Não vamos mais utilizar seus dados até que você nos conceda acesso novamente"
        })

        setShowModal(false)
    }

    useEffect(() => {
        const response = window.localStorage.getItem("cookies")
        if (response == null) {
            setShowButton(false)
        } else {
            setShowButton(true)
        }
    }, [showModal])

    return (
        <>
            {showButton && (
                <Dialog open={showModal} onOpenChange={setShowModal}>
                    <DialogTrigger asChild><Button>Não permitir mais o uso dos meus dados</Button></DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Tem certeza desta ação?</DialogTitle>
                            <DialogDescription className="pt-4">
                                Ao confirmar não poderemos utilizar seus dados para melhorar sua experiência, até que você conceda permissão novamente
                            </DialogDescription>
                        </DialogHeader>
                        <Button onClick={rejectCookies} variant="destructive">Sim, quero remover o uso dos meus dados</Button>
                        <DialogClose asChild><Button variant="ghost" className="w-full">Voltar</Button></DialogClose>
                    </DialogContent>
                </Dialog>
            )}
        </>
    )

}