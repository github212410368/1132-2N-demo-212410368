import { cn } from '@/lib/utils';

const ProductPrice_68 = ({
  value,
  className,
}: {
  value: number | string;
  className?: string;
}) => {
  const numValue = Number(value);
  const stringValue = !isNaN(numValue) ? numValue.toFixed(2) : '0.00';
  const [intValue, floatValue] = stringValue.split('.');

  return (
    <p className={cn('text-2xl', className)}>
      <span className='text-xs align-super'>$</span>
      {intValue}
      <span className='text-xs align-super'>.{floatValue}</span>
    </p>
  );
};

export default ProductPrice_68;
