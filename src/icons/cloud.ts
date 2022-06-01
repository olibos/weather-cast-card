import classNames from 'classnames';
import {
  css,
  html,
  LitElement,
} from 'lit';
import {
  customElement,
  property,
} from 'lit/decorators.js';

import { common } from './styles';

@customElement('weather-cloud')
export class Cloud extends LitElement
{
    @property({type: Boolean, attribute: 'color-change'})
    public hasColorChange = false;

    @property({type: Boolean, attribute: 'sun'})
    public hasSun = false;

    protected render(): unknown
    {
        return html`
        ${this.hasSun ? html`<weather-parts-sun></weather-parts-sun>` : null}
        <weather-parts-cloud class="${classNames(this.hasColorChange && 'color-change', !this.hasSun && 'no-sun')}">
          <slot></slot>
        </weather-parts-cloud>
          `;
    }

    static get styles()
    {
        return [common, css`
        weather-parts-cloud{
            width: 40%;
            height: 40%;
            top: 27.5%;
            left: 25%;
        }
        .no-sun { left: 30%; }
        weather-parts-sun
        {
            position: absolute;
            width: 42%;
            height: 42%;
            top: 10%;
            left: unset;
            right: 15%;
        }`];
    }
}