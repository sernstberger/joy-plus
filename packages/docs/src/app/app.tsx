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
  Sheet,
} from '@mui/joy';
import { Home, KeyboardArrowRight } from '@mui/icons-material';

export function App() {
  return (
    <Layout orientation="vertical">
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
  size,
}: LayoutProps) {
  const horizontalOrientation = orientation === 'horizontal';
  const defaultSize = horizontalOrientation ? 60 : 200;
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        gridAutoFlow: horizontalOrientation ? 'row' : 'column',
        gridTemplateColumns: horizontalOrientation
          ? undefined
          : `${defaultSize}px 1fr`,
        gridTemplateRows: horizontalOrientation
          ? `${defaultSize}px 1fr`
          : undefined,
      }}
    >
      <Sheet color="neutral" variant="plain">
        <Nav
          nav={[
            { title: 'Home', icon: <Home /> },
            { title: 'Products', icon: <Home /> },
            { title: 'Scores', icon: <Home /> },
          ]}
          {...{ orientation }}
        />
      </Sheet>
      <Box component="main">
        <Container>{children}</Container>
      </Box>
    </Box>
  );
}

interface NavProps {
  orientation?: 'horizontal' | 'vertical';
  nav: {
    title: string;
    icon?: React.ReactNode;
  }[];
}

export function Nav({ orientation = 'vertical', nav }: NavProps) {
  return (
    <List orientation={orientation}>
      {nav.map(({ title, icon }) => {
        return (
          <ListItem>
            <ListItemButton>
              {icon && <ListItemDecorator>{icon}</ListItemDecorator>}
              <ListItemContent>{title}</ListItemContent>
              {/* <KeyboardArrowRight /> */}
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default App;
