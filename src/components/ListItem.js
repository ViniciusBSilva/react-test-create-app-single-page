import '../App.css'

export default function ListItem(props) {

    return (
        <div>
            <dt>{props.elementKey}</dt>
            <dd>{props.elementValue}</dd>
        </div>
    );

}