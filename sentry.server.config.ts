// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://6d71f79d664fb8aeae981729590f1108@o4508085761540096.ingest.de.sentry.io/4508085764161616",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
