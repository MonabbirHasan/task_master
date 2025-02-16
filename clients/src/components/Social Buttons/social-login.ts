// import React from "react";
// import { GoogleLogin } from "react-google-login";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
// import Button from "@mui/material/Button";
// import GoogleIcon from "@mui/icons-material/Google";
// import FacebookIcon from "@mui/icons-material/Facebook";

// const SocialLogin = ({ onGoogleSuccess, onGoogleFailure, onFacebookResponse }) => {
//     return (
//         <div>
//             {/* Google Login */}
//             <GoogleLogin
//                 clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
//                 buttonText="Login with Google"
//                 onSuccess={onGoogleSuccess}
//                 onFailure={onGoogleFailure}
//                 cookiePolicy={"single_host_origin"}
//                 render={(renderProps) => (
//                     <Button
//                         variant="outlined"
//                         color="primary"
//                         startIcon={<GoogleIcon />}
//                         fullWidth
//                         style={{ marginBottom: "1rem" }}
//                         onClick={renderProps.onClick}
//                         disabled={renderProps.disabled}
//                     >
//                         Login with Google
//                     </Button>
//                 )}
//             />

//             {/* Facebook Login */}
//             <FacebookLogin
//                 appId={process.env.REACT_APP_FACEBOOK_APP_ID}
//                 autoLoad={false}
//                 fields="name,email,picture"
//                 callback={onFacebookResponse}
//                 render={(renderProps) => (
//                     <Button
//                         variant="outlined"
//                         color="primary"
//                         startIcon={<FacebookIcon />}
//                         fullWidth
//                         style={{ marginBottom: "1rem" }}
//                         onClick={renderProps.onClick}
//                     >
//                         Login with Facebook
//                     </Button>
//                 )}
//             />
//         </div>
//     );
// };

// export default SocialLogin;
