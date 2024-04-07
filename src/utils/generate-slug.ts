export function generateSlug(text: string): string {
    return text
        .toLowerCase() // Converter para minúsculas
        .normalize("NFD") // Normalizar caracteres unicode (remover acentos)
        .replace(/[\u0300-\u036f]/g, "") // Remover caracteres acentuados
        .replace(/[^\w\s]/gi, '') // Remover símbolos
        .replace(/\s+/g, '-') // Substituir espaços por hífens
        .replace(/-{2,}/g, '-') // Remover múltiplos hífens seguidos
        .trim(); // Remover espaços em branco das bordas
}