import React from "react";
import { render } from "react-dom";

import { Context } from "@shopify/checkout-ui-react/argo";
import {
  Text,
  Heading,
  Layout,
  BlockStack,
} from "@shopify/checkout-ui-react";

import {TemplateOne} from 'checkout-ui-test-reusable-components';

export default function App() {
  return (
    <Context>
      <AppUi />
    </Context>
  );
}

function AppUi() {
  return (
    <Layout>
      <BlockStack>
        <Heading>Hello World</Heading>
        <Text>The Following is a result of a reusable library</Text>
        <TemplateOne></TemplateOne>
      </BlockStack>
      <BlockStack>

      </BlockStack>
    </Layout>
  );
}

render(<App></App>, document.querySelector("#app"));
