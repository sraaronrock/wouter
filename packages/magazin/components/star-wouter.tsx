import { useState, useEffect } from "react";

export function StarWouter() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/molefrog/wouter")
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count) {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {
        // If fetch fails, we just won't show the count
        setStars(null);
      });
  }, []);

  return (
    <a
      href="https://github.com/molefrog/wouter"
      className="inline-flex items-center gap-2 px-3 h-9 border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors select-none"
    >
      <i className="iconoir-star-solid text-base text-yellow-500" />
      <span className="text-sm font-medium">Star Wouter</span>
      <div className="bg-neutral-200 w-px h-3.5 mx-1 self-center"></div>
      <div className="flex items-center gap-1.5">
        <span className="text-sm text-gray-900">
          {stars !== null ? stars.toLocaleString() : "\u221E"}
        </span>
      </div>
    </a>
  );
}
