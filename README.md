# 📸 Photo Blog

Esercizio JavaScript – **Creazione dinamica di un Photo Blog** con immagini caricate da un’API.  
🌐 [Check it out!](https://michecosa.github.io/js-photo-blog/)  
<br>
<br>

## 🧩 Traccia

### Milestone 1  
Riproduzione **statica** della grafica proposta utilizzando solo **HTML e CSS**, concentrandosi su una singola fotografia (puoi usare un’immagine a piacere).  

### Milestone 2  
Tramite **Postman**, è stato testato l’endpoint:  
👉 [https://lanciweb.github.io/demo/api/pictures/](https://lanciweb.github.io/demo/api/pictures/)  

Analizzando la risposta, sono stati studiati i dati ricevuti per capire come sfruttarli nella generazione dinamica della pagina.

### Milestone 3  
Inserito un file **JavaScript** che effettua una **chiamata AJAX** all’API, generando **dinamicamente** una serie di foto all’interno del blog, utilizzando i dati ricevuti dal server.

### Bonus  
- 💡 Pagina **responsive**, con foto disposte una sotto l’altra su mobile e tablet.  
- 🧱 Titolo adattivo con dimensioni adeguate ai vari dispositivi.

<br>
<br>

## 🧠 Ragionamento / Piano di lavoro

### 1. Analisi del problema  
L’obiettivo è creare una **galleria fotografica dinamica** partendo da un layout statico.  
I dati vengono caricati da un’API e trasformati in **elementi HTML** generati via JavaScript.

### 2. Strumenti usati  
- **HTML / CSS** → struttura e stile della pagina  
- **JavaScript (fetch + DOM)** → per la chiamata AJAX e la creazione dinamica degli elementi  
- **Postman** → per testare la risposta dell’API  
- **Google Fonts**:  
  - Titoli → `'Edu Tas Beginner', sans-serif;`  
  - Date → `'Sometype Mono', monospace;`

### 3. Suddivisione in sotto-task
1. Creare il layout **statistico** della pagina con una singola immagine.  
2. Analizzare la risposta dell’API tramite **Postman**.  
3. Scrivere uno script JS per fare la **chiamata AJAX**.  
4. Generare dinamicamente **tutte le foto** ricevute dall’API.  
5. Applicare **responsive design** per mobile e tablet.  
6. Testare il risultato e rifinire i dettagli di stile.

