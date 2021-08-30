import demoutility from "../utilities/demoutility";
import amazonloc from "../pageobjects/amazonloc";
import logindata from "../testdata/logindata";
import url from "../url";



class Login2 {

    get slink() {
        return $(amazonloc.siginlink);
    }
    get Ausernme() {
        return $(amazonloc.Ausername);
    }
    get continue() {
        return $(amazonloc.continue);
    }
    get Apsswd() {
        return $(amazonloc.Apassword);
    }
    get signin() {
        return $(amazonloc.signin);
    }
    get searchbox() {
        return $(amazonloc.searchbox);
    }
    get mlink() {
        return $(amazonloc.mobilelink);
    }
    get subbtn() {
        return $(amazonloc.submitbtn);
    }
    get signout() {
        return $(amazonloc.signout);
    }
    get Apassword1() {
        return $(amazonloc.Apassword1);
    }
    get newsignin() {
        return $(amazonloc.newsignin);
    }
    get Addtocatbtn() {
        return $(amazonloc.addtocartbtn);
    }
    get closebtn() {
        return $(amazonloc.closebtn);
    }
    get items() {
        return $(amazonloc.items)
    }


    login() {
        browser.url(url.amazon);
        demoutility.clickBtn(this.slink);
        demoutility.toaddValue(this.Ausernme, logindata.username);
        demoutility.clickBtn(this.continue);
        demoutility.toaddValue(this.Apsswd, logindata.Apassword);
        demoutility.clickBtn(this.signin);
        demoutility.toaddValue(this.searchbox, logindata.mobilesearch);
        demoutility.clickBtn(this.subbtn);
        var currenthandler = browser.getWindowHandle();
        console.log(currenthandler, 'before mobile click')
        demoutility.clickBtn(this.mlink);
        demoutility.SetWindowSize(this.mlink);
        browser.pause(4000);
        var newHandler = browser.getWindowHandle();
        console.log(newHandler, 'after mobile link')
        var handles = browser.getWindowHandles();
        console.log(handles)
        browser.switchToWindow(handles[1]);
        demoutility.clickBtn(this.Addtocatbtn);
        browser.pause(3000);
        demoutility.clickBtn(this.closebtn);
        demoutility.mouseover(this.slink);
        demoutility.clickBtn(this.newsignin);
        demoutility.clickBtn(this.signout);

    }

    invalidalogin() {
        browser.url(url.amazon);
        demoutility.clickBtn(this.slink);
        demoutility.toaddValue(this.Ausernme, logindata.username);
        demoutility.clickBtn(this.continue);
        demoutility.toaddValue(this.Apsswd, logindata.Apassword1);
        demoutility.clickBtn(this.signin);
        browser.pause(3000);

    }

}

module.exports = new Login2();