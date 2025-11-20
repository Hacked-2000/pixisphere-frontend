# Pixisphere Frontend Assignment

A modern, responsive photographer listing and profile platform built with Next.js, React, and Tailwind CSS. This application helps customers discover and connect with the best photographers for maternity, newborn, birthday, and other special shoots.

## 🎯 Project Overview

This is a full-featured frontend application that demonstrates:
- Advanced filtering and search capabilities
- Responsive design with mobile-first approach
- Performance optimization techniques
- Clean, modular component architecture
- Professional UI/UX design

## ✨ Features

### 📋 Category Listing Page
- **Photographer Cards**: Beautiful grid layout with:
  - High-quality profile pictures
  - Photographer name and location
  - Starting price with Indian Rupee formatting
  - Star ratings with visual badges
  - Category tags (Maternity, Wedding, etc.)
  - Hover effects and smooth transitions
  
- **Advanced Filters** (Sticky Sidebar):
  - **Price Range Sliders**: Dual sliders for min/max price selection (₹0 - ₹20,000)
  - **Rating Filter**: Dropdown to filter by minimum rating (3+, 4+, 4.5+)
  - **Style Checkboxes**: Multi-select for photography styles (Traditional, Candid, Studio, Outdoor, etc.)
  - **City Dropdown**: Filter by location
  - **Sorting Options**: 
    - Price: Low to High
    - Rating: High to Low
    - Recently Added
  
- **Smart Search Bar**: 
  - Debounced search (400ms delay)
  - Fuzzy search across name, location, and tags
  - Search icon with focus states
  
- **Load More Pagination**: 
  - Initially shows 6 photographers
  - Loads 6 more with each click
  - Shows count of visible/total results
  
- **Bonus Features**:
  - 💡 AI Smart Suggestion banner (context-aware recommendations)
  - Skeleton loaders during data fetch
  - Empty state messages
  - Responsive grid (1 col mobile, 2 col tablet, 3 col desktop)

### 👤 Photographer Profile Page
- **Comprehensive Details**:
  - Large profile picture
  - Full bio and description
  - Location with icon
  - Pricing information
  - Star rating display
  
- **Visual Elements**:
  - Styles & Tags with color-coded badges
  - Portfolio gallery (4-column grid)
  - Professional layout with proper spacing
  
- **Reviews Section**:
  - Customer name and date
  - Star ratings visualization
  - Review comments
  - Clean card-based design
  
- **Send Inquiry Modal**:
  - Contact form with validation
  - Fields: Name, Email, Message
  - Modal overlay with backdrop
  - Form submission handling

## 🛠 Technology Stack

- **Framework**: Next.js 13.5.6 (React 18.2.0)
- **State Management**: Context API
- **Styling**: Tailwind CSS 3.4.7
- **Data Fetching**: 
  - SWR for profile pages (with caching)
  - Context API for listings
- **Mock API**: JSON Server 0.17.3
- **Images**: Unsplash (high-quality stock photos)

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd pixisphere-frontend-assignment
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start JSON Server** (Terminal 1):
   ```bash
   npm run api
   ```
   This starts the mock API server on `http://localhost:3001`

4. **Start Next.js Development Server** (Terminal 2):
   ```bash
   npm run dev
   ```
   This starts the frontend on `http://localhost:3000`

5. **Open your browser**:
   Navigate to `http://localhost:3000`

### Available Scripts

```bash
npm run dev      # Start Next.js development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
npm run api      # Start JSON Server on port 3001
```

## 📁 Project Structure

```
pixisphere-frontend-assignment/
├── components/
│   ├── Filters.jsx              # Advanced filter sidebar with sliders
│   ├── PhotographerCard.jsx     # Card component with skeleton loader
│   └── SearchBar.jsx            # Debounced search input
├── context/
│   └── PhotographersContext.jsx # Global state management
├── lib/
│   └── api.js                   # API utility functions
├── pages/
│   ├── _app.js                  # App wrapper with context provider
│   ├── index.js                 # Category listing page (main)
│   └── photographer/
│       └── [id].js              # Dynamic profile page
├── public/
│   └── images/
│       └── placeholder.svg      # SVG placeholder
├── styles/
│   └── globals.css              # Global styles with Tailwind
├── db.json                      # Mock API data (8 photographers)
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind configuration
├── QUICKSTART.md                # Quick start guide
└── README.md                    # This file
```

## 💡 Implementation Details

### Filtering Logic
- **Performance**: Filters use `useMemo` to prevent unnecessary recalculations
- **Combination**: Multiple filters work together (price AND rating AND styles AND city)
- **Style Matching**: Uses "OR" logic (matches if photographer has ANY selected style)
- **Real-time Updates**: Results update instantly as filters change
- **Price Range**: Dual sliders allow precise min/max selection

