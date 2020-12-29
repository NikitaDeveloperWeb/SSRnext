import Link from 'next/link';
import { MainLayout } from '../components/MainLayout';
import classes from '../styles/error.module.css';
export default function ErrorPage() {
  return (
    <MainLayout title="error">
      <h1 className={classes.error}>Error 404</h1>

      <Link href={'/'}>
        <a>go to home</a>
      </Link>
    </MainLayout>
  );
}
