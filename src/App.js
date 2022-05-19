import { TodoProvider } from '@/context';
// styles
import { Container } from 'react-bootstrap';
// components
import { TodoForm, TodoList, TodoFilters, TodoControls } from '@/components';
import { App1 } from './modules/main';

export const App = () => (
  <Container className="mt-2 text-center" style={{ maxWidth: '512px' }}>
    <App1 />
  </Container>
);
