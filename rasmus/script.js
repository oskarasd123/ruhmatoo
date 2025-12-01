// Headeri peitmine/kuvamine kerimisel
let lastScroll = 0;
const nav = document.getElementById('nav');
window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) { nav.classList.remove('hidden'); return; }
    currentScroll > lastScroll ? nav.classList.add('hidden') : nav.classList.remove('hidden');
    lastScroll = currentScroll;
});

// Sujuv 'scroll'
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.getElementById(this.getAttribute('href').substring(1));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Mängude kirjeldused
const gameCards = document.querySelectorAll('.game-card');
const gameDescriptionContainer = document.getElementById('game-description');
const gameDescriptionContent = document.getElementById('game-description-content');

const gameDescriptions = {
    'cs2': '<p>Olen CS:GO-st saadik mänginud ja naudin võistlushimu, paremaks ja targemaks saamist ning oma lemmikmängus vastaseid üle trumbates. Ma tahan vaid võistlushimulist mängu mängida, FaceIti grindata – nii ma koolist/elust/jne eemale puhkan ja sellest rõõmu saan, ning CS2 katab selle teema väga hästi. Mängin ka teisi mänge, aga CS2 on minu arvates üks parimaid oma žanris. Peaaegu 1000 tunniga CS-s ei leia ma, et see oleks vähimalgi määral korduv, kuna serveris on alati erinevad mängijad ja nad mängivad täiesti erinevalt ning "nende mängijate lukkude jaoks võtmete" leidmine ongi see, milleks ma siin olen.</p><p>Peale lihtsalt mängimise, meeldib mulle ka väga Counter Strike profi mängimine. Ütleks suisa, et see on pool põhjusest miks ma seda mängu mängin.</p>',
    'wt': '<p>War Thunderi sõidukimudelid on muljetavaldavad, eriti nende detailne ülesehitus, helid ja visuaalne autentsus. Gaijini (selle mängu arendaja) 3D-kunstnikud on oma töös erakordsed – iga sõiduki lähemalt vaatamine toob esile hämmastava tähelepanu detailidele.</p><p>Laevade puhul, kuigi mereväe režiim pole populaarne, on laevamudelites nii palju detaile, et tekil võib näha üksikuid laskureid – see teeb kogemuse tõeliselt elutruuks.</p><p>Mulle meeldib ka, kui realistlikud on kahjustusmudelid. Kui poritiivid purunevad või moonduvad, on see muljetavaldav detail, mida teistes mängudes tihti ei näe. Samuti meeldib, kuidas mootorite helid ja maastik reageerivad raskete sõidukite liikumisvõimekusele, mis on palju realistlikum kui mõnes teises mängus (nt WOT).</p><p>Kuigi mäng pole täiuslik, on seal palju asju, mis mind tõsiselt kõnetavad.</p>',
    'lol': '<p><p>Iga mäng on ainulaadne.</p><p>Seda ei paista ükski mu mitte-League-i sõber mõistvat, kui ütlen, et mänguks on ainult üks põhikoht (nad kõik on harjunud mängima CoD-d 40 kaardi ja DLC-ga).</p><p>Pean neile ütlema, et kuna valida on üle 100 tegelase, palju erinevaid rolle, sadu esemeid, sadu strateegiaid, radade ja oskuste vastasseise jne, on iga mäng tegelikult ainulaadne.</p><p>Ma selgitan seda nii, et CoD puhul, kui oled seda mõnda aega mänginud, jääb mängus samaks kasutatav relv ja hüved. Alguses õpid neid kasutama ja lõpuks kasutad neid enamasti, võib-olla veel ühe relva/hüve abil varukoopiana. League-i puhul on muutumatuteks teguriteks kaart ja sinu roll. Õpid kaarti ja selle toimimist, et seda enda kasuks ära kasutada ja kuidas seda vaenlase vastu kasutada, isegi kui nad kasutavad sama kaarti (nagu hüved). Seejärel õpid ka rolli ja püüad selles püsida, et saada parimaks, mis sa selles oled (nagu relvadega).</p></p>'
};

gameCards.forEach(function(card) {
    card.addEventListener('click', function(e) {
        const gameId = this.getAttribute('data-game');
        
        gameCards.forEach(c => c.classList.remove('active'));
        
        if (gameDescriptionContainer.style.display === 'block' && 
            gameDescriptionContent.innerHTML === gameDescriptions[gameId]) {
            gameDescriptionContainer.style.display = 'none';
        } else {
            this.classList.add('active');
            gameDescriptionContent.innerHTML = gameDescriptions[gameId];
            gameDescriptionContainer.style.display = 'block';
        }
    });
});


