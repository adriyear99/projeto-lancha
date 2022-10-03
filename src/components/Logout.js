import React from 'react';
import {GoogleLogout} from 'react-google-login';

//Login google
const clientId = '192988181548-p5adg3se24ecfkcrv6bdtnfkjj9l040j.apps.googleusercontent.com';

function Logout() {
    const onSucess = () => {
        console.log('Logout successfull');
    };
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSucess}
                ></GoogleLogout>
        </div>
    );
}

export default Logout;