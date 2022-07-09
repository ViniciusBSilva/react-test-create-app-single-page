import '../App.css';
import ListItem from './ListItem';

function appendItens(jsonElement) {

    const itens = [];

    for (const key in jsonElement) {
        if (typeof jsonElement[key] !== "object") {
            itens.push(
                <ListItem
                    key={key.id}
                    elementKey={key}
                    elementValue={jsonElement[key]}
                />);
        } else {
            itens.push(...appendItens(jsonElement[key]));
        }
    }

    return itens;

}

export function UserDataSection(props) {

    const itens = appendItens(props.data);

    return (

        <section>
            <h2>User Info</h2>
            <div id="userdata">
                <dl>
                    {itens}
                </dl>
            </div>
        </section>

    );


}
