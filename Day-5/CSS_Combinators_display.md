# 🎨 CSS – Combinators & Display Property

## ✅ CSS Combinators

| Combinator | Symbol | Meaning |
|------------|--------|---------|
| **Descendant** | `space` | Targets any level inside parent |
| **Child**       | `>`     | Direct child only |
| **Adjacent Sibling** | `+` | First element after sibling |
| **General Sibling** | `~` | All siblings after the element |

Example:
```css
div > p { color: red; } /* Only direct <p> inside <div> */

.inline { display: inline; }
.block { display: block; }
.inlineBlock { display: inline-block; width: 100px; height: 30px; }
