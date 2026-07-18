"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// TODO: crie uma conta gratuita em https://formspree.io, crie um formulário
// e substitua "SEU_FORM_ID" pelo ID que eles derem (ex: "mgvzaobc").
const FORMSPREE_ENDPOINT = "https://formspree.io/f/SEU_FORM_ID";

const schema = z.object({
  name: z.string().min(2, "Nome obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(8, "Telefone obrigatório"),
  interest: z.string().min(1, "Selecione um interesse"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm({ propertyName }: { propertyName?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormValues) {
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({ ...data, source: propertyName ?? "site" }),
      });
      if (res.ok) {
        setStatus("sent");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-afs-navy/10 bg-white p-6 text-center">
        <p className="font-semibold text-afs-navy">Recebemos seu contato!</p>
        <p className="mt-1 text-sm text-afs-navy/70">
          Vamos responder em breve. Se preferir, fale com a gente agora pelo WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-lg border border-afs-navy/10 bg-white p-6">
      <div>
        <Input placeholder="Nome" {...register("name")} />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>
      <div>
        <Input placeholder="Email" type="email" {...register("email")} />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <Input placeholder="WhatsApp" {...register("phone")} />
        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
      </div>
      <div>
        <Select onValueChange={(v) => setValue("interest", v)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Tenho interesse em..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="comprar">Comprar um imóvel</SelectItem>
            <SelectItem value="vender">Anunciar/vender meu imóvel</SelectItem>
            <SelectItem value="investir">Investir</SelectItem>
            <SelectItem value="outro">Outro</SelectItem>
          </SelectContent>
        </Select>
        {errors.interest && <p className="mt-1 text-xs text-red-600">{errors.interest.message}</p>}
      </div>
      <Textarea placeholder="Mensagem (opcional)" {...register("message")} />
      <Button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-afs-navy text-afs-cream hover:bg-afs-navy/90"
      >
        {status === "sending" ? "Enviando..." : "Enviar"}
      </Button>
      {status === "error" && (
        <p className="text-xs text-red-600">
          Não conseguimos enviar agora. Fale direto pelo WhatsApp usando o botão no canto da tela.
        </p>
      )}
    </form>
  );
}
