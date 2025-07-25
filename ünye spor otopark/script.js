function openWhatsApp() {
    const phone = "+905xxxxxxxxx"; // numaranı buraya yaz
    const message = encodeURIComponent("Merhaba, Ünye Spor Otopark hakkında bilgi almak istiyorum.");
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
  }
  
// Online ödeme için plaka ile borç sorgulama

document.addEventListener('DOMContentLoaded', function() {
  const plakaForm = document.getElementById('plakaForm');
  const borcSonuc = document.getElementById('borcSonuc');
  const plakaGoster = document.getElementById('plakaGoster');
  const borcMiktar = document.getElementById('borcMiktar');

  // Örnek plaka-borç verisi
  const borcVeri = {
    '52ABC123': 120,
    '34XYZ789': 80,
    '06DEF456': 45
  };

  if (plakaForm) {
    plakaForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const plaka = document.getElementById('plaka').value.trim().toUpperCase();
      plakaGoster.textContent = plaka;
      let borc = borcVeri[plaka] !== undefined ? borcVeri[plaka] : 0;
      borcMiktar.textContent = borc.toFixed(2);
      borcSonuc.style.display = 'block';
    });
  }
});
  