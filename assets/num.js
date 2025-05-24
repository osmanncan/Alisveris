let urunler = [];
let urunsayisi = Number(prompt('Kac adet urun giriceksiniz:'));

for ( let i = 0; i < urunsayisi; i++) {
    let urun = prompt(`${i + 1}. Alisveris listesini giriniz: `);
    urunler.push(urun);    
}

console.log("Urun listesi:", urunler);
console.log(`Listede ${urunsayisi} Bulunmaktadir.`);






