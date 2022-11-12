# npm-package-template

## Dev

```bash
yarn dev
```

## Build

The `README.md` file, `package.json` file, and all files in `src/components` will be exported.

```bash
yarn build
```

## Publish

Be sure to change `private` to `false` in the package.json.

```bash
yarn build
```

```bash
npm version patch
```

```bash
npm publish --access public
```
