import React from 'react';
import {
  CalloutBanner,
  Button,
  BlockStack,
} from "@shopify/argo-checkout-react";


// no JSX used to make reuse without build step easier
// for demo purposes only
export function TemplateOne() {
  return React.createElement(
    BlockStack,
    null,
    React.createElement(
      CalloutBanner,
      null,
      "I can safely use UI components now!"
    ),
    React.createElement(Button, null, "I am a button")
  );
}
