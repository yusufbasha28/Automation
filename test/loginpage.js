import userlogin from "../page/userlogin";


describe('my Login application', () => {
    it('should login with valid credentials', () => {
        userlogin.validlogin();
    });
    it('should login with invalid credentials', () => {
        userlogin.invalidlogin();
    })

}),

    describe('customize using some methods', () => {
        it('should drag and drop', () => {
            userlogin.Dragmethod();
        })
        it('should open checkboxes', () => {
            userlogin.chckmethod();
        })
        it('should scroll', () => {
            userlogin.scrollmethod();
        })
        it('should add and remove', () => {
            userlogin.addndDelete();
        })
        it('should login the page', () => {
            userlogin.formmethod();
        })
        it('should secure the file', () => {
            userlogin.securemethod();
        })
        it('should dropdown the options', () => {
            userlogin.dropDownmethod();
        })
        it('should retrieve a password', () => {
            userlogin.forgetpasswordmethod();
        })
        it('should popup a message', () => {
            userlogin.basicauthmethod();
        })
        it('should notify me', () => {
            userlogin.notificationmethod();
        })
        it('should redirect the link', () => {
            userlogin.redirectlinkmethod();
        });
        it('should appload a file', () => {
            userlogin.upploadmethod("./vijaypic.jpg");
        })
        it('should open a new window', () => {
            userlogin.multiwindowmethod();
        })

    });

    //describe('check the privacypolicy for chromedriver', () => {
        //it('should search for prpolicy', () => {
            //userlogin.searchmethod();
        //})
    //});



