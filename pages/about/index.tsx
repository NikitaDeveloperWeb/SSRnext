import { MainLayout } from '../../components/MainLayout';
export default function About({ title }) {
  return (
    <MainLayout title="about">
      <h1>{JSON.stringify(title)}</h1>
    </MainLayout>
  );
}
About.getInitialProps = async () => {
  const response = await fetch('http://localhost:4200/about');
  const data = await response.json();

  return {
    title: data.title,
  };
};
