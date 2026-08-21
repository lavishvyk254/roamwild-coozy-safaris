export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© {new Date().getFullYear()} Roamwild Coozy Safaris</p>
      <div className="footer-icons">
        <a href="https://www.instagram.com/roamwildcoozy_safaris" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.4.4.6.2 1 .5 1.5 1 .4.4.7.9 1 1.5.2.4.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.4-.2.6-.5 1-1 1.5-.4.4-.9.7-1.5 1-.4.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.4-.4-.6-.2-1-.5-1.5-1-.4-.4-.7-.9-1-1.5-.2-.4-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.4.2-.6.5-1 1-1.5.4-.4.9-.7 1.5-1 .4-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-1.9.4-.5.2-.8.4-1.1.7-.3.3-.6.6-.7 1.1-.1.3-.3.9-.4 1.9-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.4 1.9.2.5.4.8.7 1.1.3.3.6.6 1.1.7.3.1.9.3 1.9.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 1.9-.4.5-.2.8-.4 1.1-.7.3-.3.6-.6.7-1.1.1-.3.3-.9.4-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.4-1.9-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.6-1.1-.7-.3-.1-.9-.3-1.9-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 1.8a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4zm5.7-2a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6z"/>
          </svg>
        </a>

        <a href="https://www.tiktok.com/@coozy_safaris" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M16.5 2h-3v13.2c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5c.3 0 .5 0 .8.1V9.7c-.3 0-.5-.1-.8-.1-2.9 0-5.3 2.4-5.3 5.3S8.1 20.2 11 20.2s5.3-2.4 5.3-5.3V8.1c1.1.8 2.4 1.3 3.9 1.3V6.4c-2.1 0-3.7-1.5-3.7-3.4V2z"/>
          </svg>
        </a>

        <a href="https://www.facebook.com/CoozyToursAndTravel" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/>
          </svg>
        </a>

        <a href="mailto:coozytoursandtravel@gmail.com" aria-label="Email">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M2 5.5h20c.6 0 1 .4 1 1v11c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1v-11c0-.6.4-1 1-1zm1 2.3v8.7h18V7.8l-8.3 5.6a1.2 1.2 0 0 1-1.4 0L3 7.8zm.7-1.3 8.3 5.6 8.3-5.6H3.7z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}