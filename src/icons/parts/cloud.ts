import {
  css,
  html,
  LitElement,
} from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('weather-parts-cloud')
export class CloudPart extends LitElement
{
    protected render(): unknown
    {
        return html`
          <div class="cloud"></div>
          <slot></slot>
          `;
    }

    static get styles()
    {
        return css`
        :host(.color-change) { animation: cloudColorChange 3s linear infinite; }
        :host {
    position: absolute;
    background: #fffafa;
    border-radius: 44% 56% 49% 51%/71% 63% 37% 29%;
}

@keyframes cloudColorChange {
0%, 100% { background: #fffafa; }
50% { background: #a3a3a3; }
}

.cloud {
    position: absolute;
    border-radius: 44% 56% 49% 51%/71% 63% 37% 29%;
    z-index:2;
    width:100%;
    height:100%;
    left:0;
    top:0;
    background: inherit;
}

.cloud:before, .cloud:after {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    background: inherit;
    border-radius: 52% 48% 58% 42%/43% 61% 39% 57%;
}
.cloud:after {
    right: -50%;
    left: unset;
    border-radius: 52% 48% 49% 51%/43% 61% 39% 57%;
}
`;
    }
}