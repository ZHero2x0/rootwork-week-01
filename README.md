## Personal developer

A personal developer portfolio built with HTML5 and CSS3. The website introduces ZHero.2x0, highlights technical skills and projects, provides educational background, and includes a contact form.

The website focuses on a simple layout, consistent styling, and responsiveness across different screen sizes.

## Design Decisions

## 1. Color Scheme

The website uses a light background, sage green sections, and dark text. The colors provide contrast while keeping the overall design consistent.

## 2. Borders and Shadows

Rounded corners, double borders, and box shadows are used on the profile image, skill icons, project cards, and contact form.
These details help separate elements from their backgrounds and make the sections easier to distinguish.

## 3. Typography and Spacing

Roboto is used throughout the website. Large headings establish a clear visual hierarchy, while padding and spacing keep the content organized.

## 4. Hover Effects

Hover effects are applied to navigation links, project cards, and buttons.
Project cards move slightly upwards when hovered over, while links and buttons change color to indicate interaction.

## Flexbox vs Grid

Both Flexbox and CSS Grid are used to organize the website's layout.

## Flexbox

Flexbox is used in sections that require horizontal or vertical alignment:
-Navigation: Arranges links horizontally with consistent spacing.
-Profile: Positions the introduction beside the profile image.
-About and Skills: Displays both sections side by side on larger screens.
-Projects: Aligns project cards horizontally.
-Education: Aligns the university logo with the institution's details.
-Contact: Positions the heading beside the contact form.
Flexbox was suitable for these sections because it makes aligning and distributing elements along one direction easier.

## CSS Grid

CSS Grid is used in the ToolKit section to arrange technology icons into three columns.
Grid provides consistent spacing between the icons and makes it easier to change the number of columns on smaller screens.
Flexbox is also used inside individual skill containers to center the icons.

## Responsive Behaviour

Media queries adjust the layout based on screen width.

## Desktop

The profile introduction and image appear side by side.
The About and Skills sections use a horizontal layout.
The ToolKit displays three columns.
Project cards are arranged horizontally.
The contact heading and form appear beside each other.

## Tablet and Mobile (768px and Below)

The profile introduction and image stack vertically.
The About and Skills sections switch to a vertical layout.
The ToolKit changes from three columns to two.
The contact section switches to a single-column layout.
Navigation links wrap when there is insufficient space.
The main heading becomes smaller to fit narrower screens.
Additional breakpoints adjust spacing and heading sizes for different screen widths.

## Hardest CSS Problem

One of the main layout challenges was arranging the technology icons in the ToolKit section.
The icons initially appeared in a single row with inconsistent sizes and spacing. This made the section look uneven.
CSS Grid was used to organize the icons into three columns, while Flexbox helped center each icon inside its container.
A media query was then added to change the layout to two columns on smaller screens.
This improved the alignment and made the section more responsive.
