class SMDUIspiner extends HTMLElement {
    constructor(container) {
        super();
        if (!container) {
            throw new Error("Attaching SMDUI SPINNER to invalid object!");
        }

        if (container.smduiSpinner !== undefined) {
            return container.smduiSpinner;
        }

        this.container = container;
        container.smduiSpinner = this;

        this.container.style.position = 'relative';

        let lds_ring = this.spinnerDiv1 = document.createElement('div');
        lds_ring.style.display = 'block';
        lds_ring.style.position = 'relative';
        lds_ring.style.width = '80px';
        lds_ring.style.height = '80px';

        this.container.appendChild(lds_ring);

        function createDiv() {
            let lds_ring_div1 = container.spinnerDiv = document.createElement('div');
            lds_ring_div1.style.boxSizing = 'border-box';
            lds_ring_div1.style.display = 'block';
            lds_ring_div1.style.position = 'absolute';
            lds_ring_div1.style.width = '64px';
            lds_ring_div1.style.height = '64px';
            lds_ring_div1.style.margin = '8px';
            lds_ring_div1.style.border = '8px solid #D3D3D3';
            lds_ring_div1.style.borderRadius = '50%';
            lds_ring_div1.style.animation = 'lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite';
            lds_ring_div1.style.borderColor = '#D3D3D3 transparent transparent transparent';

            lds_ring.appendChild(lds_ring_div1);

            let lds_ring_div2 = container.spinnerDiv = document.createElement('div');
            lds_ring_div2.style.boxSizing = 'border-box';
            lds_ring_div2.style.display = 'block';
            lds_ring_div2.style.position = 'absolute';
            lds_ring_div2.style.width = '64px';
            lds_ring_div2.style.height = '64px';
            lds_ring_div2.style.margin = '8px';
            lds_ring_div2.style.border = '8px solid #D3D3D3';
            lds_ring_div2.style.borderRadius = '50%';
            lds_ring_div2.style.animation = 'lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite';
            lds_ring_div2.style.borderColor = '#D3D3D3 transparent transparent transparent';
            lds_ring_div2.style.animationDelay = '-0.45s';

            lds_ring.appendChild(lds_ring_div2);

            let lds_ring_div3 = container.spinnerDiv = document.createElement('div');
            lds_ring_div3.style.boxSizing = 'border-box';
            lds_ring_div3.style.display = 'block';
            lds_ring_div3.style.position = 'absolute';
            lds_ring_div3.style.width = '64px';
            lds_ring_div3.style.height = '64px';
            lds_ring_div3.style.margin = '8px';
            lds_ring_div3.style.border = '8px solid #D3D3D3';
            lds_ring_div3.style.borderRadius = '50%';
            lds_ring_div3.style.animation = 'lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite';
            lds_ring_div3.style.borderColor = '#D3D3D3 transparent transparent transparent';
            lds_ring_div3.style.animationDelay = '-0.3s';

            lds_ring.appendChild(lds_ring_div3);

            let lds_ring_div4 = container.spinnerDiv = document.createElement('div');
            lds_ring_div4.style.boxSizing = 'border-box';
            lds_ring_div4.style.display = 'block';
            lds_ring_div4.style.position = 'absolute';
            lds_ring_div4.style.width = '64px';
            lds_ring_div4.style.height = '64px';
            lds_ring_div4.style.margin = '8px';
            lds_ring_div4.style.border = '8px solid #D3D3D3';
            lds_ring_div4.style.borderRadius = '50%';
            lds_ring_div4.style.animation = 'lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite';
            lds_ring_div4.style.borderColor = '#D3D3D3 transparent transparent transparent';
            lds_ring_div4.style.animationDelay = '-0.15s';

            lds_ring.appendChild(lds_ring_div4);
        }

        createDiv()





    }
    start() {
        this.spinnerDiv1.style.display = 'block';
    }

    end() {
        this.spinnerDiv1.style.display = 'none';
    }


}

customElements.define('smdui-spinner', SMDUIspiner);
