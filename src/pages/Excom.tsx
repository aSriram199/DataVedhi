import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface LocationState {
  year?: string;
}

export default function Excom() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;
  const year = state?.year || '2024-2025';

  console.log('Location state:', location.state); // Debug log
  console.log('Current year:', year); // Debug log

  // Ensure we maintain the year state even on page refresh
  useEffect(() => {
    console.log('Effect running, location.state:', location.state); // Debug log
    if (!location.state) {
      navigate('/ex-com', { state: { year: '2024-2025' }, replace: true });
    }
  }, [location.state, navigate]);

  const renderContent = () => {
    switch (year) {
      case '2024-2025':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Ex-com Members 2024-2025</h2>
            {/* Add specific content for 2024-2025 */}
            <p>Content for 2024-2025 committee</p>
          </div>
        );
      case '2023-2024':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Ex-com Members 2023-2024</h2>
            {/* Add specific content for 2023-2024 */}
            <p>Content for 2023-2024 committee</p>
          </div>
        );
      case '2022-2023':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Ex-com Members 2022-2023</h2>
            {/* Add specific content for 2022-2023 */}
            <p>Content for 2022-2023 committee</p>
          </div>
        );
      default:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Current Ex-com Members</h2>
            <p>Default committee content</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Executive Committee</h1>
        {renderContent()}
      </div>
    </div>
  );
}