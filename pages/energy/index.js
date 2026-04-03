import React from "react";
import ContainerBlock from "../../components/ContainerBlock";
import { getAllEnergyPosts } from "@lib/energy";
import Link from "next/link";

export default function EnergyIndex({ posts }) {
  return (
    <ContainerBlock
      title="Energy Intelligence - Teo Topa"
      description="Energy intelligence briefs from the Green Context Engine"
    >
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold dark:text-gray-100 mb-2">
            AI Energy Blog
          </h1>
          <p className="text-gray-500 dark:text-gray-300 mb-4">
            AI-assisted energy intelligence briefs powered by the{" "}
            <a
              href="https://github.com/TeodoroTopa/green-context-engine"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Green Context Engine
            </a>
            .
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-md p-4 mb-8">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Disclaimer:</strong> This project is experimental. All posts are AI-generated
              and do not necessarily reflect my personal thoughts, opinions, or expertise.
              I would love feedback on the project — feel free to{" "}
              <a
                href="/contact"
                className="underline hover:text-yellow-900 dark:hover:text-yellow-100"
              >
                reach out
              </a>
              !
            </p>
          </div>
          {posts.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">
              No briefs published yet. Check back soon.
            </p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/energy/${post.slug}`}>
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-4 rounded-md transition">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {post.frontmatter.date}
                    </p>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-1">
                      {post.frontmatter.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </ContainerBlock>
  );
}

export async function getStaticProps() {
  const posts = getAllEnergyPosts();
  return { props: { posts } };
}
