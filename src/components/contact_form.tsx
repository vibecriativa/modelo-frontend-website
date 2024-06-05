
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from "sonner"
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import type { AxiosError } from "axios";
import { client } from "@/lib/react-query";
import type { APIResponse } from "@/global_types/api-response";
import { ClientURL } from "@/utils/project_data";

const createFormSchema = z.object({
    name: z.string().nonempty("Inserir o nome é obrigatório"),
    email: z.string().nonempty("Inserir o email é obrigatório").email("O email que você digitou não é válido"),
    tel: z.string().nonempty("Inserir o telefone é obrigatório"),
    msg: z.string().nonempty("Inserir a mensagem é obrigatório"),
    subject: z.string().optional()
})

type FormData = z.infer<typeof createFormSchema>

async function sendFormAPI(data: FormData) {
    const payload = {
        data: {
            ...data
        }
    };
    const response = await api.post('contact/sendEmail', payload);
    return response.data;
}

export function ContactForm() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(createFormSchema),
        defaultValues: {
            subject: `Contato | ${ClientURL}`
        }
    });

    const { mutateAsync, isPending } = useMutation<APIResponse, AxiosError, FormData>({
        mutationFn: (data) => sendFormAPI(data),
        onSuccess: (data) => {
            if (data.status === 201) {
                reset()
                toast.success("Mensagem enviada 🎉", {
                    description: "Fique de olho na sua caixa de e-mail, iremos te responder em breve"
                });
            }
        },
        onError: () => {
            toast.error("Ops! Ocorreu algum erro", {
                description: "Tente novamente em breve",
            });
        }
    }, client)


    function sendForm(data: FormData) {
        mutateAsync(data)
    }

    return (
        <form onSubmit={handleSubmit(sendForm)} className="w-full grid gap-4 rounded-md">
            <Input {...register("name")} placeholder="Digitar nome" error={errors?.name?.message} className="md:col-auto col-span-2" />
            <Input {...register("email")} placeholder="Digitar email" error={errors?.email?.message} className="md:col-auto col-span-2" />
            <Input {...register("tel")} className="col-span-2" placeholder="Digitar telefone" error={errors?.tel?.message} />
            <Input type="textarea" className="col-span-2" {...register("msg")} placeholder="Digitar mensagem" error={errors?.msg?.message} />
            <div className="flex justify-end  col-span-2">
                <Button className="w-full">{isPending ? "Enviando mensagem..." : "Enviar mensagem"}</Button>
            </div>
        </form>
    );
}