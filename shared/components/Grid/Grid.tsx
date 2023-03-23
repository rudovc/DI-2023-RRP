import styles from './grid.module.css';

interface GridProps {
  rows?: number;
  columns?: number;
  gap?: number;
  className?: string;
  children?: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({
  rows,
  columns,
  gap,
  children,
  className = '',
}) => {
  const autoRows = !rows;
  const autoColumns = !columns;
  const autoFlow = autoRows && autoColumns;

  const gridStyle: React.CSSProperties = {
    gridTemplateRows: `repeat(${rows || 'auto-fill, minmax(100px'}, 1fr${
      rows ? '' : ')'
    })`,
    gridTemplateColumns: `repeat(${columns || 'auto-fill, minmax(100px'}, 1fr${
      columns ? '' : ')'
    })`,
    gap: gap ? `${gap}px` : undefined,
  };

  return (
    <div className={`${styles.grid} ${className}`} style={gridStyle}>
      {children}
    </div>
  );
};

export default Grid;
