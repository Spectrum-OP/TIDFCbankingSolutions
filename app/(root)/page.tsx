import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/rightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
// import { section } from 'lucide-react';
import React from 'react'

const home = () => {
  const loggedIn= { firstName: 'Kundan' , lastName : "Kumar", email : "kkundan6405@gmail.com"};

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

        RECENT TRANSACTIONS
      </div>

      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:2547.68},{currentBalance:9000}]}
      />
    </section>
  )
}

export default home