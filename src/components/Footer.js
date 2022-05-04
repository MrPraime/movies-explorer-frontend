import React from 'react';

function Footer() {
   return (
<footer>
    <p className="footer__tittle">Учебный проект Яндекс.Практикум х BeatFilm.</p>
    <div className="footer__container">
        <p className="footer__year">© 2022</p>
        <ul className="footer__links">
            <li><a href="" className="footer__link">Яндекс.Практикум</a></li>
            <li><a href="" className="footer__link">Github</a></li>
            <li><a href="" className="footer__link">Facebook</a></li>
        </ul>
    </div>
</footer>
   );
 }
  
export default Footer;