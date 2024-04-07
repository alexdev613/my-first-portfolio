export function formatCep(value: string): string {
    const cep = value.replace(/\D/g, '');
    const match = cep.match(/^(\d{5})(\d{3})$/);

    if (match) {
        return `${match[1]}-${match[2]}`;
    }
    return value;
}

export function handleKeyCepPress(event: React.KeyboardEvent<HTMLInputElement>): void {
    const { charCode } = event;
    const validChars = '0123456789-';

    if (validChars.indexOf(String.fromCharCode(charCode)) === -1) {
        event.preventDefault();
    }
}

export function isCompleteCEP(cep: string): boolean {
    return cep.replace(/\D/g, '').length === 8;
}

export function isCEPValid(cep: string): boolean {
    const cepPattern = /^[0-9]{5}-?[0-9]{3}$/;
    return cepPattern.test(cep);
}
