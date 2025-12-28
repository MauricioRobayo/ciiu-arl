# risk-classification

Exports the `risk-classification.json` dataset and TypeScript types for risk classification codes, as published in the [ciiu-arl](https://www.npmjs.com/package/ciiu-arl) npm package.

## Installation

```sh
npm install ciiu-arl
```

## Usage

### Import the JSON data

```js
import riskClassification from "ciiu-arl/risk-classification.json" with { type: "json" };
```

### Import the TypeScript types

```ts
import type { RiskClassification } from "ciiu-arl/types";
```

## Files exported

- `risk-classification.json`: The risk classification dataset
- `types.ts`: TypeScript types for the dataset

## License

ISC
