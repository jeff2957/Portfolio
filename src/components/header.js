import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>LU</div>
        {/* <nav>
          <ul>
            <li>
              <a href='/'>discover</a>
            </li>
            <li>
              <a href='/'>products</a>
            </li>
            <li>
              <a href='/'>solutions</a>
            </li>
            <li>
              <a href='/'>reach</a>
            </li>
            <li className='btn'>
              <a href='/'>order</a>
            </li>
          </ul>
        </nav> */}
        <nav>
          <ul>
            <li className="btn">
              <a href='https://www.linkedin.com/in/yen-fu-lu-593347178/' target='_blank'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
