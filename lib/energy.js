import fs from "fs";
import path from "path";
import matter from "gray-matter";

const energyDir = path.join(process.cwd(), "content", "energy");

function formatDate(date) {
  const d = date instanceof Date ? date : new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function getAllEnergyPosts() {
  if (!fs.existsSync(energyDir)) return [];

  const files = fs.readdirSync(energyDir).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(energyDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data: frontmatter, content } = matter(fileContents);

    // Generate excerpt: strip markdown syntax, take first ~150 chars
    const plainText = content
      .replace(/^#{1,6}\s+.*$/gm, "") // remove headings
      .replace(/\*\*([^*]+)\*\*/g, "$1") // remove bold
      .replace(/\*([^*]+)\*/g, "$1") // remove italic
      .replace(/\n+/g, " ") // collapse newlines
      .trim();
    const excerpt = plainText.slice(0, 150) + (plainText.length > 150 ? "..." : "");

    return {
      slug,
      frontmatter: {
        title: frontmatter.title,
        date: formatDate(frontmatter.date),
        source_url: frontmatter.source_url || null,
        sources: frontmatter.sources || [],
        status: frontmatter.status || "draft",
      },
      excerpt,
    };
  });

  // Sort by date descending (newest first)
  posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  return posts;
}

export function getPostBySlug(slug) {
  const filePath = path.join(energyDir, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);

  return {
    frontmatter: {
      title: frontmatter.title,
      date: formatDate(frontmatter.date),
      source_url: frontmatter.source_url || null,
      sources: frontmatter.sources || [],
      status: frontmatter.status || "draft",
    },
    content,
  };
}

export function getAllPostSlugs() {
  if (!fs.existsSync(energyDir)) return [];

  return fs
    .readdirSync(energyDir)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => ({
      params: { slug: filename.replace(/\.md$/, "") },
    }));
}
