(window.webpackJsonp = window.webpackJsonp || []).push([
    [9],
    {
        870: function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(
                    __webpack_exports__,
                    "ColorControl",
                    function () {
                        return Color_ColorControl;
                    }
                );
            __webpack_require__(23),
                __webpack_require__(4),
                __webpack_require__(10),
                __webpack_require__(5),
                __webpack_require__(13),
                __webpack_require__(8),
                __webpack_require__(9),
                __webpack_require__(12),
                __webpack_require__(17),
                __webpack_require__(18),
                __webpack_require__(15),
                __webpack_require__(67),
                __webpack_require__(42),
                __webpack_require__(27),
                __webpack_require__(21),
                __webpack_require__(118),
                __webpack_require__(80),
                __webpack_require__(168),
                __webpack_require__(79),
                __webpack_require__(16),
                __webpack_require__(32),
                __webpack_require__(14);
            var react = __webpack_require__(0),
                react_default = __webpack_require__.n(react),
                index_module = __webpack_require__(941),
                color_convert = __webpack_require__(938),
                color_convert_default = __webpack_require__.n(color_convert),
                throttle = __webpack_require__(410),
                throttle_default = __webpack_require__.n(throttle),
                esm = __webpack_require__(1);
            __webpack_require__(48);
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
            var Note = esm.styled.div(function (_ref) {
                    var theme = _ref.theme;
                    return {
                        padding: "2px 6px",
                        lineHeight: "16px",
                        fontSize: 10,
                        fontWeight: theme.typography.weight.bold,
                        color: theme.color.lightest,
                        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)",
                        borderRadius: 4,
                        whiteSpace: "nowrap",
                        pointerEvents: "none",
                        zIndex: -1,
                        background:
                            "light" === theme.base
                                ? "rgba(60, 60, 60, 0.9)"
                                : "rgba(20, 20, 20, 0.85)",
                        margin: 6,
                    };
                }),
                TooltipNote_TooltipNote = function TooltipNote(_ref2) {
                    var note = _ref2.note,
                        props = _objectWithoutProperties(_ref2, ["note"]);
                    return react_default.a.createElement(Note, props, note);
                };
            TooltipNote_TooltipNote.displayName = "TooltipNote";
            var _ColorPicker,
                _fallbackColor,
                lazy_WithTooltip = __webpack_require__(407),
                esm_form = __webpack_require__(55),
                icon = __webpack_require__(60),
                helpers = __webpack_require__(37);
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
            function _defineProperty(obj, key, value) {
                return (
                    key in obj
                        ? Object.defineProperty(obj, key, {
                              value: value,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (obj[key] = value),
                    obj
                );
            }
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
            function Color_objectWithoutProperties(source, excluded) {
                if (null == source) return {};
                var key,
                    i,
                    target = (function Color_objectWithoutPropertiesLoose(
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
            var Wrapper = esm.styled.div({
                    position: "relative",
                    maxWidth: 250,
                }),
                PickerTooltip = Object(esm.styled)(lazy_WithTooltip.a)({
                    position: "absolute",
                    zIndex: 1,
                    top: 4,
                    left: 4,
                }),
                TooltipContent = esm.styled.div({
                    width: 200,
                    margin: 5,
                    ".react-colorful__saturation": {
                        borderRadius: "4px 4px 0 0",
                    },
                    ".react-colorful__hue": {
                        boxShadow: "inset 0 0 0 1px rgb(0 0 0 / 5%)",
                    },
                    ".react-colorful__last-control": {
                        borderRadius: "0 0 4px 4px",
                    },
                }),
                Color_Note = Object(esm.styled)(TooltipNote_TooltipNote)(
                    function (_ref) {
                        return { fontFamily: _ref.theme.typography.fonts.base };
                    }
                ),
                Swatches = esm.styled.div({
                    display: "grid",
                    gridTemplateColumns: "repeat(9, 16px)",
                    gap: 6,
                    padding: 3,
                    marginTop: 5,
                    width: 200,
                }),
                SwatchColor = esm.styled.div(function (_ref2) {
                    var theme = _ref2.theme;
                    return {
                        width: 16,
                        height: 16,
                        boxShadow: _ref2.active
                            ? ""
                                  .concat(
                                      theme.appBorderColor,
                                      " 0 0 0 1px inset, "
                                  )
                                  .concat(
                                      theme.color.mediumdark,
                                      "50 0 0 0 4px"
                                  )
                            : "".concat(
                                  theme.appBorderColor,
                                  " 0 0 0 1px inset"
                              ),
                        borderRadius: theme.appBorderRadius,
                    };
                }),
                Color_Swatch = function Swatch(_ref3) {
                    var value = _ref3.value,
                        active = _ref3.active,
                        onClick = _ref3.onClick,
                        style = _ref3.style,
                        props = Color_objectWithoutProperties(_ref3, [
                            "value",
                            "active",
                            "onClick",
                            "style",
                        ]),
                        backgroundImage = "linear-gradient("
                            .concat(value, ", ")
                            .concat(value, "), ")
                            .concat(
                                'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',
                                ", linear-gradient(#fff, #fff)"
                            );
                    return react_default.a.createElement(
                        SwatchColor,
                        _extends({}, props, {
                            active: active,
                            onClick: onClick,
                            style: Object.assign({}, style, {
                                backgroundImage: backgroundImage,
                            }),
                        })
                    );
                };
            Color_Swatch.displayName = "Swatch";
            var ColorSpace,
                Input = Object(esm.styled)(esm_form.a.Input)(function (_ref4) {
                    return {
                        width: "100%",
                        paddingLeft: 30,
                        paddingRight: 30,
                        boxSizing: "border-box",
                        fontFamily: _ref4.theme.typography.fonts.base,
                    };
                }),
                ToggleIcon = Object(esm.styled)(icon.a)(function (_ref5) {
                    return {
                        position: "absolute",
                        zIndex: 1,
                        top: 6,
                        right: 7,
                        width: 20,
                        height: 20,
                        padding: 4,
                        boxSizing: "border-box",
                        cursor: "pointer",
                        color: _ref5.theme.input.color,
                    };
                });
            !(function (ColorSpace) {
                (ColorSpace.RGB = "rgb"),
                    (ColorSpace.HSL = "hsl"),
                    (ColorSpace.HEX = "hex");
            })(ColorSpace || (ColorSpace = {}));
            var COLOR_SPACES = Object.values(ColorSpace),
                COLOR_REGEXP =
                    /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,
                RGB_REGEXP =
                    /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,
                HSL_REGEXP =
                    /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,
                HEX_REGEXP = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,
                SHORTHEX_REGEXP = /^\s*#?([0-9a-f]{3})\s*$/i,
                ColorPicker =
                    (_defineProperty(
                        (_ColorPicker = {}),
                        ColorSpace.HEX,
                        index_module.a
                    ),
                    _defineProperty(
                        _ColorPicker,
                        ColorSpace.RGB,
                        index_module.c
                    ),
                    _defineProperty(
                        _ColorPicker,
                        ColorSpace.HSL,
                        index_module.b
                    ),
                    _ColorPicker),
                fallbackColor =
                    (_defineProperty(
                        (_fallbackColor = {}),
                        ColorSpace.HEX,
                        "transparent"
                    ),
                    _defineProperty(
                        _fallbackColor,
                        ColorSpace.RGB,
                        "rgba(0, 0, 0, 0)"
                    ),
                    _defineProperty(
                        _fallbackColor,
                        ColorSpace.HSL,
                        "hsla(0, 0%, 0%, 0)"
                    ),
                    _fallbackColor),
                stringToArgs = function stringToArgs(value) {
                    var match =
                        null == value ? void 0 : value.match(COLOR_REGEXP);
                    if (!match) return [0, 0, 0, 1];
                    var _match = _slicedToArray(match, 5),
                        x = _match[1],
                        y = _match[2],
                        z = _match[3],
                        _match$ = _match[4];
                    return [x, y, z, void 0 === _match$ ? 1 : _match$].map(
                        Number
                    );
                },
                Color_parseValue = function parseValue(value) {
                    var _ref12;
                    if (value) {
                        var valid = !0;
                        if (RGB_REGEXP.test(value)) {
                            var _ref8,
                                _stringToArgs2 = _slicedToArray(
                                    stringToArgs(value),
                                    4
                                ),
                                r = _stringToArgs2[0],
                                g = _stringToArgs2[1],
                                b = _stringToArgs2[2],
                                a = _stringToArgs2[3],
                                _ref7 = _slicedToArray(
                                    color_convert_default.a.rgb.hsl([
                                        r,
                                        g,
                                        b,
                                    ]) || [0, 0, 0],
                                    3
                                ),
                                h = _ref7[0],
                                s = _ref7[1],
                                l = _ref7[2];
                            return (
                                _defineProperty(
                                    (_ref8 = {
                                        valid: valid,
                                        value: value,
                                        keyword:
                                            color_convert_default.a.rgb.keyword(
                                                [r, g, b]
                                            ),
                                        colorSpace: ColorSpace.RGB,
                                    }),
                                    ColorSpace.RGB,
                                    value
                                ),
                                _defineProperty(
                                    _ref8,
                                    ColorSpace.HSL,
                                    "hsla("
                                        .concat(h, ", ")
                                        .concat(s, "%, ")
                                        .concat(l, "%, ")
                                        .concat(a, ")")
                                ),
                                _defineProperty(
                                    _ref8,
                                    ColorSpace.HEX,
                                    "#".concat(
                                        color_convert_default.a.rgb
                                            .hex([r, g, b])
                                            .toLowerCase()
                                    )
                                ),
                                _ref8
                            );
                        }
                        if (HSL_REGEXP.test(value)) {
                            var _ref11,
                                _stringToArgs4 = _slicedToArray(
                                    stringToArgs(value),
                                    4
                                ),
                                _h = _stringToArgs4[0],
                                _s2 = _stringToArgs4[1],
                                _l = _stringToArgs4[2],
                                _a = _stringToArgs4[3],
                                _ref10 = _slicedToArray(
                                    color_convert_default.a.hsl.rgb([
                                        _h,
                                        _s2,
                                        _l,
                                    ]) || [0, 0, 0],
                                    3
                                ),
                                _r = _ref10[0],
                                _g = _ref10[1],
                                _b = _ref10[2];
                            return (
                                _defineProperty(
                                    (_ref11 = {
                                        valid: valid,
                                        value: value,
                                        keyword:
                                            color_convert_default.a.hsl.keyword(
                                                [_h, _s2, _l]
                                            ),
                                        colorSpace: ColorSpace.HSL,
                                    }),
                                    ColorSpace.RGB,
                                    "rgba("
                                        .concat(_r, ", ")
                                        .concat(_g, ", ")
                                        .concat(_b, ", ")
                                        .concat(_a, ")")
                                ),
                                _defineProperty(_ref11, ColorSpace.HSL, value),
                                _defineProperty(
                                    _ref11,
                                    ColorSpace.HEX,
                                    "#".concat(
                                        color_convert_default.a.hsl
                                            .hex([_h, _s2, _l])
                                            .toLowerCase()
                                    )
                                ),
                                _ref11
                            );
                        }
                        var plain = value.replace("#", ""),
                            rgb =
                                color_convert_default.a.keyword.rgb(plain) ||
                                color_convert_default.a.hex.rgb(plain),
                            hsl = color_convert_default.a.rgb.hsl(rgb),
                            mapped = value;
                        if (
                            (/[^#a-f0-9]/i.test(value)
                                ? (mapped = plain)
                                : HEX_REGEXP.test(value) &&
                                  (mapped = "#".concat(plain)),
                            mapped.startsWith("#"))
                        )
                            valid = HEX_REGEXP.test(mapped);
                        else
                            try {
                                color_convert_default.a.keyword.hex(mapped);
                            } catch (e) {
                                valid = !1;
                            }
                        return (
                            _defineProperty(
                                (_ref12 = {
                                    valid: valid,
                                    value: mapped,
                                    keyword:
                                        color_convert_default.a.rgb.keyword(
                                            rgb
                                        ),
                                    colorSpace: ColorSpace.HEX,
                                }),
                                ColorSpace.RGB,
                                "rgba("
                                    .concat(rgb[0], ", ")
                                    .concat(rgb[1], ", ")
                                    .concat(rgb[2], ", 1)")
                            ),
                            _defineProperty(
                                _ref12,
                                ColorSpace.HSL,
                                "hsla("
                                    .concat(hsl[0], ", ")
                                    .concat(hsl[1], "%, ")
                                    .concat(hsl[2], "%, 1)")
                            ),
                            _defineProperty(_ref12, ColorSpace.HEX, mapped),
                            _ref12
                        );
                    }
                },
                Color_useColorInput = function useColorInput(
                    initialValue,
                    onChange
                ) {
                    var _useState2 = _slicedToArray(
                            Object(react.useState)(initialValue || ""),
                            2
                        ),
                        value = _useState2[0],
                        setValue = _useState2[1],
                        _useState4 = _slicedToArray(
                            Object(react.useState)(function () {
                                return Color_parseValue(value);
                            }),
                            2
                        ),
                        color = _useState4[0],
                        setColor = _useState4[1],
                        _useState6 = _slicedToArray(
                            Object(react.useState)(
                                (null == color ? void 0 : color.colorSpace) ||
                                    ColorSpace.HEX
                            ),
                            2
                        ),
                        colorSpace = _useState6[0],
                        setColorSpace = _useState6[1];
                    Object(react.useEffect)(
                        function () {
                            void 0 === initialValue &&
                                (setValue(""),
                                setColor(void 0),
                                setColorSpace(ColorSpace.HEX));
                        },
                        [initialValue]
                    );
                    var realValue = Object(react.useMemo)(
                            function () {
                                return (function getRealValue(
                                    value,
                                    color,
                                    colorSpace
                                ) {
                                    if (!value || null == color || !color.valid)
                                        return fallbackColor[colorSpace];
                                    if (colorSpace !== ColorSpace.HEX)
                                        return (
                                            (null == color
                                                ? void 0
                                                : color[colorSpace]) ||
                                            fallbackColor[colorSpace]
                                        );
                                    if (!color.hex.startsWith("#"))
                                        try {
                                            return "#".concat(
                                                color_convert_default.a.keyword.hex(
                                                    color.hex
                                                )
                                            );
                                        } catch (e) {
                                            return fallbackColor.hex;
                                        }
                                    var short =
                                        color.hex.match(SHORTHEX_REGEXP);
                                    if (!short)
                                        return HEX_REGEXP.test(color.hex)
                                            ? color.hex
                                            : fallbackColor.hex;
                                    var _short$1$split2 = _slicedToArray(
                                            short[1].split(""),
                                            3
                                        ),
                                        r = _short$1$split2[0],
                                        g = _short$1$split2[1],
                                        b = _short$1$split2[2];
                                    return "#"
                                        .concat(r)
                                        .concat(r)
                                        .concat(g)
                                        .concat(g)
                                        .concat(b)
                                        .concat(b);
                                })(value, color, colorSpace).toLowerCase();
                            },
                            [value, color, colorSpace]
                        ),
                        updateValue = Object(react.useCallback)(
                            function (update) {
                                var parsed = Color_parseValue(update);
                                setValue(
                                    (null == parsed ? void 0 : parsed.value) ||
                                        update ||
                                        ""
                                ),
                                    parsed &&
                                        (setColor(parsed),
                                        setColorSpace(parsed.colorSpace),
                                        onChange(parsed.value));
                            },
                            [onChange]
                        ),
                        cycleColorSpace = Object(react.useCallback)(
                            function () {
                                var next = COLOR_SPACES.indexOf(colorSpace) + 1;
                                next >= COLOR_SPACES.length && (next = 0),
                                    setColorSpace(COLOR_SPACES[next]);
                                var update =
                                    (null == color
                                        ? void 0
                                        : color[COLOR_SPACES[next]]) || "";
                                setValue(update), onChange(update);
                            },
                            [color, colorSpace, onChange]
                        );
                    return {
                        value: value,
                        realValue: realValue,
                        updateValue: updateValue,
                        color: color,
                        colorSpace: colorSpace,
                        cycleColorSpace: cycleColorSpace,
                    };
                },
                id = function id(value) {
                    return value.replace(/\s*/, "").toLowerCase();
                },
                Color_ColorControl = function ColorControl(_ref13) {
                    var name = _ref13.name,
                        initialValue = _ref13.value,
                        onChange = _ref13.onChange,
                        onFocus = _ref13.onFocus,
                        onBlur = _ref13.onBlur,
                        presetColors = _ref13.presetColors,
                        startOpen = _ref13.startOpen,
                        _useColorInput = Color_useColorInput(
                            initialValue,
                            throttle_default()(onChange, 200)
                        ),
                        value = _useColorInput.value,
                        realValue = _useColorInput.realValue,
                        updateValue = _useColorInput.updateValue,
                        color = _useColorInput.color,
                        colorSpace = _useColorInput.colorSpace,
                        cycleColorSpace = _useColorInput.cycleColorSpace,
                        _usePresets = (function usePresets(
                            presetColors,
                            currentColor,
                            colorSpace
                        ) {
                            var _useState8 = _slicedToArray(
                                    Object(react.useState)(
                                        null != currentColor &&
                                            currentColor.valid
                                            ? [currentColor]
                                            : []
                                    ),
                                    2
                                ),
                                selectedColors = _useState8[0],
                                setSelectedColors = _useState8[1];
                            Object(react.useEffect)(
                                function () {
                                    void 0 === currentColor &&
                                        setSelectedColors([]);
                                },
                                [currentColor]
                            );
                            var presets = Object(react.useMemo)(
                                    function () {
                                        return (presetColors || [])
                                            .map(function (preset) {
                                                return "string" == typeof preset
                                                    ? Color_parseValue(preset)
                                                    : preset.title
                                                    ? Object.assign(
                                                          {},
                                                          Color_parseValue(
                                                              preset.color
                                                          ),
                                                          {
                                                              keyword:
                                                                  preset.title,
                                                          }
                                                      )
                                                    : Color_parseValue(
                                                          preset.color
                                                      );
                                            })
                                            .concat(selectedColors)
                                            .filter(Boolean)
                                            .slice(-27);
                                    },
                                    [presetColors, selectedColors]
                                ),
                                addPreset = Object(react.useCallback)(
                                    function (color) {
                                        null != color &&
                                            color.valid &&
                                            (presets.some(function (preset) {
                                                return (
                                                    id(preset[colorSpace]) ===
                                                    id(color[colorSpace])
                                                );
                                            }) ||
                                                setSelectedColors(function (
                                                    arr
                                                ) {
                                                    return arr.concat(color);
                                                }));
                                    },
                                    [colorSpace, presets]
                                );
                            return { presets: presets, addPreset: addPreset };
                        })(presetColors, color, colorSpace),
                        presets = _usePresets.presets,
                        addPreset = _usePresets.addPreset,
                        Picker = ColorPicker[colorSpace];
                    return react_default.a.createElement(
                        Wrapper,
                        null,
                        react_default.a.createElement(
                            PickerTooltip,
                            {
                                trigger: "click",
                                startOpen: startOpen,
                                closeOnClick: !0,
                                onVisibilityChange:
                                    function onVisibilityChange() {
                                        return addPreset(color);
                                    },
                                tooltip: react_default.a.createElement(
                                    TooltipContent,
                                    null,
                                    react_default.a.createElement(Picker, {
                                        color:
                                            "transparent" === realValue
                                                ? "#000000"
                                                : realValue,
                                        onChange: updateValue,
                                        onFocus: onFocus,
                                        onBlur: onBlur,
                                    }),
                                    presets.length > 0 &&
                                        react_default.a.createElement(
                                            Swatches,
                                            null,
                                            presets.map(function (
                                                preset,
                                                index
                                            ) {
                                                return react_default.a.createElement(
                                                    lazy_WithTooltip.a,
                                                    {
                                                        key: ""
                                                            .concat(
                                                                preset.value,
                                                                "-"
                                                            )
                                                            .concat(index),
                                                        hasChrome: !1,
                                                        tooltip:
                                                            react_default.a.createElement(
                                                                Color_Note,
                                                                {
                                                                    note:
                                                                        preset.keyword ||
                                                                        preset.value,
                                                                }
                                                            ),
                                                    },
                                                    react_default.a.createElement(
                                                        Color_Swatch,
                                                        {
                                                            value: preset[
                                                                colorSpace
                                                            ],
                                                            active:
                                                                color &&
                                                                id(
                                                                    preset[
                                                                        colorSpace
                                                                    ]
                                                                ) ===
                                                                    id(
                                                                        color[
                                                                            colorSpace
                                                                        ]
                                                                    ),
                                                            onClick:
                                                                function onClick() {
                                                                    return updateValue(
                                                                        preset.value
                                                                    );
                                                                },
                                                        }
                                                    )
                                                );
                                            })
                                        )
                                ),
                            },
                            react_default.a.createElement(Color_Swatch, {
                                value: realValue,
                                style: { margin: 4 },
                            })
                        ),
                        react_default.a.createElement(Input, {
                            id: Object(helpers.a)(name),
                            value: value,
                            onChange: function onChange(e) {
                                return updateValue(e.target.value);
                            },
                            onFocus: function onFocus(e) {
                                return e.target.select();
                            },
                            placeholder: "Choose color...",
                        }),
                        value
                            ? react_default.a.createElement(ToggleIcon, {
                                  icon: "markup",
                                  onClick: cycleColorSpace,
                              })
                            : null
                    );
                };
            Color_ColorControl.displayName = "ColorControl";
            __webpack_exports__.default = Color_ColorControl;
        },
    },
]);
