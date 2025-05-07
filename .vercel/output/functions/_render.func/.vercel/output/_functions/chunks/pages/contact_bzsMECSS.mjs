/* empty css                            */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent } from '../astro_rfqW3Ku8.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$BaseLayout } from './404_djdLuso9.mjs';

const $$Astro$1 = createAstro("https://juniperoverbeke.me");
const $$Background = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Background;
  return renderTemplate`${maybeRenderHead()}<canvas class="absolute -z-1 left-0 top-0 h-full w-full bg-gradient-to-r from-black to-slate-900 pointer-events-auto"></canvas> `;
}, "C:/Users/Junipero/juniperoverbeke/src/components/Background.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://juniperoverbeke.me");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact", "sideBarActiveItemID": "contact" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="min-h-[75vh]"></div> ', ' <div class="pointer-events-none"> <div class="absolute right-0 -top-40 bottom-0 left-0 m-auto lg:left-[25rem] z-10 lg:mr-auto lg:ml-0 w-[300px] min-h-[450px] lg:w-[600px] lg:mt-10 lg:top-0 pointer-events-auto"> <script type="text/javascript" src="https://opnform.com/widgets/iframeResize.min.js"><\/script> <iframe style="border:none;width:100%;" id="form-contact-me-ufruek" src="https://opnform.com/forms/contact-me-ufruek"></iframe> <script type="text/javascript">\n        iFrameResize(\n          { log: false, checkOrigin: false },\n          "#form-contact-me-ufruek"\n        );\n      <\/script> </div> </div> '])), maybeRenderHead(), renderComponent($$result2, "Background", $$Background, {})) })}`;
}, "C:/Users/Junipero/juniperoverbeke/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Junipero/juniperoverbeke/src/pages/contact.astro";
const $$url = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Background as $, contact as c };
