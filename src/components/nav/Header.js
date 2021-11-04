import React from 'react';

const Header = () => {
    return (
        <header>
            {/* <div>test</div> */}
            <ul id='left-nav'>
                    <li>Van Biet</li>
                    <li>Nguyen</li>
                </ul>
            <nav>
                <ul id='right-nav'>
                    <li>about</li>
                    <li>skills</li>
                    <li>resume</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;