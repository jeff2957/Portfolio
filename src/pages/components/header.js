import React from "react";


export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>LU</div>
        <nav>
          <ul>
            {/* <li>
              <a href='/About'>About</a>
            </li>
            <li>
              <a href='/Music'>Music</a>
            </li>
            <li>
              <a href='/Code'>Code</a>
            </li>
            <li>
              <a href='/Visual'>Visual</a>
            </li> */}
            <li className='btn'>
              <a href='https://www.linkedin.com/in/yen-fu-lu-593347178/' target='_blank' rel="noopener noreferrer">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
