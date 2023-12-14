
function slugify (title) {
    title = title.toLowerCase();
    title = title.split(' ');
    title = title.join("-");
    return title;
  }
  