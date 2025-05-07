/* empty css                            */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_rfqW3Ku8.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Background } from './contact_bzsMECSS.mjs';
import { $ as $$BaseLayout } from './404_djdLuso9.mjs';

const $$Astro = createAstro("https://juniperoverbeke.me");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "sideBarActiveItemID": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[75vh]"></div> <div class="pointer-events-none"> ${renderComponent($$result2, "Background", $$Background, {})} <div class="absolute right-0 -top-40 bottom-0 left-0 m-auto lg:left-[25rem] z-10 lg:mr-auto lg:ml-0 w-[300px] h-[400px] lg:w-[600px] lg:mt-10 lg:top-0"> <div class="-z-10"> <div class="text-3xl lg:text-5xl font-bold">I'm Junipero Verbeke</div> <div class="text-xl lg:text-3xl py-3 font-bold">
Student in Computational Physics
</div> <div class="py-2"> <text class="lg:text-lg text-justify">
I am an undergraduate student majoring in computational physics at
            the University of California, Santa Cruz, working as an applied
            engineer at Veritas Managed Solutions, Inc. My interests are in data
            analysis, quantitative finance, machine learning and mathematical
            models. Always looking forward to helping the growth of the teams I
            am associated with.
</text> </div> </div> <div class="mt-8 pointer-events-auto"> <a class="btn" href="/resume">See my resume</a> <a href="/contact" target="_blank" class="btn btn-outline ml-5">
Contact</a> </div> </div> </div> ` })}`;
}, "C:/Users/Junipero/juniperoverbeke/src/pages/index.astro", void 0);

const $$file = "C:/Users/Junipero/juniperoverbeke/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
