export default function TexteVictoire(props) {
    if (props.victoire === null) {
      return null;
    }
   
   
    if (props.victoire) {
      return <p>Vous avez gagné</p>
    }
   
   
    if (!props.victoire) {
      return <p>Vous avez perdu</p>
    }
   }
   