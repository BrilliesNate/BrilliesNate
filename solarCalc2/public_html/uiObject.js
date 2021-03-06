; (function (global) {
    let uiObject = function (el, conf) {
        this.el = el;
        this.conf = conf || {};
        this.init();
    }

    uiObject.prototype = {
        init: function () {
            if (!this.initComplete) {
                this.initComplete = true;

                let conf = this.conf;
                 
                let container = document.createElement('div');
                container.classList.add('solyc-uiobj-container');
                this.el.appendChild(container);
                this.container = container;

                let label = document.createElement('span');
                label.tectContent = conf.title || '';
                label.classList.add('solyc-uiobj-label');

                switch (conf.type) {
                    case 'switch':
                        this.createSwitch();
                        break;
                    case 'inputText':
                        this.createInputText();
                        break;
                    case 'button':
                        this.createButton();
                        break;
                    case 'label':
                        this.createLabel();
                        break;
                    // case 'date':
                    //     this.createDatePicker();
                    //     break;
                    default:
                        console.warn('unknown UI component: ' + conf.type);
                        break;
                }
            }
        },

        hide: function () {
            $(this.container).hide();
        },

        show: function() {
            $(this.container).show();
        },

        getValue: function () {
            switch (this.conf.type) {
                case 'switch':
                    return 'hello'//this.switchCheck.checked;
                    break;
                case 'button':
                    break;
                case 'inputText':
                    return this.textHidden.getValue();
                    break;
            }
        },

        onChangeCb: function () {
            if (typeof (this.conf.onChange === 'function')) {
                if (this.getValue !== undefined && this.getValue() !== null) {
                    this.conf.onChange(this.getValue(), this.conf.args || null, this);
                }
            }
        },

        setText: function () {
            switch (this.conf) {

                case 'label':
                    this.textContent = this.conf.label || '';
                    break;
                default:
                    console.warn('unknown UI component: ' + conf.type);
                    break;
            }
        },

        createButton: function () {
            let panelinfo = document.getElementById('panelinfo');
            this.button = document.createElement('span');
            panelinfo.appendChild(this.button);
            // this.button.classList.add('solyc-uiobj-button');
            this.button.textContent = this.conf.label || '';
            this.button.onclick = this.onChangeCb.bind(this);
            this.button.classList.add('button-30')
            this.button.style = "padding:5px";
        },

        createSwitch: function () {
            let sw = document.createElement('input');
            sw.type = 'checkbox';
            this.container.appendChild(sw);
            sw.classList.add('solyc-uiobj-switch');
            this.switchCheck = sw;
            this.switchCheck.onchange = this.onChangeCb.bind(this);
        },

        createInputText: function () {
            let panelinfo = document.getElementById('panelinfonew');
            let txt = document.createElement('input');
            let lbl = document.createElement('span');
            lbl.textContent = this.conf.label;
            txt.setAttribute('value', this.conf.default);
            panelinfo.appendChild(lbl);
            panelinfo.appendChild(txt);
            txt.classList.add('solyc-uiobj-inputtext');
            txt.setAttribute('id', this.conf.id);
            lbl.classList.add('solyc-uiobj-label');
        },

        createDatePicker: function () {
            let txt = document.createElement('input');
            let lbl = document.createElement('span');
            txt.type = 'date'
            txt.setAttribute('value', this.conf.default);
            lbl.textContent = this.conf.label;
            this.container.appendChild(lbl);
            this.container.appendChild(txt);
            txt.classList.add('solyc-uiobj-inputtext');
            txt.setAttribute('id', this.conf.id);
            lbl.classList.add('solyc-uiobj-label');
        },

        createLabel: function () {
            let txt = document.createElement('span');
            this.container.appendChild(txt);
            txt.classList.add('solyc-uiobj-label');
            txt.textContent = this.conf.label || '';
        }

    }
    global.uiObject = uiObject;
}(this));