import '../App.css';

export function UserDataSection(props) {

    console.log(props);

    return (

        <section>
            <h2>User Info</h2>
            <div id="userdata">
                <dl>
                    <dt id="lblFullName">Name:</dt>
                    <dd id="fullName">abcd</dd>

                    <dt id="lblUsrName">Username:</dt>
                    <dd id="usrName">abcd</dd>

                    <dt id="lblEmail">Email:</dt>
                    <dd id="email">abcd@abc</dd>
                </dl>
            </div>
        </section>

    );


}
