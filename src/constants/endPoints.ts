const REACT_APP_BASE_URL:string = "http://localhost:5000";
export const endPoints = {
    singINURL:REACT_APP_BASE_URL+"/auth/signin",
    signUpURL:REACT_APP_BASE_URL+"/auth/signup",
    authURL:REACT_APP_BASE_URL+"/auth/auth",
    uploadPost:REACT_APP_BASE_URL+"/post/create",
    getPost:REACT_APP_BASE_URL+"/post"
}