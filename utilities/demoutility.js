class demoutility {
    clickBtn(element) {
        element.click();
    }
    toaddValue(element, text) {
        //element.wait for displayed();
        element.addValue(text);
    }
    togetValue(element) {
        //element.wait for displayed;
        return element.getValue();
    }
    todragnddrop(element, element1) {
        return element.dragAndDrop(element1);
    }
    toscroll(element) {
        return element.scrollIntoView();
    }
    navigateTo(element) {
        element.navigateTo();
    }
    switchTab(element) {
        element.switchTab();
    }
    mouseover(element) {
        element.moveTo();
    }
    setvalue(element,value) {
        element.setValue(value);
    }
    SetWindowSize(element) {
        element.setWindowSize(1650, 1050);
    }
    switchToWindow(element) {
        element.switchWindow(element);
    }
}
module.exports = new demoutility();



