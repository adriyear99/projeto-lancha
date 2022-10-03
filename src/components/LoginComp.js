import React from 'react';
import {GoogleLogin} from 'react-google-login';

//Login google
const clientId = '192988181548-p5adg3se24ecfkcrv6bdtnfkjj9l040j.apps.googleusercontent.com';

function Login() {
    const onSucess = (res) => {
        console.log('[Login success] currentUser:', res.profileObj);
    };
    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };
    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSucess={onSucess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{marginTop: '100px'}}
                isSignedIn={true}
            />      
        </div>
    );
}

export default Login;