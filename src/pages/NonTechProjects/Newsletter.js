import {useEffect} from 'react';

const Newsletter = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://substackapi.com/embeds/feed.js';
        script.async = true;
        document.body.appendChild(script);
    
        // Clean up the script on component unmount
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
      useEffect(() => {
        // Set the Substack feed widget configuration
        window.SubstackFeedWidget = {
          substackUrl: 'licensetosilence.substack.com',
          posts: 6,
          filter: 'top',
          layout: 'center',
        };
      }, []);

    return ( 
        <>
        <p style={{fontSize: 16}}>Social media, including LinkedIn, isn't my thing. It's all about showing off the highlights without the backstory behind them, and it can make you feel pretty crappy. Instead, I'm all about keeping it real. I'm documenting my journey in learning Computer Science, no hiding, no sugarcoating. I'm sharing everything—what I've done, what I'm doing, how I feel. I want to show people the real deal, what it's really like. My journey with this newsletter started exactly three months after I wrote my first line of Python code, and that's what my newsletter is all about.</p>
        <h4>Check out some of my top posts until now:</h4>
        <div id="substack-feed-embed"></div>

    
        </>
     );
}
 
export default Newsletter;