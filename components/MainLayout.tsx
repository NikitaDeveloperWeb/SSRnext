import Link from 'next/link';
import Head from 'next/head';
export function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>Page | {title}</title>
        <meta name="keywords" content="ssr,next,js,react" />
        <meta name="description" content="Next tutorial" />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <Link href={'/'}>
          <a>Home</a>
        </Link>
        <Link href={'/about'}>
          <a>About</a>
        </Link>
        <Link href={'/about/auhtor'}>
          <a>Author</a>
        </Link>
        <Link href={'/posts'}>
          <a>Posts</a>
        </Link>
        {/*   */}
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          width: 100%;
          left: 0;
          rigth: 0;
          top: 0;
          background: darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        nav a {
          color: #fff;
          text-decoration: none;
        }

        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
}
