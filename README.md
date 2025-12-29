# risk-classification

Exports the `risk-classification.json` dataset and TypeScript types for risk classification codes, as published in the [ciiu-arl](https://www.npmjs.com/package/ciiu-arl) npm package.

## Installation

```sh
npm install ciiu-arl
```

## Usage

### Import the JSON data

```js
import {riskClassification, type RiskClassification} from "ciiu-arl";
```

### Get risk classification by CIIU code

```js
import { getRiskClassification } from "ciiu-arl";

// Get risk classification for a CIIU code
const result = getRiskClassification("0111");
// Returns: [{ risk: "2", ciiu: "0111", code: "01", description: "..." }, ...]
```

The `getRiskClassification` function takes a CIIU code as a string and returns an array of matching risk classification records. If no exact match is found, it attempts to match by the first 3 digits of the CIIU code.

## License

ISC
