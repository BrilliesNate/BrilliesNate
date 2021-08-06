

let blockscreen = document.createElement('template');
blockscreen.innerHTML = `

<link rel="stylesheet" href="blockScreen.css">

<div class = "blockScreen-container">


<div class= "notify-container">
  Settings blocked due to OverDrive mode
</div>
 </div>

`;


class PopupNotify extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(blockscreen.content.cloneNode(true));
    }

}



window.customElements.define('popup-notify', PopupNotify)