import { FC } from 'react';

import PageWrapper from '../components/PageWrapper';
import Title from '../components/Title';
import Container from '../components/Container';

const ContactPage: FC = () => {
  return (
    <PageWrapper className="pt-20">
      <Container>
        <Title className="mb-4">Contact US</Title>
        <div className="flex items-center justify-center flex-wrap">
          <p className="bg-slate-300 inline px-5 py-2 m-2 rounded">
            <span className="font-semibold text-slate-600 text-center mb-4">
              Email:{' '}
            </span>{' '}
            easytoaskmail@gmail.com
          </p>
          <p className="bg-slate-300 inline px-5 py-2 m-2 rounded">
            <span className="font-semibold text-slate-600 text-center mb-4">
              Telegram:{' '}
            </span>{' '}
            @artemovvandrei
          </p>
        </div>
      </Container>
    </PageWrapper>
  );
};

export default ContactPage;
