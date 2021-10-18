const session = {
    user: null,
    messages: [],
    Login(email, password){

        this.user = {
            FirstName: 'Admin Mallory',
            LastName: 'Gerosa ',
            Password: password,
            id: 613,
        }
    },
    Signup(){
        
    },
    Logout(){
        this.user=null
    }
};

export default session;