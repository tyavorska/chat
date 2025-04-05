import { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import { List, ListItem, Typography } from '@mui/material';

export default function Sidebar() {
  const { favoriteProjects } = useContext(ProjectContext);

  return (
    <div style={{ width: '250px', padding: '20px', background: '#f4f4f4' }}>
      <Typography variant="h6">Favorite Projects</Typography>
      <List>
        {favoriteProjects.map((project) => (
          <ListItem key={project.id}>{project.name}</ListItem>
        ))}
      </List>
    </div>
  );
}

