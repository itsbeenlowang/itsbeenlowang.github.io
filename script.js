function copyBitcoinAddress() {
  var btcAddress = document.getElementById('btc-address');
  btcAddress.select();
  document.execCommand('copy');
  alert('Bitcoin address copied!');
}
