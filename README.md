# Published Dashboard

A responsive file management dashboard built with Next.js. Users can browse collections, view published files in list or grid format, search, filter, sort, and manage selections with bulk actions.

## Tech Stack

- **Next.js 16** with App Router
- **React 19** + TypeScript
- **Bootstrap 5** for layout utilities
- **SCSS Modules** with design tokens (variables)
- **react-icons** for iconography

## Features

- **Collection Tabs** — Switch between My Collections, Shared Collections, and Published views
- **List & Grid Views** — Toggle between table and card layouts (desktop); cards only on mobile
- **Search & Filter** — Mobile search bar, date picker, and sort dropdown
- **Bulk Selection** — Select rows/cards with checkboxes, bulk delete
- **Pagination** — Paginated table view
- **File Action Menu** — Per-file dropdown with contextual actions
- **Responsive** — Adapts layout and controls across mobile, tablet, and desktop

## Project Structure

```
src/app/
├── components/          # Shared UI components (CommonButton, CommonCheckbox, CommonDropdown, etc.)
├── iconComponents/      # Custom SVG icon components
├── styles/              # SCSS modules + variables
├── features/
│   ├── published/       # Published files view (FileTable, FileGrid, SortButton, data)
│   ├── myCollection/    # My Collections placeholder
│   └── sharedCollection/# Shared Collections placeholder
├── page.tsx             # Root page with CollectionTabs
├── layout.tsx           # Root layout
└── globals.scss         # Global styles + text utilities
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
# Clone the repo
git clone https://github.com/genie-sab/published-dashboard.git
cd published-dashboard

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```
