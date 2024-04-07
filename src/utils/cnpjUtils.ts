export function formatCNPJ(value: string): string {
    const cnpj = value.replace(/\D/g, ''); // Remove tudo o que não é dígito

    // Expressão regular (regex) para a máscara do CNPJ
    const match = cnpj.match(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/); // Separa em grupos de 2, 3, 3, 4 e 2 dígitos
  
    if (match) {
        return `${match[1]}.${match[2]}.${match[3]}/${match[4]}-${match[5]}`; // Adiciona os pontos, barra e hífen
    }
  
    return value;
}

export function validateCNPJ(cnpj: string): boolean {
    cnpj = cnpj.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
  
    // Se o CNPJ não tiver 14 dígitos, retorna falso
    if (cnpj.length !== 14) return false;
  
    // Valida primeiro dígito verificador:
    let soma = 0;
    let peso = 2;
  
    for (let i = 11; i >= 0; i -= 1) {
        soma += parseInt(cnpj.charAt(i), 10) * peso;
        peso = peso === 9 ? 2 : peso + 1;
    }
  
    const digitoVerificador1 = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  
    if (digitoVerificador1 !== parseInt(cnpj.charAt(12), 10)) return false;
  
    // Valida segundo dígito verificador:
    soma = 0;
    peso = 2;
  
    for (let i = 12; i >= 0; i -= 1) {
        soma += parseInt(cnpj.charAt(i), 10) * peso;
        peso = peso === 9 ? 2 : peso + 1;
    }
  
    const digitoVerificador2 = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  
    if (digitoVerificador2 !== parseInt(cnpj.charAt(13), 10)) return false;
  
    return true;
}

export function handleKeyCnpjPress(
    event: React.KeyboardEvent<HTMLInputElement>
): void {
    const { key } = event;
    const validChars = '0123456789./-'; // Caracteres válidos para um CNPJ
  
    if (validChars.indexOf(key) === -1) {
        event.preventDefault(); // Impede que o caractere seja digitado
    }
}
