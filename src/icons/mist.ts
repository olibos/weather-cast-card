import {
  css,
  html,
  LitElement,
} from 'lit';
import { customElement } from 'lit/decorators.js';

import { common } from './styles';

@customElement('weather-mist')
export class Mist extends LitElement
{
    protected render(): unknown
    {
        return html`
<div class="mist">
    <div class="mist-line"></div>
    <div class="mist-line"></div>
    <div class="mist-line"></div>
    <div class="mist-line"></div>
    <div class="mist-line"></div>
</div>`;
    }

    static get styles() 
    {
        return [common, css`
.mist {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.mist-line:nth-of-type(1) {
    position: absolute;
    height: 7%;
    background: #fffafa;
    border-radius: 10rem;
    width: 40%;
    top: 16%;
    right: 25%;
}

.mist-line:nth-of-type(2) {
    position: absolute;
    height: 7%;
    background: #fffafa;
    border-radius: 10rem;
    width: 40%;
    top: 31%;
    left: 20%;
}

.mist-line:nth-of-type(3) {
    position: absolute;
    height: 7%;
    background: #fffafa;
    border-radius: 10rem;
    width: 50%;
    top: 46%;
    left: 25%;
}

.mist-line:nth-of-type(4) {
    position: absolute;
    height: 7%;
    background: #fffafa;
    border-radius: 10rem;
    width: 40%;
    top: 61%;
    right: 20%;
}

.mist-line:nth-of-type(5) {
    position: absolute;
    height: 7%;
    background: #fffafa;
    border-radius: 10rem;
    width: 50%;
    top: 76%;
    left: 25%;
}`];
    }
}