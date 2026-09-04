# ciiu-arl

> **Deprecated:** this package was merged into [ciiu-co](https://www.npmjs.com/package/ciiu-co) v1.1.0, which now exports the same `riskClassification`, `getRiskClassification`, and `RiskClassification` API alongside the CIIU Rev. 4 A.C. classification data. Install `ciiu-co` and change your import specifier:
>
> ```diff
> - import { getRiskClassification } from "ciiu-arl";
> + import { getRiskClassification } from "ciiu-co/arl"; // risk-only entry
> ```
>
> (The root `ciiu-co` entry re-exports everything too.) Note: `ciiu-co` ships corrected data — the legacy `6514` code is mapped to the official `6496` clase (verified against DANE), and the decree's group-level rows (`1030`, `3210`, `7110`, `8890`) are expanded to their member clases with the original value preserved in a new `decreeCiiu` field — so `getRiskClassification` is now an exact match and the old 3-digit fallback is gone.

Exports the `risk-classification.json` dataset and TypeScript types for risk classification codes.

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
