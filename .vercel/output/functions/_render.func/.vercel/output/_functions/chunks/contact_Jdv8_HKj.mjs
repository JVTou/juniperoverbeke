export { renderers } from '../renderers.mjs';

const page = () => import('./pages/contact_bzsMECSS.mjs').then(n => n.c);

export { page };
