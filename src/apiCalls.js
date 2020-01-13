export const getDailyPhoto = async () => {
  try {
    const res = await fetch(process.env.VUE_APP_DAILY_APOD);
    if (!res.ok) {
      throw Error('Problem Getting Nasa Picture of the Day');
    }
    const photoInfo = await res.json();
    return photoInfo
  } catch (error) {
    console.error(error)
  }
}

export const getThisMonthsPhotos = async () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  try {
    const res = await fetch(`${process.env.VUE_APP_DAILY_APOD}&start_date=${year}-${month}-01`);
    if (!res.ok) {
      throw Error("Unable to get this month's daily photos");
    }
    const photosThisMonth = res.json();
    return photosThisMonth;
  } catch (error){
    console.error(error);
  }
}