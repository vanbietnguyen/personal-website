import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Footer = () => {
    const [copied, setCopied] = useState(false)
    
    return (
        <footer>
            <ul id="socials">
                <li>linkedin</li>
                <li >github</li>
                <li>dockure</li>
                <li>instagram</li>
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