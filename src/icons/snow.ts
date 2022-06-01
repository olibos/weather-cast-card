import {
  css,
  html,
  LitElement,
} from 'lit';
import { customElement } from 'lit/decorators.js';

import {
  cloud,
  cloudColorChange,
  common,
} from './styles';

@customElement('weather-snow')
export class Snow extends LitElement
{
    protected render(): unknown
    {
        return html`
<div class="cloud">
    <div class="cloud-copy"></div>
    <div class="snow">
        <div class="flake">
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
        </div>
        <div class="flake">
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
        </div>
        <div class="flake">
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
        </div>
        <div class="flake">
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
        </div>
        <div class="flake">
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
        </div>
        <div class="flake">
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
        </div>
        <div class="flake">
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
        </div>
        <div class="flake">
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
        </div>
        <div class="flake">
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
        </div>
        <div class="flake">
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
            <div class="flake-part"></div>
        </div>
    </div>
</div>
`;
    }

    static get styles() 
    {
        return [common, cloud, cloudColorChange, css`
.cloud {
    left: 30%;
}

.snow {
    position: absolute;
    width: 140%;
    height: 100%;
    left: -20%;
    top: 80%;
    z-index: 1;
    overflow: hidden;
}

.flake {
    position: absolute;
    width: 15%;
    height: 20%;
    top: -20%;
}

@keyframes snowFlakeFall {
    15% {
        opacity: 1;
    }

    75% {
        opacity: 0;
    }

    100% {
        top: 120%;
        opacity: 0;
    }
}

.flake-part:nth-of-type(1) {
    position: absolute;
    width: 8%;
    height: 100%;
    top: 0;
    left: 46%;
    background: #fffafa;
    border-radius: 10rem;
}

.flake-part:nth-of-type(1):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    left: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(-30deg);
}

.flake-part:nth-of-type(1):after {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    right: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(30deg);
}

.flake-part:nth-of-type(2) {
    position: absolute;
    width: 8%;
    height: 100%;
    top: 0;
    left: 46%;
    background: #fffafa;
    border-radius: 10rem;
    transform: rotate(60deg);
}

.flake-part:nth-of-type(2):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    left: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(-30deg);
}

.flake-part:nth-of-type(2):after {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    right: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(30deg);
}

.flake-part:nth-of-type(3) {
    position: absolute;
    width: 8%;
    height: 100%;
    top: 0;
    left: 46%;
    background: #fffafa;
    border-radius: 10rem;
    transform: rotate(120deg);
}

.flake-part:nth-of-type(3):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    left: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(-30deg);
}

.flake-part:nth-of-type(3):after {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    right: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(30deg);
}

.flake-part:nth-of-type(4) {
    position: absolute;
    width: 8%;
    height: 100%;
    top: 0;
    left: 46%;
    background: #fffafa;
    border-radius: 10rem;
    transform: rotate(180deg);
}

.flake-part:nth-of-type(4):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    left: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(-30deg);
}

.flake-part:nth-of-type(4):after {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    right: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(30deg);
}

.flake-part:nth-of-type(5) {
    position: absolute;
    width: 8%;
    height: 100%;
    top: 0;
    left: 46%;
    background: #fffafa;
    border-radius: 10rem;
    transform: rotate(240deg);
}

.flake-part:nth-of-type(5):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    left: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(-30deg);
}

.flake-part:nth-of-type(5):after {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    right: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(30deg);
}

.flake-part:nth-of-type(6) {
    position: absolute;
    width: 8%;
    height: 100%;
    top: 0;
    left: 46%;
    background: #fffafa;
    border-radius: 10rem;
    transform: rotate(300deg);
}

.flake-part:nth-of-type(6):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    left: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(-30deg);
}

.flake-part:nth-of-type(6):after {
    content: "";
    position: absolute;
    width: 100%;
    height: 28%;
    right: -100%;
    top: 0;
    background: inherit;
    border-radius: inherit;
    transform: rotate(30deg);
}

.flake:nth-of-type(1) {
    animation: snowFlakeFall 4s 1s linear infinite;
    left: 10%;
}

.flake:nth-of-type(2) {
    animation: snowFlakeFall 4s linear infinite;
    left: 28.5%;
}

.flake:nth-of-type(3) {
    animation: snowFlakeFall 4s 1s linear infinite;
    left: 47%;
}

.flake:nth-of-type(4) {
    animation: snowFlakeFall 4s linear infinite;
    right: 28.5%;
}

.flake:nth-of-type(5) {
    animation: snowFlakeFall 4s 1s linear infinite;
    right: 10%;
}

.flake:nth-of-type(6) {
    animation: snowFlakeFall 4s 2s linear infinite;
    left: 28.5%;
}

.flake:nth-of-type(7) {
    animation: snowFlakeFall 4s 2s linear infinite;
    right: 28.5%;
}

.flake:nth-of-type(8) {
    animation: snowFlakeFall 4s 3s linear infinite;
    left: 10%;
}

.flake:nth-of-type(9) {
    animation: snowFlakeFall 4s 3s linear infinite;
    left: 47%;
}

.flake:nth-of-type(10) {
    animation: snowFlakeFall 4s 3s linear infinite;
    right: 10%;
}
        `];
    }
}