# HTML Audit

## Summary

This page was updated to be more correct, easier to read, and more accessible for visitors using screen readers or keyboard navigation.

## 1. Problem

The page title and main heading were placed inside the `head` section. The `head` is meant for information about the page, not visible page content.

### Fix

The main `h1` was moved into the body, under a proper `header`.

### Why

This makes the page structure match how browsers and assistive tools expect HTML to work. The visible heading now belongs in the page content, while the browser tab title stays in the document head.

## 2. Problem

The page was missing basic document metadata like the language and character set.

### Fix

The page now includes `<!doctype html>`, `lang="en"`, and meta tags for charset and viewport.

### Why

This helps browsers render the page correctly and makes the document more reliable across devices and screen sizes.

## 3. Problem

The navigation links were inside a plain `div`, which gives no clue that they are a navigation area.

### Fix

The links were wrapped in a `nav` element.

### Why

A `nav` is easier for assistive technology to understand and better describes the purpose of those links.

## 4. Problem

The page used generic containers instead of meaningful sections for content.

### Fix

The layout was organized with `header`, `main`, `section`, and `footer`.

### Why

This creates a cleaner structure that is easier for humans and browsers to understand. It also improves accessibility and helps with future maintenance.

## 5. Problem

The headings did not follow a sensible hierarchy. The page started with a `h1` in the wrong place, then jumped to `h3` and `h4` levels.

### Fix

The page uses a clear heading flow: `h1` for the club name, then `h2` for section titles, and `h3` for event names.

### Why

A consistent heading order makes the page easier to scan and helps screen readers explain the document structure properly.

## 6. Problem

The events were written in a way that mixed list items and articles in a confusing pattern.

### Fix

The events section now uses a proper ordered list with each event as a list item.

### Why

This keeps the content valid HTML and makes the event list clearer to both people and software reading the page.

## 7. Problem

The event content did not use a clear and logical structure for each event item

### Fix

Each event now has its own heading and a smaller list containing the time with proper list and article nesting.

### Why

This reads more naturally and separates the event name from the time more clearly.

## 8. Problem

The image had a useless alt text of `image`, and the file name was not ideal.

### Fix

The image now uses `club.png` and a descriptive alt like "Club members participating in a club activity".

### Why

Alt text should describe the meaning of the image, not just say "image." This helps visually impaired users understand the content when the image cannot be seen.

## 9. Problem

The form fields were not connected to labels, so the user could not tell what each field was for.

### Fix

Each input has a label, and each label is paired with the correct field using `for` and `id`.

### Why

Labels make forms easier to use, especially for people using screen readers, and they improve the overall usability of the page.

## 10. Problem

The email field was just a plain text box, so the browser could not tell it was an email address.

### Fix

The email input was changed to `type="email"` and marked as required.

### Why

An email field gives the browser a better way to validate input and helps users by showing the right keyboard and format checking.

## 11. Problem

The name and email inputs did not include useful placeholder text or required validation.

### Fix

The form now includes placeholders and `required` attributes where needed.

### Why

This makes the form clearer and helps prevent missing information before it is submitted.

## 12. Problem

The `textarea` was not clearly labeled and had a weak field name.

### Fix

The textarea now has a clear label, a proper `id`, and a meaningful `name` attribute.

### Why

This makes it clear what the user should type and helps the form data be submitted more cleanly.

## 13. Problem

The submit button did not say clearly what it was for and did not declare its type.

### Fix

The button was changed to `type="submit"` and the text remains simple: "Send".

### Why

This tells the browser exactly what the button is supposed to do and avoids confusion if more buttons are added later.

## 14. Problem

The footer was just a plain `div` and did not include semantic meaning.

### Fix

The footer was replaced with a real `footer` element and the copyright text was styled more clearly.

### Why

A `footer` is the correct place for closing information like copyright notices, and it improves the structure of the document.

## Overall

The page is now closer to valid HTML standards, more accessible, and easier to understand for both users and developers. The changes improve structure, clarity, and form usability without changing the page's purpose.

## Use of AI

AI was used to help review the corrected HTML code, identify errors, explain what was wrong, and document the fixes in a clearer way.
