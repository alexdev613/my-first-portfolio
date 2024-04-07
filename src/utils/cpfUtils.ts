export function validateCPF(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]+/g, '');
  
    if (cpf.length !== 11) return false;
  
    // Valida primeiro dígito verificador
    let soma = 0;
  
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
  
    const digitoVerificador1 = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  
    if (digitoVerificador1 !== parseInt(cpf.charAt(9))) return false;
  
    // Valida segundo dígito verificador
    soma = 0;
  
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
  
    const digitoVerificador2 = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  
    if (digitoVerificador2 !== parseInt(cpf.charAt(10))) return false;
  
    return true;
}

export function formatCPF(value: string): string {
    const cpf = value.replace(/\D/g, '');
    const match = cpf.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
  
    if (match) {
        return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
    }
  
    return value;
}

export function handleKeyCPFPress(event: React.KeyboardEvent<HTMLInputElement>): void {
    const { key } = event;
    const validChars = '0123456789.-';
  
    if (validChars.indexOf(key) === -1) {
        event.preventDefault();
    }
}
