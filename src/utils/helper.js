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

export const showVideoPublishDate = (dateInfo) => {
  const date = new Date(dateInfo);

  const differnceInMinutes = Date.now() - date.getTime();

  const differnceInDay = Math.floor(differnceInMinutes / (1000 * 60 * 60 * 24));

  if (differnceInDay === 1) {
    return differnceInDay + " day ago ";
  } else {
    return differnceInDay + " days ago ";
  }
};
