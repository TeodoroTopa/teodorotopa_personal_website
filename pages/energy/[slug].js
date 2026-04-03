import React from "react";
import ContainerBlock from "../../components/ContainerBlock";
import { getPostBySlug, getAllPostSlugs } from "@lib/energy";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default function EnergyPost({ frontmatter, content }) {
  return (
    <ContainerBlock
      title={`${frontmatter.title} - AI Energy Blog`}
      description={content.slice(0, 150)}
      date={frontmatter.date}
    >
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <Link
            href="/energy"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            &larr; All Briefs
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            {frontmatter.date}
          </p>
          <h1 className="text-3xl font-bold dark:text-gray-100 mt-2 mb-8">
            {frontmatter.source_url ? (
              <a
                href={frontmatter.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-400 hover:underline"
              >
                {frontmatter.title}
              </a>
            ) : (
              frontmatter.title
            )}
          </h1>
          <article className="prose dark:prose-invert max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
          {frontmatter.sources && frontmatter.sources.length > 0 && (
            <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-lg font-semibold dark:text-gray-200 mb-3">
                Sources
              </h3>
              <ol className="list-decimal list-inside space-y-1">
                {frontmatter.sources.map((source, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-400">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {source.name}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </section>
    </ContainerBlock>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  try {
    const { frontmatter, content } = getPostBySlug(params.slug);
    return { props: { frontmatter, content } };
  } catch {
    return { notFound: true };
  }
}
