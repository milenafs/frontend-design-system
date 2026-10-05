import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region src/components/Button/Button.tsx
function n({ variant: t = "primary", children: n, ...r }) {
	return /* @__PURE__ */ e("button", {
		"data-variant": t,
		...r,
		children: n
	});
}
//#endregion
//#region src/components/Input/Input.tsx
function r({ variant: n = "default", label: r, helperText: i, id: a, ...o }) {
	let s = a || `input-${Math.random()}`;
	return /* @__PURE__ */ t("div", {
		"data-variant": n,
		children: [
			r && /* @__PURE__ */ e("label", {
				htmlFor: s,
				children: r
			}),
			/* @__PURE__ */ e("input", {
				id: s,
				"data-variant": n,
				...o
			}),
			i && /* @__PURE__ */ e("span", {
				role: "status",
				children: i
			})
		]
	});
}
//#endregion
//#region src/components/Checkbox/Checkbox.tsx
function i({ label: n, id: r, ...i }) {
	let a = r || `checkbox-${Math.random()}`;
	return /* @__PURE__ */ t("div", { children: [/* @__PURE__ */ e("input", {
		id: a,
		type: "checkbox",
		...i
	}), n && /* @__PURE__ */ e("label", {
		htmlFor: a,
		children: n
	})] });
}
//#endregion
//#region src/components/Stack/Stack.tsx
function a({ direction: t = "vertical", gap: n = "md", align: r = "stretch", justify: i = "start", children: a, style: o, ...s }) {
	return /* @__PURE__ */ e("div", {
		style: {
			display: "flex",
			flexDirection: t === "horizontal" ? "row" : "column",
			gap: {
				xs: "4px",
				sm: "8px",
				md: "16px",
				lg: "24px",
				xl: "32px"
			}[n],
			alignItems: r,
			justifyContent: i,
			...o
		},
		"data-stack": !0,
		"data-direction": t,
		"data-gap": n,
		...s,
		children: a
	});
}
//#endregion
export { n as Button, i as Checkbox, r as Input, a as Stack };
