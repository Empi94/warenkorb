# warenkorb
Spezifikation
Autor Mateusz Pryszmont
Programmseite
• Abruf von document queryselector die ich für Herstellung für meinen Warenkorb Programm benötige
• Erstellung von Klassen für Produktmodell und Warenkorbmodell
• In const products werden neue Produkte erstellt
• In Funktion addProduct werden Produkte mit foreach schleife in products array iteriert und mit hilfe von addProduct.InnerHTML in index.html implementiert.
• Funktion updateCart sorgt um Aktualisierung von:
1. Produkten in Warenkorb
2. Gesamtbetrag
3. Gesamtbetrag mit Rabatt
• In Funktion addToCart wird mithilfe von IF-Anweisung und method map und some geprüft, ob Produkt sich schon in Warenkorb befindet, wenn ja
o es würd nur der Anzahl und Betrag aktualiesiert
Else
o es würde mithilfe von method find nach richtigen Produkt gesucht und dann zum const item gespeichert
am Ende die Funktion werden die Informationen mit hilfe von method push als Objekte zum Array basket geschickt
• Die Funktion changeAmount mithilfe von Tasten ändert der Anzahl und der Betrag von Produkten.
• Funktion deleteItem löscht ausgewählten richtigen Produkt.
• Die Funktion Payment mit hilfe von foreach Schleife bildet den Gesamtbetrag an.
• Funktion discountGenerator generiert ein Gutscheincode
• Die Funktion totalCart bildet den gesamten Betrag mit Rabatt an.
Browserseite
•	Mit Taste Hinzufügen werden Produkte zum Warenkorb hinzugefügt
•	Mit links und rechts Pfeilen werde Anzahl von Produkt ausgewählt
•	Mit taste check dein Gutschein werde ein zufällige Gutscheincode zum Warenkorb hinzugefügt und die Taste kaufen beendet dem Kauf.
Die Bilder sind aus pixabay.com und benötigen keine License.
