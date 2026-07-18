export const WHATSAPP_NUMBER = "5547996958399";

// Linha de atendimento 24h usada no widget de chat flutuante
export const SUPPORT_WHATSAPP_NUMBER = "5547999995003";

export function whatsappLink(message: string, number: string = WHATSAPP_NUMBER): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
