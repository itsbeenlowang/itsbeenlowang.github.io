document.addEventListener('DOMContentLoaded', function() {
    const bitcoinCopyButton = document.querySelector('.bitcoin-copy-button');
    const usdtCopyButton = document.querySelector('.usdt-copy-button');

    if (bitcoinCopyButton && usdtCopyButton) {
        bitcoinCopyButton.addEventListener('click', function() {
            copyToClipboard('bitcoin-address');
        });

        usdtCopyButton.addEventListener('click', function() {
            copyToClipboard('usdt-address');
        });
    } else {
        console.error('Copy buttons not found.');
    }

    function copyToClipboard(addressId) {
        const addressElement = document.getElementById(addressId);

        if (addressElement) {
            const textarea = document.createElement('textarea');
            textarea.value = addressElement.textContent;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert(`${addressId.toUpperCase()} address copied to clipboard!`);
        } else {
            alert(`Invalid address ID: ${addressId}`);
        }
    }
});
