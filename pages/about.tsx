import Title from '../components/Title';
import Container from '../components/Container';
import PageWrapper from '../components/PageWrapper';

const AboutPage = () => {
  return (
    <PageWrapper className="pt-20">
      <Container>
        <Title className="mb-4">Who Whe Are</Title>
        <p>
          Welcome to our website, where we specialize in providing exciting
          giveaways for gamers. Our team is made up of passionate gamers who
          understand the importance of having access to the latest games and
          equipment without breaking the bank. We created this website to share
          our love for gaming with fellow enthusiasts and help make gaming more
          accessible to everyone.
          <br />
          <br />
          Our mission is to provide gamers with the opportunity to experience
          the latest games and DLC's. We are constantly updating our website
          with new giveaways and working hard to make sure our community has the
          best possible experience.
          <br />
          <br />
          Thank you for visiting our website, and we hope you enjoy our
          giveaways as much as we enjoy providing them to you. If you have any
          questions or feedback, please don't hesitate to contact us.
        </p>
      </Container>
    </PageWrapper>
  );
};

export default AboutPage;
