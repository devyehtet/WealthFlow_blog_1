(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/wealthflow_new/src/components/AdSlot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdSlot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/wealthflow_new/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/wealthflow_new/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/wealthflow_new/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function cx(...arr) {
    return arr.filter(Boolean).join(" ");
}
function collapseClass(bp) {
    // "collapse on mobile" meaning hidden until bp and above
    // sm: hidden <sm, md: hidden <md, lg: hidden <lg
    if (bp === "sm") return "hidden sm:block";
    if (bp === "md") return "hidden md:block";
    return "hidden lg:block";
}
function AdSlot(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "c488b0c08efec49e4d56c12812fe224a0e8078d65273a6cefa866608e6f0e400") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c488b0c08efec49e4d56c12812fe224a0e8078d65273a6cefa866608e6f0e400";
    }
    const { label: t1, maxWidth, className, hideOnMobile, collapseBelow: t2, stickyMobile: t3 } = t0;
    const label = t1 === undefined ? "Ad Slot" : t1;
    const collapseBelow = t2 === undefined ? "md" : t2;
    const stickyMobile = t3 === undefined ? false : t3;
    if (stickyMobile) {
        let t4;
        if ($[1] !== label) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StickyMobileAd, {
                label: label
            }, void 0, false, {
                fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                lineNumber: 58,
                columnNumber: 12
            }, this);
            $[1] = label;
            $[2] = t4;
        } else {
            t4 = $[2];
        }
        return t4;
    }
    let t4;
    if ($[3] !== collapseBelow || $[4] !== hideOnMobile) {
        const wrapperClasses = cx("my-8", hideOnMobile && "hidden sm:block", !hideOnMobile && collapseBelow ? "" : "");
        const collapse = !hideOnMobile ? collapseClass(collapseBelow) : "";
        t4 = cx(wrapperClasses, collapse);
        $[3] = collapseBelow;
        $[4] = hideOnMobile;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== className) {
        t5 = cx("mx-auto overflow-hidden rounded-3xl border bg-white/60 shadow-[0_18px_70px_rgba(0,0,0,0.06)] backdrop-blur", "ring-1 ring-black/5", className);
        $[6] = className;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== maxWidth) {
        t6 = maxWidth ? {
            maxWidth
        } : undefined;
        $[8] = maxWidth;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[11px] font-semibold tracking-widest text-neutral-500",
            children: "ADVERTISEMENT"
        }, void 0, false, {
            fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== label) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-3 border-b bg-white/40 px-4 py-3",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-[11px] text-neutral-500",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                    lineNumber: 104,
                    columnNumber: 102
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[11] = label;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-4 py-10 sm:px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-[680px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-2 text-neutral-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-2 w-2 rounded-full bg-neutral-300/70"
                            }, void 0, false, {
                                fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                                lineNumber: 112,
                                columnNumber: 158
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-2 w-2 rounded-full bg-neutral-300/50"
                            }, void 0, false, {
                                fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                                lineNumber: 112,
                                columnNumber: 217
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-2 w-2 rounded-full bg-neutral-300/40"
                            }, void 0, false, {
                                fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                                lineNumber: 112,
                                columnNumber: 276
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                        lineNumber: 112,
                        columnNumber: 85
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-center text-xs leading-relaxed text-neutral-500",
                        children: "Responsive in-article slot. Add AdSense code after approval."
                    }, void 0, false, {
                        fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                        lineNumber: 112,
                        columnNumber: 341
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 rounded-2xl border border-dashed bg-white/40 px-4 py-8 text-center text-xs text-neutral-500",
                        children: "Ad placeholder"
                    }, void 0, false, {
                        fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                        lineNumber: 112,
                        columnNumber: 478
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-center text-xs text-neutral-400",
                        children: "Tip: Place ads after strong sections (intro, mid-article, before conclusion)."
                    }, void 0, false, {
                        fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                        lineNumber: 112,
                        columnNumber: 612
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                lineNumber: 112,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t5 || $[15] !== t6 || $[16] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            style: t6,
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[14] = t5;
        $[15] = t6;
        $[16] = t8;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t10 || $[19] !== t4) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t10
        }, void 0, false, {
            fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t4;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    return t11;
}
_c = AdSlot;
/**
 * ✅ Sticky mobile ad (UX-safe)
 * - shows only on mobile
 * - dismiss button
 * - safe height, does not cover too much
 */ function StickyMobileAd(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "c488b0c08efec49e4d56c12812fe224a0e8078d65273a6cefa866608e6f0e400") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c488b0c08efec49e4d56c12812fe224a0e8078d65273a6cefa866608e6f0e400";
    }
    const { label } = t0;
    const [closed, setClosed] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    if (closed) {
        return null;
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[11px] font-semibold tracking-widest text-neutral-500",
            children: "AD"
        }, void 0, false, {
            fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
            lineNumber: 162,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== label) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[11px] text-neutral-500",
            children: label
        }, void 0, false, {
            fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
            lineNumber: 169,
            columnNumber: 10
        }, this);
        $[2] = label;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "StickyMobileAd[<button>.onClick]": ()=>setClosed(true)
            }["StickyMobileAd[<button>.onClick]"],
            className: "rounded-full border bg-white px-2 py-1 text-[11px] font-semibold text-neutral-700",
            "aria-label": "Close ad",
            children: "✕"
        }, void 0, false, {
            fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
            lineNumber: 177,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-3 border-b bg-white/50 px-3 py-2",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
            lineNumber: 186,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-3 py-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border border-dashed bg-white/50 px-3 py-5 text-center text-xs text-neutral-600",
                    children: "Sticky mobile ad placeholder"
                }, void 0, false, {
                    fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                    lineNumber: 194,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2 text-center text-[11px] text-neutral-400",
                    children: "Collapses safely on mobile • Doesn’t block reading"
                }, void 0, false, {
                    fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                    lineNumber: 194,
                    columnNumber: 179
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
            lineNumber: 194,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-x-0 bottom-0 z-50 block md:hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-[720px] px-3 pb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-hidden rounded-2xl border bg-white/80 shadow-[0_16px_60px_rgba(0,0,0,0.18)] backdrop-blur",
                    children: [
                        t4,
                        t5
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                    lineNumber: 201,
                    columnNumber: 122
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                lineNumber: 201,
                columnNumber: 73
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
            lineNumber: 201,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    return t6;
}
_s(StickyMobileAd, "xpNDXx15+QrYcRHLFaO8481OyH4=");
_c1 = StickyMobileAd;
var _c, _c1;
__turbopack_context__.k.register(_c, "AdSlot");
__turbopack_context__.k.register(_c1, "StickyMobileAd");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_wealthflow_new_src_components_AdSlot_tsx_c0459690._.js.map