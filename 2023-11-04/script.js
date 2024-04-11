class GeldLade {
    constructor() {
      this.inhalt = 0;
    }
  
    scannen(artikel) {
      return artikel.preis;
    }
  
    bezahlen(betrag, artikel) {
      if (betrag < this.scannen(artikel)) {
        throw new Error(`Mehr Geld benötigt: Fehlbetrag ${this.scannen(artikel) - betrag} €.`);
      }
      this.inhalt = this.scannen(artikel);
      const rueckgeld = betrag - this.scannen(artikel);
      console.log(`Rechnung: ${this.scannen(artikel)} €, Rückgeld: ${rueckgeld} €`);
    }
  
    toString() {
      return `Heute ${this.inhalt} € eingenommen.`;
    }
  }
  
  const artikel = { name: "Cola", preis: 1.89 };
  const geldlade = new GeldLade();
  
  try {
    geldlade.bezahlen(1.88, artikel);
  } catch (error) {
    console.error(error.message);
  }

 