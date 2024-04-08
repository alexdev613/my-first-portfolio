export function formatTelephone(value: string): string {
    const telephone = value.replace(/\D/g, '');
    const match = telephone.match(/^(\d{2})(\d{0})(\d{5})(\d{4})$/);

    if (match) {
        return `(${match[1]})${match[2]} ${match[3]}-${match[4]}`;
    }
    return value;
}

export function handleKeyTelephonePress(event: React.KeyboardEvent<HTMLInputElement>): void {
    const { charCode } = event;
    const validChars = '0123456789()- ';

    if (validChars.indexOf(String.fromCharCode(charCode)) === -1) {
        event.preventDefault();
    }
}
