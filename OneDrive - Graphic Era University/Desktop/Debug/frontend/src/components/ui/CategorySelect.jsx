import * as Select from '@radix-ui/react-select';
import { ChevronDown, Check } from 'lucide-react';
import { clsx } from 'clsx';
import { CATEGORIES } from './categories';

const ALL_SENTINEL = '__all__';

export function CategorySelect({ label, value, onValueChange, placeholder = 'All Categories', includAll = false }) {
  const selectValue = value === ''
    ? (includAll ? ALL_SENTINEL : undefined)
    : value;

  function handleChange(v) {
    onValueChange(v === ALL_SENTINEL ? '' : v);
  }

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
          {label}
        </label>
      )}
      <Select.Root value={selectValue ?? ''} onValueChange={handleChange}>
        <Select.Trigger
          className={clsx(
            'inline-flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm w-full',
            'bg-[var(--bg-base)] border border-[var(--border)]',
            'text-[var(--text-primary)] focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30',
            'transition-all duration-200 data-[placeholder]:text-[var(--text-muted)]'
          )}
        >
          <Select.Value placeholder={placeholder} />
          <Select.Icon><ChevronDown size={14} style={{ color: 'var(--text-muted)' }} /></Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            className="z-50 overflow-hidden rounded-xl shadow-2xl py-1"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              minWidth: 'var(--radix-select-trigger-width)',
            }}
            position="popper"
            sideOffset={6}
          >
            <Select.Viewport>
              {includAll && (
                <SelectItem value={ALL_SENTINEL}>All Categories</SelectItem>
              )}
              {CATEGORIES.map((cat) => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}

function SelectItem({ children, value }) {
  return (
    <Select.Item
      value={value}
      className="relative flex items-center gap-2 px-3 py-2 text-sm cursor-pointer select-none outline-none transition-colors"
      style={{ color: 'var(--text-primary)' }}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="ml-auto">
        <Check size={13} style={{ color: 'var(--accent)' }} />
      </Select.ItemIndicator>
    </Select.Item>
  );
}
