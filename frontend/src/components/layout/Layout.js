import Sidebar from './Sidebar';
import { Container } from '@mui/material';

export default function Layout({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Container style={{ padding: '20px', flex: 1 }}>{children}</Container>
    </div>
  );
}
