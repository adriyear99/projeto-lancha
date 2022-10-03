import React from 'react';
import {GoogleLogin} from 'react-google-login';

//Login google
const clientId = '192988181548-te20gaop068vuc487hrqvs3mqiv615fj.apps.googleusercontent.com'

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