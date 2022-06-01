import {
  css,
  html,
  LitElement,
} from 'lit';
import { customElement } from 'lit/decorators.js';

import {
  cloud,
  common,
  sun,
} from './styles';
import { SunTemplate } from './sun';

@customElement('weather-partially-cloudy')
export class PartiallyCloudy extends LitElement
{
    protected render(): unknown
    {
        return html`
${SunTemplate}
<div class="cloud"></div>
        `;
    }

    static get styles()
    {
        return [common, cloud, sun, css`
.sun {
    width: 42%;
    height: 42%;
    top: 10%;
    left: unset;
    right: 15%;
}
`];
    }
}