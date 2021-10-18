const session = {
    user: null,
    messages: [],
    Login(email, password){

        this.user = {
            FirstName: 'Moshe',
            LastName: 'pl',
            Password: password,
            id: 613,
        }
    },
    Signup(){
        
    }
};

export default session;