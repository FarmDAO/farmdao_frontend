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

const Services2 = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>How it works if you lend</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Auditors Assignment</ServicesH2>
          <ServicesP>
          Randomly assigned Auditors vote to approve borrowers. Auditors are randomly assigned to prevent collusion. 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Backers Investment</ServicesH2>
          <ServicesP>
          Upon approval, Backers assess borrowers and decide whether to supply first-loss capital, which is allocated to the junior tranche of the loan       </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Senior Debt</ServicesH2>
          <ServicesP>
          Senior debt Providers then supply capital to the senior tranche

          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Getting Paid Back</ServicesH2>
          <ServicesP>
          Upon loan repayment, Senior debt is paid first, then Backers, then Auditors to ensure everyone’s interests are aligned.

          </ServicesP>

        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services2;
