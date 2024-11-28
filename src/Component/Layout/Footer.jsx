const Footer = () =>{
    return(
        <>
            <footer>
  <div className="footer-container">
    <div className="footer-links">
      <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Account</a></li>
        <li><a href="#">Media Center</a></li>
      </ul>
      <ul>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Ways to Watch</a></li>
        <li><a href="#">Terms of Use</a></li>
      </ul>
      <ul>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Cookie Preferences</a></li>
        <li><a href="#">Corporate Information</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <ul>
        <li><a href="#">Speed Test</a></li>
        <li><a href="#">Legal Notices</a></li>
        <li><a href="#">Only on Netflix</a></li>
      </ul>
    </div>
    
    <div className="footer-payment">
      <h3>We Accept:</h3>
      <div className="payment-icons">
        <img src="https://www.svgrepo.com/show/333620/visa.svg" alt="Visa" style={{color:"white",background:'#fff'}}/>
        <img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="MasterCard"/>
        <img src="https://www.svgrepo.com/show/328122/paypal.svg" alt="PayPal"/>
        <img src="https://www.svgrepo.com/show/14823/amex.svg" alt="American Express"/>
      </div>
    </div>
    
    <div className="footer-copyright">
      <p>&copy; 2024 Netflix, Inc.</p>
    </div>
  </div>
</footer>
        </>
    )
}

export default Footer;