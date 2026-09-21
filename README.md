# Erick Arguello Cruz — research portfolio

Academic portfolio for a physics PhD student at Carnegie Mellon University, presenting numerical research, scientific software, publications, and teaching experience.

**Live site:** [earguelloc.com](https://earguelloc.com/)

## 1. Problem

Make technical research accessible to readers in academia, quantitative research, and scientific computing, with direct routes from a research question to its results, methods, and code.

## 2. Result

| Page | Content |
| --- | --- |
| [Home](index.html) | Research introduction, selected work, and contact links |
| [Projects](pages/projects.html) | Problems, results, reproduction links, validation, and methods |
| [Publications](pages/publications.html) | Coauthored papers and preprints |
| [Notes](pages/notes.html) | Technical explanations and supporting material |
| [CV](pages/cv.html) | Research, education, teaching, and other experience |

Project descriptions distinguish published findings from the scope of public example code.

## 3. Reproduce

```bash
git clone https://github.com/arerickcr/arerickcr.github.io.git
cd arerickcr.github.io
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000`. Expected result: the homepage, with working navigation to projects, publications, notes, and the CV. No build step or backend is required.

## 4. Validation

Check internal links, readable layouts on mobile and desktop, image descriptions, keyboard focus, and light/dark presentation. Scientific claims link to their source papers or repositories; numerical verification belongs to those projects.

## 5. Methods

The site uses static HTML, CSS, and JavaScript with GitHub Pages and a custom domain. The computational research lives in separate repositories. The additional `assets/css/portfolio.css` stylesheet provides presentation refinements while retaining the existing stylesheet and JavaScript.
