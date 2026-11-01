# Yukta Cosmetics — Website Assignment Report

## 1. Project overview
**Brand:** Yukta Cosmetics  
**Product:** Dew Drop Lip Gloss (fictional academic product concept)  
**Website type:** Responsive single-page product and brand website  
**Technologies:** HTML5, CSS3 and vanilla JavaScript

The website introduces a fictional lip gloss brand, presents three shade concepts and demonstrates how a small beauty business can advertise a product online. The design uses a warm peach, rose and cocoa palette with a premium editorial style.

## 2. Purpose and target audience (4 marks)
### Website purpose
- Introduce Yukta Cosmetics and its Dew Drop Lip Gloss concept.
- Present product shades, illustrative prices and product descriptions.
- Build brand awareness through a consistent visual identity.
- Make product information easy to find and encourage visitors to explore the product.
- Demonstrate a simple shopping-bag interaction.

### Intended users
The primary audience is beauty and makeup shoppers, especially young adults and students approximately 18–30 years old who enjoy simple beauty routines, wearable colours and discovering emerging cosmetic brands. The layout is designed for both mobile-first visitors and desktop users.

### Business objectives
1. Increase awareness of the fictional brand.
2. Communicate product information clearly.
3. Encourage visitors to compare the three shade concepts.
4. Provide an easy path from product discovery to a demo add-to-bag action.

## 3. Content and information architecture (4 marks)
The website uses a single-page structure with clear sections:
- Home: brand message and main call to action.
- Shop: three product shade concepts and illustrative prices.
- Our Story: brand background and product concept.
- Brand Purpose: business objectives, audience and visitor journey.
- Reviews: clearly labelled sample promotional copy.
- Website Information: development, hosting, performance, SEO and marketing plan.
- Privacy and Accessibility: privacy notice and security considerations.
- Testing and Maintenance: test cases and maintenance plan.
- References: credible technical learning resources.

The top navigation links to the main sections. Headings, paragraphs, cards and a footer organise information into readable groups.

## 4. User experience and visual design (4 marks)
- Consistent brand name, logo treatment, colour palette and typography.
- Clear navigation and visible calls to action.
- Product cards use consistent layout and shade labels.
- Responsive layouts adapt to mobile, tablet and desktop screens.
- Buttons provide hover and keyboard-focus feedback.
- A skip link, semantic landmarks, accessible labels and reduced-motion support improve accessibility.
- Product illustrations are made with CSS so the page does not depend on large product-image downloads.

## 5. Technical requirements (4 marks)
### Development approach
- HTML5: content structure, navigation, product cards, forms and tables.
- CSS3: layout, colours, typography, responsive breakpoints and visual effects.
- JavaScript: mobile navigation, demo cart, subtotal calculation, feedback messages and form validation.

### Platform and compatibility
This is a static front-end website. It can be opened directly in a current browser. It does not require a database, framework or backend.

### Domain and hosting
The website has not been published and no domain has been purchased. For a real launch, first check brand-name and domain availability and legal requirements. A domain provider can register an available domain. Static hosting options include GitHub Pages or Netlify; a commercial hosting provider is another option. A live deployment should use HTTPS.

### Performance and mobile responsiveness
The design uses lightweight CSS illustrations and separate local HTML, CSS and JavaScript files. CSS media queries adapt the layout to smaller screens. External Google Fonts are optional and system font fallbacks are specified.

## 6. SEO and digital marketing (3 marks)
### SEO implemented
- Descriptive page title.
- Meta description and relevant keyword metadata.
- Semantic HTML sections and heading hierarchy.
- Descriptive product and brand text.
- Open Graph title and description for link previews.
- Structured brand data using JSON-LD.

### Suggested search keywords
Yukta Cosmetics, lip gloss, Dew Drop Lip Gloss, peach lip gloss, rose lip gloss, nude lip gloss.

### Digital marketing plan
- Instagram: post shade swatches, short product-demo reels and launch announcements.
- Pinterest: publish shade inspiration and beauty mood boards.
- Content marketing: publish simple lip-gloss styling tips and shade-selection guides.
- Use consistent brand visuals and link each campaign to the Shop section.
- Review engagement and website visits before considering paid advertising.

## 7. Security, privacy and accessibility (3 marks)
### Privacy
The demo newsletter form does not send or store email addresses. The cart exists only in the current browser session. A real business must provide an accurate privacy policy and consent process before collecting personal data.

### Security
A production website should use HTTPS, keep hosting and software updated, validate submitted data on the server and use a reputable payment provider. This prototype does not collect payment details or process orders.

### Accessibility
The website includes semantic landmarks, a skip link, labelled navigation and form controls, visible keyboard focus, descriptive labels for product illustrations and a reduced-motion media query. It is a good student-level implementation, but a production site should still undergo a full WCAG accessibility audit.

## 8. Testing, maintenance and evaluation (2 marks)
### Test plan
| Test | Procedure | Expected result |
|---|---|---|
| Navigation | Select each navigation link | Correct section is reached |
| Mobile menu | Open and close menu on narrow screen | Menu toggles and updates its accessible state |
| Add to bag | Add one or more shades | Bag count and subtotal update |
| Form validation | Submit empty, invalid and valid-format email | Browser validates; valid format shows demo-only confirmation |
| Responsive design | View at phone, tablet and desktop widths | Content reflows without horizontal scrolling |
| Keyboard | Use Tab, Shift+Tab, Enter and Escape | Controls are reachable and focus is visible |
| Browser compatibility | Open in current Chrome, Edge and Firefox | Main layout and interactions work |

### Maintenance plan
Before each update, check product information, links, buttons, mobile layout and form behaviour. For a live website, monitor availability, renew the domain, maintain hosting settings, update dependencies and review analytics responsibly.

### Evaluation
The website provides a clear product introduction, organised information, responsive styling and working front-end interactions. It is suitable as an academic prototype. It is not an operational e-commerce store because it has no backend, checkout, payment processing or live mailing list.

## 9. Organization, presentation and references (1 mark)
The project files are separated by function: `index.html`, `style.css` and `script.js`. The website contains a dedicated references section and this report maps the implementation to the assignment's assessment criteria.

### References
1. MDN Web Docs, Learn Web Development: https://developer.mozilla.org/en-US/docs/Learn_web_development
2. Google Search Central, SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
3. W3C, Web Content Accessibility Guidelines (WCAG): https://www.w3.org/WAI/standards-guidelines/wcag/
4. OWASP, Top 10 Web Application Security Risks: https://owasp.org/www-project-top-ten/
5. GitHub Docs, GitHub Pages: https://docs.github.com/en/pages

## Important academic note
Yukta Cosmetics, Dew Drop Lip Gloss, the shade names, product descriptions, sample review and ₹499 prices are fictional demonstration content. No real product is being sold. Do not describe the website as deployed, secured for real transactions or connected to a working email service.
