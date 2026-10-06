/**
 * Visible banner for policy pages that are still drafts. Draft pages are noindex, left out of the
 * sitemap and not linked from anywhere until the Hulm team confirms every [TO CONFIRM] item.
 */
export function DraftNotice() {
  return (
    <div role="note" className="border-b border-amber-300 bg-amber-50 py-3 text-center text-sm font-medium text-amber-900">
      Draft for internal review. Not published or linked. Replace every <span className="font-mono">[TO CONFIRM]</span> item before going live.
    </div>
  );
}

/** Inline marker for a decision the business still has to make. */
export function ToConfirm({ children }: { children: React.ReactNode }) {
  return <mark className="rounded bg-amber-100 px-1 text-amber-900">[TO CONFIRM: {children}]</mark>;
}

export const draftRobots = { index: false, follow: false, googleBot: { index: false, follow: false } } as const;
