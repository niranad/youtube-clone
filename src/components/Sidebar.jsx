import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction='row'
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          className='category-btn'
          onClick={() => setSelectedCategory(category.name)}
          style={{ 
            background: category.name === selectedCategory && '#FC1503', 
            color: 'white' 
          }}
        >
          <span 
            style={{ 
              color: category.name === selectedCategory ? 'white' : 'red',
              marginRight: 15
            }}
          >{category.icons}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}
