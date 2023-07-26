import "./header.css"
function Header() {
  return (
    <header className='app-header d-flex align-items-center justify-content-center mt-4 mt-sm-5 mt-xl-5'>
      <img id="logo" src='logo512.png' alt='React logo' />
      <h1 id="quiz-title" className="mx-3">The React Quiz</h1>
    </header>
  );
}

export default Header;
