import React, { useState } from "react";
import ContainerBlock from "../../components/ContainerBlock";
import Link from "next/link";
import { energySources } from "@constants/data";

export default function EnergyAbout() {
  const [showTechnical, setShowTechnical] = useState(false);

  return (
    <ContainerBlock
      title="How It Works - Green Context Engine"
      description="How the Green Context Engine creates data-grounded energy intelligence briefs"
    >
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <Link
            href="/energy"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            &larr; All Briefs
          </Link>

          <h1 className="text-3xl font-bold dark:text-gray-100 mt-8 mb-6">
            How the Green Context Engine Works
          </h1>

          {/* What is it */}
          <div className="prose dark:prose-invert max-w-none mb-10">
            <h2>What is this?</h2>
            <p>
              The Green Context Engine is an automated system that monitors
              energy and climate news, pulls real data from scientific and
              government databases, and uses AI to write data-grounded summaries.
              Every number in every brief traces back to a named, verifiable
              source. A human reviews and approves every post before it goes
              live.
            </p>
            <p>
              The goal is to take the flood of daily energy and climate news and
              add context that is often missing: how do the numbers in a news
              story compare to global benchmarks? What does the data actually
              show? What are the trade-offs?
            </p>
          </div>

          {/* How it works */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold dark:text-gray-100 mb-4">
              How it works
            </h2>
            <ol className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Find and select stories",
                  desc: "The system scans 5 energy and climate news sources for new articles matching topics like solar, wind, coal, deforestation, and grid decarbonization. An AI then selects which story from each source is best served by the available data.",
                },
                {
                  step: "2",
                  title: "Decide what data to look up",
                  desc: "An AI reads the article and decides which databases to query and for which countries or regions. For example, a story about Indonesian deforestation triggers lookups for Indonesia's electricity grid data, forest cover loss, and deforestation drivers.",
                },
                {
                  step: "3",
                  title: "Pull real data",
                  desc: "The system queries government and scientific databases for actual numbers: electricity generation by fuel type, carbon intensity, tree cover loss, forest carbon emissions, and heating or cooling degree days. It also pulls global and regional benchmarks for comparison.",
                },
                {
                  step: "4",
                  title: "Write a brief",
                  desc: "An AI writer creates a 200-250 word summary structured around three sections: The story (what happened), The bigger picture (data context), and The tension (the key trade-off). The writer follows learned rules from past editorial feedback to avoid repeating previous mistakes.",
                },
                {
                  step: "5",
                  title: "Fact-check",
                  desc: "A separate AI editor reviews the brief and checks every number against the source data. It can pass the draft, fix issues directly, or fail it for a full rewrite. After any fix, a read-only verification step confirms the corrections didn't introduce new problems.",
                },
                {
                  step: "6",
                  title: "Human approval",
                  desc: "A human reviews the final brief in Notion and approves or rejects it. Nothing goes live without this step. Rejected drafts include written feedback explaining why.",
                },
                {
                  step: "7",
                  title: "Learn from feedback",
                  desc: "When a brief is rejected, the human's feedback is processed by AI into generalized writing rules. These rules are loaded into the writer's prompt on every future run, so the system learns from its mistakes and improves over time.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full flex items-center justify-center font-semibold text-sm">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-semibold dark:text-gray-200">
                      {item.title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Technical details (collapsible) */}
          <div className="mb-10 border border-gray-200 dark:border-gray-700 rounded-lg">
            <button
              onClick={() => setShowTechnical(!showTechnical)}
              className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition"
            >
              <span>Technical details</span>
              <span className="text-gray-400">
                {showTechnical ? "−" : "+"}
              </span>
            </button>
            {showTechnical && (
              <div className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-400 space-y-3">
                <p>
                  The pipeline is built in Python and uses Anthropic&apos;s Claude
                  as the underlying AI model. It employs a multi-agent
                  architecture with specialized roles:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    <strong>Article Selector</strong> &mdash; picks the best
                    story from each news source based on which article is best
                    served by the available data.
                  </li>
                  <li>
                    <strong>Data Strategist</strong> &mdash; reads the article
                    plus a catalog of all available data sources and decides
                    which APIs to query and for which entities (countries,
                    regions, economic groups).
                  </li>
                  <li>
                    <strong>Drafter</strong> &mdash; writes the brief using only
                    data provided by the pipeline, never its training data.
                    Loads learned writing rules from past editorial feedback.
                  </li>
                  <li>
                    <strong>Editor</strong> &mdash; fact-checks every claim
                    against the source data. Can pass the draft, fix issues
                    directly, or fail it for a full rewrite.
                  </li>
                  <li>
                    <strong>Verification</strong> &mdash; a read-only check
                    after the editor fixes a draft, confirming the corrections
                    didn&apos;t introduce new problems.
                  </li>
                </ul>
                <p>
                  Data sources are configured via YAML catalogs. Adding a new
                  source requires only a catalog file and a Python connector
                  &mdash; the strategist automatically discovers it.
                </p>
                <p>
                  The system includes a feedback loop: when a human rejects a
                  draft and writes feedback, AI distills that feedback into
                  generalized writing rules stored in a YAML file. These rules
                  are loaded into every future draft, so the pipeline
                  continuously improves from editorial corrections.
                </p>
                <p>
                  The full source code is available on{" "}
                  <a
                    href="https://github.com/TeodoroTopa/green-context-engine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                  .
                </p>
              </div>
            )}
          </div>

          {/* What makes this different */}
          <div className="prose dark:prose-invert max-w-none mb-10">
            <h2>What makes this different</h2>
            <p>
              Unlike typical AI-generated content, every brief is grounded in
              data from named, verifiable sources. Country-level data is always
              compared to global or regional benchmarks. A dedicated AI editor
              verifies every factual claim against the actual source data before
              a human approves publication.
            </p>
            <p>
              The system also learns from human feedback. When a brief is
              rejected, the editor&apos;s notes are distilled into reusable writing
              rules that shape every future draft. The pipeline gets better over
              time, not just at avoiding specific errors, but at internalizing
              the editorial standards behind them.
            </p>
          </div>

          {/* Data & News Sources */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold dark:text-gray-100 mb-4">
              Data sources
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Real numbers are pulled from these scientific and government
              databases.
            </p>
            <div className="space-y-3">
              {energySources.dataSources.map((source) => (
                <div
                  key={source.name}
                  className="border border-gray-200 dark:border-gray-700 rounded-md p-3"
                >
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {source.name}
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {source.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold dark:text-gray-100 mb-4">
              News sources
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Stories are monitored from these energy and climate journalism
              outlets.
            </p>
            <div className="space-y-3">
              {energySources.newsFeeds.map((source) => (
                <div
                  key={source.name}
                  className="border border-gray-200 dark:border-gray-700 rounded-md p-3"
                >
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {source.name}
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {source.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Limitations */}
          <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-md p-4 mb-10">
            <h3 className="font-semibold dark:text-gray-200 mb-2">
              Limitations
            </h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside">
              <li>
                Data from sources may be weeks or months behind real-time events.
              </li>
              <li>
                AI can misinterpret nuanced trends or draw connections that
                oversimplify complex dynamics.
              </li>
              <li>
                Coverage is limited to the data sources listed above &mdash; the
                pipeline cannot verify claims against sources outside its
                dataset.
              </li>
              <li>
                Briefs are short summaries, not comprehensive analyses. They are
                meant to add context, not replace deep reporting.
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link
              href="/energy"
              className="inline-block px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Read the briefs
            </Link>
          </div>
        </div>
      </section>
    </ContainerBlock>
  );
}
