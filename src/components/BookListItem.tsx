import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  IconButton,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';

type BookListItemProps = {
  title: string;
  selected?: boolean;
  onClick?: () => void;
  onRename?: () => void;
  onDelete?: () => void;
};

export default function BookListItem({
  title,
  selected = false,
  onClick,
  onRename,
  onDelete,
}: BookListItemProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (event: object) => {
    if (event && typeof event === 'object' && 'stopPropagation' in event) {
      (event as React.SyntheticEvent).stopPropagation();
    }
    setAnchorEl(null);
  };

  const handleRename = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    handleMenuClose({});
    onRename?.();
  };

  const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    handleMenuClose({});
    onDelete?.();
  };

  return (
    <ListItemButton
      selected={selected}
      onClick={onClick}
      sx={(theme) => ({
        borderRadius: 1,
        minWidth: 0,
        '&.Mui-selected': {
          bgcolor: theme.palette.action.selected,
          boxShadow: 'none',
        },
        '&.Mui-selected:hover': {
          bgcolor: theme.palette.action.selected,
          boxShadow: 'none',
        },
      })}
    >
      <ListItemText
        primary={title}
        title={title}
        sx={{ minWidth: 0, flex: 1 }}
        slotProps={{
          primary: {
            noWrap: true,
            sx: { overflow: 'hidden', textOverflow: 'ellipsis' },
          },
        }}
      />
      <IconButton
        edge="end"
        size="small"
        aria-label={`Open menu for ${title}`}
        onClick={handleMenuOpen}
      >
        <MoreVertIcon fontSize="small" />
      </IconButton>
      <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose}>
        <MenuItem onClick={handleRename} disabled={!onRename}>
          Rename
        </MenuItem>
        <MenuItem onClick={handleDelete} disabled={!onDelete}>
          Delete
        </MenuItem>
      </Menu>
    </ListItemButton>
  );
}
