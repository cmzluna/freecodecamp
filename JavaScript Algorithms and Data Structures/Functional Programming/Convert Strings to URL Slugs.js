//the urlSlug function converts a string title and returns the hyphenated version for the URL

function urlSlug(title) {
    return title.toLowerCase().split(/\W/).filter(el => el!='').join('-')
  
  } 