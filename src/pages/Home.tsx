import { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  List,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from '../assets/logo.png';
import BookListItem from '../components/BookListItem';

export default function Home() {
  const books = [
    { id: 'book-1', title: 'The Power of Habit' },
    { id: 'book-2', title: 'Sapiens' },
    { id: 'book-3', title: 'Atomic Habits' },
    { id: 'book-4', title: 'Deep Work' },
    { id: 'book-5', title: 'Thinking, Fast and Slow' },
    { id: 'book-6', title: 'The Alchemist' },
    { id: 'book-7', title: 'Grit' },
    { id: 'book-8', title: 'Outliers' },
    { id: 'book-9', title: 'Man\'s Search for Meaning' },
    { id: 'book-10', title: 'The 7 Habits of Highly Effective People' },
    { id: 'book-11', title: 'The Art of War' },
    { id: 'book-12', title: 'Thinking in Bets' },
    { id: 'book-13', title: 'The Lean Startup' },
    { id: 'book-14', title: 'Start With Why' },
    { id: 'book-15', title: 'The Intelligent Investor' },
    { id: 'book-16', title: 'Meditations' },
  ];
  const [selectedBookId, setSelectedBookId] = useState(books[0]?.id ?? '');
  const [bookSearch, setBookSearch] = useState('');

  const normalizedQuery = bookSearch.trim().toLowerCase();
  const filteredBooks = normalizedQuery
    ? books.filter((book) => book.title.toLowerCase().includes(normalizedQuery))
    : books;

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        height: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 3fr',
          gridTemplateRows: '80px 1fr',
          boxShadow:
            '12px 0 24px -16px rgba(0, 0, 0, 0.25), -12px 0 24px -16px rgba(0, 0, 0, 0.25)',
          backgroundColor: 'background.paper',
        }}
      >
        <Box
          sx={{
            borderRight: 1,
            borderBottom: 1,
            borderColor: 'divider',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1.5,
            paddingX: 3,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Note Atlas logo"
            sx={{ width: 44, height: 44, objectFit: 'contain' }}
          />
          <Typography variant="h4" fontWeight={600}>
            Note Atlas
          </Typography>
        </Box>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingX: 2,
          }}
        >
          <IconButton aria-label="Settings" size="large">
            <SettingsIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            minWidth: 0,
            minHeight: 0,
          }}
        >
          <TextField
            placeholder="Search Books"
            size="small"
            fullWidth
            value={bookSearch}
            onChange={(event) => setBookSearch(event.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              },
            }}
          />
          <Box sx={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
            <List
              disablePadding
              sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}
            >
              {filteredBooks.map((book) => (
                <BookListItem
                  key={book.id}
                  title={book.title}
                  selected={book.id === selectedBookId}
                  onClick={() => setSelectedBookId(book.id)}
                />
              ))}
            </List>
          </Box>
          <Button variant="contained" fullWidth>
            Add New Book
          </Button>
        </Box>
        <Box />
      </Box>
    </Box>
  );
}
