function slugify (title) {
    title = title.toLowerCase();
    title = title.replace(/\s+/g, '-');
    return title;
  }
  