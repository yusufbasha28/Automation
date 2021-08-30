import demoutility from "../utilities/demoutility";
import loginloc from "../pageobjects/loginloc";
import logindata from "../testdata/logindata";
import url from "../url";


class Login1 {
    get userName() {
        return $(loginloc.userName);
    }
    get password() {
        return $(loginloc.password);
    }
    get submitBtn() {
        return $(loginloc.loginBtn);
    }
    get dragnddrop1() {
        return $(loginloc.dragndDrop);
    }
    get drag1() {
        return $(loginloc.dragA);
    }
    get drag2() {
        return $(loginloc.dragB);
    }
    get checkbox() {
        return $(loginloc.checkBox);
    }
    get checkboxes() {
        return $(loginloc.checkBoxes);
    }
    get jstscroll() {
        return $(loginloc.scroll);
    }
    get innerscroll() {
        return $(loginloc.scroll1);
    }
    get list() {
        return $(loginloc.search);
    }
    get btn() {
        return $(loginloc.prPolicy);
    }
    get andr() {
        return $(loginloc.addndRemove);
    }
    get add() {
        return $(loginloc.addButton);
    }
    get remove() {
        return $(loginloc.delete);
    }
    get form() {
        return $(loginloc.formAuthentication);
    }
    get userid() {
        return $(loginloc.username1);
    }
    get userpswd() {
        return $(loginloc.userpswd);
    }
    get enter() {
        return $(loginloc.login);
    }
    get secure() {
        return $(loginloc.secureFile);
    }
    get appload() {
        return $(loginloc.fileAppload);
    }
    get file() {
        return $(loginloc.chooseFile);
    }
    get upload() {
        return $(loginloc.upload);
    }
    get upfiles() {
        return $(loginloc.uploaded);
    }
    get multiplewndw() {
        return $(loginloc.multiplewindows);
    }
    get click() {
        return $(loginloc.clickhere);
    }
    get dropdown() {
        return $(loginloc.dropdown)
    }
    get downarrow() {
        return $(loginloc.downarrow)
    }
    get option1() {
        return $(loginloc.option)
    }
    get forgetpswd() {
        return $(loginloc.forgetpassword)
    }
    get search() {
        return $(loginloc.searchline)
    }
    get retrievepswd() {
        return $(loginloc.retrievebutton)
    }
    get basicAuth() {
        return $(loginloc.auth)
    }
    get notify() {
        return $(loginloc.notification)
    }
    get clickhere1() {
        return $(loginloc.clckhere)
    }
    get message() {
        return $(loginloc.message)
    }
    get Rlink() {
        return $(loginloc.rlink)
    }
    get Here() {
        return $(loginloc.here)
    }
    get notfound() {
        return $(loginloc.notfound)
    }


    validlogin() {
        browser.url(url.loginurl);
        demoutility.toaddValue(this.userName, logindata.userData);
        demoutility.toaddValue(this.password, logindata.passData);
        demoutility.clickBtn(this.submitBtn);
    }

    invalidlogin() {
        browser.url(url.loginurl);
        demoutility.toaddValue(this.userName, logindata.invalidUser);
        demoutility.toaddValue(this.password, logindata.password);
        demoutility.clickBtn(this.submitBtn);
    }

    Dragmethod() {
        browser.url(url.internet);
        demoutility.clickBtn(this.dragnddrop1);
        demoutility.todragnddrop(this.drag1, this.drag2);

    }

    scrollmethod() {
        browser.url(url.internet);
        demoutility.clickBtn(this.jstscroll);
        demoutility.toscroll(this.innerscroll);
    }

    chckmethod() {
        browser.url(url.internet);
        demoutility.clickBtn(this.checkbox);
        demoutility.clickBtn(this.checkboxes);

    }

    searchmethod() {
        browser.url(url.webstore);
        // demoutility.toaddValue(this.list,logindata.searchitem);
        demoutility.clickBtn(this.btn);
    }

    addndDelete() {
        browser.url(url.internet);
        demoutility.clickBtn(this.andr);
        demoutility.clickBtn(this.add, this.add);
        demoutility.clickBtn(this.remove);
    }

    formmethod() {
        browser.url(url.internet);
        demoutility.clickBtn(this.form);
        demoutility.toaddValue(this.userid, logindata.loginId);
        demoutility.toaddValue(this.userpswd, logindata.psswd);
        demoutility.clickBtn(this.enter);
    }

    securemethod() {
        browser.url(url.internet);
        demoutility.clickBtn(this.secure);
    }

    upploadmethod( uploadFilePath) {
        browser.url(url.internet);
        demoutility.clickBtn(this.appload);
        const remoteFilePath = browser.uploadFile(uploadFilePath)
        $(this.file).setValue(remoteFilePath)
        demoutility.clickBtn(this.upload);
        browser.pause(2000);
    }

    basicauthmethod() {
        browser.url(url.internet);
        demoutility.clickBtn(this.basicAuth);
        browser.url('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    }

    multiwindowmethod() {
        browser.url(url.internet);
        demoutility.clickBtn(this.multiplewndw);
        demoutility.clickBtn(this.click);
    }

    dropDownmethod() {
        browser.url(url.internet);
        demoutility.clickBtn(this.dropdown, this.downarrow);
        browser.pause(1000);
        demoutility.clickBtn(this.option1);
    }

    forgetpasswordmethod() {
        browser.url(url.internet);
        demoutility.clickBtn(this.forgetpswd);
        demoutility.toaddValue(this.search, logindata.email);
        demoutility.clickBtn(this.retrievepswd);
    }

    notificationmethod() {
        browser.url(url.internet);
        demoutility.clickBtn(this.notify);
        demoutility.clickBtn(this.clickhere1);
        //expect(demoutility.togetValue(this.message)).to.be.equal("Action successful");
    }

    redirectlinkmethod() {
        browser.url(url.internet);
        demoutility.clickBtn(this.Rlink);
        demoutility.mouseover(this.Here);
        demoutility.clickBtn(this.Here, this.notfound);
    }


}

module.exports = new Login1();