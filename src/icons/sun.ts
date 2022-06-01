import {
  html,
  LitElement,
} from 'lit';
import { customElement } from 'lit/decorators.js';

import {
  common,
  sun,
} from './styles';

export const SunTemplate = html`<div class="sun">
<div class="beam"></div>
<div class="beam"></div>
<div class="beam"></div>
<div class="beam"></div>
<div class="beam"></div>
<div class="beam"></div>
<div class="beam"></div>
<div class="beam"></div>
</div>`;
@customElement('weather-sun')
export class Sun extends LitElement
{
    protected render(): unknown
    {
        return SunTemplate;
    }

    static get styles() 
    {
        return [common, sun];
    }
}