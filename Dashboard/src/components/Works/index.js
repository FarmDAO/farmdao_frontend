import React from 'react';

import Icon1 from '../../images/signin.svg';
import Icon2 from '../../images/upload.svg';
import Icon3 from '../../images/happy.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1 >How it works if you borrow</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Sign In</ServicesH2>
          <ServicesP>
          Borrowers sign in with their ICP wallet
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Create Loan</ServicesH2>
          <ServicesP>
          Borrowers upload company documents and propose loans  including interest rates, tenor, etc.          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Protocol Application</ServicesH2>
          <ServicesP>
          The Protocol Assesses the application and disburses funds to the borrower’s wallet

          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
