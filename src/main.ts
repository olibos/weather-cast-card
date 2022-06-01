import './icons';

import type {
  HomeAssistant,
  LovelaceCardConfig,
} from 'custom-card-helpers';
import {
  css,
  html,
  LitElement,
} from 'lit';
import {
  customElement,
  property,
} from 'lit/decorators.js';

import { version } from '../package.json';

const humidityFormat = new Intl.NumberFormat('fr', { style: 'unit', minimumFractionDigits: 1, maximumFractionDigits: 1, unit: 'percent' }).format;
const degreeFormat = new Intl.NumberFormat('fr', { style: 'unit', minimumFractionDigits: 1, maximumFractionDigits: 1, unit: 'celsius' }).format;
const pressureFormat = (value: number) => `${new Intl.NumberFormat('fr').format(value)} hPa`;
interface WeatherCastCardConfig extends LovelaceCardConfig 
{
  temperature: string;
  forecast: string;
  humidity: string;
  pressure: string;
}

function getIcon(type: string)
{
  switch (type)
  {
    case 'hail':
      return html`<weather-three-clouds color-change>
      <weather-parts-snow slot="1"></weather-parts-snow>
      <weather-parts-snow slot="2"></weather-parts-snow>
      <weather-parts-snow slot="3"></weather-parts-snow>
    </weather-three-clouds>`;

    case 'pouring':
    case 'rain':
      return html`<weather-cloud color-change>
      <weather-parts-rain></weather-parts-rain>
    </weather-cloud>`;


    case 'rainy':
      return html`<weather-cloud>
      <weather-parts-rain></weather-parts-rain>
    </weather-cloud>`;

    case 'fog':
      return html`<weather-mist />`;

    case 'sleet':
    case 'snowy-rainy':
      return html`<weather-three-clouds>
      <weather-parts-rain slot="1"></weather-parts-rain>
      <weather-parts-snow slot="2"></weather-parts-snow>
      <weather-parts-rain slot="3"></weather-parts-rain>
    </weather-three-clouds>`;      

    case 'snow':
    case 'snowy':
      return html`<weather-cloud>
      <weather-parts-snow></weather-parts-snow>
    </weather-cloud>`;

    case 'wind':
    case 'windy':
    case 'windy-variant':
      return html`<weather-three-clouds></weather-three-clouds>`;

    case 'overcast':
    case 'cloudy':
    case 'partlycloudy':
    case 'partly-cloudy-day':
    case 'partly-cloudy-night':
      return html`<weather-cloud sun></weather-cloud>`;

    case 'lightning':
      return html`<weather-cloud color-change>
      <weather-parts-lightning></weather-parts-lightning>
    </weather-cloud>`;

case 'lightning-rainy':
      return html`<weather-cloud color-change>
      <weather-parts-rain></weather-parts-rain>
      <weather-parts-lightning></weather-parts-lightning>
    </weather-cloud>`;

    case 'clear-day':
    case 'clear-night':
    case 'clear':
    default:
      return html`<weather-sun />`;
  }
}

@customElement('weather-cast-card')
export class WeatherCastCard extends LitElement
{
  private config?: WeatherCastCardConfig;

  @property({ attribute: false })
  hass?: HomeAssistant;

  setConfig(config: WeatherCastCardConfig)
  {
    if (!config.temperature)
    {
      throw new Error('You need to define a temperature entity');
    }
    if (!config.humidity)
    {
      throw new Error('You need to define a humidity entity');
    }
    if (!config.pressure)
    {
      throw new Error('You need to define a pressure entity');
    }
    if (!config.forecast)
    {
      throw new Error('You need to define a forecast entity');
    }
    this.config = config;
  }

  protected render()
  {
    const hass: HomeAssistant = (this as any).hass;
    if (!hass || !this.config)
    {
      return html`No data available...`;
    }

    const { temperature: temperatureEntity, humidity: humidityEntity, pressure: pressureEntity, forecast } = this.config!;
    const {
      state,
      attributes:
      {
        forecast: [{ templow, temperature: temphigh }] = []
      },
    } = hass.states[forecast];
    const temperature = hass.states[temperatureEntity].state;
    const humidity = hass.states[humidityEntity].state;
    const pressure = hass.states[pressureEntity].state;
    return html`
      <ha-card>
          <div class="card-content">
          <div id="tooltip">
              <div id="icon">${getIcon(state)}</div>
              <div id="temperature">${degreeFormat(+temperature)}</div>
              <div id="temphigh">${degreeFormat(+temphigh)}</div>
              <div id="templow">${degreeFormat(+templow)}</div>
              <div id="humidity">${humidityFormat(+humidity)}</div>
              <div id="pressure">${pressureFormat(+pressure)}</div>
            </div>
          </div>
      </ha-card>
    `;
  }

  static get styles() 
  {
    return css`
    ha-card{
      height: 100%;
      font-size: 2.5em;
      background-image: url(https://c.files.bbci.co.uk/17B7D/production/_113094179_1200-a-gettyimages-485290142.jpg);
      background-size: cover;
      color: #000;
      line-height: 1.1em;
    }

    #tooltip
    {
      position:absolute;
      left:0.5em;
      top:0.5em;
      border-radius:0.5em;
      padding:0.5em;
      background:#ffffffa0;
      display: grid;
      grid-template-columns: auto auto auto;
      grid-row-gap: 0.2em;
      grid-column-gap: 0.2em;
    }

    #icon
    {
      grid-row: span 3;
      align-self: center;
    }

    #icon * { display: block; }

    #temperature
    {
      font-size: 1.5em;
      grid-row: span 2;
      align-self: center;
    }

    #templow
    {
      align-self: start;
      font-size: .7em;
      text-align: end;
    }

    #templow:after
    {
      content:'🔽'
    }

    #temphigh
    {
      font-size: .7em;
      align-self: end;
      text-align: end;
    }

    #temphigh:after
    {
      content:'🔼'
    }

    #temperature
    {
      font-size: 1.5em;
    }

    #humidity:after
    {
      content:'💧'
    }

    #humidity, #pressure
    {
      font-size: .7em;
    }

    #humidity{
      grid-column: 2;
      text-align: end;
    }
    `};
}

let customCards: any[] = (window as any).customCards ??= [];
customCards.push({
  type: 'weather-cast-card',
  name: 'Weather Cast Card',
  description: 'A simple card to display weather on a Nest Hub device.',
});

console.info(`%cWEATHER-CAST-CARD ${version} IS INSTALLED`, "color: green; font-weight: bold", "");