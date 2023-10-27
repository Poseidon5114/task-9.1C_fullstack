import React from 'react';
import './email.css';
function Email() {
    return (
        <div className="containeremail">
        <p>Sign up for daily newsletter</p>
        <input type="email" id="email" name="email" required />
        <button type="submit">Subscribe</button>
      </div>
    )
}
export default Email; 