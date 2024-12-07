import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import Steps from "~/components/widgets/Steps";
import FAQs from "~/components/widgets/FAQs";
import CallToAction from "~/components/widgets/CallToAction";

import { qwikSerialized } from "~/utils/qwikSerialized";

const IconDocument = qwikSerialized(
  () => import("../components/icons/IconDocument"),
);
const IconCode = qwikSerialized(() => import("../components/icons/IconCode"));
const IconLanguage = qwikSerialized(
  () => import("../components/icons/IconLanguage"),
);
const IconVision = qwikSerialized(
  () => import("../components/icons/IconVision"),
);
const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
const IconBulb = qwikSerialized(() => import("../components/icons/IconBulb"));

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <Hero />
      <Features
        highlight="Expertise"
        title="What We Craft"
        subtitle="Innovative solutions tailored to your business needs"
        items={[
          {
            title: "Image Recognition Models",
            description:
              "Automatically detect anomalies and manufacturing defects with our advanced Computer Vision systems, enhancing quality control.",
            icon: IconVision,
          },
          {
            title: "Natural Language Processing",
            description:
              "Simplify information retrieval and regulatory compliance with our Large Language Models, making complex data accessible.",
            icon: IconLanguage,
          },
          {
            title: "Software Maintenance",
            description:
              "Ensure seamless performance with our expert triage, testing, and automation services, quickly resolving issues and optimizing your software.",
            icon: IconCode,
          },
          {
            title: "System Integration & Automation",
            description:
              "Boost operational efficiency with Robotic Process Automation and seamless integration of new equipment into your existing systems.",
            icon: IconApps,
          },
          {
            title: "Technical Writing and Documentation",
            description:
              "Communicate complex ideas, establish compliant policies, and document codebases to enhance collaboration and clarity.",
            icon: IconDocument,
          },
          {
            title: "Training and Development",
            description:
              "Stay ahead of the curve with expert-led training in emerging technologies, or create customized learning plans for your team.",
            icon: IconBulb,
          },
        ]}
      />
      <Steps />
      <FAQs
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about our technology solutions and consulting services."
        highlight="FAQs"
        items={[
          {
            title: "What services do you offer?",
            description:
              "We provide custom R&D solutions in Mechatronics, Software Development, and Artificial Intelligence, including system integration, prototype development, algorithm design, and software optimization, tailored to your needs.",
          },
          {
            title: "How do you protect our proprietary information?",
            description:
              "We enforce strict non-disclosure agreements, robust data security measures, secure cloud infrastructure, and encrypted communication to safeguard your information throughout the project lifecycle.",
          },
          {
            title: "What is your team's expertise?",
            description:
              "Our team comprises professionals with advanced degrees and industry experience in Mechanical Engineering, Electrical Engineering, and Computer Science, with a track record in cutting-edge robotics, machine learning, and autonomous systems.",
          },
          {
            title: "How do you handle project scalability and support?",
            description:
              "We design modular solutions for easy expansion and offer long-term support packages that include maintenance, updates, and knowledge transfer, ensuring your team can manage and build upon our solutions as your needs evolve.",
          },
          {
            title: "Can you integrate with our existing systems?",
            description:
              "Yes, we integrate with various platforms and technologies. We assess your existing infrastructure to ensure seamless integration and optimal performance of our custom solutions with your current systems.",
          },
          {
            title:
              "What is your project management and communication approach?",
            description:
              "We use agile project management, assigning a dedicated project manager to each client. Regular progress reports, milestone reviews, and interactive demonstrations keep you informed and involved throughout the development process.",
          },
        ]}
      />
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