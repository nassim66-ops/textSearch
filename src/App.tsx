import { useState, useMemo } from "react";
import InputSearch from "./components/InputSearch";

// Dummy posts
const POSTS = [
  {
    id: 1,
    title: "Why my first React project took 3 weeks instead of 3 days",
    description:
      "Started building a todo app last month and ran into all kinds of issues with hooks. Finally figured out why my useEffect kept running infinitely.",
  },
  {
    id: 2,
    title: "JavaScript's weird quirks that still confuse me",
    description:
      "Spent hours debugging why 0.1 + 0.2 doesn't equal 0.3. Here's what I learned about floating point arithmetic and why it happens.",
  },
  {
    id: 3,
    title: "Got my app working but it looks terrible",
    description:
      "Functionality is done but the UI is a mess. Trying to get better at CSS grids and flexbox. Any tips?",
  },
  {
    id: 4,
    title: "TypeScript errors making me question my life choices",
    description:
      "Switched from JavaScript to TypeScript and now everything is red. The errors are helpful but man, the learning curve is steep.",
  },
  {
    id: 5,
    title: "Deployed my first project to production",
    description:
      "After weeks of coding, finally pushed it live. Of course it broke immediately. Turns out I forgot to check environment variables.",
  },
  {
    id: 6,
    title: "API calls working locally but failing in production",
    description:
      "Everything works fine on my machine. Users are reporting 404 errors. Still debugging CORS issues and feeling like an idiot.",
  },
];

// Function to highlight search matches
const highlightText = (text: string, search: string) => {
  if (!search) return text;

  const regex = new RegExp(`(${search})`, "gi");
  const parts = text.split(regex);

  return parts.map((part: string, i: number) =>
    regex.test(part) ? (
      <span key={i} className="bg-yellow-300 font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const App = () => {
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    const lower = search.toLowerCase();
    return POSTS.filter(
      (post) =>
        post.title.toLowerCase().includes(lower) ||
        post.description.toLowerCase().includes(lower)
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Article Search</h1>

        <InputSearch search={search} setSearch={setSearch} />

        {filteredPosts.length ? (
          <ul className="space-y-4">
            {filteredPosts.map((post) => (
              <li key={post.id} className="border-b pb-3">
                <h2 className="text-lg font-semibold">
                  {highlightText(post.title, search)}
                </h2>
                <p className="text-gray-700">
                  {highlightText(post.description, search)}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">No matching posts found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
