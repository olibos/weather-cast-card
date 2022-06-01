import {
  css,
  html,
  LitElement,
} from 'lit';
import { customElement } from 'lit/decorators.js';

import {
  cloud,
  cloudColorChange,
  common,
  rain,
} from './styles';

@customElement('weather-thunderstorm')
export class Thunderstorm extends LitElement
{
    protected render(): unknown
    {
        return html`
<div class="cloud">
    <div class="cloud-copy"></div>
    <div class="rain">
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
        <div class="lightning"></div>
    </div>
</div>
`;
    }

    static get styles() 
    {
        return [common, cloud, cloudColorChange, rain, css`
.cloud{ left: 30%; }

.lightning {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    animation: lightningFlash 2s linear infinite;
}

@keyframes lightningFlash {
    0%,
    39% {
        opacity: 0;
    }
    40%,
    60% {
        opacity: 1;
    }
    61%,
    100% {
        opacity: 0;
    }
}

.lightning:before, .lightning:after {
    content: "";
    position: absolute;
    width: 10%;
    height: 50%;
    left: 47%;
    top: 5%;
    transform: rotate(20deg);
    background: #fcd422;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.lightning:after {
    right: 47%;
    bottom: 5%;
    top: unset;
    left: unset;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}
        `];
    }
}