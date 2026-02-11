# ReactJS Stats Dashboard

## Project Highlights

- **Built with [GitHub Copilot](https://github.com/features/copilot)** for rapid, AI-assisted development
- **Domain Driven Design**: Clear separation between Service and API layers for maintainability and scalability
- **ReactJS**: Modern, component-based UI
- **Tailwind CSS**: Utility-first, responsive, and customizable styling

## Features/Context

- White background, blue menu/buttons/headings, and colorful stats
- Stats cards: Customers, Orders, Total Revenue, Today's Orders, Today's Revenue
- Line charts for revenue and customers
- Bar chart for top products in 3 categories
- Paginated Pending Orders list
- Paginated New Customers list (this week)
- Profile page with static content (editable)
- All APIs return random static data for demo purposes

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```

## Folder Structure
- `src/domain/` - Service layer (calls API layer)
- `src/api/` - Static/random API mocks
- `src/app/` - App-level components and pages
- `src/shared/` - Shared UI components

## Customization
- Update static/random data in `src/api/` as needed.
- Replace placeholder charts with your own data if required.

---

This README will be updated as the project evolves.
