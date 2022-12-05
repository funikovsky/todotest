import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { Projects } from './pages/Projects';
import { Task } from './pages/Task';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Projects />} />
        <Route path="/tasks/:id" element={<Task />} />
        <Route path="*" element={<div> Страница не найдена</div>} />
      </Route>
    </Routes>
  );
}

export default App;
