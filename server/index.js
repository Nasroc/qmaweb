import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, BellIcon } from "@heroicons/react/24/outline";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const stats = [
  { name: "Current Students", value: "200+" },
  { name: "Coaches", value: "3" },
  { name: "Days Per Week", value: "4" },
  { name: "Attendance", value: "Unlimited" }
];
function AboutUs() {
  return /* @__PURE__ */ jsxs("div", { className: "relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        alt: "",
        src: "#",
        className: "absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl",
        children: /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            },
            className: "aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu",
        children: /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            },
            className: "aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl lg:mx-0", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-5xl font-semibold tracking-tight text-white sm:text-7xl", children: "Join Us Today" }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8", children: "Here at Quantum, we strive to create a culture that values respect, integrity, and curiosity. We believe that our success is driven by our people, and we are committed to fostering an inclusive environment where everyone can thrive." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none", children: /* @__PURE__ */ jsx("dl", { className: "mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4", children: stats.map((stat) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col-reverse gap-1", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-base/7 text-gray-300", children: stat.name }),
        /* @__PURE__ */ jsx("dd", { className: "text-4xl font-semibold tracking-tight text-white", children: stat.value })
      ] }, stat.name)) }) })
    ] })
  ] });
}
function Dashboard() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(AboutUs, {}) });
}
const logo = "/assets/qma-logo--NUluzUL.png";
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function NavBar() {
  return /* @__PURE__ */ jsxs(Disclosure, { as: "nav", className: "bg-gray-800", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "relative flex h-18 items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 flex items-center sm:hidden", children: /* @__PURE__ */ jsxs(DisclosureButton, { className: "group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute -inset-0.5" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open main menu" }),
        /* @__PURE__ */ jsx(Bars3Icon, { "aria-hidden": "true", className: "block size-6 group-data-open:hidden" }),
        /* @__PURE__ */ jsx(XMarkIcon, { "aria-hidden": "true", className: "hidden size-6 group-data-open:block" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start content-center", children: [
        /* @__PURE__ */ jsx("div", { className: "flex shrink-0 items-center content-center sm:justify-center", children: /* @__PURE__ */ jsx(
          "img",
          {
            alt: "Your Company",
            src: logo,
            className: "w-25 pt-8 z-1"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:ml-6 sm:block content-center", children: /* @__PURE__ */ jsx("div", { className: "flex space-x-4", children: navigation.map((item) => /* @__PURE__ */ jsx(
          "a",
          {
            href: item.href,
            "aria-current": item.current ? "page" : void 0,
            className: classNames(
              item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "rounded-md px-3 py-2 text-sm font-medium"
            ),
            children: item.name
          },
          item.name
        )) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0", children: /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          className: "relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden",
          children: [
            /* @__PURE__ */ jsx("span", { className: "absolute -inset-1.5" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "View notifications" }),
            /* @__PURE__ */ jsx(BellIcon, { "aria-hidden": "true", className: "size-6" })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx(DisclosurePanel, { className: "sm:hidden", children: /* @__PURE__ */ jsx("div", { className: "space-y-1 px-2 pt-2 pb-3", children: navigation.map((item) => /* @__PURE__ */ jsx(
      DisclosureButton,
      {
        as: "a",
        href: item.href,
        "aria-current": item.current ? "page" : void 0,
        className: classNames(
          item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
          "block rounded-md px-3 py-2 text-base font-medium"
        ),
        children: item.name
      },
      item.name
    )) }) })
  ] });
}
function meta({}) {
  return [{
    title: "Quantum Martial Arts"
  }, {
    name: "description",
    content: "Welcome to Quantum!"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(NavBar, {}), /* @__PURE__ */ jsx(Dashboard, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-C0pfUjCT.js", "imports": ["/assets/chunk-HA7DTUK3-BPN_RJDO.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-B4gBICMh.js", "imports": ["/assets/chunk-HA7DTUK3-BPN_RJDO.js", "/assets/with-props-DGV52VpC.js"], "css": ["/assets/root-Bjt8YDX7.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-DAjxkrVJ.js", "imports": ["/assets/with-props-DGV52VpC.js", "/assets/chunk-HA7DTUK3-BPN_RJDO.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-258de9fa.js", "version": "258de9fa" };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr
};
