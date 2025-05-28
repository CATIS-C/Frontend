import React from 'react';
import Header from '../components/Header';
import FooterActions from '../components/FooterActions';

const Layout = ({ children, onPreDeclasser, onRetour, footerTitle }) => {
  return (
    <>
      <Header />
      <main style={{ padding: '20px', minHeight: 'calc(100vh - 140px)' }}>
        {children}
      </main>
      <FooterActions 
        onPreDeclasser={onPreDeclasser} 
        onRetour={onRetour} 
        footerTitle={footerTitle} 
      />
    </>
  );
};

export default Layout;
