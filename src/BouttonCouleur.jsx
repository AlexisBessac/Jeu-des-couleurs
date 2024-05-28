export default function BouttonCouleur(props) {
    return (
        <button onClick={props.onClick}>{props.couleur}</button>
    )
}