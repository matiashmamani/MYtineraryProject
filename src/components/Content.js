import React from 'react';
import StartBrowsing from './StartBrowsing.js';
import AccountSection from './AccountSection.js';

class Content extends React.Component{
    render(){
      return (
        <div>
            <StartBrowsing/>
            <AccountSection/>
        </div>
      );
    }
  }
  
  export default Content;