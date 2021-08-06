document.addEventListener('DOMContentLoaded', function () {
  let container = document.createElement('div');


  container.className = 'container';
  document.body.appendChild(container);

  

  let hsOperator = this.createElement('div');
  hsOperator.style.width = '300px';
  hsOperator.style.height = '100px';
  hsOperator.style.marginLeft = '35%';
  hsOperator.style.borderRadius = '.3em';
  hsOperator.style.background = 'white';
  hsOperator.style.borderStyle = 'solid';
  hsOperator.style.borderColor = 'gray';
  hsOperator.id = 'ui_hideShowOperator';
  container.appendChild(hsOperator);


  let printConsole = this.createElement('div');
  printConsole.style.width = '300px';
  printConsole.style.height = '100px';
  printConsole.style.marginLeft = '35%';
  printConsole.style.borderRadius = '.3em';
  printConsole.style.background = 'white';
  printConsole.style.borderStyle = 'solid';
  printConsole.style.borderColor = 'gray';
  printConsole.id = 'ui_hideShowOperator';
  container.appendChild(printConsole);
  window.p = printConsole;


  let creatBlockScreen = this.createElement('div');
  creatBlockScreen.style.width = '300px';
  creatBlockScreen.style.height = '100px';
  creatBlockScreen.style.height = '100px';
  creatBlockScreen.style.marginTop = '20px';
  creatBlockScreen.style.marginLeft = '35%';

  creatBlockScreen.style.borderRadius = '.3em';
  creatBlockScreen.style.background = 'white';
  creatBlockScreen.style.borderStyle = 'solid';
  creatBlockScreen.style.borderColor = 'gray';
  creatBlockScreen.id = 'ui_hideShowOperator';
  container.appendChild(creatBlockScreen);


  let hidBtn = this.createElement('button');
  hidBtn.style.margin = '40px';
  hidBtn.style.marginLeft = '90px';
  hidBtn.textContent = 'Hide'
  hidBtn.style.width = '50px';
  hidBtn.style.height = '20px';
  hidBtn.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px;';

  hsOperator.appendChild(hidBtn);

  let showBtn = this.createElement('button');

  showBtn.style.width = '50px';
  showBtn.style.height = '20px';
  showBtn.textContent = 'Show'
  hsOperator.appendChild(showBtn);

  // let divBlock = this.createElement('div');
  // divBlock.style.width = '300px';
  // divBlock.style.height = '100px';
  // divBlock.style.background = 'gray';
  // divBlock.style.position = 'absolute';
  // divBlock.style.opacity = '0.5';
  // divBlock.style.display = 'none';


  // printConsole.appendChild(divBlock);

  let printConsoleBtn = this.createElement('button');

  printConsoleBtn.textContent = 'Console'
  printConsoleBtn.style.position = 'absolute'
  printConsoleBtn.style.margin = '40px';
  printConsoleBtn.style.marginLeft = '120px';
  printConsoleBtn.style.width = '65px';
  printConsoleBtn.style.height = '20px';
  printConsole.appendChild(printConsoleBtn);

  printConsoleBtn.onclick = function () {
    console.log('Console clicked')
  }

  let creatBlockScreenBtn = this.createElement('button');
  creatBlockScreenBtn.style.margin = '40px';
  creatBlockScreenBtn.style.marginLeft = '125px';
  creatBlockScreenBtn.textContent = 'Create Block'
  creatBlockScreenBtn.style.width = '60px';
  creatBlockScreenBtn.style.height = '40px';
  creatBlockScreen.appendChild(creatBlockScreenBtn);



  creatBlockScreenBtn.onclick = function () {
    let divBlock = document.createElement('div');
    divBlock.style.width = '300px';
    divBlock.style.height = '100px';
    divBlock.style.background = 'gray';
    divBlock.style.position = 'absolute';
    divBlock.style.opacity = '0.5';
    divBlock.style.display = 'block';
    printConsole.appendChild(divBlock);

  }




}, false);

// container.style.position = 'relative';

// let hideDiv = document.createElement('div');
// hideDiv.style.width = '100%';
// hideDiv.style.height = '100%';
// hideDiv.style.opacity = '0.5';
// hideDiv.style.background = '#cccccc';
// hideDiv.style.position = 'absolute';
// hideDiv.style.display = 'none';
// container.appendChild(hideDiv);

// this.container = container;
// this.container.hideDiv = hideDiv;