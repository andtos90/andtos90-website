import axios from "axios";
import React, { Component } from "react";
import { renderStylesToString } from "emotion-server";

import data from "./src/data";
import keys from "./src/config/keys";

export default {
  // React is used in dev mode, rember to test the staging env
  preact: true,
  getSiteData: () => ({
    title: "Andrea Tosatto",
    lastBuilt: Date.now()
  }),
  siteRoot: `${keys.WEBSITE_PROTOCOL}://${keys.WEBSITE_PATH}`,
  getRoutes: async () => {
    return [
      {
        path: "/",
        component: "src/containers/Home"
      },
      /*{
        path: "/about",
        component: "src/containers/About"
      },
      {
        path: "/work",
        component: "src/containers/Work",
        getData: () => ({
          entries: data.workData
        }),
        children: data.workData.map(w => {
          return {
            path: `${w.id}`,
            component: "src/containers/WorkDetail",
            getData: () => ({
              entry: w
            })
          };
        })
      },*/
      {
        is404: true,
        component: "src/containers/404"
      }
    ];
  },
  renderToHtml: (render, Comp) => renderStylesToString(render(<Comp />)),
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  }
};
