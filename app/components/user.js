const tagName = 'user-widget';

const style = `
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

class User extends HTMLElement {
  connectedCallback() {
    const userName = this.getAttribute('data-user-name');
    const template = document.createElement('template');
    template.innerHTML = this.getTemplate(userName, style);

    if (!this.shadowRoot) {
      this.attachShadow({mode: 'open'});
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  getTemplate(userName, style) {
    return `${style}<a
      style="background-image:url(http://cdn.krestanskaseznamka.cz/img/s/user-${userName}.jpg);"
      class="user-thumb"
      href="#user/${userName}"></a>`;
  }
}

const register = () => customElements.define(tagName, User);
window.WebComponents ? window.WebComponents.waitFor(register) : register();
