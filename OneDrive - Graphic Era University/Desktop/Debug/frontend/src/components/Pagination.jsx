import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

export function Pagination({ page, pages, onPageChange }) {
  const totalPages = Math.max(1, Number(pages) || 1);
  const currentPage = Math.min(Math.max(1, Number(page) || 1), totalPages);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  function goToPage(nextPage) {
    const validPage = Math.min(Math.max(1, nextPage), totalPages);
    if (validPage !== currentPage) {
      onPageChange(validPage);
    }
  }

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-1.5 py-4">
      <Button
        variant="secondary"
        size="sm"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
        title="Previous page"
      >
        <ChevronLeft size={14} />
      </Button>

      {pageNumbers.map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => goToPage(n)}
          aria-current={n === currentPage ? 'page' : undefined}
          className="min-w-[32px] h-8 rounded-lg text-sm font-medium transition-all duration-200"
          style={{
            background: n === currentPage ? 'var(--accent)' : 'var(--bg-elevated)',
            color: n === currentPage ? '#fff' : 'var(--text-secondary)',
            border: `1px solid ${n === currentPage ? 'var(--accent)' : 'var(--border)'}`,
          }}
        >
          {n}
        </button>
      ))}

      <Button
        variant="secondary"
        size="sm"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        title="Next page"
      >
        <ChevronRight size={14} />
      </Button>
    </div>
  );
}
