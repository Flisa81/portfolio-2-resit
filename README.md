# Portfolio 2 Resit

This static portfolio presents three frontend projects and the improvements made during Portfolio 2.

## Resit features

The `POR2-features-resit` branch adds the two features selected for the resit:

- A responsive KPI section immediately below the featured project cards.
- A semantic "Get in touch" form with accessible client-side validation.

The form validates:

- Name: at least five letters.
- Email: at least eight characters and a valid email format.
- Telephone: at least ten digits.
- Message: at least 30 characters.

Valid submissions are prevented from navigating away and the four trimmed field values are logged to the browser console.

## Run locally

Open `index.html` directly in a browser, or serve the folder with a local development server. For example:

```bash
npx serve .
```

## Testing checklist

1. Confirm the project cards display responsively.
2. Confirm the KPI section appears directly below the project cards.
3. Submit the empty contact form and confirm clear error messages appear.
4. Test each minimum-length requirement.
5. Submit valid values and confirm all four values appear in the browser console.
6. Test keyboard navigation and narrow/mobile layouts.

## Project links

Each project article includes an accessible link to its live GitHub Pages deployment and its public GitHub repository.

## Deployment

Push the `POR2-features-resit` branch to GitHub and configure GitHub Pages to deploy the intended branch.
## Resit submission branch

This branch contains the Portfolio 2 resit implementation, including the KPI section, validated get-in-touch form, updated project links, responsive styling, and accessibility improvements.
