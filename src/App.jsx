import { useState } from "react";
import './App.css'
import CarreCouleur from './CarreCouleur.jsx';
import BouttonCouleur from './BouttonCouleur.jsx';
import TexteVictoire from './TexteVictoire.jsx';
import Score from './Score.jsx';


function generateRandomColor() {
 let n = (Math.random() * 0xfffff * 1000000).toString(16);
 return '#' + n.slice(0, 6);
}


function getRandomIndex(min=0, max=2) {
 return Math.floor(Math.random() * (max + 1 - min) + min);
}


function App() {
 const [couleurCarre, setCouleurCarre] = useState('#98E5A4');
 const [couleurs, setCouleurs] = useState(['#98E5A4', '#765432', '#9E6A5F']);
 const [victoire, setVictoire] = useState(null);
 const [nbGagnes, setNbGagnes] = useState(0);
 const [nbPerdus, setNbPerdus] = useState(0);


 const handleClick = (couleur) => {
   console.log(couleur, couleurCarre);
   const victoire = couleur === couleurCarre;


   if (victoire) {
     const newColor = generateRandomColor();
     setCouleurCarre(newColor);
     setNbGagnes(nbGagnes + 1);


     const newCouleurs = [
       generateRandomColor(),
       generateRandomColor(),
       generateRandomColor(),
     ]
     newCouleurs[getRandomIndex()] = newColor;
     setCouleurs(newCouleurs);
   } else {
     setNbPerdus(nbPerdus + 1);
   }
   setVictoire(victoire);
 }


 return (
   <>
     <CarreCouleur couleur={couleurCarre} />
     <div>
       <BouttonCouleur
         couleur={couleurs[0]}
         onClick={() => handleClick(couleurs[0])}
       />
       <BouttonCouleur
         couleur={couleurs[1]}
         onClick={() => handleClick(couleurs[1])}
       />
       <BouttonCouleur
         couleur={couleurs[2]}
         onClick={() => handleClick(couleurs[2])}
       />
     </div>
      <TexteVictoire victoire={victoire} />
     <Score nbGagnes={nbGagnes} nbPerdus={nbPerdus} />
   </>
 )
}


export default App;


