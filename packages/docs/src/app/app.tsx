import React from 'react';
import { ChartCard, Form, Header, Stat, Post, AppCard } from 'components';
import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
  ListItemButton,
  ListItemDecorator,
  ListItemContent,
} from '@mui/joy';
import { LineChart } from '@mui/x-charts/LineChart';
import { Home, KeyboardArrowRight } from '@mui/icons-material';

export function App() {
  return (
    <Layout orientation="vertical" size={200}>
      <Header
        title="hello"
        subtitle="Things can go here"
        action={<Button>cool</Button>}
      />
      <Card>alkjfaldskfjalfjslfkja</Card>
    </Layout>
  );
}

interface LayoutProps {
  orientation?: 'horizontal' | 'vertical';
  children: React.ReactNode;
  size?: number;
}

export function Layout({
  children,
  orientation = 'vertical',
  size = 200,
}: LayoutProps) {
  const horizontalOrientation = orientation === 'horizontal';
  return (
    <Box
      // direction="row"
      sx={{
        minHeight: '100vh',
        display: 'grid',
        gridAutoFlow: horizontalOrientation ? 'row' : 'column',
        gridTemplateColumns: horizontalOrientation
          ? undefined
          : `${size}px 1fr`,
        gridTemplateRows: horizontalOrientation ? `${size}px 1fr` : undefined,
      }}
    >
      <Box sx={{ backgroundColor: 'red' }}>
        <Nav {...{ orientation }} />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}

interface NavProps {
  orientation?: 'horizontal' | 'vertical';
}

export function Nav({ orientation = 'vertical' }: NavProps) {
  return (
    <List orientation={orientation}>
      <ListItem>
        <ListItemButton>
          <ListItemDecorator>
            <Home />
          </ListItemDecorator>
          <ListItemContent>Home</ListItemContent>
          <KeyboardArrowRight />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default App;
