import {
  css,
  html,
  LitElement,
} from 'lit';
import { customElement } from 'lit/decorators.js';

import { RainTemplate } from './rain';
import {
  cloud,
  cloudColorChange,
  common,
  rain,
} from './styles';

@customElement('weather-rainy')
export class Rainy extends LitElement
{
    protected render(): unknown
    {
        return html`
<div class="clouds">
    <div class="cloud">
        <div class="cloud-copy"></div>
        ${RainTemplate}
    </div>
    <div class="cloud">
        <div class="cloud-copy"></div>
        ${RainTemplate}
    </div>
</div>
`;
    }

    static get styles() 
    {
        return [common, cloud, cloudColorChange, rain, css`
.clouds {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
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
    left: unset;
    animation: cloudColorChange 3s 1s linear infinite;
}`];
    }
}