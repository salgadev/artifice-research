import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

const coverImage =
    "https://upload.wikimedia.org/wikipedia/commons/7/7b/Reussenzehn-tube-amp-4_hg.jpg";
//  "https://images.unsplash.com/photo-1590767950092-42b8362368da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80";

export default component$(() => {
  return (
    <section class="relative md:-mt-[76px] not-prose">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div class="pt-0 md:pt-[76px] pointer-events-none"></div>
        <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
          <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto">
            <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
            Cutting-edge insights. <br class="hidden lg:block" />{" "}
              <span class="hidden lg:inline">Reach the </span> <span class="text-accent">Peak</span> of{" "}
              <span class="sm:whitespace-nowrap text-accent">Innovation</span>
            </h1>
            <div class="max-w-3xl mx-auto lg:max-w-none">
              <p class="text-xl text-muted mb-6 dark:text-slate-300">
                <span class="font-semibold underline decoration-1 decoration-secondary-600 underline-offset-2">
                Artifice Research 
                </span>{" "}
                unlocks your own <em>state-of-the-art</em> {" "} pairing your data with tailored {" "}
                <span class="font-semibold decoration-1 decoration-secondary-600 underline-offset-2">
                Digital Signal Processing </span> {" "} solutions. Stay ahead of the curve by crafting {" "}
                <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2">
                AI</span> (Computer Vision, Natural Language) or {" "}
                <span class="inline md:hidden">...</span>
                <span class="underline decoration-1 decoration-secondary-600 underline-offset-2">
                Test Automation</span> {" "} workflows
                <span class="hidden md:inline">                  
                </span>
              </p>

              <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl">
                <div class="flex w-full sm:w-auto">
                  <a
                    class="btn btn-primary sm:mb-0 w-full"
                    href="https://calendly.com/salgadev"
                    target="_blank"
                    rel="noopener"
                  >
                    Book a Meeting
                  </a>
                </div>
                <div class="flex w-full sm:w-auto">
                  <button class="btn w-full bg-gray-50 dark:bg-transparent">Learn more</button>
                </div>
              </div>
            </div>
          </div>
          <div class="basis-1/2">
            <Image
              src={coverImage}
              layout="constrained"
              width={493}
              height={616}
              alt="Vacuum Tubes"
              class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
              priority={true}
              breakpoints={[320, 480, 640, 768, 1024]}
            />
          </div>
        </div>
      </div>
    </section>
  );
});
