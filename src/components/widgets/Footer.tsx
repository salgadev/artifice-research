import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import IconTwitter from "~/components/icons/IconTwitter";
import IconGithub from "~/components/icons/IconGithub";

import { OnboardingForm, EmailLink } from "~/components/widgets/constants";

export default component$(() => {
  const links = [
    {
      title: "Company",
      items: [
        { title: "About", href: "#" },
        { title: "Onboarding Form", href: OnboardingForm },
        { title: "Contact", href: EmailLink },
      ],
    },
  ];

  const social = [
    { label: "Twitter", icon: IconTwitter, href: "#" },
    {
      label: "Github",
      icon: IconGithub,
      href: "https://github.com/onwidget/qwind",
    },
  ];

  return (
    <footer class="border-t border-gray-200 dark:border-slate-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="grid grid-cols-12 gap-4 gap-y-8 py-8 sm:gap-8 md:py-12">
          <div class="col-span-12 pr-8 lg:col-span-4">
            <div class="mb-2">
              <Link class="inline-block text-xl font-bold" href={"/"}>
                Artifice
              </Link>
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Enabling Advanced Manufacturing with custom Mechatronics
              solutions.
            </div>
          </div>
          {links.map(({ title, items }, index) => (
            <div key={index} class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="mb-2 font-medium text-gray-800 dark:text-gray-300">
                {title}
              </div>
              {Array.isArray(items) && items.length > 0 && (
                <ul class="text-sm">
                  {items.map(({ title, href }, index2) => (
                    <li key={index2} class="mb-2">
                      <Link
                        class="text-gray-600 transition duration-150 ease-in-out hover:text-gray-700 hover:underline dark:text-gray-400"
                        href={href}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div class="py-6 md:flex md:items-center md:justify-between md:py-8">
          <ul class="-ml-2 mb-4 flex md:order-1 md:mb-0 md:ml-4">
            {social.map(({ label, href, icon: Icon }, index) => (
              <li key={index}>
                <Link
                  class="inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  aria-label={label}
                  title={label}
                  href={href}
                >
                  {typeof Icon !== "undefined" && <Icon />}
                </Link>
              </li>
            ))}
          </ul>

          <div class="mr-4 text-sm text-gray-700 dark:text-slate-400">
            <span class="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
            Inspired by{" "}
            <a
              class="text-secondary-800 underline dark:text-gray-200"
              href="https://onwidget.com/"
            >
              {" "}
              onWidget
            </a>{" "}
            · All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
});