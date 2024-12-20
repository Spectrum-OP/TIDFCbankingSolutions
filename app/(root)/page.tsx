import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
// import { section } from 'lucide-react';
import React from 'react'

const home = () => {
  const loggedIn= { firstName: 'Kundan' };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName||'Guest'}
            subtext="Access and Manage your Account and Transactions efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={4086.75}
          />
        </header>
      </div>
    </section>
  )
}

export default home