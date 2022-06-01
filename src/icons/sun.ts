import {
  css,
  html,
  LitElement,
} from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('weather-sun')
export class Sun extends LitElement
{
    protected render(): unknown
    {
        return html`<weather-parts-sun></weather-parts-sun>`;
    }

    static get styles() 
    {
        return css`
:host {
    display: inline-block;
    width: 150px;
    height: 150px;
    position: relative;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

        weather-parts-sun {
    position: absolute;
    width: 50%;
    height: 50%;
    top: 25%;
    left: 25%;
}`;
    }
}