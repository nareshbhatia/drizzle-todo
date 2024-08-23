import { getData } from '@/actions/todoAction';
import Todos from '@/components/todos';
import { unstable_noStore as noStore } from 'next/cache';

export default async function Home() {
  noStore();

  const data = await getData();
  return <Todos todos={data} />;
}
