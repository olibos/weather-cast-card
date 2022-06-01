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

@customElement('weather-three-clouds')
export class ThreeClouds extends LitElement
{
  @property({ type: Boolean, attribute: 'color-change' })
  public hasColorChange = false;

  protected render(): unknown
  {
    return html`
        <weather-parts-cloud class="${classNames(this.hasColorChange && 'color-change')}">
          <slot name="1"></slot>
        </weather-parts-cloud>
        <weather-parts-cloud class="${classNames(this.hasColorChange && 'color-change')}">
          <slot name="2"></slot>
        </weather-parts-cloud>
        <weather-parts-cloud class="${classNames(this.hasColorChange && 'color-change')}">
          <slot name="3"></slot>
        </weather-parts-cloud>
          `;
  }

  static get styles()
  {
    return [common, css`
weather-parts-cloud:nth-of-type(1) {
    width: 20%;
    height: 20%;
    top: 10%;
    left: 25%;
}

weather-parts-cloud:nth-of-type(2) {
    width: 30%;
    height: 30%;
    top: 35%;
    right: 20%;
    left:unset;
    animation-delay: 1s;
}

weather-parts-cloud:nth-of-type(3) {
    width: 20%;
    height: 20%;
    top: 72%;
    left: 35%;
    animation-delay: 2s;
}
`];
  }
}