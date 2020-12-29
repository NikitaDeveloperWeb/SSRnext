import { useRouter } from 'next/router';
import { MainLayout } from '../../components/MainLayout';
import React from 'react';
import styled from '@emotion/styled';
const Button = styled.button`
  color: turquoise;
`;
export default function Post({ post: serverPost }) {
  const router = useRouter();
  const [post, setPost] = React.useState(serverPost);

  React.useEffect(() => {
    async function load() {
      const response = await fetch(`http://localhost:4200/posts/${router.query.id}`);
      const data = await response.json();

      setPost(data);
    }
    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={`post - ${post.title}`}>
      <h1>{post.title}</h1>
      <hr />
      <p>{post.text}</p>
      <Button>Like</Button>
    </MainLayout>
  );
}
Post.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return { post: null };
  }
  const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
  const post = await response.json();

  return {
    post,
  };
};

// export async function getServerSideProps({ query, req }) {
//   if (!req) {
//     return { post: null };
//   }
//   const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//   const post = await response.json();

//   return { props: { post } };
// }
