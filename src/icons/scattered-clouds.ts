import {
  css,
  html,
  LitElement,
} from 'lit';
import { customElement } from 'lit/decorators.js';

import {
  cloud,
  common,
} from './styles';

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
        return [common, cloud, css`
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
    left: 25%;
}

.cloud:nth-of-type(2) {
    width: 30%;
    height: 30%;
    top: 35%;
    right: 20%;
    left:unset;
}

.cloud:nth-of-type(3) {
    width: 20%;
    height: 20%;
    top: 72%;
    left: 35%;
}
        `];
    }
}