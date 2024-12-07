import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import Steps from "~/components/widgets/Steps";
import FAQs from "~/components/widgets/FAQs";
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
        subtitle="Get answers to common questions about our technology solutions and consulting services."
        highlight="FAQs"
        items={[
          {
            title: "What services does your consulting firm offer?",
            description:
              "We provide custom R&D solutions in Mechatronics, Software Development, and Artificial Intelligence. Our services include system integration, prototype development, algorithm design, and software optimization, tailored to each client's specific needs.",
          },
          {
            title: "How do you ensure the confidentiality of our proprietary information?",
            description:
              "We implement strict non-disclosure agreements, robust data security measures, secure cloud infrastructure, and encrypted communication channels. These safeguards ensure your proprietary information remains confidential throughout the entire project lifecycle.",
          },
          {
            title: "What is your team's expertise in Mechatronics and AI?",
            description:
              "Our team consists of professionals with advanced degrees and industry experience in Mechanical Engineering, Electrical Engineering, and Computer Science. We've contributed to cutting-edge research in robotics, machine learning, and autonomous systems.",
          },
          {
            title: "How do you handle project scalability and long-term support?",
            description:
              "We design modular solutions for easy expansion. Our long-term support packages include maintenance, updates, and knowledge transfer. This approach ensures your team can effectively manage and build upon our solutions as your needs evolve.",
          },
          {
            title: "Can you work with our existing systems and technologies?",
            description:
              "Yes, we integrate with various platforms and technologies. We begin each project by assessing your existing infrastructure to ensure seamless integration and optimal performance of our custom solutions with your current systems.",
          },
          {
            title: "What is your approach to project management and client communication?",
            description:
              "We use agile project management methodology, assigning a dedicated project manager to each client. Regular progress reports, milestone reviews, and interactive demonstrations keep you informed and involved throughout the development process.",
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
