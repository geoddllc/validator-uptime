# Validator Uptime Monitor UI

This project provides a Svelte-based UI for monitoring the uptime of validators. It integrates with a backend powered by [Tenderduty](https://github.com/blockpane/tenderduty) to fetch the current state of validators.

## Prerequisites

To use this project effectively, you need a backend running [Tenderduty](https://github.com/blockpane/tenderduty), which provides uptime and state information about validators.

Additionally, to prevent abuse, we recommend using AWS API Gateway or any other API gateway service to add throttling and rate limiting to your backend endpoint.


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Configuration
Set your Tenderduty URL: by creating `.env` below

```
VITE_TENDERDUTY_API_URL=https://your-api-gateway-url.com/state
```
Note: Use an API Gateway such as AWS API Gateway to add throttling and rate limiting to the Tenderduty URL for preventing abuse.

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.


