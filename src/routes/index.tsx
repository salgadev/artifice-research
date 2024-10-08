import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import Steps from "~/components/widgets/Steps";
import FAQs from "~/components/widgets/FAQs";
import Stats from "~/components/widgets/Stats";
import CallToAction from "~/components/widgets/CallToAction";

import { qwikSerialized } from "~/utils/qwikSerialized";

const IconDocument = qwikSerialized(() => import("../components/icons/IconDocument"));
const IconCode = qwikSerialized(() => import("../components/icons/IconCode"));
const IconLanguage = qwikSerialized(() => import("../components/icons/IconLanguage"));
const IconVision = qwikSerialized(() => import("../components/icons/IconVision"));
const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
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
              "Transform quality control by automatically detecting anomalies or manufacturing defects with your very own Computer Vision system.",      
              icon: IconVision,
          },
          {
            title: "Natural Language Processing",
            description:
              "Retrieve information from extensive knowledge bases or navigate regulation requirements with ease via Large Language Models.",
              icon: IconLanguage,
          },
          {
            title: "Software Maintenance",
            description:
              "Ensure seamless software performance: expert triage, testing, and automation services to identify and resolve issues quickly.",
              icon: IconCode,
          },
          {
            title: "System Integration & Automation",
            description:
              "Maximize operational efficiency with Robotic Process Automation and integrating equipment to existing systems.",
              icon: IconApps,
          },          
          {
            title: "Technical Writing and Documentation",
            description:
              "Communicate complex ideas, establish compliant policies and document codebases to optimize collaboartion.",
              icon: IconDocument,
          },                              
          {
            title: "Training and Development",
            description:
              "Keep up with the latest innovations by upskilling your team with expert-led training in emerging technologies or create customized learning plans.",
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
