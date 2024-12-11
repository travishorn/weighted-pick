# Weighted Pick

A simple JavaScript module for picking items from an array based on their
weights.

## Installation

Clone the repository from GitHub:

```bash
git clone https://github.com/travishorn/weighted-pick
```

## Usage

Here's a basic example of how to use this module:

```javascript
import { pick } from "../weighted-pick";

const items = [
  { item: "apple", weight: 10 },
  { item: "banana", weight: 5 },
  { item: "cherry", weight: 1 },
];

const pickedItem = pick(items);
console.log(pickedItem); // This could be "apple", "banana", or "cherry"
```

In this example, `pick` function will randomly select an item from the `items`
array based on their weights. Items with higher weights are more likely to be
picked.

## Contributing

Contributions are welcome! Before submitting a pull request, please...

1. Add tests if necessary
2. Make sure all tests pass with `npm run test`
3. Format with `npm run format`
4. Lint with `npm run lint`

## License

The MIT License

Copyright 2024 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
