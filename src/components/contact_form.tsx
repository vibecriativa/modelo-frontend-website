import { useToast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

const createFormSchema = z.object({
    name: z.string().nonempty("Inserir o nome é obrigatório"),
    email: z.string().nonempty("Inserir o email é obrigatório").email("O email que você digitou não é válido"),
    subject: z.string().nonempty("Inserir o assunto é obrigatório"),
    message: z.string().nonempty("Inserir a mensagem é obrigatório"),
})

type FormData = z.infer<typeof createFormSchema>

export function ContactForm() {
    const { toast } = useToast()
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(createFormSchema)
    });

    function sendMessage(data: FormData) {
        toast({
            title: "Mensagem enviada 🎉",
            description: "Fique de olho na sua caixa de e-mail, iremos te responder em breve"
        })
        return data
    }

    return (
        <form onSubmit={handleSubmit(sendMessage)} className="lg:w-4/12 w-full space-y-6 border border-slate-100 py-8 px-8 rounded-md">
            <p className="text-lg text-slate-950">Fale conosco</p>
            <Input label="Nome" {...register("name")} placeholder="Nome" error={errors.name?.message} />
            <Input label="Email" {...register("email")} placeholder="Email" error={errors.email?.message} helperText="nome@gmail.com"/>
            <Input label="Assunto" {...register("subject")} placeholder="Assunto" error={errors.subject?.message}/>
            <Textarea label="Messagem" {...register("message")} placeholder="Mensagem..." error={errors.message?.message}/>
            <Button>Enviar mensagem</Button>
        </form>
    )
}