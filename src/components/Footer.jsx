import React from 'react'

export default function Footer() {
  return (
    <footer>
            <p>
                © {new Date().getFullYear()} Amogh Shetty 
                <span className="separator"> | </span>
                <a href="https://shettyamogh.com" target="_blank" rel="noopener noreferrer" className="footer-link">Portfolio</a>
            </p>
    </footer>
  )
}
