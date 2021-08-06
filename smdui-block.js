class SMDUiBlocker extends HTMLElement {
    constructor(container) {
        super();
        if (!container) {
            throw new Error("Attaching SMDUI BLOCK to invalid object!");
        }

        if (container.smduiBlocker !== undefined) {
            return container.smduiBlocker;
        }

        this.container = container;
        container.smduiBlocker = this;


        this.container.style.position = 'relative';
        let b = this.blockDiv = document.createElement('div');
        b.style.position = 'absolute';
        b.style.width = '100%';
        b.style.height = '100%';
        b.style.opacity = '0.5';
        b.style.top = '0px';
        b.style.left = '0px';
        b.style.background = 'black';
        b.style.zIndex = '9999';
        b.classList.add("smdui-blocker");
        this.container.appendChild(b);
        b.onclick = function() {
            for (let i = 0; i < this.cbArr.length; i++) {
                if (typeof(this.cbArr[i]) === 'function') {
                    this.cbArr[i](this.container, "Hello");
                }
            }
            // console.log('Hi from smduiBLock');
            // if (typeof (this.externalCb) === 'function') {
            //     this.externalCb();
            // }
            // if (typeof (this.superExternalCb) === 'function') {
            //     this.superExternalCb();
            // }
            // if (typeof (this.superSuperExternalCb) === 'function') {
            //     this.superSuperExternalCb();
            // }
        }.bind(this);

        this.cbArr = [];

    }


    msg1(fn) {
        this.superExternalCb = fn;
    }

    msg2(fn) {
        this.superSuperExternalCb = fn;
    }


    onclick(fn) {

        // this.externalCb = fn;
        this.cbArr.push(fn);
        // if (typeof (fn) === 'function') {
        //     this.blockDiv.onclick = fn;
        // } else {
        //     console.warn("Invalid callback onclick argument. Expected Function found " + typeof (fn));
        // }
    }


    toggle() {

        this.blockDiv.style.display = this.blockDiv.style.display === 'block' ? 'none' : 'block';
    }
    show() {
        this.blockDiv.style.display = 'block';
    }

    hide() {
        this.blockDiv.style.display = 'none';
    }
}

customElements.define('smdui-blocker', SMDUiBlocker);