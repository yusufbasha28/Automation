import amazonlogin from "../page/amazonlogin";

describe('Amazon login application', () => {
    it('should login with valid credentials', () => {
        amazonlogin.login();
    })
}),

describe('Amazon invalid login', () => {
    it('should login with invalid credentials', () => {
        amazonlogin.invalidalogin();
    })
});