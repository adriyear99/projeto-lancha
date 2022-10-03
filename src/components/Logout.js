import React from 'react';
import {GoogleLogout} from 'react-google-login';

//Login google
const clientId = '192988181548-40l8e2h22lc3fsog7augfocd5mnc8c06.apps.googleusercontent.com';

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