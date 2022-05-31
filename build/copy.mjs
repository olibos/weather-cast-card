import { copyFile } from 'fs/promises';

copyFile('./dist/index.js', './weather-cast-card.js');