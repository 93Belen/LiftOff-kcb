import { ThemeProvider } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './App.css';
import { BusinessOwner } from './components/BusinessOwner/BusinessOwner';
import { HomePage } from './components/HomePage/HomePage';
import { Searcher } from './components/Searcher/Searcher';
import { selectIsBusinessOwner, selectSignedIn } from './state-redux/Store/Selectors';

function App() {
  // changes depending on info provided by back-end
  let isSignedIn = useSelector(selectSignedIn);
  let isBusinessOwner = useSelector(selectIsBusinessOwner);

  // React Elements
  const HomePageElement = <HomePage />
  const BusinessOwnerElement = <BusinessOwner />
  const SearcherElement = <Searcher />

  // Page displayed
  let currentPage = HomePageElement;

  // Decides what page to dosplay
  if(isSignedIn){
    if(isBusinessOwner){
      currentPage = BusinessOwnerElement;

    }
    else {
      currentPage = SearcherElement;
    }
  }
  else {
    currentPage = HomePageElement;
  }

  // ================================= 


  return (
    <div className="App">
      <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
    >
      {currentPage}
      </ThemeProvider>
    </div>
  );
}

export default App;
