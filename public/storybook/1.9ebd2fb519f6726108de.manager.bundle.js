(window.webpackJsonp = window.webpackJsonp || []).push([
    [1],
    {
        456: function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(
                    __webpack_exports__,
                    "WithTooltipPure",
                    function () {
                        return WithTooltip_WithTooltipPure;
                    }
                ),
                __webpack_require__.d(
                    __webpack_exports__,
                    "WithToolTipState",
                    function () {
                        return WithTooltip_WithToolTipState;
                    }
                ),
                __webpack_require__.d(
                    __webpack_exports__,
                    "WithTooltip",
                    function () {
                        return WithTooltip_WithToolTipState;
                    }
                );
            __webpack_require__(16),
                __webpack_require__(52),
                __webpack_require__(23),
                __webpack_require__(4),
                __webpack_require__(15),
                __webpack_require__(10),
                __webpack_require__(5),
                __webpack_require__(13),
                __webpack_require__(9),
                __webpack_require__(12),
                __webpack_require__(14),
                __webpack_require__(17),
                __webpack_require__(8),
                __webpack_require__(39);
            var react = __webpack_require__(0),
                react_default = __webpack_require__.n(react),
                esm = __webpack_require__(1),
                global_window = __webpack_require__(6),
                window_default = __webpack_require__.n(global_window),
                react_popper_tooltip = __webpack_require__(942),
                memoizerific =
                    (__webpack_require__(79),
                    __webpack_require__(27),
                    __webpack_require__(168),
                    __webpack_require__(18),
                    __webpack_require__(30)),
                memoizerific_default = __webpack_require__.n(memoizerific),
                utils = __webpack_require__(100);
            function _extends() {
                return (_extends =
                    Object.assign ||
                    function (target) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = arguments[i];
                            for (var key in source)
                                Object.prototype.hasOwnProperty.call(
                                    source,
                                    key
                                ) && (target[key] = source[key]);
                        }
                        return target;
                    }).apply(this, arguments);
            }
            function _objectWithoutProperties(source, excluded) {
                if (null == source) return {};
                var key,
                    i,
                    target = (function _objectWithoutPropertiesLoose(
                        source,
                        excluded
                    ) {
                        if (null == source) return {};
                        var key,
                            i,
                            target = {},
                            sourceKeys = Object.keys(source);
                        for (i = 0; i < sourceKeys.length; i++)
                            (key = sourceKeys[i]),
                                excluded.indexOf(key) >= 0 ||
                                    (target[key] = source[key]);
                        return target;
                    })(source, excluded);
                if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                    for (i = 0; i < sourceSymbolKeys.length; i++)
                        (key = sourceSymbolKeys[i]),
                            excluded.indexOf(key) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    source,
                                    key
                                ) &&
                                    (target[key] = source[key]));
                }
                return target;
            }
            var _templateObject,
                _templateObject2,
                match = memoizerific_default()(1e3)(function (
                    requests,
                    actual,
                    value
                ) {
                    var fallback =
                        arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : 0;
                    return actual.split("-")[0] === requests ? value : fallback;
                }),
                Arrow = esm.styled.div(
                    { position: "absolute", borderStyle: "solid" },
                    function (_ref) {
                        var placement = _ref.placement,
                            x = 0,
                            y = 0;
                        switch (!0) {
                            case placement.startsWith("left") ||
                                placement.startsWith("right"):
                                y = 8;
                                break;
                            case placement.startsWith("top") ||
                                placement.startsWith("bottom"):
                                x = 8;
                        }
                        return {
                            transform: "translate3d("
                                .concat(x, "px, ")
                                .concat(y, "px, 0px)"),
                        };
                    },
                    function (_ref2) {
                        var theme = _ref2.theme,
                            color = _ref2.color,
                            placement = _ref2.placement;
                        return {
                            bottom: "".concat(
                                match("top", placement, -8, "auto"),
                                "px"
                            ),
                            top: "".concat(
                                match("bottom", placement, -8, "auto"),
                                "px"
                            ),
                            right: "".concat(
                                match("left", placement, -8, "auto"),
                                "px"
                            ),
                            left: "".concat(
                                match("right", placement, -8, "auto"),
                                "px"
                            ),
                            borderBottomWidth: "".concat(
                                match("top", placement, "0", 8),
                                "px"
                            ),
                            borderTopWidth: "".concat(
                                match("bottom", placement, "0", 8),
                                "px"
                            ),
                            borderRightWidth: "".concat(
                                match("left", placement, "0", 8),
                                "px"
                            ),
                            borderLeftWidth: "".concat(
                                match("right", placement, "0", 8),
                                "px"
                            ),
                            borderTopColor: match(
                                "top",
                                placement,
                                theme.color[color] ||
                                    color ||
                                    "light" === theme.base
                                    ? Object(utils.c)(theme.background.app)
                                    : Object(utils.a)(theme.background.app),
                                "transparent"
                            ),
                            borderBottomColor: match(
                                "bottom",
                                placement,
                                theme.color[color] ||
                                    color ||
                                    "light" === theme.base
                                    ? Object(utils.c)(theme.background.app)
                                    : Object(utils.a)(theme.background.app),
                                "transparent"
                            ),
                            borderLeftColor: match(
                                "left",
                                placement,
                                theme.color[color] ||
                                    color ||
                                    "light" === theme.base
                                    ? Object(utils.c)(theme.background.app)
                                    : Object(utils.a)(theme.background.app),
                                "transparent"
                            ),
                            borderRightColor: match(
                                "right",
                                placement,
                                theme.color[color] ||
                                    color ||
                                    "light" === theme.base
                                    ? Object(utils.c)(theme.background.app)
                                    : Object(utils.a)(theme.background.app),
                                "transparent"
                            ),
                        };
                    }
                ),
                Wrapper = esm.styled.div(
                    function (_ref3) {
                        return {
                            display: _ref3.hidden ? "none" : "inline-block",
                            zIndex: 2147483647,
                        };
                    },
                    function (_ref4) {
                        var theme = _ref4.theme,
                            color = _ref4.color;
                        return _ref4.hasChrome
                            ? {
                                  background:
                                      theme.color[color] ||
                                      color ||
                                      "light" === theme.base
                                          ? Object(utils.c)(
                                                theme.background.app
                                            )
                                          : Object(utils.a)(
                                                theme.background.app
                                            ),
                                  filter: "\n            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))\n            drop-shadow(0 1px 3px rgba(0,0,0,0.1))\n          ",
                                  borderRadius: 2 * theme.appBorderRadius,
                                  fontSize: theme.typography.size.s1,
                              }
                            : {};
                    }
                ),
                Tooltip_Tooltip = function Tooltip(_ref5) {
                    var placement = _ref5.placement,
                        hasChrome = _ref5.hasChrome,
                        children = _ref5.children,
                        arrowProps = _ref5.arrowProps,
                        tooltipRef = _ref5.tooltipRef,
                        arrowRef = _ref5.arrowRef,
                        color = _ref5.color,
                        props = _objectWithoutProperties(_ref5, [
                            "placement",
                            "hasChrome",
                            "children",
                            "arrowProps",
                            "tooltipRef",
                            "arrowRef",
                            "color",
                        ]);
                    return react_default.a.createElement(
                        Wrapper,
                        _extends(
                            {
                                hasChrome: hasChrome,
                                placement: placement,
                                ref: tooltipRef,
                            },
                            props,
                            { color: color }
                        ),
                        hasChrome &&
                            react_default.a.createElement(
                                Arrow,
                                _extends(
                                    { placement: placement, ref: arrowRef },
                                    arrowProps,
                                    { color: color }
                                )
                            ),
                        children
                    );
                };
            function _slicedToArray(arr, i) {
                return (
                    (function _arrayWithHoles(arr) {
                        if (Array.isArray(arr)) return arr;
                    })(arr) ||
                    (function _iterableToArrayLimit(arr, i) {
                        if (
                            "undefined" == typeof Symbol ||
                            !(Symbol.iterator in Object(arr))
                        )
                            return;
                        var _arr = [],
                            _n = !0,
                            _d = !1,
                            _e = void 0;
                        try {
                            for (
                                var _s, _i = arr[Symbol.iterator]();
                                !(_n = (_s = _i.next()).done) &&
                                (_arr.push(_s.value), !i || _arr.length !== i);
                                _n = !0
                            );
                        } catch (err) {
                            (_d = !0), (_e = err);
                        } finally {
                            try {
                                _n || null == _i.return || _i.return();
                            } finally {
                                if (_d) throw _e;
                            }
                        }
                        return _arr;
                    })(arr, i) ||
                    (function _unsupportedIterableToArray(o, minLen) {
                        if (!o) return;
                        if ("string" == typeof o)
                            return _arrayLikeToArray(o, minLen);
                        var n = Object.prototype.toString.call(o).slice(8, -1);
                        "Object" === n &&
                            o.constructor &&
                            (n = o.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(o);
                        if (
                            "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                            return _arrayLikeToArray(o, minLen);
                    })(arr, i) ||
                    (function _nonIterableRest() {
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                    })()
                );
            }
            function _arrayLikeToArray(arr, len) {
                (null == len || len > arr.length) && (len = arr.length);
                for (var i = 0, arr2 = new Array(len); i < len; i++)
                    arr2[i] = arr[i];
                return arr2;
            }
            function WithTooltip_extends() {
                return (WithTooltip_extends =
                    Object.assign ||
                    function (target) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = arguments[i];
                            for (var key in source)
                                Object.prototype.hasOwnProperty.call(
                                    source,
                                    key
                                ) && (target[key] = source[key]);
                        }
                        return target;
                    }).apply(this, arguments);
            }
            function WithTooltip_objectWithoutProperties(source, excluded) {
                if (null == source) return {};
                var key,
                    i,
                    target = (function WithTooltip_objectWithoutPropertiesLoose(
                        source,
                        excluded
                    ) {
                        if (null == source) return {};
                        var key,
                            i,
                            target = {},
                            sourceKeys = Object.keys(source);
                        for (i = 0; i < sourceKeys.length; i++)
                            (key = sourceKeys[i]),
                                excluded.indexOf(key) >= 0 ||
                                    (target[key] = source[key]);
                        return target;
                    })(source, excluded);
                if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                    for (i = 0; i < sourceSymbolKeys.length; i++)
                        (key = sourceSymbolKeys[i]),
                            excluded.indexOf(key) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    source,
                                    key
                                ) &&
                                    (target[key] = source[key]));
                }
                return target;
            }
            function _taggedTemplateLiteral(strings, raw) {
                return (
                    raw || (raw = strings.slice(0)),
                    Object.freeze(
                        Object.defineProperties(strings, {
                            raw: { value: Object.freeze(raw) },
                        })
                    )
                );
            }
            (Tooltip_Tooltip.displayName = "Tooltip"),
                (Tooltip_Tooltip.defaultProps = {
                    color: void 0,
                    arrowRef: void 0,
                    tooltipRef: void 0,
                    hasChrome: !0,
                    placement: "top",
                    arrowProps: {},
                });
            var WithTooltip_document = window_default.a.document,
                TargetContainer = esm.styled.div(
                    _templateObject ||
                        (_templateObject = _taggedTemplateLiteral([
                            "\n  display: inline-block;\n  cursor: ",
                            ";\n",
                        ])),
                    function (props) {
                        return "hover" === props.mode ? "default" : "pointer";
                    }
                ),
                TargetSvgContainer = esm.styled.g(
                    _templateObject2 ||
                        (_templateObject2 = _taggedTemplateLiteral([
                            "\n  cursor: ",
                            ";\n",
                        ])),
                    function (props) {
                        return "hover" === props.mode ? "default" : "pointer";
                    }
                ),
                WithTooltip_WithTooltipPure = function WithTooltipPure(_ref) {
                    var svg = _ref.svg,
                        trigger = _ref.trigger,
                        placement = (_ref.closeOnClick, _ref.placement),
                        modifiers = _ref.modifiers,
                        hasChrome = _ref.hasChrome,
                        _tooltip = _ref.tooltip,
                        children = _ref.children,
                        tooltipShown = _ref.tooltipShown,
                        onVisibilityChange = _ref.onVisibilityChange,
                        props = WithTooltip_objectWithoutProperties(_ref, [
                            "svg",
                            "trigger",
                            "closeOnClick",
                            "placement",
                            "modifiers",
                            "hasChrome",
                            "tooltip",
                            "children",
                            "tooltipShown",
                            "onVisibilityChange",
                        ]),
                        Container = svg ? TargetSvgContainer : TargetContainer;
                    return react_default.a.createElement(
                        react_popper_tooltip.a,
                        {
                            placement: placement,
                            trigger: trigger,
                            modifiers: modifiers,
                            tooltipShown: tooltipShown,
                            onVisibilityChange: onVisibilityChange,
                            tooltip: function tooltip(_ref2) {
                                var getTooltipProps = _ref2.getTooltipProps,
                                    getArrowProps = _ref2.getArrowProps,
                                    tooltipRef = _ref2.tooltipRef,
                                    arrowRef = _ref2.arrowRef,
                                    tooltipPlacement = _ref2.placement;
                                return react_default.a.createElement(
                                    Tooltip_Tooltip,
                                    WithTooltip_extends(
                                        {
                                            hasChrome: hasChrome,
                                            placement: tooltipPlacement,
                                            tooltipRef: tooltipRef,
                                            arrowRef: arrowRef,
                                            arrowProps: getArrowProps(),
                                        },
                                        getTooltipProps()
                                    ),
                                    "function" == typeof _tooltip
                                        ? _tooltip({
                                              onHide: function onHide() {
                                                  return onVisibilityChange(!1);
                                              },
                                          })
                                        : _tooltip
                                );
                            },
                        },
                        function (_ref3) {
                            var getTriggerProps = _ref3.getTriggerProps,
                                triggerRef = _ref3.triggerRef;
                            return react_default.a.createElement(
                                Container,
                                WithTooltip_extends(
                                    { ref: triggerRef },
                                    getTriggerProps(),
                                    props
                                ),
                                children
                            );
                        }
                    );
                };
            (WithTooltip_WithTooltipPure.displayName = "WithTooltipPure"),
                (WithTooltip_WithTooltipPure.defaultProps = {
                    svg: !1,
                    trigger: "hover",
                    closeOnClick: !1,
                    placement: "top",
                    modifiers: [
                        { name: "preventOverflow", options: { padding: 8 } },
                        { name: "offset", options: { offset: [8, 8] } },
                        { name: "arrow", options: { padding: 8 } },
                    ],
                    hasChrome: !0,
                    tooltipShown: !1,
                });
            var WithTooltip_WithToolTipState = function WithToolTipState(
                _ref4
            ) {
                var startOpen = _ref4.startOpen,
                    onChange = _ref4.onVisibilityChange,
                    rest = WithTooltip_objectWithoutProperties(_ref4, [
                        "startOpen",
                        "onVisibilityChange",
                    ]),
                    _useState2 = _slicedToArray(
                        Object(react.useState)(startOpen || !1),
                        2
                    ),
                    tooltipShown = _useState2[0],
                    setTooltipShown = _useState2[1],
                    onVisibilityChange = Object(react.useCallback)(
                        function (visibility) {
                            (onChange && !1 === onChange(visibility)) ||
                                setTooltipShown(visibility);
                        },
                        [onChange]
                    );
                return (
                    Object(react.useEffect)(function () {
                        var hide = function hide() {
                            return onVisibilityChange(!1);
                        };
                        WithTooltip_document.addEventListener(
                            "keydown",
                            hide,
                            !1
                        );
                        var iframes = Array.from(
                                WithTooltip_document.getElementsByTagName(
                                    "iframe"
                                )
                            ),
                            unbinders = [];
                        return (
                            iframes.forEach(function (iframe) {
                                var bind = function bind() {
                                    try {
                                        iframe.contentWindow.document &&
                                            (iframe.contentWindow.document.addEventListener(
                                                "click",
                                                hide
                                            ),
                                            unbinders.push(function () {
                                                try {
                                                    iframe.contentWindow.document.removeEventListener(
                                                        "click",
                                                        hide
                                                    );
                                                } catch (e) {}
                                            }));
                                    } catch (e) {}
                                };
                                bind(),
                                    iframe.addEventListener("load", bind),
                                    unbinders.push(function () {
                                        iframe.removeEventListener(
                                            "load",
                                            bind
                                        );
                                    });
                            }),
                            function () {
                                WithTooltip_document.removeEventListener(
                                    "keydown",
                                    hide
                                ),
                                    unbinders.forEach(function (unbind) {
                                        unbind();
                                    });
                            }
                        );
                    }),
                    react_default.a.createElement(
                        WithTooltip_WithTooltipPure,
                        WithTooltip_extends({}, rest, {
                            tooltipShown: tooltipShown,
                            onVisibilityChange: onVisibilityChange,
                        })
                    )
                );
            };
            WithTooltip_WithToolTipState.displayName = "WithToolTipState";
        },
    },
]);
