export const handleViews = (views) => {
  let thousand = 1000;
  let million = 1000000;
  let billion = 1000000000;
  let trillion = 1000000000000;

  if (views < thousand) {
    return String(views);
  }

  if (views >= thousand && views <= million) {
    return Math.round(views / thousand) + "K";
  }

  if (views >= million && views <= billion) {
    return Math.round(views / million) + "M";
  }
  if (views >= billion && views <= trillion) {
    return Math.round(views / million) + "B";
  } else {
    return Math.round(views / trillion) + "T";
  }
};


export const showVideoPublishDate = (dataInfo) => {
  const time = new Date(dataInfo);

  const d1 = time.getDate();
  const h1 = time.getHours();

  const today = new Date();

  const d2 = today.getDate();
  const h2 = today.getHours();

  let d3, h3;

  if (d2 === d1) {
    h3 = h2 - h1;
    return `${h3} hours ago`;
  }
  if (d2 > d1) {
    d3 = d2 - d1;
    if (d3 === 1) {
      return `${d3} day ago`;
    } else {
      return `${d3} days ago`;
    }
  }
};