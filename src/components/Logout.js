import React from 'react';
import {GoogleLogin} from 'react-google-login';

//Login google
const clientId = '192988181548-te20gaop068vuc487hrqvs3mqiv615fj.apps.googleusercontent.com'

function Logout() {
    const onSucess = (res) => {
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