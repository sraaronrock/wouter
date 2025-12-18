import { Link } from "wouter";

export function Footer() {
  return (
    <div className="max-w-4xl w-full px-6 self-center">
      <footer className="max-w-4xl mx-auto pt-12 pb-20 border-t border-gray-100">
        <div className="w-full md:flex md:justify-between gap-8">
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-base font-medium text-neutral-700">
                magazin
              </span>
            </div>
            <p className="text-sm text-neutral-400 text-pretty">
              A modern e-commerce demo built with wouter and Bun.
              <br /> No rights reserved.
            </p>
          </div>

          <div className="pt-6">
            <a
              href="https://github.com/molefrog/wouter/tree/v3/packages/magazin"
              className="inline-flex items-center gap-2 px-3 py-1 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
            >
              <i className="iconoir-git-fork text-base" />
              <span className="text-sm font-medium text-gray-900">
                View Source
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
