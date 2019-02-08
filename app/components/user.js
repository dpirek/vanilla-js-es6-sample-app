let style = `
  <style>
  .user-thumb {
    border: 1px solid #F3F0E2;
    display: block;
    height: 50px;
    width: 50px;
    background-repeat: no-repeat;
    background-position: 55% 25%;
    margin-right: 8px;
    margin-bottom: 8px;
  }
  </style>
`;

class DateWidget extends HTMLElement {
  // When element is created or upgraded
  // constructor() {
  //   super();
  // }

  // When element is inserted into a document
  connectedCallback() {
    console.log('connectedCallback')
  }

  // When element is removed from a document
  disconnectedCallback() {

  }

  // When an observed attribute changes
  attributeChangedCallback(attrName, oldVal, newVal) {

  }

  // When the element is adopted into a new document
  adoptedCallback() {

  }

  // Fires when an instance of the element is created.
  createdCallback() {
    let template = `
    <a style="background-image:url(http://cdn.krestanskaseznamka.cz/img/s/user-${this.userName}.jpg);" class="user-thumb" href="/user/${this.userName}"></a>
    `;
    this.createShadowRoot().innerHTML = style + template;
  }

  // Fires when an instance was inserted into the document.
  attachedCallback() {

  }

  get userName() {
    return this.getAttribute('data-user-name');
  }
}

document.registerElement('user-widget', DateWidget);
