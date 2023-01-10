/* 
  The footer.css file rendered in the index page as a style tag so that sny element with the same class 'fullScreenWidthBar'
  will apply the 'fullScreenWidthBar' class style either this element in the footer.js file or in any other file.

  So we can use one of the two ways:
    - The first way is set a class to the parent and declear the selector with parent class as the following

    import './Footer.css';

    <div className='myFooter'>
      <footer className='fullScreenWidthBar'>
        Ahmed Hisham Training
        <span>🧡</span>
      </footer>
    </div>

    In The 'Footer.css' file we will declear the selector as the following
    .myFooter .fullScreenWidthBar{
      ...
    }

    - The second way is rename the css file to be a module like this './Footer.module.css'
    In this case we deal with the css classes as a module.
    
    After rename the css file we can import it as a module like this
    import footerStyle from './Footer.module.css';
    
    So we can use the css classes like this
    <footer className={footerStyle.fullScreenWidthBar}>
    without parent class
*/

import footerStyle from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className={footerStyle.fullScreenWidthBar}>
        Ahmed Hisham Training
        <span>🧡</span>
      </footer>
    </>
  );
};

export default Footer;
