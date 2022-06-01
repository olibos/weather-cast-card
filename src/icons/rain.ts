import {
  css,
  html,
  LitElement,
} from 'lit';
import { customElement } from 'lit/decorators.js';

import {
  cloud,
  common,
  rain,
  sun,
} from './styles';
import { SunTemplate } from './sun';

export const RainTemplate = html`<div class="rain">
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
</div>`;

@customElement('weather-rain')
export class Rain extends LitElement
{
    protected render(): unknown
    {
        return html`
${SunTemplate}
<div class="cloud">
    ${RainTemplate}
</div>`;
    }

    static get styles()
    {
        return [common, cloud, rain, sun, css`
.sun {
    width: 42%;
    height: 42%;
    top: 10%;
    left: unset;
    right: 15%;
}`];
    }
}