### Debounce Implementation
- **Custom Hook**: `useDebounce` hook with 400ms delay
- **Purpose**: Prevents excessive filtering during typing
- **User Experience**: Smooth, lag-free search experience
- **Performance**: Reduces unnecessary re-renders

### State Management
- **Global State**: `PhotographersContext` provides photographer data to all components
- **Local State**: Each component manages its own UI state (filters, search, pagination)
- **SWR Caching**: Profile pages use SWR for automatic caching and revalidation
- **Error Handling**: Graceful error states with user-friendly messages

### Performance Optimizations
- ✅ `useMemo` for expensive filtering operations
- ✅ Skeleton loaders for perceived performance
- ✅ Lazy loading with "Load More" pagination
- ✅ Debounced search input
- ✅ Image optimization with proper dimensions
- ✅ Sticky sidebar (no re-rendering on scroll)

### Responsive Design
- **Mobile-first**: Designed for mobile, enhanced for desktop
- **Breakpoints**:
  - Mobile: 1 column grid
  - Tablet (sm): 2 column grid
  - Desktop (lg): 3 column grid + sidebar
- **Touch-friendly**: Large tap targets, proper spacing
- **Flexible layouts**: Grid and flexbox for adaptability

## 🔌 API Endpoints

Base URL: `http://localhost:3001`

- `GET /photographers` - List all photographers
- `GET /photographers/:id` - Get photographer by ID

### Sample Response
```json
{
  "id": 1,
  "name": "Ravi Studio",
  "location": "Bengaluru",
  "price": 10000,
  "rating": 4.6,
  "styles": ["Outdoor", "Studio"],
  "tags": ["Candid", "Maternity"],
  "bio": "Award-winning studio...",
  "profilePic": "https://...",
  "portfolio": ["https://...", "https://..."],
  "reviews": [...]
}
```

## 📊 Sample Data

The `db.json` includes 8 photographers with:
- **Locations**: Bengaluru, Delhi, Mumbai, Hyderabad, Chennai, Pune
- **Price Range**: ₹7,000 - ₹18,000
- **Ratings**: 3.9 - 4.9
- **Styles**: Outdoor, Studio, Candid, Traditional, Indoor, Lifestyle
- **Tags**: Maternity, Newborn, Birthday, Wedding, Pre-wedding, Couple, Family
- **Real Images**: High-quality photos from Unsplash

## 🎨 Design Highlights

- **Color Scheme**: Indigo primary, yellow accents for ratings
- **Typography**: Clean, readable fonts with proper hierarchy
- **Shadows**: Subtle elevation with hover effects
- **Spacing**: Consistent padding and margins
- **Icons**: Emoji icons for visual appeal
- **Animations**: Smooth transitions and hover states

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Configure:
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Deploy

### Deploy to Netlify

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect repository
4. Configure:
   - Build Command: `npm run build`
   - Publish Directory: `.next`
5. Deploy

**⚠️ Note**: For production, replace JSON Server with a real backend API (Node.js, Django, etc.)

## 🧪 Testing the Application

### Test Filters
1. Adjust price sliders - results update instantly
2. Select rating filter - only matching photographers show
3. Check multiple styles - photographers with ANY style appear
4. Change city - location-based filtering works
5. Try different sort options - order changes correctly

### Test Search
1. Type slowly - notice debounce delay
2. Search by name - "Ravi" finds "Ravi Studio"
3. Search by location - "Bengaluru" finds all Bengaluru photographers
4. Search by tag - "Maternity" finds maternity specialists

### Test Pagination
1. Initially see 6 photographers
2. Click "Load More" - 6 more appear
3. Button disappears when all loaded

### Test Profile Page
1. Click "View Profile" on any card
2. View full details and portfolio
3. Click "Send Inquiry" - modal opens
4. Fill form and submit - alert shows
5. Click "Back" - returns to listing

## 🔮 Future Enhancements

- [ ] Image carousel for portfolio with lightbox
- [ ] Advanced search with autocomplete suggestions
- [ ] Favorite/bookmark photographers (localStorage)
- [ ] Real-time availability calendar
- [ ] Payment integration (Razorpay/Stripe)
- [ ] User authentication (NextAuth.js)
- [ ] Review submission form for customers
- [ ] Map view with photographer locations
- [ ] Email notifications for inquiries
- [ ] Social media integration
- [ ] Multi-language support
- [ ] Dark mode toggle

## 📝 Code Quality

- ✅ Clean, modular components
- ✅ Consistent naming conventions
- ✅ Proper prop validation
- ✅ No console errors or warnings
- ✅ Responsive design tested
- ✅ Accessibility considerations
- ✅ Performance optimized
- ✅ Well-documented code

## 🤝 Contributing

This is an assignment project, but suggestions are welcome!

## 📄 License

This project is created for educational purposes as part of the Pixisphere frontend assignment.

## 👨‍💻 Author

Created as part of the Pixisphere Frontend Developer Assignment

---

**Happy Coding! 🚀**
