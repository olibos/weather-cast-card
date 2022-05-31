import {
  css,
  html,
  LitElement,
} from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('weather-partially-cloudy')
export class PartiallyCloudy extends LitElement
{
    protected render(): unknown
    {
        return html`
<div class="sun">
    <div class="beam"></div>
    <div class="beam"></div>
    <div class="beam"></div>
    <div class="beam"></div>
    <div class="beam"></div>
    <div class="beam"></div>
    <div class="beam"></div>
    <div class="beam"></div>
</div>
<div class="cloud"></div>
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

.sun {
    position: absolute;
    width: 42%;
    height: 42%;
    top: 10%;
    right: 15%;
    background: radial-gradient(#fdac49, #fcd422);
    border-radius: 50%;
    animation: spinSun 20s linear infinite;
}

.sun:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    background: inherit;
    border-radius: 50%;
}

.beam:nth-child(even):before {
    background: #fdac49;
}

.beam:nth-child(even):after {
    background: #fdac49;
}

.beam:nth-child(odd):before {
    background: #fcd422;
}

.beam:nth-child(odd):after {
    background: #fcd422;
}

.beam:nth-of-type(1) {
    position: absolute;
    width: 15%;
    height: 140%;
    top: -20%;
    left: 42.5%;
}

.beam:nth-of-type(1):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.beam:nth-of-type(1):after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}

.beam:nth-of-type(2) {
    position: absolute;
    width: 15%;
    height: 140%;
    top: -20%;
    left: 42.5%;
    transform: rotate(22.5deg);
}

.beam:nth-of-type(2):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.beam:nth-of-type(2):after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}

.beam:nth-of-type(3) {
    position: absolute;
    width: 15%;
    height: 140%;
    top: -20%;
    left: 42.5%;
    transform: rotate(45deg);
}

.beam:nth-of-type(3):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.beam:nth-of-type(3):after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}

.beam:nth-of-type(4) {
    position: absolute;
    width: 15%;
    height: 140%;
    top: -20%;
    left: 42.5%;
    transform: rotate(67.5deg);
}

.beam:nth-of-type(4):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.beam:nth-of-type(4):after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}

.beam:nth-of-type(5) {
    position: absolute;
    width: 15%;
    height: 140%;
    top: -20%;
    left: 42.5%;
    transform: rotate(90deg);
}

.beam:nth-of-type(5):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.beam:nth-of-type(5):after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}

.beam:nth-of-type(6) {
    position: absolute;
    width: 15%;
    height: 140%;
    top: -20%;
    left: 42.5%;
    transform: rotate(112.5deg);
}

.beam:nth-of-type(6):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.beam:nth-of-type(6):after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}

.beam:nth-of-type(7) {
    position: absolute;
    width: 15%;
    height: 140%;
    top: -20%;
    left: 42.5%;
    transform: rotate(135deg);
}

.beam:nth-of-type(7):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.beam:nth-of-type(7):after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}

.beam:nth-of-type(8) {
    position: absolute;
    width: 15%;
    height: 140%;
    top: -20%;
    left: 42.5%;
    transform: rotate(157.5deg);
}

.beam:nth-of-type(8):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.beam:nth-of-type(8):after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 13%;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}

@keyframes spinSun {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.cloud {
    position: absolute;
    width: 40%;
    height: 40%;
    top: 27.5%;
    left: 25%;
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
`;
    }
}