const mothData = [
    {
      name: "Garden Tiger Moth",
      scientificName: "Arctia caja",
      region: "Northern Hemisphere",
      image: "image/(MHNT)_Arctia_caja_caja_-_Ciechanow_Poland_-_male_dorsal.jpg",
      wiki: "https://en.wikipedia.org/wiki/Arctia_caja"
    },
    {
      name: "Emperor Moth",
      scientificName: "Saturnia pavonia",
      region: "Europe",
      image: "image/500px-20_petit_paon_de_nuit.jpg",
      wiki: "https://en.wikipedia.org/wiki/Saturnia_pavonia"
    },
    {
      name: "White Ermine",
      scientificName: "Spilosoma lubricipeda",
      region: "Europe and Asia",
      image: "image/500px-Spilosoma_lubricipeda_01.jpg",
      wiki: "https://en.wikipedia.org/wiki/Spilosoma_lubricipeda"
    },
    {
      name: "Deaths-head Hawkmoth",
      scientificName: "Acherontia lachesis",
      region: "Asia",
      image: "image/Acherontia_lachesis_MHNT_Female_Nîlgîri_(Tamil_Nadu)_Dorsal.jpg",
      wiki: "https://en.wikipedia.org/wiki/Acherontia_lachesis"
    },
    {
      name: "Luna Moth",
      scientificName: "Actias luna",
      region: "North America",
      image: "image/Actias_luna.jpg",
      wiki: "https://en.wikipedia.org/wiki/Actias_luna"
    },
    {
      name: "Comet Moth",
      scientificName: "Argema mittrei",
      region: "Madagascar",
      image: "image/Argema_mittrei_female_mounted.jpg",
      wiki: "https://en.wikipedia.org/wiki/Argema_mittrei"
    },
    {
      name: "Atlas Moth",
      scientificName: "Attacus atlas",
      region: "Southeast Asia",
      image: "image/Attacus_atlas.jpg",
      wiki: "https://en.wikipedia.org/wiki/Attacus_atlas"
    },
    {
      name: "Io Moth",
      scientificName: "Automeris io",
      region: "Americas",
      image: "image/Automeris_ioFMPCCA20040704-2974B1.jpg",
      wiki: "https://en.wikipedia.org/wiki/Automeris_io"
    },
    {
      name: "Peppered Moth",
      scientificName: "Biston betularia",
      region: "Europe and North America",
      image: "image/Biston_betularia_male.jpg",
      wiki: "https://en.wikipedia.org/wiki/Biston_betularia"
    },
    {
      name: "Scarlet Tiger Moth",
      scientificName: "Callimorpha dominula",
      region: "Europe",
      image: "image/Callimorpha_dominula_BUND.jpg",
      wiki: "https://en.wikipedia.org/wiki/Callimorpha_dominula"
    },
    {
      name: "Elephant Hawk-Moth",
      scientificName: "Deilephila elpenor",
      region: "Europe and Asia",
      image: "image/Deilephila_elpenor_elpenor_MHNT_CUT_2010_0_229_Vernoux,_Ain,_France_male_dorsal.jpg",
      wiki: "https://en.wikipedia.org/wiki/Deilephila_elpenor"
    },
    {
      name: "Hummingbird Hawk-Moth",
      scientificName: "Macroglossum stellatarum",
      region: "Europe, Asia, North Africa",
      image: "image/Hummingbird_hawk_moth_(Macroglossum_stellatarum).jpg",
      wiki: "https://en.wikipedia.org/wiki/Macroglossum_stellatarum"
    },
    {
      name: "Cecropia Moth",
      scientificName: "Hyalophora cecropia",
      region: "North America",
      image: "image/Hyalophora_cecropia_adult_female.jfif",
      wiki: "https://en.wikipedia.org/wiki/Hyalophora_cecropia"
    },
    {
      name: "Beautiful Hook-tip",
      scientificName: "Laspeyria flexula",
      region: "Europe and Asia",
      image: "image/Laspeyria_flexula_(14836298402).jpg",
      wiki: "https://en.wikipedia.org/wiki/Laspeyria_flexula"
    },
    {
      name: "Zebra Moth",
      scientificName: "Melanchroia chephise",
      region: "Americas",
      image: "image/Melanchroia_chephise.jpg",
      wiki: "https://en.wikipedia.org/wiki/Melanchroia_chephise"
    },
    {
      name: "Polyphemus Moth",
      scientificName: "Antheraea polyphemus",
      region: "North America",
      image: "image/Polyphemus_Moth_Antheraea_polyphemus.JPG",
      wiki: "https://en.wikipedia.org/wiki/Antheraea_polyphemus"
    },
    {
      name: "Rosy Maple Moth",
      scientificName: "Dryocampa rubicunda",
      region: "Eastern North America",
      image: "image/Rosy_Maple_Moth.png",
      wiki: "https://en.wikipedia.org/wiki/Dryocampa_rubicunda"
    },
    {
      name: "Small Magpie",
      scientificName: "Anania hortulata",
      region: "Europe",
      image: "image/Small_magpie_(Anania_hortulata).jpg",
      wiki: "https://en.wikipedia.org/wiki/Anania_hortulata"
    },
    {
      name: "Pine Hawk-Moth",
      scientificName: "Sphinx pinastri",
      region: "Europe and Asia",
      image: "image/Sphinx_pinastri_top_white.jpg",
      wiki: "https://en.wikipedia.org/wiki/Sphinx_pinastri"
    },
    {
      name: "Oleander Hawk-Moth",
      scientificName: "Daphnis nerii",
      region: "Africa, Asia, Mediterranean",
      image: "image/500px-Oleander_Hawk-moth_Daphnis_nerii.jpg", 
      wiki: "https://en.wikipedia.org/wiki/Daphnis_nerii"
    }
  ];
  
  

  function displayMoths(moths) {
    const container = document.getElementById("mothContainer");
    container.innerHTML = "";
  
    moths.forEach(moth => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${moth.image}" alt="${moth.name}" />
        <h3>${moth.name}</h3>
        <p><em>${moth.scientificName}</em></p>
        <p>Region: ${moth.region}</p>
        <a href="${moth.wiki}" target="_blank">Learn More</a>
      `;
      container.appendChild(card);
    });
  }
  