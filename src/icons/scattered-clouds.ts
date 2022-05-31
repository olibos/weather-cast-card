import {
  css,
  html,
  LitElement,
} from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('weather-scattered-clouds')
export class ScatteredClouds extends LitElement
{
    protected render(): unknown
    {
        return html`
<div class="clouds">
    <div class="cloud"></div>
    <div class="cloud"></div>
    <div class="cloud"></div>
</div>`;
    }

    static get styles() 
    {
        return css`
:host {
    display: inline-block;
    width: 150px;
    height: 150px;
    position: relative;
}

:host,
div,
div:before,
div:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.clouds {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.cloud {
    position: absolute;
    background: #fffafa;
    border-radius: 44% 56% 49% 51%/71% 63% 37% 29%;
}

.cloud:before {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    right: unset;
    border-radius: 52% 48% 58% 42%/43% 61% 39% 57%;
}

.cloud:after {
    content: "";
    position: absolute;
    width: 85%;
    height: 85%;
    top: 10%;
    left: -50%;
    right: -50%;
    background: inherit;
    left: unset;
    border-radius: 52% 48% 49% 51%/43% 61% 39% 57%;
}

.cloud:nth-of-type(1) {
    width: 20%;
    height: 20%;
    top: 10%;
    left: 25%;
}

.cloud:nth-of-type(2) {
    width: 30%;
    height: 30%;
    top: 35%;
    right: 20%;
}

.cloud:nth-of-type(3) {
    width: 20%;
    height: 20%;
    top: 72%;
    left: 35%;
}
        `;
    }
}