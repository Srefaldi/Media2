import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#001F3F' }} className="text-center py-4">
      <div className="flex justify-center mt-3 space-x-4">
        <a href="#" className="text-white text-2xl"><i className="fab fa-facebook"></i></a>
        <a href="#" className="text-white text-2xl"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-white text-2xl"><i className="fab fa-google-plus"></i></a>
        <a href="#" className="text-white text-2xl"><i className="fab fa-github"></i></a>
        <a href="#" className="text-white text-2xl"><i className="fab fa-linkedin"></i></a>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-400">
          Copyright ©2025{' '}
          <a href="#" className="text-blue-500">CSharpLearn</a>
        </p>
        <div className="mt-3 space-x-3">
          <a href="#" className="text-gray-400 hover:text-white">Beranda</a>
          <a href="#" className="text-gray-400 hover:text-white">Materi</a>
          <a href="#" className="text-gray-400 hover:text-white">Informasi</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;