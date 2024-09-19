import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import Steps from "~/components/widgets/Steps";
import FAQs from "~/components/widgets/FAQs";
import Stats from "~/components/widgets/Stats";
import CallToAction from "~/components/widgets/CallToAction";

import { qwikSerialized } from "~/utils/qwikSerialized";
 
const IconVision = qwikSerialized(() => import("../components/icons/IconVision"));
const IconBrandTailwind = qwikSerialized(() => import("../components/icons/IconBrandTailwind"));
const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"));
const IconBrandGoogle = qwikSerialized(() => import("../components/icons/IconBrandGoogle"));
const IconBulb = qwikSerialized(() => import("../components/icons/IconBulb"));

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <Hero />
      <Features
        highlight="Expertise"
        title="What we can craft"
        subtitle=""
        items={[
          {
            title: "Image Recognition Models",
            description:
              "Streamline quality control by automatically detecting anomalies or manufacturing defects with your very own Computer Vision system.",      
              icon: IconVision,
          },
          {
            title: "Custom AI Solutions",
            description:
              "Tailor-made Artificial Intelligence solutions to drive business success, leveraging our expertise in computer vision, natural language processing, and audio signal processing.",      
              icon: IconBrandTailwind,
          },
          {
            title: "System Integrations",
            description:
              "Our team helps integrate AI solutions with existing systems, ensuring seamless data flow and maximum efficiency.",      
              icon: IconApps,
          },
          {
            title: "Robotic Process Automation",
            description:
              "We automate repetitive tasks and processes, freeing up resources for more strategic and creative work.",      
          },
          {
            title: "Test Automation",
            description:
              "Our experts develop and implement automated testing solutions to ensure high-quality software and reduce testing time.",      
              icon: IconRocket,
          },
          {
            title: "Software Development",
            description:
              "We design, develop, and deploy custom software solutions that meet your unique business needs.",
              icon: IconBrandGoogle,
          },
          {
            title: "Training and Development",
            description:
              "Our team provides expert instruction, course design, and workshops to help your team upskill and reskill in AI and signal processing.",      
            icon: IconBulb
          },
        ]}
      />
      <Steps />
      <FAQs
        title="Frequently Asked Questions"
        subtitle="Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar."
        highlight="FAQs"
        items={[
          {
            title: "What do I need to start?",
            description:
              "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds. Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
          },
          {
            title: "How to install the Qwik + Tailwind CSS template?",
            description:
              "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows.",
          },
          {
            title: "What's something that you don't understand?",
            description:
              "A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear.",
          },
          {
            title: "What's an example of when you changed your mind?",
            description:
              "Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels.",
          },
          {
            title: "What is something that you would like to try again?",
            description:
              "A business big enough that it could be listed on the NASDAQ goes belly up. Disappears! It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in.",
          },
          {
            title: "If you could only ask one question to each person you meet, what would that question be?",
            description:
              "This is not about revenge. This is about justice. A lot of things can change in twelve years, Admiral. Well, that's certainly good to know. About four years. I got tired of hearing how young I looked.",
          },
        ]}
      />
      <Stats />
      <CallToAction />
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
