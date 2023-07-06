        function copyToClipboard() {
            const bitcoinAddress = document.getElementById('bitcoin-address');
            const textarea = document.createElement('textarea');
            textarea.value = bitcoinAddress.textContent;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('Bitcoin address copied to clipboard!');
        }