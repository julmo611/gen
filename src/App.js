import { Routes, Route } from 'react-router-dom';
import Join from './components/Join';
import NewsLetter from './Pages/NewsLetter';
import Home from './Pages/Home';
import Learn from './Pages/Learn';
import OfficialRules from './Pages/OfficialRules';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsAndConditions from './Pages/TermsAndConditions';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
			<Route path="/terms-and-conditions" element={<TermsAndConditions />} />
			<Route path="/official-rules" element={<OfficialRules />} />
			<Route path="/learn" element={<Learn />} />
			<Route path="/join" element={<Join />} />
			<Route path="/subscribe" element={<NewsLetter />} />
		</Routes>
	);
}

export default App;
