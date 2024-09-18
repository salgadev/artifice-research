import { component$ } from "@builder.io/qwik";

// @ts-ignore
import logoSrc from "~/assets/images/a_logo.png?width=64&height=64&png";
//import logoSrc from "~/assets/images/alogo.jpeg?width=64&height=64&jpeg";

export default component$(() => (
  <span class="self-center ml-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white flex items-center">
    <img
      src={logoSrc}
      class="inline-block mr-1"
      width={32}
      height={32}
      alt="Artifice Logo"
      loading="lazy"
    />
    Artifice
  </span>
));
