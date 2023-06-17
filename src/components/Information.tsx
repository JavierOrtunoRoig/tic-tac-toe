import cls from 'classnames';
import { Turn } from '../constants';

interface InformationProps {
  title: string;
  value: string | Turn;
  winner?: boolean;
}

export function Information({ title, value, winner }: InformationProps) {

  const classes = cls(
    'next-turn',
    { winner }
  );

  return (
    <div className={classes}>
      <h2>{title}</h2>
      <div className="square">{value}</div>
    </div>
  );
}