function copyToClipboard(elementId) {
    const addressElement = document.getElementById(elementId);

    if (addressElement) {
        const textarea = document.createElement('textarea');
        textarea.value = addressElement.textContent;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert(`${elementId.toUpperCase()} address copied to clipboard!`);
    } else {
        alert(`Invalid element ID: ${elementId}`);
    }
}
