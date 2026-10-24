# @x12i/dispatchix-core usage example

Engine: vendor adapter contract, registry, state machine, queue interface + in-memory queue, dispatcher, worker, outbox deliverer, callback sink, SSRF guard, tenant layout.

This consuming application demonstrates **deduplicate, receive and complete an in-memory queue message** using the published npm package, pinned to `0.1.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Run queued tasks with an in-memory queue while developing a vendor adapter.
- Deliver completed outcomes through the dispatcher and outbox contracts.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/dispatchix-core)
- [Implementation monorepo](https://github.com/x12i/dispatchix-)
- [Reviewed package source](https://github.com/x12i/dispatchix-/tree/cb05ff67f9ac9f18f21a7e59cd4ce73163041e8a/packages/core)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
