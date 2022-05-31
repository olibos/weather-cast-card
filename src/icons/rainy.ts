import {
  css,
  html,
  LitElement,
} from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('weather-rainy')
export class Rainy extends LitElement
{
    protected render(): unknown
    {
        return html`
<div class="clouds">
    <div class="cloud">
        <div class="cloud-copy"></div>
        <div class="rain">
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
        </div>
    </div>
    <div class="cloud">
        <div class="cloud-copy"></div>
        <div class="rain">
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
        </div>
    </div>
</div>
`;
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

@keyframes cloudColorChange {

    0%,
    100% {
        background: #fffafa;
    }

    50% {
        background: #a3a3a3;
    }
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

.cloud-copy {
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: inherit;
    border-radius: inherit;
}

.cloud-copy:before {
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

.cloud-copy:after {
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
    left: 20%;
    animation: cloudColorChange 3s linear infinite;
}

.cloud:nth-of-type(2) {
    width: 30%;
    height: 30%;
    top: 45%;
    right: 20%;
    animation: cloudColorChange 3s 1s linear infinite;
}

.rain {
    position: absolute;
    width: 140%;
    height: 100%;
    left: -20%;
    top: 80%;
    z-index: 1;
    overflow: hidden;
}

.drop:nth-of-type(1) {
    position: absolute;
    width: 3%;
    height: 20%;
    top: -20%;
    background: #fffafa;
    border-radius: 1rem;
    transform: rotate(22deg);
    animation: rainDropFall 4s 1s linear infinite;
    left: 10%;
}

.drop:nth-of-type(2) {
    position: absolute;
    width: 3%;
    height: 20%;
    top: -20%;
    background: #fffafa;
    border-radius: 1rem;
    transform: rotate(22deg);
    animation: rainDropFall 4s linear infinite;
    left: 28.5%;
}

.drop:nth-of-type(3) {
    position: absolute;
    width: 3%;
    height: 20%;
    top: -20%;
    background: #fffafa;
    border-radius: 1rem;
    transform: rotate(22deg);
    animation: rainDropFall 4s 1s linear infinite;
    left: 47%;
}

.drop:nth-of-type(4) {
    position: absolute;
    width: 3%;
    height: 20%;
    top: -20%;
    background: #fffafa;
    border-radius: 1rem;
    transform: rotate(22deg);
    animation: rainDropFall 4s linear infinite;
    right: 28.5%;
}

.drop:nth-of-type(5) {
    position: absolute;
    width: 3%;
    height: 20%;
    top: -20%;
    background: #fffafa;
    border-radius: 1rem;
    transform: rotate(22deg);
    animation: rainDropFall 4s 1s linear infinite;
    right: 10%;
}

.drop:nth-of-type(6) {
    position: absolute;
    width: 3%;
    height: 20%;
    top: -20%;
    background: #fffafa;
    border-radius: 1rem;
    transform: rotate(22deg);
    animation: rainDropFall 4s 2s linear infinite;
    left: 28.5%;
}

.drop:nth-of-type(7) {
    position: absolute;
    width: 3%;
    height: 20%;
    top: -20%;
    background: #fffafa;
    border-radius: 1rem;
    transform: rotate(22deg);
    animation: rainDropFall 4s 2s linear infinite;
    right: 28.5%;
}

.drop:nth-of-type(8) {
    position: absolute;
    width: 3%;
    height: 20%;
    top: -20%;
    background: #fffafa;
    border-radius: 1rem;
    transform: rotate(22deg);
    animation: rainDropFall 4s 3s linear infinite;
    left: 10%;
}

.drop:nth-of-type(9) {
    position: absolute;
    width: 3%;
    height: 20%;
    top: -20%;
    background: #fffafa;
    border-radius: 1rem;
    transform: rotate(22deg);
    animation: rainDropFall 4s 3s linear infinite;
    left: 47%;
}

.drop:nth-of-type(10) {
    position: absolute;
    width: 3%;
    height: 20%;
    top: -20%;
    background: #fffafa;
    border-radius: 1rem;
    transform: rotate(22deg);
    animation: rainDropFall 4s 3s linear infinite;
    right: 10%;
}

@keyframes rainDropFall {
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
        `;
    }
}