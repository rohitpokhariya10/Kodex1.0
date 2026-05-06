import { useState } from 'react';
import * as Separator from '@radix-ui/react-separator';
import { ImageOff } from 'lucide-react';
import { Modal } from './ui/Dialog';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { CategorySelect } from './ui/CategorySelect';
import { productService } from '../lib/api';
import { useToast } from '../context/useToast';

const EMPTY = { name: '', price: '', category: '', stock: '', image: '' };

function productToForm(product) {
  return product
    ? {
        name: product.name || '',
        price: product.price ?? '',
        category: product.category || '',
        stock: product.stock ?? '',
        image: product.image || '',
      }
    : EMPTY;
}

export function ProductForm({ open, onOpenChange, product, onSuccess }) {
  const isEdit = !!product;

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={isEdit ? 'Edit Product' : 'Add New Product'}
      description={isEdit ? 'Update the product details below.' : 'Fill in the details to add a new product.'}
    >
      <ProductFormFields
        key={`${open ? 'open' : 'closed'}-${product?._id || 'new'}`}
        product={product}
        onOpenChange={onOpenChange}
        onSuccess={onSuccess}
      />
    </Modal>
  );
}

function ProductFormFields({ product, onOpenChange, onSuccess }) {
  const [form, setForm] = useState(() => productToForm(product));
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();
  const isEdit = !!product;

  function field(key) {
    return {
      value: form[key],
      onChange: (e) => {
        const value = e.target.value;
        setForm((current) => ({ ...current, [key]: value }));
        setErrors((current) => ({ ...current, [key]: undefined }));
      },
      error: errors[key],
    };
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Product name is required';
    if (form.price === '' || isNaN(Number(form.price))) e.price = 'Valid price is required';
    if (Number(form.price) < 0) e.price = 'Price cannot be negative';
    if (form.stock !== '' && (isNaN(Number(form.stock)) || Number(form.stock) < 0)) e.stock = 'Stock must be a non-negative number';
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: form.name.trim(),
        price: Number(form.price),
        ...(form.category && { category: form.category }),
        ...(form.stock !== '' && { stock: Number(form.stock) }),
        ...(form.image.trim() && { image: form.image.trim() }),
      };

      if (isEdit) {
        await productService.update(product._id, payload);
        addToast('Product updated');
      } else {
        await productService.create(payload);
        addToast('Product created');
      }

      onSuccess();
      onOpenChange(false);
    } catch (err) {
      addToast(err.response?.data?.message || 'Something went wrong', 'error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input label="Product Name *" placeholder="e.g. Wireless Headphones" {...field('name')} />

      <div className="grid grid-cols-2 gap-4">
        <Input label="Price (USD) *" type="number" min="0" step="0.01" placeholder="0.00" {...field('price')} />
        <Input label="Stock" type="number" min="0" placeholder="0" {...field('stock')} />
      </div>

      <CategorySelect
        label="Category"
        value={form.category}
        onValueChange={(v) => setForm((current) => ({ ...current, category: v }))}
        placeholder="Select a category"
      />

      <Input label="Image URL" placeholder="https://example.com/product.jpg" {...field('image')} />

      {form.image.trim() ? (
        <div className="w-full h-40 rounded-xl overflow-hidden border border-zinc-700 bg-zinc-800">
          <img
            src={form.image}
            alt="preview"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden w-full h-full items-center justify-center gap-2 text-zinc-600">
            <ImageOff size={20} /><span className="text-sm">Invalid image URL</span>
          </div>
        </div>
      ) : (
        <div className="w-full h-28 rounded-xl border border-dashed border-zinc-700 bg-zinc-800/50 flex flex-col items-center justify-center gap-1.5">
          <ImageOff size={22} className="text-zinc-600" />
          <span className="text-xs text-zinc-600">Image preview will appear here</span>
        </div>
      )}

      <Separator.Root className="h-px bg-zinc-800" />

      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
        <Button type="submit" loading={loading}>{isEdit ? 'Save Changes' : 'Create Product'}</Button>
      </div>
    </form>
  );
}
