import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Footer = () => {
    const [copied, setCopied] = useState(false)
    
    return (
        <footer>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/van-biet-nguyen/" target="_blank" rel="noreferrer">linkedin</a>
                </li>
                <li ><a href="https://github.com/vanbietnguyen" target="_blank" rel="noreferrer">github</a></li>
                <li><a href="http://dockure.com" target="_blank" rel="noreferrer">dockure</a></li>
                {/* <li>instagram</li> */}
            </ul>
            <ul id="contact">
                <li onClick={() => setCopied(true)}>
                    <CopyToClipboard text="vanbietnguyen@gmail.com">
                        {copied ? 
                            <span>email copied!</span> : 
                            <span>contact me</span>
                        }
                    </CopyToClipboard>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;