"use strict";
(self.webpackChunkkhalid_hossain = self.webpackChunkkhalid_hossain || []).push([
  [96],
  {
    "./components/Button/Button.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Button_stories,
        });
      var react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        esm_extends = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/extends.js",
        ),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js",
        ),
        dist = __webpack_require__(
          "./node_modules/class-variance-authority/dist/index.mjs",
        ),
        bundle_mjs = __webpack_require__(
          "./node_modules/tailwind-merge/dist/bundle-mjs.mjs",
        ),
        _excluded = ["className", "intent", "size", "underline"],
        __jsx = react.createElement,
        Button_button = (0, dist.F)(
          [
            "justify-center",
            "inline-flex",
            "items-center",
            "rounded-xl",
            "text-center",
            "border",
            "border-blue-400",
            "transition-colors",
            "delay-50",
          ],
          {
            variants: {
              intent: {
                primary: [
                  "bg-blue-400",
                  "text-white",
                  "hover:enabled:bg-blue-700",
                ],
                secondary: [
                  "bg-transparent",
                  "text-blue-400",
                  "hover:enabled:bg-blue-400",
                  "hover:enabled:text-white",
                ],
              },
              size: {
                sm: [
                  "min-w-20",
                  "h-full",
                  "min-h-10",
                  "text-sm",
                  "py-1.5",
                  "px-4",
                ],
                lg: [
                  "min-w-32",
                  "h-full",
                  "min-h-12",
                  "text-lg",
                  "py-2.5",
                  "px-6",
                ],
              },
              underline: { true: ["underline"], false: [] },
            },
            defaultVariants: { intent: "primary", size: "lg" },
          },
        );
      function Button(_ref) {
        var className = _ref.className,
          intent = _ref.intent,
          size = _ref.size,
          underline = _ref.underline,
          props = (0, objectWithoutProperties.A)(_ref, _excluded);
        return __jsx(
          "a",
          (0, esm_extends.A)(
            {
              className: (0, bundle_mjs.QP)(
                Button_button({ intent, size, className, underline }),
              ),
            },
            props,
          ),
          props.children,
        );
      }
      Button.displayName = "Button";
      var Button_stories_jsx = react.createElement,
        Default = {
          render: function render(args) {
            return Button_stories_jsx(Button, args);
          },
        };
      const Button_stories = {
        title: "Button",
        component: Button,
        args: {
          intent: "primary",
          underline: !1,
          children: "Button",
          size: "lg",
        },
        argTypes: {
          intent: {
            options: ["primary", "secondary"],
            control: { type: "select" },
          },
          size: { options: ["sm", "lg"], control: { type: "select" } },
        },
      };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: "{\n  render: args => <Button {...args} />\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ["Default"];
    },
  },
]);
